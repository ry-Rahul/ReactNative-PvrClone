import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const Header = () => {
  return (
    <View
      style={{
        marginBottom: 55,
      }}
    >
      <ImageBackground
        style={{
          height: 200,
          resizeMode: "cover",
        }}
        source={{
          uri: "https://cdn.traileraddict.com/content/20th-century-fox/deadpool-poster-12.jpg",
        }}
      >
        <Pressable
          style={{
            height: 90,
            backgroundColor: "white",
            padding: 10,
            borderRadius: 5,
            width: "90%",
            top: 160,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              Gap: 10,
              alignItems: "center",
            }}
          >
            <View>
              <Text style={{ fontSize: 15, fontWeight: "500" }}>
                Releasing in 1 Day
              </Text>
              <Text
                style={{ marginVertical: 5, fontSize: 16, fontWeight: "700" }}
              >
                CUSTODY
              </Text>
              <Text style={{ fontSize: 15, color: "gray", fontWeight: "500" }}>
                U.A • TELUGU
              </Text>
            </View>
            <View>
              <Pressable
                style={{
                  backgroundColor: "#ffc107",
                  padding: 10,
                  borderRadius: 5,
                  marginRight: 10,

                }}
              >
                <Text>Book Now</Text>
              </Pressable>
            </View>
          </View>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
