import React from "react"

function ConsultationSection () {
    return (
             <section className="section-get-a-free"> 
                <div className="section-get-a-free-text"> 
                    <h2>Get a free consultation </h2>
                    <p>Please send us your contact details, we’ll be in touch with you soon to schedule a 30-minute consultation and to sign you up for an introductory class. </p>
                </div>
                
                <div className="section-get-a-free-second"> 
                    <form action="/action_page.php"/>
                    <label htmlFor="fname">Your Full Name:</label><br/>
                    <input type="text" id="fname" name="fname" placeholder="Full Name" className="text-style"/><br/>
                    
                    <label htmlFor="email">Your Email Address:</label><br/>
                    <input type="text" id="email" name="email" placeholder="Email Addess"
                    className="text-style"/><br/>
                    
                    <label htmlFor="email">Your Phone Number:</label><br/>
                    <input type="text" id="phone" name="phone" placeholder="+44" className="text-style"/><br/><br/>
                    
                    <label>Preferred way to contact you</label><br/>
                    <div className="phone-or-email">
                        
                    <div className="phone-checkbox"> 
                    <input type="checkbox" className="phone-checkbox-inner"/>
                    <label htmlFor="phone-checkbox">Phone</label>
                    </div>
                    
                    <div className="email-checkbox">
                    <input type="checkbox" className="email-checkbox-inner"/> 
                    <label htmlFor="email-checkbox">Email</label><br/>
                    </div>
                    
                    </div>
                    
                    <label htmlFor="message">Message (optional)</label><br/>
                    <input type="text" className="text-style message"/> <br/>
                    <br/>
                    <a href="#" className="btn"> Request a consultation</a><br/>
                </div>
            </section>
    )
}


export default ConsultationSection



