import React from 'react'
import {Link} from 'react-router-dom'

function SignUp() {
  return (
    <>
    <div className='bg-success text-center'>
        <h1>SIGN UP PAGE</h1>
    </div>
    <div className='LogBox'>
        <form action="">
            <label htmlFor="">Your Name: </label>
            <input type="text" placeholder='Your Name'/>
            <label htmlFor="">Your E-Mail:</label>
            <input type="mail" placeholder='Your Email' />
            <label htmlFor="">Password: </label>
            <input type="password" placeholder='Atleast 8 digits' />
            {/* <input type="checkbox"/> */}
        </form>
        <button>SignUp</button>
        <p>Have an account <Link to = '/React'>Login</Link></p>
    </div>
    </>
  )
}

export default SignUp