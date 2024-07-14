import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import moment from "moment";

const Date = ({ onSelectDate, date, selected }) => {
  const day = moment(date).format("ddd");
  const dayNumber = moment(date).format("D");
  const fullDate = moment(date).format("YYYY-MM-DD");

  return (
    <Pressable
      onPress={() => onSelectDate(fullDate)}
      style={[
        styles.container,
        {
          backgroundColor: selected === fullDate ? "#ffc107" : "#fff",
        },
      ]}
    >
      <Text
        style={[
          styles.day,
          {
            color: selected === fullDate ? "#fff" : "#000",
          },
        ]}
      >
        {day}
      </Text>
      <View style={{ height: 10 }} />
      <Text
        style={[
          styles.number,
          {
            color: selected === fullDate ? "#fff" : "#000",
          },
        ]}
      >
        {dayNumber}
      </Text>
    </Pressable>
  );
};

export default Date;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E0E0E0",
    borderRadius: 10,
    borderColor: "#ddd",
    padding: 10,
    width: 70,
    height: 70,
    marginHorizontal: 6,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  day: {
    fontSize: 14,
    fontWeight: "500",
  },
  number: {
    fontSize: 16,
    fontWeight: "700",
  },
});
