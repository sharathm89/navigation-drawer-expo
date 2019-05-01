import React, { Component } from "react";
import { View, Button, ToastAndroid } from "react-native";
import { setUser } from "../../helpers/localstorage";

// Local Styles
import localStyles from "../../styles";
import theme from "../../theme/theme";

class Login extends Component {
	onSubmit = async () => {
		await setUser();
    ToastAndroid.show("Login Success", ToastAndroid.SHORT);
    this.props.navigation.navigate("Home")
	}

	render() {
		return (
      <View style={localStyles.content}>
        <Button
          onPress={this.onSubmit}
          title="Login"
          color={theme.colors.secondary}
        />

        <View style={{ position: "absolute", bottom: 10, right: 10 }}>
          <Button
            title="Forgot password ?"
            onPress={() => this.props.navigation.navigate("ForgotPassword")}
            color={theme.colors.secondary}
          />
        </View>
      </View>
		);
	}
}

export default Login;
