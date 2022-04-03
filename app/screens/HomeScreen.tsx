import * as React from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const markers = [
  {
    latlng: { latitude: 37.48825, longitude: -122.234 },
    title: "Museum 1",
    description: "This is Museum 1",
  },
  {
    latlng: { latitude: 37.18825, longitude: -122.3335 },
    title: "Museum 2",
    description: "This is Museum 2",
  },
  {
    latlng: { latitude: 37.08825, longitude: -122.133 },
    title: "Museum 3",
    description: "This is Museum 3",
  },
];

const region = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 1,
  longitudeDelta: 1,
};

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={region}>
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.latlng}
            title={marker.title}
            description={marker.description}
          />
        ))}
      </MapView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
