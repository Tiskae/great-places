import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MapScreen from "../screens/MapScreen";
import NewPlaceScreen from "../screens/NewPlaceScreen";
import PlaceDetailScreen from "../screens/PlaceDetailScreen";
import PlaceListScreen from "../screens/PlacesListScreen";

const Stack = createNativeStackNavigator();

const PlacesNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "red",
          },
        }}
      >
        <Stack.Screen
          name="MapScreen"
          component={MapScreen}
          options={{ headerTitle: "Map" }}
        />
        <Stack.Screen
          name="NewPlaceScreen"
          component={NewPlaceScreen}
          options={{ headerTitle: "New Places" }}
        />
        <Stack.Screen
          name="PlaceDetailScreen"
          component={PlaceDetailScreen}
          options={{ headerTitle: "Place Details" }}
        />
        <Stack.Screen
          name="PlaceListScreen"
          component={PlaceListScreen}
          options={{ headerTitle: "Place List" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default PlacesNavigator;
