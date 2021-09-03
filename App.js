import React from 'react';
import { Alert } from 'react-native';
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from 'axios';

const API_KEY = "99d4f5c855fbbd672c510a2d64b980fc";

export default class extends React.Component {
  state = {
    isLoading: true
  }

  getWeather = async (lat, lon) => {
    const { data } = await axios(`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
    console.log(data);
  }

  getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();  // await functionality
      // Send to API and get weather
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
    this.getWeather(latitude, longitude);
    this.setState({ isLoading: false });
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
}