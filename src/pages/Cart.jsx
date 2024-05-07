import React, { useEffect, useState } from 'react'
import MainContainer from '../styles/components/MainContainer'
import { SectionContainer } from '../styles/components/SectionContainer'
import { FooterCart, HeaderCart ,ItemCart } from '../components/ItemCart'
import { useNavigate } from 'react-router-dom'


const Cart = () => {
    const [cart,setCart] = useState(null)
    const [productsCart,setProductsCart] = useState([])
    const [total,setTotal] = useState(0)
    const navegate = useNavigate()

    const fetchCart = async () =>{
        const cartFetch = await fetch("http://localhost:8080/api/carts",{
          method: 'GET',
          credentials: 'include'
        })
    
        if(cartFetch.ok){
          const cartData = await cartFetch.json()
          setCart(cartData._id)
          setProductsCart(cartData.productsCart)
        }else{
          setCart(null)
          setProductsCart([])
          if(cartFetch.status===401){
            navegate("/login")
          }
        }
      }
    
    const purchaseCart = async (idCart)=>{
      const purchase = await fetch(`http://localhost:8080/api/carts/${idCart}/purchase`,{
        method: 'POST',
      })
  
      if(purchase.ok){
        const purchaseData = await purchase.json()
        alert(`Compra realizada con éxito! \nMonto total: $${purchaseData.amount} \nTicket: ${purchaseData.ticket.code} \nComprador: ${purchaseData.ticket.purchaser} `)
        navegate("/")
      }else{
        alert("Error al intentar finalizar la compra")
      }
    }
  

      const calTotal = (productsCart)=>{
        let total = 0

        productsCart?.forEach(product => {
          total+=Number(product.product?.price)*Number(product.quality)
        })
        return total
      }

    useEffect(()=>{
        fetchCart()
    },[])
    useEffect(()=>{
        setTotal(calTotal(productsCart))
    },[productsCart])

  return (
    <MainContainer>
        <SectionContainer flexDirection="column" paddingTop="130px">
          {productsCart?.length<=0
          ?
          <h1>Carrito vacio</h1>
          :
          <>
            <h1>Cart</h1>
            <div>
            <HeaderCart></HeaderCart>
              {productsCart?.map((product)=>{
                  return (
                    <ItemCart key={product.product._id} title={product.product.title} quality={product.quality} price={product.product.price} id={product.product._id} />
                  )
              })}
              <FooterCart  purchaseCart={purchaseCart} idCart={cart} total={total} />
            </div>
          </>
          }

        </SectionContainer>
    </MainContainer>
  )
}

export default Cart