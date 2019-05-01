import React, { Component } from "react";
import { Text, View } from "react-native";

// Local Styles
import localStyles from "../../styles";
import theme from "../../theme/theme";

class Payment extends Component {
	render() {
		return (
      <View style={localStyles.content}>
        <Text style={{ fontSize: 20, color: theme.colors.secondary, fontWeight: "bold" }}>
          Payment Screen
        </Text>
      </View>
		);
	}
}

export default Payment;
