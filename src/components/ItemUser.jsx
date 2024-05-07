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
    width: 15%;
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

const ButtomChangeRole = styled.button`
    cursor: pointer;
    font-size: 1rem;
    background-color: ${colors.LinkUnHover};
    border-radius: 1rem;
    color: white;
    text-align:center;
    text-align: center;
    border: none;
    transition: .2s;
    margin-left: .2rem;

    &:hover{
        color: white;
        box-shadow: 0 0 8px #62ff00;
        background-color: #62ff00;
    }
`



export const ItemUser = ({first_name,last_name,email, role, deleteUser,ChangeRole, id}) => {

    const handleClickDelete = () =>{
        deleteUser(id)
    }
    const handleClickChangeRole = () =>{
        ChangeRole(id)
    }
  return (
    <ContainerItem>
        <Title>{first_name} {last_name}</Title>
        <InfoItem>{email}</InfoItem>
        <InfoItem>{role}{role!=="admin"?<ButtomChangeRole onClick={handleClickChangeRole}>Cambiar</ButtomChangeRole>:<></>}</InfoItem>

        <Buttom onClick={handleClickDelete}>X</Buttom>
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


export const HeaderUsers = () => {
  return (
    <ContainerHader>
        <Title>Nombre</Title>
        <InfoItem>Email</InfoItem>
        <InfoItem>Rol</InfoItem>
        <InfoItem>Eliminar</InfoItem>
    </ContainerHader>
  )
}