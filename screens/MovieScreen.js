import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useLayoutEffect, useContext } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import Calendar from "../components/Calendar";
import moment from "moment";
import { malls } from "../constants/data";
import { PlaceContext } from "../PlaceContext";

const MovieScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const today = moment().format("YYYY-MM-DD");
  const [selectedDate, setSelectedDate] = useState(today);
  const { selectedCity, setSelectedCity } = useContext(PlaceContext);
  const [mall, setMall] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: route.params.title,

      headerStyle: {
        backgroundColor: "white",
        shadowColor: "transparent",
        shadowopacity: 1,
        shadowOffset: { width: -1, height: 1 },
        shadowRadius: 3,
      },
    });
  }, [navigation]);

  return (
    <View>
      <ScrollView
        style={{
          marginLeft: 10,
        }}
      >
        <Calendar selected={selectedDate} onSelectDate={setSelectedDate} />
      </ScrollView>

      {malls
        .filter((mall) => mall.place === selectedCity)
        .map((item) =>
          item.galleria.map((multiplex, index) => (
            <Pressable
              key={index}
              style={{
                marginHorizontal: 20,
                marginVertical: 10,
              }}
              onPress={() => setMall(multiplex.name)}
            >
              <Text style={{ fontSize: 15, fontWeight: "500" }}>
                {multiplex.name}
              </Text>

              {mall.includes(multiplex.name) ? (
                <FlatList
                  numColumns={3}
                  data={multiplex.showtimes}
                  renderItem={({ item }) => (
                    <Pressable
                      onPress={() =>
                        navigation.navigate("Theater", {
                          name:route.params.title,
                          selectedDate:selectedDate,
                          mall:mall,
                          showtime:item,
                        })
                      }
                      style={{
                        borderColor: "green",
                        borderWidth: 0.7,
                        padding: 5,
                        width: 80,
                        borderRadius: 3,
                        margin: 8,
                      }}
                    >
                      <Text
                        style={{
                          textAlign: "center",
                          fontSize: 15,
                          color: "green",
                          fontWeight: "500",
                        }}
                      >
                        {item}
                      </Text>
                    </Pressable>
                  )}
                />
              ) : null}
            </Pressable>
          ))
        )}
    </View>
  );
};

export default MovieScreen;

const styles = StyleSheet.create({});
