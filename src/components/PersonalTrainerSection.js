import React from "react"

function PersonalTrainerSection () {
    return (
             <section className="section-personal-trainer"> 
                
                <div className="section-personal-trainer-image">
                <img className="section-personal-trainer-img" src="images/personal-trainer.png"/> 
                </div>
                
                <div className="section-personal-trainer-text">
                <h2> My name is Bruce Wayne</h2>
                <p> I’m a personal trainer for 5 years and helped hundreds of people to get in the best shape of their life. I can help you too. </p>
                <p><span className="span-text">  My clients lost a combined </span> <br/><span className="span-numbers"> 2,477 Kg </span> </p>
                <p> <span className="span-text"> My clients burned a combined  </span> <br/><span className="span-numbers"> 29,555,477 calories </span> </p>
                <p><span className="span-text">  My clients lifted a combined </span> <br/><span className="span-numbers"> 14,5 tons of weights </span> </p>
                <a href="#" className="btn" > Get a FREE consultation</a>
                </div>
                
            </section>
    )
}


export default PersonalTrainerSection