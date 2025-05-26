import "../index.css"

import { Link } from 'react-router-dom'

import Header from "../components/Header.js"
import Typewriter from "../components/Typewriter.js"
import Button from '../components/Button'

const Home = () => {
  return (
    <div style={{overflow:"hidden"}}>
      <Header/>

        <div class="headshot" >
          <div>
            <img src={require("../media/DSC01709.JPEG")} alt="HEADSHOT"></img>
          </div>
        </div>
        <div class="aboutME">
            <h1 class="headerOne" style={{textAlign:'center'}}>
              <Typewriter text="Kevin Nie"/>
            </h1>
            <p>
              <Typewriter text="I am a first-generation Chinese American Student majoring in Mechanical Engineering and minoring in EECS at UC Berkeley! Professionally, I am interested in working in the autonomous control of Robots and Vehicles. I love learning about the physical and software design that goes into something before it can move and be controlled. Outside of school, I love Photography: specifically night photography like taking photos of the stars but I also love to take photos of nature and different landmarks. Besides photography, I love to ski, read books, build Legos, and drink boba!" speed={10}/>
            </p>
            <div class="curWork">
            <h1 style={{textAlign:'center'}}>
                I am currently working on... a Gyroscopic Water Bottle Holder
            </h1>
            <p> 
                My team and I are working on designing a prototype for a self-balancing water bottle scooter/bike attachment. This attachment would be able to hold a phone and water bottle or other beverage and prevent spillage.
            </p>
            <div class="box">
              <div class="imageBox">
                <img src={require("../media/curWorkIMG/Screenshot 2025-05-25 214234.png")} alt="Figure 1"/>
              </div>

              <div class="imageBox">
                <img src={require("../media/curWorkIMG/Screenshot 2025-05-25 230436.png")} alt="Figure 2"/>
              </div>

              <div class="imageBox">
                <img src={require("../media/curWorkIMG/Screenshot 2025-05-25 230454.png")} alt="Figure 3"/>
              </div>
              
              {/* Empty div to add button to middle grid */}
              <div></div>

              <Link to={"/Projects/LilyPadPlunge"}>
                <button>Learn More!</button>
              </Link>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Home
