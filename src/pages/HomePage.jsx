import { useState, useEffect, useContext } from "react"
import { AuthContext } from "../context/auth.context"
import Nav from "../components/Nav"

const HomePage = () => {
  const { isLoggedIn } = useContext(AuthContext)
  return (
    isLoggedIn ? (
    <div>
      <h1>hello livestock app</h1>
    </div>
  ) : (
  <Nav />
  )
  )
}

export default HomePage
