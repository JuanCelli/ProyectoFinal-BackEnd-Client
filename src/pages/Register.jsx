import React from 'react'
import MainContainer from '../styles/components/MainContainer'
import { SectionContainer } from '../styles/components/SectionContainer'
import { useNavigate } from 'react-router-dom'
import { urlBase } from '../config/url'

const Register = () => {
    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault()

        const data = new FormData(e.target)
        const object = {}
        data.forEach((value,key) =>object[key]=value)
    
        const response = await fetch(`${urlBase}api/sessions/register`,{
            method: "POST",
            body: JSON.stringify(object),
            headers:{
                "Content-Type": "application/json"
            }
        })
    
        if(response.status===201){
            navigate("/login")
            return
        }
    
        alert(`Error: ${response.status}`)
    }



  return (
    <MainContainer>
        <SectionContainer flexDirection="column">
                <h1>Registro</h1>
                <form onSubmit= {handleSubmit} id="registerForm">
                    <label htmlFor="first_name">Nombre</label>
                    <input type="text" name="first_name" required />

                    <label htmlFor="last_name">Apellido</label>
                    <input type="text" name="last_name" required />

                    <label htmlFor="age">Edad</label>
                    <input type="number" name="age" min="1" max="100" required />

                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" required />

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />

                    <input type="submit" value="Enviar" />
                </form>
                <p>¿Ya tienes cuenta? <a href="/login">Ingresar</a></p>

        </SectionContainer>
    </MainContainer>
  )
}

export default Register