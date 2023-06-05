import React from 'react'
import user from './images/user.jpg'
function Aboutme() {
  return (
    <>
<div className='About-me'>
    <div className='body-32'>
    <img src={user} className='user-1'/>
    <div>
     <div className='body-2'>
        <h3>About me </h3>
        <p className='para-2'>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque <br></br>laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi<br></br> architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas<br></br> sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione<br></br> voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit<br></br> amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut<br></br> labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis<br></br> nostrum exercitationem ullam corporis suscipit laboriosam.
        </p>
        <p className='social-bar-2'>______________________________________________________________________________________________________________________</p>
        <div className='d-flex justify-content-between tab'>
          <h3>Contact Details</h3>
          <button type='button' className='btn btn-light'>Download cv</button>
        </div>
        <span className='para-3'>Jonathan Doe<br></br></span>
        <span className='para-3'>1600 Amphitheatre Parkway<br></br></span>
        <span className='para-3'>Mountain View, CA 94043 US<br></br></span>
        <span className='para-3'>+197 543 2345<br></br></span>
        <span className='para-3'>sayhello@ceevee.com<br></br></span>
     </div>
    </div>
    </div>
</div>
    </>
  )
}

export default Aboutme