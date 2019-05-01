import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, ActivityIndicator, ToastAndroid } from "react-native";
import { getUser } from "../../helpers/localstorage";

// Local Styles
import localStyles from "../../styles";
import theme from "../../theme/theme";

class SplashScreen extends Component {
	constructor(props) {
		super(props);
		this._bootstrapAsync();
	}

	_bootstrapAsync = async () => {
    const result = await getUser();
    
    if (result) {
      ToastAndroid.show("Already Registered", ToastAndroid.SHORT);
    } else {
      ToastAndroid.show("Not Registered", ToastAndroid.SHORT);
    }

		this.props.navigation.navigate(result ? "Home" : "Login");
	};

	render() {
		return (
      <View style={localStyles.content}>
        <ActivityIndicator
          size={"large"}
          color={theme.colors.primary}
        />
      </View>
		);
	}
}

SplashScreen.propTypes = {
	navigation: PropTypes.object.isRequired,
};

export default SplashScreen;
