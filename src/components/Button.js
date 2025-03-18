import '../index.css'

import { Link } from 'react-router-dom'

const Button = ({txt, onClick}) => {
  return (
    <Link to="">
      <button
          class="button"
          onClick={onClick}
          rel="noreferrer"
      >
        {txt}
      </button>
    </Link>
    
  )
}

export default Button
