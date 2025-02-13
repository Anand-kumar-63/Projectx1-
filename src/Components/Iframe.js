import React from "react";
import YouTube from "react-youtube";

class YoutubeVideo extends React.Component {
  VideoOnReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  render() {
    const opts = {
      height: "476",
      width: "792",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    const { videoId } = this.props;

    return (
      <YouTube videoId={videoId} opts={opts} onReady={this.VideoOnReady} />
    );
  }
}

export default YoutubeVideo;
