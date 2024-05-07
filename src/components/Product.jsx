import styled from "styled-components"
import { colors } from "../styles/config"

const ContainerPropiedad = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40rem;
    border-radius: .8rem;
    overflow: hidden;
    transition: 0.4s;

    &:hover{
        box-shadow: 0 0 40px ${colors.ArticuleBg1};
    }
`

const ImgPropiedad = styled.img`
    width: 100%;
    height: 25rem;
    object-fit: cover;
`

const ContainerInfo = styled.div`
    background-color:${colors.White};
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
`

const TitlePropiedad = styled.h5`
    font-size: 2rem;
    font-weight: 400;
    margin: 2rem 0rem;
    `
const Category = styled.h6`
    margin: 1.2rem 0rem;
    font-size: 1.5rem;
    font-weight: 300;
`

const ContainerPrice = styled.div`
    background-color:${colors.fontArticules};
    color: ${colors.White};
    font-size: 2rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
`

const TextInfo = styled.p`
    margin: .4rem 0rem ;
    margin-left: .3rem;
`

const Button = styled.button`
border: none;
    background-color: ${colors.SectionBg1};
    color: ${colors.fontArticules};
    cursor: pointer;
    border-radius: 100%;
    text-align: center;
    text-justify: center;
    font-size: .8rem;
    width: 4rem;
    height: 4rem;
    transition: .3s;
    &:hover{
        color: ${colors.White};
        background-color: ${colors.buttonBg};
    }
`

const Product = (props) => {
    const {thumbnail, title, category, stock, description, price ,addProduct,id} = props

    const handleClick = () =>{
        addProduct(id)
    }

    return (
    <ContainerPropiedad>
        <ImgPropiedad src={thumbnail}></ImgPropiedad>
        <ContainerInfo>
            <TitlePropiedad>{title}</TitlePropiedad>
            <Category>{category}</Category>
            <TextInfo>Descripción: {description}</TextInfo>
            <TextInfo>stock: {stock}</TextInfo>
        </ContainerInfo>
        <ContainerPrice>
            ${price}
            <Button onClick={handleClick}>Agregar</Button>
        </ContainerPrice>
    </ContainerPropiedad>
  )
}

export default Product