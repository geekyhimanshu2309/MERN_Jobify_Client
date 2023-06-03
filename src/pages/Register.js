import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Logo,FormRow,Alert } from '../components'
import Wrapper from '../assets/wrappers/RegisterPage'
import { useAppContext } from '../context/appContext'

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
}

const Register = () => {
  const [values, setValues] = useState(initialState)
  //global state and useNavigate
  const {isLoading,showAlert, displayAlert} = useAppContext()
  
  const toggleMember = () => {
    setValues({...values, isMember: !values.isMember})
  }
  const handleChange = (e) => {
    setValues({...values,[e.target]:e.target.value})
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const {name, email, password, isMember} = values
    if(!email || !password || (!isMember && !name)){
      displayAlert()
      return
    }
    console.log()
  }
  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo/>
        <h3>{values.isMember ? 'Login':'Register'}</h3>
        {/* this is conditional */}
        {showAlert && <Alert/>}
        {/* name input*/ }
        {!values.isMember && (        
            <FormRow 
            type='text'
            name='name'
            value={values.name}
            handleChange={handleChange}
          />
        )}

        {/* Email input */}
        <FormRow 
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
        />
        {/* Password input*/}
        <FormRow 
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
        />
        <button type='submit' className='btn btn-block'>Submit</button>
        <p>
          {values.isMember? 'Not a member yet': 'Already a member'}
          <button type='button' onClick={toggleMember} className='member-btn'>
            { values.isMember? 'Register':'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}

export default Register