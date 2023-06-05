import React from 'react'
import Droplet from './images/droplet.jpg';
import Fuji from './images/fuji.jpg';
import lamp from './images/lamp.jpg';
import minimal from './images/minimal.jpg';
import rucksack from './images/rucksack.jpg';
import sandunes from './images/sanddunes.jpg';
import shutterbug from './images/shutterbug.jpg';
import skaterboy from './images/skaterboy.jpg';




function Creations() {
  return (
  <div className='body-6'>
    <h2 className='header-5'>A Few Of My Latest Creations</h2>
    <div className='d-flex'>
    <img src={Droplet} className='droplet'/>
    <img src={Fuji} className='droplet'/>
    <img src={lamp} className='droplet'/>
    <img src={minimal} className='droplet'/>
    </div>
    <div className='d-flex power'>
    <img src={rucksack} className='droplet'/>
    <img src={sandunes} className='droplet'/>
    <img src={shutterbug} className='droplet'/>
    <img src={skaterboy} className='droplet'/>
    </div>
    <p className='social-bar-5'>___________________________________________________________________________________</p>
    <h3 className='header-6'>Need a great reliable web hosting?</h3>
    <p className='para-8'>We highly recommend <a href='#' className='para-9'>DreamHost</a>. Powerful web and<br></br> Wordpress hosting. Guaranteed. Starting at $2.95 per month.</p>
    <button className='btn button-start' type='button'  onclick="window.location.href = 'https://ide.geeksforgeeks.org';">G E T &nbsp; S T A R T E D </button>

  </div>
  )
}

export default Creations