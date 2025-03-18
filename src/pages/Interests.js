import '../index.css'
import Header from '../components/Header.js'
// import img from '/images.json'

import { useState, useEffect } from 'react';




{/* RUN ```npm generateImages.js``` TO UPDATE THE GALLERY OF IMAGES */}

const Interests = () => {
  // const importAll = (r) => r.keys().map(r);
  // const images = importAll(require.context("../media", false, /\.(png|jpe?g|svg)$/));

  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("/images.json")
      .then((res) => res.json())
      .then((data) => setImages(data.images))
      .catch((err) => console.error("Error loading images.json:", err));
  }, []);

  // const images = require.context('../../public/images', true);

  return (
    <div className="App" style={{backgroundColor:'#F6F7F8'}}>
      <Header/>

      <h1 class="interesth1"> Photo Collage! </h1>
      <div class="photoBorders">

        {/* Remove when the err dissapears */}
        {images.length===0 ? <p>Loading images...</p> : null}

        <ul>
          
            {images.map((filename, index) => (
              <li key={index}>
                <img
                  src={filename}
                  alt={`Gallery ${index}`}
                />

            </li>
            ))}


          {/* empty list element */}
          <li></li>
        </ul>
      </div>
    </div>
  )
}

export default Interests
