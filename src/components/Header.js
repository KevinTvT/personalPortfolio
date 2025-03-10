import '../index.css';

import {useState} from 'react';

// Components
import Button from './Button.js'
import PopUp from './PopUp.js'


const Header = () => {
  const [buttonPopUp, setButtonPopUp] = useState(false);
  let contactButtonClicked = false;
    const onClick = () => {
      console.log('Clicked')
    }

    const btnClosed = () => {
      contactButtonClicked = false;
    }

  return (
    <div class="header">
        <a href="../App.js"><img class="LOGO" src={require("../media/LOGO.png")} alt="LOGO"/></a>
        <div class="btnList">
            <Button txt="Projects" onClick={onClick}></Button>
            <Button txt="Interests" onClick={onClick}></Button>
            <Button txt="Contact Me!" onClick={() => setButtonPopUp(true)}></Button>
            
            <PopUp trigger={buttonPopUp} close_btn={() => setButtonPopUp(false)}/>
        </div>
    </div>
  )
}



export default Header
