import React from "react";
import { View, StatusBar } from "react-native";

import PlacesNavigator from "./navigation/PlacesNavigator";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="red" barStyle="light-content" />
      <PlacesNavigator />
    </View>
  );
};

export default App;
