import { useEffect, useState } from 'react'
import { HeaderUsers, ItemUser } from '../components/ItemUser'
import MainContainer from '../styles/components/MainContainer'
import { SectionContainer } from '../styles/components/SectionContainer'
import { useNavigate } from 'react-router-dom'


const Users = () => {
  const [render,setRender] = useState(false)
  const [user, setUser] = useState({})
  const [users,setUsers] = useState([])
  const navigate = useNavigate()
  
  const fetchUsers = async () =>{
      const usersFetch = await fetch("http://localhost:8080/api/users/",{
        method: 'GET',
        credentials: 'include'
      })
  
      if(usersFetch.ok){
        const usersData = await usersFetch.json()
        setUsers(usersData)
      }else{
        setUsers([])
        if(usersFetch.status===403){
          alert("Usuario no autorizado para visualizar panel de usuarios")
          navigate("/login")
        }
      }
    }
  const fetchUser = async () =>{
      const reponse = await fetch("http://localhost:8080/api/sessions/current",{
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

    useEffect(()=>{
      fetchUser()
      fetchUsers()
  },[render])


  const deleteUser = async (id) =>{
      const response = await fetch(`http://localhost:8080/api/users/${id}`,{
        method: 'DELETE',
      })
      if(response.ok){
        setRender(!render)
        alert("Usuario eliminado con éxito")
      }else if(response.status===403){
        alert("No tiene permiso para eliminar a este usuario")
      }
  }

  const ChangeRole = async (id) =>{
    const response = await fetch(`http://localhost:8080/api/users/premium/${id}`,{
      method: 'PUT',
    })
    if(response.ok){
      setRender(!render)
      alert("Cambio de rol de forma correcta")
    }else if(response.status===412){
      alert("El usuario no presentó la documentación necesario para cambiar de rol a Premium")
    }else{
      alert(`Status Error: ${response.status}`)
    }
}

  return (

    <MainContainer>
        <SectionContainer flexDirection="column" paddingTop="130px" justifyContent="start">
            <h1>Usuarios</h1>
            <HeaderUsers></HeaderUsers>
            {users?.map((user)=>{
                return (
                  <ItemUser key={user._id} first_name={user.first_name} last_name={user.last_name} email={user.email} role={user.role} age={user.age} id={user._id} deleteUser={deleteUser} ChangeRole={ChangeRole} />
                )
            })}
        </SectionContainer>
    </MainContainer>

  )
}

export default Users