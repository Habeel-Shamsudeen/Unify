import React from 'react'
import { Button } from '../components/Button'
import logo from './../assets/logo.png'

const Login = () => {
  return (
    <div className='h-screen'>
        <div className='flex flex-col bg-black'>
            <img className="h-20 w-13" src={logo}/>
            <input placeholder="Enter Email"/>
            <input placeholder="Enter Password"/>
            <Button label={'Login'} onClick={()=>{}}/>
        </div>
    </div>
  )
}

export default Login