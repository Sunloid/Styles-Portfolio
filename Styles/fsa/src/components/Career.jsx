import React from "react";


function Career(prop){
    
    return(
        <div className="bg-light text-black d-flex body-4">
            <div>
           <h3 className="header-2">{prop.yes}</h3>
           <p className='social-bar-3'>_______________</p>
            </div>
           <div className="body-41">
                <h3>{prop.header1}</h3>
                <p><span className="para-4">{prop.job1}  </span><b>.  &nbsp;</b><span className="para-5">{prop.time1} </span></p>
                <p className="para-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore vero quidem nobis <br></br>maxime dolorem aliquam quisquam eum ipsum amet. Vitae aut atque fuga dolorem. Vel<br></br> voluptatibus fugiat nam. Impedit aperiam nesciunt facilis! Porro architecto dicta inventore<br></br> tempora ratione quia odio.</p>
                <div className="body-42">
                    <h3>{prop.header2}</h3>
                    <p><span className="para-4">{prop.job2}  </span> <b>.  &nbsp;</b><span className="para-5">{prop.time2} </span></p>
                    <p className="para-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore vero quidem nobis <br></br>maxime dolorem aliquam quisquam eum ipsum amet. Vitae aut atque fuga dolorem. Vel<br></br> voluptatibus fugiat nam. Impedit aperiam nesciunt facilis! Porro architecto dicta inventore<br></br> tempora ratione quia odio.</p>
                    <p className='social-bar-4'>_____________________________________________________________________________________________________________</p>
                </div>
           </div>
        </div>
    )
}

export default Career