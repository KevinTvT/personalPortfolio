import '../index.css';

import { useState } from 'react';
import { Link } from 'react-router-dom'

// Components
import Button from './Button.js'
import PopUp from './popUp.js'


const Header = () => {
  const [buttonPopUp, setButtonPopUp] = useState(false);

  return (
    <div class="header">
      <Link to="/personalPortfolio">
        <img class="LOGO" src={require("../media/LOGO.png")} alt="LOGO"/>
      </Link>
        <a href="../App.js"></a>
        <div class="btnList">
            <Link to="/Interests"> <button class="button" rel="noreferrer"> Projects</button> </Link>
            <Link to="/Interests"> <button class="button" rel="noreferrer"> Interests</button> </Link>
            <Button txt="Contact Me!" onClick={() => setButtonPopUp(true)}></Button>
            
            <PopUp trigger={buttonPopUp} close_btn={() => setButtonPopUp(false)}/>
        </div>
    </div>
  )
}



export default Header
