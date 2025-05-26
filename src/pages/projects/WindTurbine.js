import Header from "../../components/Header"
import YoutubeEmbed from "../../components/YoutubeEmbed"

import './generic.css'

const WindTurbine = () => {
  return (
    <div class="App" style={{backgroundColor:'#F6F7F8'}}>
      <Header/>

      <div class="page">
        <h1>Wind Turbine Project</h1>

        <div class="body">
          <p>My team and I were tasked with designing a horizontal-axis wind turbine that is effective, durable, and cost-efficient. Through research we landed on a 3-bladed rotor design with a 10 degree twist and angle of attack from 15-5 degrees to maximize aerodynamic efficiency. We decided to model our tower design after the Eiffel Tower to priotize strength and minimize deflection while staying cheap and lightweight. <br/> <br/> <br/> <br/> This project primarily used my CAD/SOLIDWORKS and FEA analysis knowledge and skills.</p>
          <div class="imageDiv">
            <YoutubeEmbed embedID={"PtwC7Cc97N0"} width={"40%"} height={"50vh"} left={"30%"}/>
          </div>

          <div class="imageDivThree">
            <img class="portrait" src="https://nie-personal-portfolio.s3.us-east-2.amazonaws.com/projects/turbine/Screenshot+2025-05-22+200259.png" alt="https://nie-personal-portfolio.s3.us-east-2.amazonaws.com/projects/turbine/Screenshot+2025-05-22+200259.png"/>
            <img class="portrait" src="https://nie-personal-portfolio.s3.us-east-2.amazonaws.com/projects/turbine/Screenshot+2025-05-22+200320.png" alt="https://nie-personal-portfolio.s3.us-east-2.amazonaws.com/projects/turbine/Screenshot+2025-05-22+200320.png"/>
            <img class="portrait" src="https://nie-personal-portfolio.s3.us-east-2.amazonaws.com/projects/turbine/Screenshot+2025-05-22+200338.png" alt="https://nie-personal-portfolio.s3.us-east-2.amazonaws.com/projects/turbine/Screenshot+2025-05-22+200338.png"/>
          </div>
          <p>Rotor design was one of the major parts of this project because it defined how efficient the wind turbine is at generating power. The factors that affect power generation are number of rotors, angle of attack, twist angle, and airfoil shape among some others. After in-depth research into different types of rotors and their uses/effiency we decided on our final design which was a 3-bladed rotor with an angle of attack of 15 and twist angle of 10</p>
          
          <div class="imageDivThree">
            <img class="portrait" src="https://nie-personal-portfolio.s3.us-east-2.amazonaws.com/projects/turbine/Screenshot+2025-05-22+201137.png" alt="https://nie-personal-portfolio.s3.us-east-2.amazonaws.com/projects/turbine/Screenshot+2025-05-22+201137.png"/>
            <img class="portrait" src="https://nie-personal-portfolio.s3.us-east-2.amazonaws.com/projects/turbine/Screenshot+2025-05-22+201215.png" alt="https://nie-personal-portfolio.s3.us-east-2.amazonaws.com/projects/turbine/Screenshot+2025-05-22+201215.png"/>
            <img class="portrait" src="https://nie-personal-portfolio.s3.us-east-2.amazonaws.com/projects/turbine/Screenshot+2025-05-22+201313.png" alt="https://nie-personal-portfolio.s3.us-east-2.amazonaws.com/projects/turbine/Screenshot+2025-05-22+201313.png"/>
          </div>
          <p>Tower design was the other main part of this project because it involved the two other main goals of this project: cost-efficiency and durability. We took inspiration from the Eiffel Tower for our original design for our tower, however, in doing so we encountered a problem. We wouldv'e reached our volume limit so we wouldn't meet the cost-efficiency goal. To solve this we removed material from the stronger parts to reduce the weight while still keeping the structe as durable and stable as possible. <br/> <br/> <br/> As our tower was 3D printed, we needed to find a way to separate our tower into chunks to 3D print because otherwise it wouldv'e been too big. From the exploded view you can see the part where we chose to glue together. We chose those points because they had the least amount of stress from our FEA analysis.</p>

          <p>We performed multiple FEA analysis simulations of Stiffness, Stress and Factor of Safety(FOS). Our Stiffness FEA simulation revealed that the maximum displacemnt of our tower is 0.493 mm which occurred at the top of tower near the rounded section of the motor hub. Wihtin the same general area, the housing faced a moderate amount of deflection and decreased as you go down the tower. <br/> <br/> The image displayed the stress on our tower. The area where the most stress occurs isn't clearly visible but the region of 2.895e+02 PSI is located towards the back of the motor housing. An acceptable amount of stress occurs throughout the tower's pillars mostly in the long upper region that connects to the bottom of teh motor housing. <br/><br/> Our last group of FEA simulations was about FOS. The point at which the FOS is highest, 3.62e+04, is in the same area where the most stress occurs. In general our FOS is pretty good because buildings usually use a FOS of around 2 and our minimum FOS is 2.25.</p>
          <div class="imageDivThree">
            <img class="landscape3" src="https://nie-personal-portfolio.s3.us-east-2.amazonaws.com/projects/turbine/Screenshot+2025-05-22+202332.png" alt="https://nie-personal-portfolio.s3.us-east-2.amazonaws.com/projects/turbine/Screenshot+2025-05-22+202332.png"/>
          </div>

          <p style={{marginBottom:"15%"}}>Our results from testing were satisfactory. Our rotor generated a max power of of 1.4 Watts and the max deflection of our tower was 1.74 mm at 3,500 grams added.<br/> <br/> <br/> The testing process began with securing the widn turbine tower to a table using a 3/8" ABS plate and zip-ties. A motor generator was mounted on the platform and a multimeter was connected to measure voltage, current, and power output. We took 12 data points at about every 100mWatts of power starting at 275 mWatts. Soon after, we collected our highest data points of 3.97V, 70.9mAmps, and 5822 rpm. For the stiffness/deflection test, a displacement meter was connected to the front and weights were incrementally added to the back starting with 100 g (0.002 mm displacement). Eventually reaching 3,500 g and 1.74 mm displacement. <br/> <br/> Through our extensive testing, we can see that our wind turbine sucessfully accomplished all three of our goals.</p>
          <div class="imageDivThree">
            <img class="landscape2" src="https://nie-personal-portfolio.s3.us-east-2.amazonaws.com/projects/turbine/IMG_2906.jpg" alt="https://nie-personal-portfolio.s3.us-east-2.amazonaws.com/projects/turbine/IMG_2906.jpg"/>
            <img class="portrait" src="https://nie-personal-portfolio.s3.us-east-2.amazonaws.com/projects/turbine/IMG_2914.jpg" alt="https://nie-personal-portfolio.s3.us-east-2.amazonaws.com/projects/turbine/IMG_2914.jpg"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WindTurbine
