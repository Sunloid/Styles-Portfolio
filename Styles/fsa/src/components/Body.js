import React from 'react'

function Body() {
  return (
    <div className='background-1'>
    <nav className='Navbar-1'>
      <a className='navbar-2' href='#'>Home </a>
      <a className='navbar-2' href='#'>About </a>
      <a className='navbar-2' href='#'>Resume </a>
      <a className='navbar-2' href='#'>Works </a>
      <a className='navbar-2' href='#'>Testimonials </a>
      <a className='navbar-2' href='#'>Say Hello </a>
    </nav>
    <div className='body-1'>
     <h1 className='header-1'>
        <b>I'm Jonathan Doe.</b>
     </h1>
        <p className='para-1'>I'm a Manila based <span className='text-white'>graphic designer</span>, <span className='text-white'>illustrator</span> and <span className='text-white'> webdesigner</span><br></br> creating awesome and effective visual identities for companies of all<br></br> sizes around the globe. Let's <span className='text-white'>start scrolling </span>and learn more <span className='text-white'>about me</span>.</p>
        <p className='social-bar'>____________________________________________</p>
      <div className='d-flex justify-content-around col-2 social-bar-1'>
        <i className='fa-brands fa-facebook fa-xl '></i>
        <i className='fa-brands fa-github fa-xl'></i>
        <i className='fa-brands fa-instagram fa-xl'></i>
        <i className='fa-brands fa-twitter fa-xl'></i>
        <i className='fa-brands fa-reddit fa-xl'></i>
        <i className='fa-brands fa-linkedin fa-xl'></i>
      </div>
    </div >
    <div className='button-div'>
      <button type='button' className='btn btn-dark'>Scroll Down</button>
    </div>
    </div>
)
}

export default Body;