import { useState } from "react"
import {Form,Button} from "react-bootstrap"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { login } from "../Redux/Actions/AuthActions"

const Login=()=>{

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin=(e)=>{
        e.preventDefault()
        dispatch(login({email,password},navigate))
    }
    return(
        <Form>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Enter email" />       
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Password" />
            </Form.Group>
  
      <Button onClick={(e)=>handleLogin(e)} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    )
}

export default Login