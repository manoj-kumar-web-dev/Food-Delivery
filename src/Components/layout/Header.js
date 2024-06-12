import React from 'react'

function Header() {
  return (
    <div>

<div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 ">
    
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
      <img src='' alt='logo'/>
        <span class="fs-4">Simple header</span>
      </a>

      <ul class="nav nav-pills  ">
        <li class="nav-item"><a href="#" class="nav-link " aria-current="page">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Features</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Pricing</a></li>
        <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
        <li class="nav-item"><a href="#" class="nav-link">About</a></li>
      </ul>
    </header>
  </div>
    </div>
  )
}

export default Header