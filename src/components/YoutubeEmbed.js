import PropTypes from "prop-types";
import './YoutubeEmbed.css'

const YoutubeEmbed = ({embedID, width, height}) => {
  return (
    <div class="video">
      <iframe
        width={width}
        height={height}
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
