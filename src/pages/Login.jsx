import React from 'react'
import MainContainer from '../styles/components/MainContainer'
import { SectionContainer } from '../styles/components/SectionContainer'
import { useNavigate } from 'react-router-dom'
import { urlBase } from '../config/url'


const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault()

        const data = new FormData(e.target)
        const object = {}
        data.forEach((value,key) =>object[key]=value)

        const response = await fetch(`${urlBase}api/sessions/login`,{
            method: "POST",
            body: JSON.stringify(object),
            headers:{
                "Content-Type": "application/json"
            }
        })
        if(response.ok){
            const access_token = await response.json()
            document.cookie = `jwtCookieToken=${access_token.access_token}`
            navigate("/")
            return
        }

        alert(`Error: ${response.status}`)
    }
  return (
    <MainContainer>
        <SectionContainer flexDirection="column">
            <div>
                <h1>Login</h1>
                <form onSubmit={handleSubmit} id="loginForm">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" required />
                    
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />

                    <input type="submit" value="Ingresar" />
                </form>
                <p>¿Aún no estás registrado? <a href="/register">Registrarme</a></p>
                <p>Ingresar con <a href={`${urlBase}api/sessions/github-login`}>GitHub</a></p>
                <p>¿Olvidaste Tu contraseña? <a href="/users/form-mail">Click aqui</a></p>
            </div>

        </SectionContainer>
    </MainContainer>
  )
}

export default Login