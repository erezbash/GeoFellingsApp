import {Platform} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {NotificationsAndroid} from "react-native-notifications/index.android";
import NotificationsIOS from "react-native-notifications/index.ios";
import {handleNotificationOpenApp, handleRegistrationToken} from "./notifcations/androidHandler";
import {registerScreens} from "./screens";

registerScreens();

if (Platform.OS === 'android') {
    NotificationsAndroid.setRegistrationTokenUpdateListener(handleRegistrationToken);
    NotificationsAndroid.setNotificationReceivedListener(handleNotificationOpenApp);
    NotificationsAndroid.setNotificationOpenedListener(handleNotificationOpenApp);

}

if (Platform.OS === 'ios') {
    NotificationsIOS.addEventListener('remoteNotificationsRegistered', handleRegistrationToken);
    NotificationsIOS.requestPermissions();
}

export function startApp(root) {
    switch (root) {
        case 'login':
            Navigation.startSingleScreenApp({
                screen: {
                    screen: 'example.LoginScreen',
                    title: 'Login',
                }
            });
            return;
        case 'after-login':
            Navigation.startTabBasedApp({
                tabs: [
                    {
                        label: 'One',
                        icon: require('../img/one.png'),
                        screen: 'example.Home', // this is a registered name for a screen
                        title: 'Screen One'
                    },
                    {
                        label: 'Two',
                        icon: require('../img/one.png'),
                        screen: 'example.Details',
                        title: 'Screen Two'
                    }
                ]
            });
            return;
    }

}

startApp('login');