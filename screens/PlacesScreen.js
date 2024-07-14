import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ImageBackground,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useContext } from "react";
import { PlaceContext } from "../PlaceContext";
import { Feather } from "@expo/vector-icons";
import { places } from "../constants/data.js";
import { AntDesign } from "@expo/vector-icons";

const PlacesScreen = () => {
  const navigation = useNavigation();
  const { selectedCity, setSelectedCity } = useContext(PlaceContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",

      headerLeft: () => (
        <Pressable
          onPress={() => navigation.navigate("Home")}
          style={{
            flexDirection: "row",
            alignItems: "center",
            Gap: 4,
          }}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
          <Text
            style={{
              fontSize: 14,
              color: "black",
              letterSpacing: 1,
            }}
          >
            CHANGE LOCATION
          </Text>
        </Pressable>
      ),
    });
  });

    const selectCityHandler = (city) => {
    setSelectedCity(city);
    setTimeout(() => {
        navigation.navigate("Home");
    }, 800);
    }
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          margin: 10,
          padding: 10,
          justifyContent: "space-between",
          borderColor: "#E0E0E0",
          borderWidth: 1,
          borderRadius: 25,
        }}
      >
        <TextInput placeholder="Search Your City" style={{}} />
        <Feather name="search" size={24} color="black" />
      </View>

      <View
        style={{
          marginHorizontal: 20,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text>Selected Location</Text>
        <Text>{selectedCity}</Text>
      </View>

{/* Flatlist _________________________________________________________________________ */}
      <FlatList
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        data={places}
        renderItem={({ item, index }) => (
          <Pressable
            onPress={() => selectCityHandler(item.place)}
            style={{ marginVertical: 10, marginHorizontal: 20 }}
            key={item.id}
          >
            <ImageBackground
              source={{ uri: item.image }}
              imageStyle={{ borderRadius: 8 }}
              style={{ width: 160, height: 100, opacity: 0.8 }}
            >
              {selectedCity === item.place && (
                <View
                  style={{
                    flex: 1,
                    marginLeft: 10,
                    marginTop: 7,
                    alignContent: "flex-start",
                  }}
                >
                  <AntDesign name="checkcircle" size={24} color="black" />
                </View>
              )}

              <View
                style={{
                  flex: 1,
                  marginLeft: 10,
                  marginBottom: 7,
                  justifyContent: "flex-end",
                }}
              >
                <Text
                  style={{ color: "white", fontSize: 16, fontWeight: "700" }}
                >
                  {item.place}
                </Text>
              </View>
            </ImageBackground>
          </Pressable>
        )}
      />
    </View>
  );
};

export default PlacesScreen;

const styles = StyleSheet.create({});
