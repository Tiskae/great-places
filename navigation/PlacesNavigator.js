import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PlacesListScreen from "../screens/PlacesListScreen";
import PlaceDetailScreen from "../screens/PlaceDetailScreen";
import NewPlaceScreen from "../screens/NewPlaceScreen";
import MapScreen from "../screens/MapScreen";
import Colors from "../constants/Colors";

const Stack = createNativeStackNavigator();

const PlacesNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Places" component={PlacesListScreen} />
      <Stack.Screen name="PlaceDetail" component={PlaceDetailScreen} />
      <Stack.Screen name="NewPlace" component={NewPlaceScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default PlacesNavigator;
