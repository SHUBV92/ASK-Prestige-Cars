import React, { Component } from "react";
import axios from 'axios'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 0,
      lng: 0,
      travelMode: "",
    };
  }

  getDistance = (posts) => {
    let destinations = posts.map((post) => {
      return `${post.location.ltitude}, ${post.locatåion.longitude}`;
    });
    let origins = [
      `${this.state.lat}, ${this.state.lng}`,
    ];
    let travelMode = this.state.travelMode.length
      ? this.state.travelMode
      : "WALKING";

    axios
      .post("/api/distance", {
        origins,
        destinations,
        travelMode,
      })
      .then((res) => res.data)
      .then((data) => this.props.setDist(data))
      .catch((err) =>
        console.log(
          `unable to get distances, ${err}`
        )
      );
  };

  const mapToDispatch = dispatch => {
      return {
          setCoordinates(lat, lng, add){
              dispatch(assignUserLat(lat))
              dispatch(assignUserLng(lng))
              dispatch(assignUserState(add))
          },
          filter(posts){
              dispatch(saveFilteredPosts(posts)),
          }
          setDist(distance){
              dispatch(saveDistances(distances))
          }
      }
  }

}
