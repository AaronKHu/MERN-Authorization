import React from 'react'

const Login = () => {
  return (
    <form>
        <input type="text" placeholder="Username/e-mail"></input><br />
        <input type="password" placeholder="Password"></input><br />
        <button type="submit">Login</button>
    </form>
  )
}

export default Login