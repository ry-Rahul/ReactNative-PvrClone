import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const MovieCard = ({ item }) => {

    const navigation = useNavigation();
  return (
    <View

        //
    >
      <Pressable
        style={{
          flex: 1,
          borderRadius: 5,
          marginHorizontal: 17,
          marginVertical: 10,
          justifyContent: "center",
          height: Dimensions.get("window").height / 2.5,
          width: (Dimensions.get("window").width - 80) / 2,

        }}
      >
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/original/${item?.poster_path}`,
          }}
          style={{
            width: "100%",
            height: "70%",
            resizeMode: "contain",
            borderRadius: 7,
          }}
        />

        <View>
          <Text style={{ marginTop: 6, fontSize: 15, fontWeight: "400" }}>
            {item.title.substr(0, 20)}
          </Text>
          <Text
            style={{
              marginTop: 4,
              fontSize: 15,
              fontWeight: "400",
              color: "gray",
            }}
          >
            AU/A • {item.original_language}
          </Text>
        </View>

        <Pressable

         onPress={() => navigation.navigate("Movie", { title: item.title})}
          style={ {
            backgroundColor: "#ffc107",
            padding: 10,
            borderRadius: 5,
            marginRight: 10,
            width: 100,
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              color: "black",
              fontWeight: "500",
            }}
          >Book Now</Text>
        </Pressable>
      </Pressable>
    </View>
  );
};

export default MovieCard;

const styles = StyleSheet.create({});
