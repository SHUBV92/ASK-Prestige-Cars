import React, { Component } from "react";

import {
  Map,
  GoogleApiWrapper,
} from "google-maps-react";

const mapStyles = {
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
  marginTop:"60px",
  marginLeft:"60px",
  width: "90%",
  height: "500px",
  borderRadius:"20px"
};

export class MapContainer extends Component {
  //   const initMap = () => {
  //     const options = {
  //       zoom: 10,
  //       center: {
  //         lat: 51.5366,
  //         lng: -0.0758,
  //       },
  //     };
  //   };
  //   let google = new google.maps()
  render() {
    return (

        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: 51.5366,
            lng: -0.0758,
          }}
        />

    );
  }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAe2TKldSe - prHE4pkzmnfqbMNEAeBwCj4'
  })(MapContainer);

// export default GoogleApiWrapper({
//   apiKey:
//     AIzaSyAe2TKldSe - prHE4pkzmnfqbMNEAeBwCj4,
// });
