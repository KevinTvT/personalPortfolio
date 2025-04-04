import '../index.css'
import Header from '../components/Header.js'
import { useState} from 'react'

const Interests = () => {
  const importAll = (r) => r.keys().map(r);
  const images = importAll(require.context("../media/images", false, /\.(png|jpe?g|svg)$/));

  const [dimensions, setDimensions] = useState({ height: 0, width: 0})
  const handleImageLoad = (index, img) => {
    setDimensions((prev) => ({
      ...prev,
      [index]: { width: img.naturalWidth, height: img.naturalHeight },
    }));
    // console.log(`${img.src}: ${img.naturalHeight} x ${img.naturalWidth}`);
  };

  return (
    <div className="App" style={{backgroundColor:'#F6F7F8'}}>
      <Header/>

      <h1 class="interesth1"> Photo Collage! </h1>
      <div class="photoBorders">
        {images.map((filename, index) => (
            <img
              onLoad={(e) => handleImageLoad(index, e.target)}
              class={dimensions[index]?.height > dimensions[index]?.width ? "portrait" : "landscape"}
              src={filename}
              alt={`Gallery ${filename}`}
              onError={(e) => console.error("Error loading images: ", e)}
            />
        ))}
      </div>
    </div>
  )
}

export default Interests
