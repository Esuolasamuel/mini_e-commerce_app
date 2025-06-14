import CartIcon from '@/components/CartIcon'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light px-lg-5 px-md-4 px-sm-3 px-2">
  <div className="container-fluid mx-lg-5 mx-md-4 mx-sm-3 mx-2">
        <a className="navbar-brand fw-bold" href="#">ProductStore</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active fw-bold" aria-current="page" href="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/cart">
            <CartIcon className="bg-danger"/>
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar