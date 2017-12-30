import {Navigation} from 'react-native-navigation';
import DetailsScreen from "./types/DetailsScreen";
import HomeScreen from "./types/HomeScreen";
import LoginScreen from "./types/LoginScreen";

export function registerScreens() {
    Navigation.registerComponent('example.Home', () => HomeScreen);
    Navigation.registerComponent('example.Details', () => DetailsScreen);
    Navigation.registerComponent('example.LoginScreen', () => LoginScreen);
}