import '../index.css'

const Button = ({txt, onClick}) => {
  return (
    <button
        class="button"
        onClick={onClick}
    >
        {txt}
    </button>
  )
}

export default Button
