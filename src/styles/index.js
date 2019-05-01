import { StyleSheet } from "react-native";
import ColorConfig from "../theme/color-config";

const styles = StyleSheet.create({
	content: {
		flex: 1,
		backgroundColor: ColorConfig.COLOR_BACKGROUND,
		alignItems: "center",
		justifyContent: "center"
  },
  heading: {
		fontSize: 20,
		textAlign: "center",
		margin: 10,
	},
	menuItem:{
		padding: 10,
		borderWidth: 0.5,
		borderColor: "#d6d7da"
	}
});

export default styles;
