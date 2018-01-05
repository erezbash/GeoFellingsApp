import React from "react";
import {View, TextInput, Text, Button} from 'react-native-ui-lib';
import {Alert} from "react-native";

export default class RegisterScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <View flex paddingH-25 paddingT-120>
                <Text blue50 text20>Register</Text>
                <TextInput
                    text50 dark10
                    placeholder="username"
                    onChangeText={(text) => this.setState({username: text})}
                />
                <TextInput
                    text50 dark10 secureTextEntry
                    placeholder="password"
                    onChangeText={(text) => this.setState({password: text})}
                />
                <TextInput
                    text50 dark10 secureTextEntry
                    placeholder="passwordAgain"
                    onChangeText={(text) => this.setState({passwordAgain: text})}
                />
                <View marginT-100 center>
                    <Button
                        onPress={() => {
                            Alert.alert(JSON.stringify(this.state, null, 2));
                            this.props.navigator.pop({
                                animated: true,
                                animationType: 'fade'
                            })
                        }}
                        text70
                        white
                        background-orange30
                        label="Register"/>
                </View>
            </View>
        );
    }
}

