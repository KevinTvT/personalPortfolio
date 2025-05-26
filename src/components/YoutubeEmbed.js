import PropTypes from "prop-types";
import './YoutubeEmbed.css'

const YoutubeEmbed = ({embedID, width, height, left}) => {
  return (
    <div class="video" style={{width:width, height:height, left:left}}>
      <iframe
        src={'https://www.youtube.com/embed/' + embedID + "?mute=1"}
        allow="autoplay"
        title={embedID}
      />
    </div>
  )
}

YoutubeEmbed.propTypes = {
    embedID: PropTypes.string.isRequired
}

export default YoutubeEmbed
