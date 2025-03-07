import '../index.css';
import Button from './Button.js'
import popUp from './popUp.js'

const Header = () => {
  let contactButtonClicked = false;
    const onClick = () => {
      console.log('Clicked')
    }

    const contacted = () => {
      contactButtonClicked = true;
    }

  return (
    <div class="header">
        <a href="../App.js"><img class="LOGO" src={require("../media/LOGO.png")} alt="LOGO"/></a>
        <div class="btnList">
            <Button txt="Projects" onClick={onClick}></Button>
            <Button txt="Interests" onClick={onClick}></Button>
            <Button txt="Contact Me!" onClick={contacted}></Button>
            
            <popUp trigger={true}>
              <h3>My Popups</h3>
            </popUp>
        </div>
    </div>
  )
}



export default Header
