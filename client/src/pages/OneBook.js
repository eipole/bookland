import React from "react"
import { Link, useNavigate } from "react-router-dom"

export default function OneBook() {
  const navigate = useNavigate()
  function handleClick() {
    navigate("/")
  }

  return (
    <div>
      <p>
        Et anim irure quis occaecat. Est culpa in non ex reprehenderit anim
        irure. Nostrud culpa tempor pariatur excepteur. Consectetur ut anim quis
        nulla Lorem dolor ipsum et ex exercitation. Et qui consequat voluptate
        sint eiusmod esse aliquip excepteur ullamco ex.
      </p>
      <Link to="/">Home</Link>
      <button onClick={handleClick}>Navigate button</button>
    </div>
  )
}
