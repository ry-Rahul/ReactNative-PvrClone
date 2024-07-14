import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./navigation/StackNavigator";
import { PlaceContext, PlaceProvider } from "./PlaceContext";
import { ModalPortal } from "react-native-modals";

export default function App() {
  return (
    <PlaceProvider>
      <Navigation />
      <ModalPortal />
    </PlaceProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
