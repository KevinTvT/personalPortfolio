import './popUp.css'

const PopUp = ({trigger, close_btn}) => {
  return (trigger) ? (
    <div class="backdrop">
        <div class="PopUp">
            <button class="closeBTN" onClick={close_btn}>X</button>
            <div class="inner">
                <h3>Contact Me!</h3>
                <ul>
                    <p>Phone Number: <a href={"tel:4153351462"}>+1 (415) 335 - 1462</a> </p>
                    <p>Email: <a href={"mailto:kevin.d.nie.06@gmail.com"}>kevin.d.nie.06@gmail.com</a></p>
                    <p>LinkedIn: <a href={"https://www.linkedin.com/in/kevin-nie-b99874286/"} target={"_blank"}>www.linkedin.com/in/kevin-nie-b99874286/</a></p>
                    <p>GitHub: <a href={"https://github.com/KevinTvT"} target={"_blank"}>github.com/KevinTvT</a></p>
                </ul>
            </div>
        </div>
    </div>
    
  ) : "";
}

export default PopUp
