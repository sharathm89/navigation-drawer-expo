import React from 'react';
import { View } from "react-native";
import { ThemeProvider } from "react-native-elements";
import theme from "./src/theme/theme";
import ColorConfig from "./src/theme/color-config";

import AppContainer from "./src/routes";

export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <View style={{ flex: 1, backgroundColor: ColorConfig.COLOR_WHITE }}>
          <AppContainer />
        </View>
      </ThemeProvider>
    );
  }
}