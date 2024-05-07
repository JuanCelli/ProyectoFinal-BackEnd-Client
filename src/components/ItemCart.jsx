import styled from "styled-components"
import { colors } from "../styles/config"

const ContainerItem = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 60rem;
    height: 5rem;
    background-color: ${colors.SectionBg2};
    border-radius: 1rem;
    transition: .2s;
    margin: 0.5rem;

    &:hover{
        box-shadow: 0 0 4px ${colors.ArticuleBg1};
    }
`
const ImgProduct = styled.img`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 100%;
`

const Title = styled.h4`
    width: 20%;
`

const InfoItem = styled.p`
    width: 10%;
`

const Buttom = styled.button`
cursor: pointer;
    width: 2rem;
    height: 2rem;
    background-color: ${colors.LinkUnHover};
    border-radius: 100%;
    color: white;
    text-align:center;
    text-align: center;
    border: none;
    transition: .2s;

    &:hover{
        box-shadow: 0 0 8px red;
        background-color: red;
    }
`

export const ItemCart = ({thumbnail,title, price, quality, id}) => {
  return (
    <ContainerItem>
        <ImgProduct src={thumbnail}/>
        <Title>{title}</Title>
        <InfoItem>${price}</InfoItem>
        <InfoItem>{quality}</InfoItem>
        <InfoItem>${price*quality}</InfoItem>
    </ContainerItem>
  )
}

const ContainerHader = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 60rem;
    height: 5rem;
    background-color: ${colors.ArticuleBg1};
    color:${colors.SectionBg1};
    border-radius: 1rem;
    transition: .2s;
    margin: 0.5rem;
`


export const HeaderCart = () => {
  return (
    <ContainerHader>
        <Title>Producto</Title>
        <InfoItem>Precio</InfoItem>
        <InfoItem>Unidades</InfoItem>
        <InfoItem>Subtotal</InfoItem>
    </ContainerHader>
  )
}

const ContainerFooter = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 60rem;
    height: 5rem;
    background-color: ${colors.SectionBg2};
    border-radius: 1rem;
    transition: .2s;
    margin: 0.5rem;

    &:hover{
        box-shadow: 0 0 4px ${colors.ArticuleBg1};
    }
`

const ButtonFinishPurchase = styled.button`
    cursor: pointer;
    font-size: 1.5rem;
    padding: .5rem;
    /* width: 10rem; */
    background-color: ${colors.LinkUnHover};
    border-radius: 1rem;
    color: white;
    text-align:center;
    text-align: center;
    border: none;
    transition: .2s;

    &:hover{
        box-shadow: 0 0 8px ${colors.ArticuleBg1};
        background-color: ${colors.ArticuleBg1};
    }
`

const ContainerTotal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
`

export const FooterCart = ({total,purchaseCart, idCart}) => {

    const handleClick = () =>{
        purchaseCart(idCart)
    }
    return (
      <ContainerFooter>
        <ContainerTotal>
          <Title>Total</Title>
          <InfoItem>${total}</InfoItem>
        </ContainerTotal>
          <ButtonFinishPurchase onClick={handleClick} >Comprar</ButtonFinishPurchase>
      </ContainerFooter>
    )
  }