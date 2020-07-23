// Packages
import React, {
  useState,
  useEffect,
} from "react";
import {
  Map,
  GoogleApiWrapper,
  Marker,
  InfoWindow,
} from "google-maps-react";
import Geocode from "react-geocode";

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

export const MapContainer = (props) => {
  // constructor() {
  //   super();
  //   this.state = {
  //     lat: "",
  //     lng: "",
  //     showingInfoWindow: false, // Hides or shows the infowindow
  //     activeMArker: {}, // Shows the active marker upon click
  //     selectedPlace: {}, // Shows the infoWindow to the selected place upon a marker
  //     response: "",
  //   };
  // }

  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [coordinates, setCoordinates] = useState(
    ""
  );
  const [
    responseData,
    setResponseData,
  ] = useState(null);

  useEffect(() => {
    Geocode.setApiKey(
      "AIzaSyAe2TKldSe - prHE4pkzmnfqbMNEAeBwCj4"
    );
    Geocode.setLanguage("en");
    Geocode.setRegion("es");

    Geocode.fromAddress("London").then(
      (response) => {
        const {
          lat,
          lng,
        } = response.results[0].geometry.location;
        console.log("coordinates", lat, lng);
        setCoordinates({ lat: lat, lng: lng });
      },
      (error) => {
        console.error(error);
      }
    );
  }, [setResponseData]);

  console.log("Maps Bookings", props.booking);
  console.log("coordinates console", coordinates )
  console.log("coordinates lng", coordinates.lng )


  useEffect(() => {
    // const self = this;

    console.log("MOUNTING PROPS", props);

    const service =
      props.google.maps.DistanceMatrixService;

    const matrixOptions = {
      origins: [
        // coordinates.lat, coordinates.lng,
        // props.bookings.pickUp,
        // "28.6139391, -77.2090212", // New Delhi 
        "41.8848274,-87.6320859",
        // "41.878729,-87.6301087",
        // "41.8855277,-87.6440611",
      ],
      destinations: [
        // props.bookings.destination,
        // "Birmingham",
        "233 S Wacker Dr, Chicago, IL 60606",
      ], // customer address
      travelMode: "DRIVING",
      unitSystem:
        props.google.maps.UnitSystem.IMPERIAL,
    };

    //  Callback function used to process Distance Matrix response
    const callback = (response, status) => {
      if (status !== "OK") {
        alert("Error with distance matrix");
        return;
      }
      console.log("Response", response);
      setResponseData(response);
    };

    // Call Distance Matrix Service
    service.prototype.getDistanceMatrix(
      matrixOptions,
      callback
    );
  }, []);

  // const onMarkerClick = (props, marker, e) => {
  //   this.setState({
  //     selectedPlace: props,
  //     activeMarker: marker,
  //     showingInfoWindow: true,
  //   });
  // };
  // const onClose = (props) => {
  //   if (this.state.showingInfoWindow) {
  //     this.setState({
  //       showingInfoWindow: false,
  //       activeMArker: null,
  //     });
  //   }
  // };

  // render() {
  // Render the Maps Component
  console.log(
    "Response",
    responseData &&
      responseData.rows[0].elements.distance
  );

  return (
    <div>
      {responseData === null ? (
        "Loading..."
      ) : (
        <h1>
          {responseData.rows[0].elements.duration}
        </h1>
      )}
      <Map
        google={props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: 51.5324,
          lng: -0.1843,
        }}
      >
        <Marker
          // onClick={onMarkerClick}
          name={"Barking"}
        />
        <InfoWindow
        // marker={activeMarker}
        // visible={showingInfoWindow}
        // onClose={onClose}
        />
        <div>
          <h4>{/* {selectedPlace.name} */}</h4>
        </div>
      </Map>
    </div>
  );
  // }
};

export default GoogleApiWrapper({
  apiKey:
    "AIzaSyAe2TKldSe - prHE4pkzmnfqbMNEAeBwCj4",
})(MapContainer);

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
