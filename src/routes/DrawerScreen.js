import React, { Component } from "react";
import PropTypes from "prop-types";
import { ScrollView, Text, View } from "react-native";
import { NavigationActions, DrawerActions} from "react-navigation";

import styles from "./../styles/index";
import theme from "../theme/theme";

class DrawerScreen extends Component {
	navigateToScreen = (route) => () => {
		const navigateAction = NavigationActions.navigate({
			routeName: route
		});

		this.props.navigation.dispatch(navigateAction);
		this.props.navigation.dispatch(DrawerActions.closeDrawer());
	}

	render () {
		return (
      <View>
        <ScrollView>
          <View>
            <Text style={{ margin: 15, fontSize: 20, color: theme.colors.secondary, fontWeight: "bold" }}>
              Hi User,
            </Text>
            <View style={styles.menuItem}>
              <Text onPress={this.navigateToScreen("Home")}>
                Home
              </Text>
            </View>
            <View style={styles.menuItem}>
              <Text onPress={this.navigateToScreen("Profile")}>
              Profile
              </Text>
            </View>
            <View style={styles.menuItem}>
              <Text onPress={this.navigateToScreen("Payment")}>
                Payment
              </Text>
            </View>
            <View style={styles.menuItem}>
              <Text onPress={this.navigateToScreen("AboutUs")}>
                AboutUs
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
		);
	}
}

DrawerScreen.propTypes = {
	navigation: PropTypes.object
};

export default DrawerScreen;
