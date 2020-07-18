// Packages
import React, { Component } from "react";
import {
  Map,
  GoogleApiWrapper,
  Marker,
  InfoWindow,
} from "google-maps-react";

// Styling for the map in an object 
const mapStyles = {
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
  paddingTop: "50px",
  paddingLeft: "50px",
  paddingRight: "20px",
  width: "100%",
  height: "100%",
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

  // const getSelectedAddres = () => {
  //   return(dispatch, store)=>{
  //     RNGooglePlaces.lookPlaceByID(payload)
  //     .then(results)=>{
  //       dispatch({
  //         type: GET_SELECTED_ADDRESS,
  //         payload
  //       })
  //     }
  //   }
  // }

  // handleChange = (event) => {
  //   this.setState({lat:})
  // }

  render() {
    // Destrcuture the props
    const {
      posts,
      latitude,
      longitude,
      google,
      // origins,
      // destinations,
      // travelMode,
      // distances
    } = this.props;

    // google.maps.DistanceMatrixService(
    //   origins,
    //   destinations,
    //   travelmode,
    //   (res, status) => {
    //     console.log(distances);
    //     if (status === "OK") {
    //       console.log("The Status is Okay");
    //     } else {
    //       console.error(error, "status:", status);
    //     }
    //   }
    // );

    // console.log("Props",this.props.maps.getDistanceMatrix(origins, destinations, travelmode))
  

    // Render the Maps Component
    return (
      <div>
        {/* <input
          type="text"
          placeholder="Destination"
        /> */}
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: 51.5324,
            lng: -0.1843,
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
