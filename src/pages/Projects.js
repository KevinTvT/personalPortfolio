import Header from '../components/Header.js'
import Typewriter from '../components/Typewriter.js'
import Slider from '../components/slider/Slider.js'
import sliderData from '../components/slider/SliderData.json'

const Projects = () => {
  return (
    <div className="App" style={{backgroundColor:'#F6F7F8'}}>
        <Header />

        <div class="project">
            <h1>
                <Typewriter text="My Projects"/>
            </h1>
            <div class="projectGrid">
                <Slider class="slider" title={sliderData[0].title} data={sliderData[0].sliderData}/>
                <Slider class="slider" title={sliderData[1].title} data={sliderData[1].sliderData}/>
            </div>
        </div>

    </div>
  )
}

export default Projects
