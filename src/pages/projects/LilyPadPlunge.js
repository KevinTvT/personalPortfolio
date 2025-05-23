import Header from "../../components/Header"


const LilyPadPlunge = () => {
  return (
    <div class="App" style={{backgroundColor:'#F6F7F8'}}>
      <Header />

      <div class="page">
        <h1>Lily Pad Plunge</h1>

        <button>Link to Website!</button>

        <div class="body">
          <p>The Lily Pad Plunge is a hands-on, claw machine-inspired arcade machine project designed to bring the nostalgic arcade experience into the home. Players use directional controlsand a drop button to maneuver a 3D printed frog suspended by a pulley system, aiming to land it onto moving lilypads of varying sizes. Smaller lily pads offer higher point values, encouraging strategic timing and precision. <br/> <br/> <br/> <br/> Beyond entertainment, the project engages teamwork and critical thinking skills while working on a project that fuses mechanical and electrical engineering with computer science. This interactive game not only promotes skill-building and problem-solving but also offers a fun, screen-free alternative for social play and friendly competition. <br/> <br/> <br/> <br/> For me, this project made use of all of my skills. It started with being project lead where I had to make use of leadership skills in delegating tasks and continued to the design of the project frame and how the gantry and lilypad systems would function. Besides the mechanical side of the project I was also involed in the electrical and computer science teams and worked on the LCD display and ensuring the game logic functioned.</p>
          <div class="imageDiv">
            <img src="https://nie-personal-portfolio.s3.us-east-2.amazonaws.com/projects/lilypadplunge/IMG_4591_25.jpg" alt="https://nie-personal-portfolio.s3.us-east-2.amazonaws.com/projects/lilypadplunge/IMG_4591_25.jpg"/>
          </div>
          <div class="imageDivThree">
            <img class="portrait" src="https://nie-personal-portfolio.s3.us-east-2.amazonaws.com/projects/lilypadplunge/Screenshot+2025-05-22+155046.png" alt="https://nie-personal-portfolio.s3.us-east-2.amazonaws.com/projects/lilypadplunge/Screenshot+2025-05-22+155046.png"/>
            <img class="portrait" src="https://nie-personal-portfolio.s3.us-east-2.amazonaws.com/projects/lilypadplunge/IMG_9949.jpg" alt="https://nie-personal-portfolio.s3.us-east-2.amazonaws.com/projects/lilypadplunge/IMG_9949.jpg"/>
            <img class="portrait" src="https://nie-personal-portfolio.s3.us-east-2.amazonaws.com/projects/lilypadplunge/IMG_7557.jpg" alt="https://nie-personal-portfolio.s3.us-east-2.amazonaws.com/projects/lilypadplunge/IMG_7557.jpg"/>

          </div>
          <p>There are multiple components to this project, the first one is the frame of the game machine. The main frame of the arcade machine will be 12" x 12" x 24". The front of the machine will have an open viewing window allowing users to track both the lilypads and the frog. The control console will extrude from the front and will include cutouts for 5 buttons and a Liquid Crystal Display. Inside the frame, the board will have platforms surrounding the lilypads so that the frog doesn't drop below the lilypads and mess with the electronical components. <br/> <br/> <br/> <br/> The material chosen for the frame was .25" thick plywood because it would be easiest to work with. Additionally it could be easily lasercut and that was our main manufacturing method. </p>
          
          <p>The next component is the gantry system and the dropping mechanism/pulley. The gantry system uses a servo motor connected to a wheel and belt to move a pulley that controls the frog drop. Two, rails, each attached to separate belts, move horizontally when the belts are activated, dragging a central "pin" along with them. This "pin" houses the motor and pulley system. <br/> <br/>  <br/> The belt and wheels were bought online while the rails were chosen to be acrylic because they were easy to lasercut, light enough to sit on the belts without weighing them down much, and had low friction when being dragged along with the belts. The "pin"/pulley system was 3D printed because it needed to be lighweight. <br/> <br/> <br/> The dropping mechanism is a servo with a 3D printed wheel attachement. The wheel would have a spool of string attached with the frog on the end. When the drop button is clicked the servo would rotate for a calculated time and then reel the frog back in for a set time.</p>
          <div class="imageDivThree">
            <img class="landscape3" src="https://nie-personal-portfolio.s3.us-east-2.amazonaws.com/projects/lilypadplunge/Screenshot+2025-05-22+164321.png" alt="https://nie-personal-portfolio.s3.us-east-2.amazonaws.com/projects/lilypadplunge/Screenshot+2025-05-22+164321.png"/>
            <img class="portrait" src="https://nie-personal-portfolio.s3.us-east-2.amazonaws.com/projects/lilypadplunge/Screenshot+2025-05-22+164331.png" alt="https://nie-personal-portfolio.s3.us-east-2.amazonaws.com/projects/lilypadplunge/Screenshot+2025-05-22+164331.png"/>
            <img class="portrait" src="https://nie-personal-portfolio.s3.us-east-2.amazonaws.com/projects/lilypadplunge/IMG_0034.jpg" alt="https://nie-personal-portfolio.s3.us-east-2.amazonaws.com/projects/lilypadplunge/IMG_0034.jpg"/>
            <img class="portrait" src="https://nie-personal-portfolio.s3.us-east-2.amazonaws.com/projects/lilypadplunge/IMG_7553.jpg" alt="https://nie-personal-portfolio.s3.us-east-2.amazonaws.com/projects/lilypadplunge/IMG_7553.jpg"/>
          </div>

          <p>The next component is the moving lily pads at the bottom. The lily pads would continuously move via a servo motor attached to a rod with three wheels and belts attached to it. <br/> <br/> <br/> The game would count the score by completing the circuit through the bottom of the frog and the lilypad. The lilypads were 3D printed and wrapped in aluminum foil with one end of a wire going from the foil to ground. The frog was also 3D printed and the bottom of the frog was wrapped in alumnimum foil with a wire connected from the foil to an input pin on the Arduino. This way when the bottom of the frog came into contact with the lilypad the Arduino would register the completed circuit and would add to the score.</p>
          <div class="imageDivThree">
            <img class="portrait" src="https://nie-personal-portfolio.s3.us-east-2.amazonaws.com/projects/lilypadplunge/Screenshot+2025-05-22+174129.png" alt="https://nie-personal-portfolio.s3.us-east-2.amazonaws.com/projects/lilypadplunge/Screenshot+2025-05-22+174129.png"/>
            <img class="portrait" src="https://nie-personal-portfolio.s3.us-east-2.amazonaws.com/projects/lilypadplunge/IMG_7555.jpg" alt="https://nie-personal-portfolio.s3.us-east-2.amazonaws.com/projects/lilypadplunge/IMG_7555.jpg"/>
            <img class="portrait" src="https://nie-personal-portfolio.s3.us-east-2.amazonaws.com/projects/lilypadplunge/IMG_7557.jpg" alt="https://nie-personal-portfolio.s3.us-east-2.amazonaws.com/projects/lilypadplunge/IMG_7557.jpg"/>
          </div>

          <div class="imageDivThree">
            <img class="landscape3" src="https://nie-personal-portfolio.s3.us-east-2.amazonaws.com/projects/lilypadplunge/Screenshot+2025-05-22+175928.png" alt="https://nie-personal-portfolio.s3.us-east-2.amazonaws.com/projects/lilypadplunge/Screenshot+2025-05-22+175928.png"/>
          </div>
          <p>The electrical side of the project has 9 components. We have two servos for the gantry and one for the lilypad system 4 movement buttons and one drop button and the LCD screen. <br/> <br/> We struggled a bit with the wiring because our wire management wasn't the best and we didn't think to look for a soldering kit. However, looking back something I would've changed is better wire management procedures and looked into soldering kits.</p>

        </div>
      </div>
        
    </div>
  )
}

export default LilyPadPlunge
