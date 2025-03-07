import "./popUp.css"

function popUp(props) {
    return (props.trigger) ? (
        <div class="popUp">
            <div class="inner">
                <button class="closeBTN">close</button>
                { props.children }
            </div>
        </div>
    ) : "";
}

export default popUp
