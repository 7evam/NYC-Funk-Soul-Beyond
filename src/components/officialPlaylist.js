import React, {Component} from 'react';
import Iframe from './Iframe'

class OfficialPlaylist extends Component {
  render() {
    return(
    <div className="official-playlist">
      <Iframe src="https://open.spotify.com/embed/user/1218938617/playlist/4ndVmh2zLoM8Hoiqe7laMo" width="300" height="800"></Iframe>
    </div>
      )
  }
}

export default OfficialPlaylist
