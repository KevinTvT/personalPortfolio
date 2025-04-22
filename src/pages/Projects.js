import { useState } from 'react';

import Header from '../components/Header.js'
import Typewriter from '../components/Typewriter.js'
import Slider from '../components/slider/Slider.js'

import sliderData from '../components/slider/SliderData.json'

const backgroundColors = ["#E3BFB7", "#B4C9C7", "#57838D", "#FFE4C9"]

const Projects = () => {

  return (
    <div className="App" style={{backgroundColor:'#F6F7F8'}}>
        <Header />

        <div class="project">
            <h1>
                <Typewriter text="My Projects"/>
            </h1>
            <div class="projectGrid">
              {sliderData.map((filename, index) => (
                <div class="gridBox" style={{ backgroundColor: backgroundColors[Math.floor(Math.random() * backgroundColors.length)] }} onClick={() => console.log("Thingy clicked")}>
                  <Slider class="slider" title={sliderData[index].title} data={sliderData[index].sliderData} />
                </div>
              ))}
            </div>
        </div>

    </div>
  )
}

export default Projects
