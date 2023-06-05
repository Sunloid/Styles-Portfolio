import React from 'react'
import Sundar from "./images/sundar.jpg"
import Tim from './images/tim.jpg'

function Client() {
  return (
    <div className='d-flex justify-content-center body-7 flex-column '>
        <div>
            <h3 className='header-7'>Hear What My Client Says</h3>
        </div>
        <div className='d-flex justify-content-between body-71'>
            <div className='d-flex align-items-center body-72'>
                <div className='d-flex flex-column'>
                    <div className='d-flex align-items-center body-73'>
                        <img src={Tim} className='logo-user'/>
                        <div>
                            <p className='para-10'><strong>Tim Cook</strong></p>
                            <span className='para-11'>CEO, Apple</span>
                        </div>
                    </div>
                    <p className='para-12'> Repellat dignissimos libero. Qui sed at corrupti expedita<br></br> voluptas odit. Nihil ea quia nesciunt. Ducimus aut sed ipsam.  <br></br>Autem eaque officia cum exercitationem sunt voluptatum<br></br> accusamus. Quasi voluptas eius distinctio.Voluptatem<br></br> dignissimos ut.</p>
                </div>
            </div>
            <div className='d-flex align-items-center body-72 '>
                <div className='d-flex flex-column'>
                    <div className='d-flex align-items-center body-73'>
                        <img src={Sundar} className='logo-user'/>
                        <div>
                            <p className='para-10'><strong>Sundar Pichai</strong></p>
                            <span className='para-11'>CEO, Google</span>
                        </div>
                    </div>
                    <p className='para-12'>Repellat dignissimos libero. Qui sed at corrupti expedita<br></br> voluptas odit. Nihil ea quia nesciunt. Ducimus aut sed ipsam.  <br></br>Autem eaque officia cum exercitationem sunt voluptatum<br></br> accusamus. Quasi voluptas eius distinctio.Voluptatem<br></br> dignissimos ut.</p>
                </div>
            </div>
                
        </div>
    </div>
  )
}

export default Client