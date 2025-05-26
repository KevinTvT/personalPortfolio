import Header from "../../components/Header.js"
import YoutubeEmbed from "../../components/YoutubeEmbed.js"

import "./generic.css"

const GyroscopicWaterBottleHolder = ({}) => {
  return (
    <div class="App" style={{backgroundColor:"#F6F7F8"}}>
      <Header/>

      <div class="page">
        <h1>Gyroscopic Water Bottle Holder</h1>
        
        <div class="body">
            <p>My team and I developed a solution to waterbottle/drink spillage and issues with GPS navigation while on a scooter or bike. I, personally, scooter very often and have slow down or stop repeatedly to check my phone GPS or ensure my drink doesn't spill and I know many other students also have this issue. Our solution was to design a phone holder that could adjust to different sized phones and rotate to level a water bottle so it doesn't spill. <br/> <br/> <br/> This project used my knowledge of physics, CAD, and FEA analysis. However, the main focus was on the manufacturing method, the reasoning behind it and the tolerancing fits chosen and how each component fits together. <br/> <br/> <br/> In the end, our product successfully prevented major spillage from an open water bottle without a cap on both a bike and scooter.</p>
            <div class="imageDiv">
                <YoutubeEmbed embedID={"GeEYCI01j7I"} width={"90%"} height={"32vh"} left={"5%"}/>
            </div>
            
            <p>The first component and the component I chiefly worked on was the Phone Holder. This component consists of three parts: the main body, the slider, and the bolt cap. The manufacturing method I chose to create this piece was 3D printing because I had easy access to Prusa 3D printers which are very accurate. Additionally, I wanted the phone holder to be light so it's weight is negligible and doesn't offset the balancing of the water bottle holder. Furthermore, 3D printing seemed like the best choice because it offered relatively quick prototyping and testing. <br/> <br/> The bolt cap is a cylinder with a cutout for a nut and a hole for a bolt and is designed to make it easy for the user to turn the main bolt and change the size of the phone holder. <br/> <br/> The second part is the slider, it is designed to hold the phone in place and has a clearance fit with the bolt. Additionally the clearance fit allows the part to rotate to allow the user to slide the phone holder in. <br/> <br/> The third part is the main body, it has an interference fit hole with a nut and a clearance fit divot with the main resizing bolt. Additionally, it has a interference fit with a bolt that connects it to the holding bracket.</p>
            <div class="imageDivThree">
                <img class="landscape3" src="https://nie-personal-portfolio.s3.us-east-2.amazonaws.com/projects/gyroscopicWaterBottle/Screenshot+2025-05-26+141418.png" alt="https://nie-personal-portfolio.s3.us-east-2.amazonaws.com/projects/gyroscopicWaterBottle/Screenshot+2025-05-26+141418.png"/>

                <img class="portrait" src="https://nie-personal-portfolio.s3.us-east-2.amazonaws.com/projects/gyroscopicWaterBottle/Screenshot+2025-05-26+141155.png" alt="https://nie-personal-portfolio.s3.us-east-2.amazonaws.com/projects/gyroscopicWaterBottle/Screenshot+2025-05-26+141155.png"/>
                <img class="portrait" src="https://nie-personal-portfolio.s3.us-east-2.amazonaws.com/projects/gyroscopicWaterBottle/Screenshot+2025-05-26+141255.png" alt="https://nie-personal-portfolio.s3.us-east-2.amazonaws.com/projects/gyroscopicWaterBottle/Screenshot+2025-05-26+141255.png"/>
                <img class="portrait" src="https://nie-personal-portfolio.s3.us-east-2.amazonaws.com/projects/gyroscopicWaterBottle/Screenshot+2025-05-26+141322.png" alt="https://nie-personal-portfolio.s3.us-east-2.amazonaws.com/projects/gyroscopicWaterBottle/Screenshot+2025-05-26+141322.png"/>
            </div>

            <p>The next component is the mounting bracket. The mounting connects the phone and water bottle holders together and holds them to the bike or scooter. Even though we decided to 3D print this part, we increased the infill percentage because FEA testing showed that this piece needed to be stronger due to its job of holding the water bottle and phone holders to the scooter. It needed to be able to withstand the weight of the water bottle swinging around in the holder due to bumps in the road.<br/> <br/> <br/> The mounting bracket is made of of two identical parts and forms an interference fit with a pin that allows it to rotate. Additionally it forms a clearance fit with a bolt that allows it to connect to the phone and water bottle holders. Finally, when the two parts come together, they form an interference fit with the bike or scooter handle allowing it to hold the water bottle and phone holders in place without rotating. </p>
            <div class="imageDiv">
                <img src="https://nie-personal-portfolio.s3.us-east-2.amazonaws.com/projects/gyroscopicWaterBottle/Screenshot+2025-05-26+150202.png" alt="https://nie-personal-portfolio.s3.us-east-2.amazonaws.com/projects/gyroscopicWaterBottle/Screenshot+2025-05-26+150202.png"/>
            </div>

            <div class="imageDivThree">
                <img class="portrait" src="https://nie-personal-portfolio.s3.us-east-2.amazonaws.com/projects/gyroscopicWaterBottle/Screenshot+2025-05-26+155709.png" alt="https://nie-personal-portfolio.s3.us-east-2.amazonaws.com/projects/gyroscopicWaterBottle/Screenshot+2025-05-26+155709.png"/>
                <img class="portrait" src="https://nie-personal-portfolio.s3.us-east-2.amazonaws.com/projects/gyroscopicWaterBottle/Screenshot+2025-05-26+154021.png" alt="https://nie-personal-portfolio.s3.us-east-2.amazonaws.com/projects/gyroscopicWaterBottle/Screenshot+2025-05-26+154021.png"/>
                <img class="portrait" src="https://nie-personal-portfolio.s3.us-east-2.amazonaws.com/projects/gyroscopicWaterBottle/Screenshot+2025-05-26+153319.png" alt="https://nie-personal-portfolio.s3.us-east-2.amazonaws.com/projects/gyroscopicWaterBottle/Screenshot+2025-05-26+153319.png"/>
                <img class="landscape3" src="https://nie-personal-portfolio.s3.us-east-2.amazonaws.com/projects/gyroscopicWaterBottle/Screenshot+2025-05-25+214234.png" alt="https://nie-personal-portfolio.s3.us-east-2.amazonaws.com/projects/gyroscopicWaterBottle/Screenshot+2025-05-25+214234.png"/>
            </div>
            <p>The last component is the most complex component, the water bottle holder. The water bottle rotates through clearance fits with shoulder bolts. There is one at the top where it connects to the mounting bracket, this accounts for yaw while the two shoulder bolts on the sides account for pitch. And because both can rotate freely they also allow the water bottle to rotate freely in the "roll" direction too. Finally, along the back of the component, there is a final shoulder bolt that allows the water bottle to bounce up and down to offset bumps on the ground that the scooter or bike goes over. <br/> <br/> The base at the bottom of the water bottle holder has clamping fingers that hold the water bottle in place. It tightens through holes in the bottom of the fingers that allow a string to go through and tighten the fingers. <br/> <br/> <br/> We chose to 3D print the water bottle holder due to its complex geometry and curved surfaces, to increase the strength and durability of the piece, we increased the infill in select places where the FEA analysis said stress and FOS was the weakest. </p>
        </div>
      </div>
    </div>
  )
}

export default GyroscopicWaterBottleHolder
