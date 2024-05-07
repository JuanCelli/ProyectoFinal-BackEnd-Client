import React, { useEffect, useState } from 'react'
import MainContainer from '../styles/components/MainContainer'
import { SectionContainer } from '../styles/components/SectionContainer'
import { useNavigate } from 'react-router-dom'
import Product from '../components/Product'
import styled from 'styled-components'
import { colors } from '../styles/config'
import { urlBase } from '../config/url'


const ContainerProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 2rem;
  background-color: ${colors.SectionBg1}
`


const Home = () => {

  const [user, setUser] = useState({})
  const [cart,setCart] = useState(null)
  const [products, setProducts] = useState([])
  const navigate = useNavigate();

  const fetchUser = async () =>{
    const reponse = await fetch(`${urlBase}api/sessions/current`,{
      method: 'GET',
      credentials: 'include'
    })

    if(!reponse.ok){
      navigate("/login")
      return
    }
    const userPayload = await reponse.json()
    const user = userPayload.currentUser
    setUser(user)
  }

  


  const addToCart = async (idProduct) =>{

    const cartFetch = await fetch(`${urlBase}api/carts`,{
      method: 'GET',
      credentials: 'include'
    })

    if(cartFetch.ok){
      const cartData = await cartFetch.json()
      setCart(cartData._id)
    }else{
      const response = await fetch(`${urlBase}api/carts/`,{
        method: 'POST',
        body: JSON.stringify({}),
        credentials: 'include'
      })
      const newCartData = await response.json()
      const idCart = cartData._id
  
      if(response.status!==201){
        alert(`Error al intentar crear nuevo carrito`)
        return
      }
      setCart(idCart)

    }
    
    const res = await fetch(`${urlBase}api/carts/${cart}/product/${idProduct}`,{
      method: 'POST',
      body: JSON.stringify({}),
      credentials: 'include'
    })

    if(res.status!==200){
      alert(`Error al intentar agregar producto`)
      return
    }
    alert(`Producto agregado con éxito`)
  }

   const fetchCart = async () =>{
    const cartFetch = await fetch(`${urlBase}api/carts`,{
      method: 'GET',
      credentials: 'include'
    })

    if(cartFetch.ok){
      const cartData = await cartFetch.json()
      setCart(cartData._id)
    }else{
      setCart(null)
    }
  }
  

  const fetchProducts = async () =>{
    const reponse = await fetch(`${urlBase}api/products`,{
      method: 'GET',
      credentials: 'include'
    })
    const data = await reponse.json()
    if(!reponse.ok){
      return
    }
    const products = data.payload
    setProducts(products)
  }

  useEffect(()=>{
    fetchCart()
    fetchUser()
    fetchProducts()
  },[])

  

  return (
    <MainContainer>
      <SectionContainer flexDirection="column">
        <div>
        <h1>Usuario</h1>
          <p>Nombre: {user?.first_name}</p>
          <p>Apellido: {user?.last_name}</p>
          <p>Edad: {user?.age}</p>
          <p>Email: {user?.email}</p>
          <p>Rol: {user?.role}</p>

        </div>
      </SectionContainer>
      <ContainerProducts width="70%">
        {products.map((product)=>{
            return <Product key={product._id} id={product._id} title={product.title} thumbnail={product.thumbnail} category={product.category} stock={product.stock} description={product.description} price={product.price} addProduct={addToCart}/>
          })}
      </ContainerProducts>

    </MainContainer>
  )
}

export default Home