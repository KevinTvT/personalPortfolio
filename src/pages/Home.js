import "../index.css"

import Header from "../components/Header.js"
import Typewriter from "../components/Typewriter.js"
import Button from '../components/Button'

const Home = () => {
  return (
    <div style={{overflow:"hidden"}}>
      <Header/>

        <div class="headshot" >
        <img src={require("../media/IMG_9947.jpg")} alt="HEADSHOT"></img>
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
                I am currently working on... my Personal Portfolio!
            </h1>
            <p> 
                I am coding a website in React to display my skills, experience, and projects in a professional setting. The portfolio would also describe some of my interests.
            </p>
            <li>
                <img src={require("../media/curWorkIMG/Website.png")} alt="Figure 1"/>
                <img src={require("../media/curWorkIMG/IMG_9560.jpg")} alt="Figure 2"/>
                <img src={require("../media/curWorkIMG/IMG_9607.jpg")} alt="Figure 3"/>
            </li>
            <Button txt="Learn More!"></Button>
            </div>
        </div>
    </div>
  )
}

export default Home
