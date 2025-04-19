import {useState, useEffect} from 'react'
import './Slider.css'

const Slider = ({ title, data }) => {
    const [items, setItems] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0)
    const slideLength = items.length;

    let slideInterval;
    let intervalTime=3000;

    function auto() {
        slideInterval = setInterval(nextSlide, intervalTime)
    }

    const nextSlide = () => {
        setCurrentSlide( currentSlide===slideLength-1 ? 0 : currentSlide + 1);
    };

    useEffect(() => {
        setItems(data);
    }, [data])

    useEffect(() => {
        auto();
    }, [currentSlide])
  return (
    <div class="slider">
        <h2>{title}</h2>
        {items.map((slide, index) => {
            return (
                // need to replace key with a unique ID in the json file
                <div class={index === currentSlide ? "slide current" : "slide"} key={slide.ID}>
                    {index === currentSlide && (
                        <div>
                            <img class="image" src={slide.image} alt={slide.image}/>
                        </div>
                    )}
                </div>
            )
        })}
    </div>
  )
}

export default Slider
