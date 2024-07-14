import {
  Animated,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useLayoutEffect, useEffect, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { PlaceContext } from "../PlaceContext";
import { data, languages, genres } from "../constants/data";
import MovieCard from "../components/MovieCard";
import Header from "../components/Header";
import { useState } from "react";
import {
  BottomModal,
  ModalContent,
  ModalFooter,
  ModalTitle,
  SlideAnimation,
} from "react-native-modals";
import { Foundation } from "@expo/vector-icons";

const HomeScreen = () => {
  const navigation = useNavigation();
  const moveAnimation = new Animated.Value(0);
  const { selectedCity, setSelectedCity } = useContext(PlaceContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectLanguageFilter, setSelectLanguageFilter] = useState("");
  const [sortedData, setSortedData] = useState(data);

  useEffect(() => {
    Animated.loop(
      Animated.timing(moveAnimation, {
        toValue: 10,
        duration: 1000,
        useNativeDriver: true,
      })
    ).start();
  });
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <Text>Hello Rahul Yadav</Text>,
      headerStyle: {
        backgroundColor: "white",
        shadowColor: "transparent",
        shadowopacity: 1,
        shadowOffset: { width: -1, height: 1 },
        shadowRadius: 3,
      },

      headerRight: () => (
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            Gap: 4,
          }}
        >
          <Ionicons name="notifications-outline" size={24} color="black" />
          <Ionicons
            onPress={() => navigation.navigate("Places")}
            name="location-outline"
            size={24}
            color="black"
          />

          <Pressable onPress={() => navigation.navigate("Places")}>
            <Animated.Text
              style={[
                styles.text,
                {
                  transform: [
                    {
                      translateX: moveAnimation,
                    },
                  ],
                },
              ]}
            >
              <Text>{selectedCity}</Text>
            </Animated.Text>
          </Pressable>
        </Pressable>
      ),
    });
  }, [navigation, selectedCity]);

  const applyFilter = (language) => {
    setModalVisible(false);
    const filteredData = data.filter(
      (item) => item.original_language === language
    );
    setSortedData(filteredData);
  };


  // main return ________________________________________________________________________________________
  return (
    <View>
      <FlatList
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        ListHeaderComponent={Header}
        data={sortedData}
        renderItem={({ item }) => <MovieCard item={item} />}
        keyExtractor={(item, index) => index.toString()}
      />

      <Pressable
        onPress={() => setModalVisible(!modalVisible)}
        style={{
          position: "absolute",
          bottom: 30,
          right: 20,
          backgroundColor: "#ffc107",
          padding: 10,
          borderRadius: 30,
          width: 60,
          height: 60,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Foundation name="filter" size={24} color="black" />
      </Pressable>

      {/* Model _______________________________________________________________________________________________ */}
      <BottomModal
        onBackdropPress={() => setModalVisible(!modalVisible)}
        swipeDirection={["up", "down"]}
        swipeThreshold={200}
        footer={
          <ModalFooter>
            <Pressable
              onPress={() => applyFilter(selectLanguageFilter)}
              style={{
                paddingRight: 10,
                marginLeft: "auto",
                marginRight: "auto",
                marginVertical: 10,
                marginBottom: 30,
              }}
            >
              <Text>Apply filter</Text>
            </Pressable>
          </ModalFooter>
        }
        modalTitle={<ModalTitle title="Filters" />}
        modalAnimation={new SlideAnimation({ slideFrom: "bottom" })}
        visible={modalVisible}
        onTouchOutside={() => {
          setModalVisible(!modalVisible);
        }}
        onHardwareBackPress={() => {
          setModalVisible(!modalVisible);
          return true;
        }}
      >
        <ModalContent
          style={{
            width: "100%",
            height: 280,
          }}
        >
          <Text
            style={{
              paddingVertical: 5,
              fontSize: 15,
              fontWeight: "700",
              marginTop: 10,
            }}
          >
            Languages
          </Text>
          {/* languages _________________________________________________________________ */}

          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {languages.map((item, index) => {
              return (
                <Pressable
                  key={item.id}
                  onPress={() => setSelectLanguageFilter(item.language)}
                  style={{
                    margin: 10,
                    borderColor: "#C8C8C8",
                    borderWidth: 1,
                    paddingVertical: 5,
                    borderRadius: 25,
                    paddingHorizontal: 11,
                    backgroundColor:
                      selectLanguageFilter === item.language
                        ? "#ffc107"
                        : "white",
                  }}
                >
                  <Text>{item.language}</Text>
                </Pressable>
              );
            })}
          </Pressable>

          {/* generes_____________________________________________________________________- */}
          <Text
            style={{
              paddingVertical: 5,
              fontSize: 15,
              fontWeight: "700",
              marginTop: 10,
            }}
          >
            Genres
          </Text>

          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {genres.map((item, index) => {
              return (
                <Pressable
                  key={item.id}
                  style={{
                    margin: 10,
                    borderColor: "#C8C8C8",
                    borderWidth: 1,
                    paddingVertical: 5,
                    borderRadius: 25,
                    paddingHorizontal: 11,
                  }}
                >
                  <Text>{item.language}</Text>
                </Pressable>
              );
            })}
          </Pressable>
        </ModalContent>
      </BottomModal>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: "black",
  },
});
