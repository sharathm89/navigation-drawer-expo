import React from "react";
import { Image, TouchableOpacity } from 'react-native';
import {
  createStackNavigator,
  createDrawerNavigator,
  createSwitchNavigator,
  createMaterialTopTabNavigator,
  createAppContainer,
  DrawerActions
} from "react-navigation";

import theme from "../theme/theme";

import LoginScreen from "../screens/Logn";
import ForgotPasswordScreen from "../screens/ForgotPassword";
import SplashScreen from "../screens/SplashScreen";

import HomeScreen from "../screens/Home";
import ProfileScreen from "../screens/Profile";
import PaymentScreen from "../screens/Payment";
import AboutUsScreen from "../screens/AboutUs";

import DrawerScreen from "./DrawerScreen";

const navigationOptions = {
	defaultNavigationOptions: {
		headerStyle: {
			backgroundColor: theme.colors.primary,
		},
		headerTintColor: "#fff",
	}
};

const MenuImage = ({navigation}) => {
  if(!navigation.state.isDrawerOpen){
      return <Image source={require("../../assets/menu-button.png")}/>
  }else{
      return <Image source={require("../../assets/left-arrow.png")}/>
  }
}

const AuthStack = createStackNavigator({
	Login: {
		screen: LoginScreen,
		navigationOptions: { title: "Login" }
	},
	ForgotPassword: {
		screen: ForgotPasswordScreen,
		navigationOptions: { title: "Forgot Password" }
	}
}, {
	...navigationOptions
});

const DrawerStack = createDrawerNavigator({
	Home: {
    screen: HomeScreen,
	},
	Profile: {
    screen: ProfileScreen,
	},
	Payment: {
    screen: PaymentScreen,
	}
}, {
	initialRouteName: "Home",
	contentComponent: DrawerScreen,
});

const DrawerNavigation = createStackNavigator({
  DrawerStack: {
    screen: DrawerStack
  },
  AboutUs: {
    screen: AboutUsScreen,
    navigationOptions: { title: "About Us" }
  }
},{
  navigationOptions: ({ navigation }) => ({
    title: 'ReactNavigation',
    headerLeft: 
      <TouchableOpacity  onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer())} }>
        <MenuImage navigation={navigation}/>
      </TouchableOpacity>,
    }),
  ...navigationOptions
});

const MainNavigator = createAppContainer(createSwitchNavigator(
	{
		SplashScreen: SplashScreen,
    Auth: AuthStack,
    App: DrawerNavigation,
	},
	{
		initialRouteName: "SplashScreen",
	}
));

export default createAppContainer(MainNavigator);