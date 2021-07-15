import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./components/Header"
import MainSection from "./components/MainSection"
import PersonalTrainerSection from "./components/PersonalTrainerSection"
import WorkOutSection from "./components/WorkOutSection"
import ProgramsSection from "./components/ProgramsSection"
import TestimonialSection from "./components/TestimonialSection"
import ConsultationSection from "./components/ConsultationSection"
import FooterSection from "./components/FooterSection"
import "./index.css";






class Main extends React.Component {
  render() {
    return (
      <div>
     <Header/>
     <MainSection/>
     <PersonalTrainerSection/>
     <WorkOutSection/>
     <ProgramsSection/>
     <TestimonialSection/>
     <ConsultationSection/>
     <FooterSection/>
     </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));