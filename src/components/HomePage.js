import React, {Component} from 'react';
import Articles from './Articles'
import OfficialPlaylist from './OfficialPlaylist'


class Layout extends Component {

  render() {
    return(
    <div>
      <Articles/>
      <OfficialPlaylist/>
    </div>
      )
  }
}

export default Layout;

