import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import moment from "moment";
import Date from "./Date";

const Calendar = ({ selected, onSelectDate }) => {
  const [dates, setDates] = useState([]);

  const getDates = () => {
    const myDates = [];
    for (let i = 0; i < 5; i++) {
      const date = moment().add(i, "days");
      myDates.push(date);
    }
    setDates(myDates);
  };

  // useeffetct is used for side effects
  //   with no dependencies, the function will run only once after the first render
  //   with an empty array, the function will run after the first render and never again

  useEffect(() => {
    getDates();
  }, []);

  return (
    <View>
      <ScrollView horizontal>
        {/* index is used in map for unique key
         */}
        {dates.map((date, index) => (
          <Date
            date={date}
            key={index}
            selected={selected}
            onSelectDate={onSelectDate}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Calendar;

const styles = StyleSheet.create({});
