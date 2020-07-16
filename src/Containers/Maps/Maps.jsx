import React, { Component } from "react";

import {
  Map,
  GoogleApiWrapper,
  Marker,
  InfoWindow,
} from "google-maps-react";

const mapStyles = {
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
  paddingTop: "50px",
  paddingLeft: "50px",
  paddingRight: "20px",
  width: "60%",
  height: "60%",
  // borderRadius: "20px",
};

export class MapContainer extends Component {
  constructor() {
    super();
    this.state = {
      lat: "",
      lng: "",
      showingInfoWindow: false, // Hides or shows the infowindow
      activeMArker: {}, // Shows the active marker upon click
      selectedPlace: {}, // Shows the infoWindow to the selected place upon a marker
    };
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  };

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMArker: null,
      });
    }
  };

  // handleChange = (event) => {
  //   this.setState({lat:})
  // }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Destination"
        />
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: 51.5366,
            lng: -0.0758,
          }}
        >
          <Marker
            onClick={this.onMarkerClick}
            name={"Barking"}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          />
          <div>
            <h4>
              {this.state.selectedPlace.name}
            </h4>
          </div>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey:
    "AIzaSyAe2TKldSe - prHE4pkzmnfqbMNEAeBwCj4",
})(MapContainer);

// export default GoogleApiWrapper({
//   apiKey:
//     AIzaSyAe2TKldSe - prHE4pkzmnfqbMNEAeBwCj4,
// });
