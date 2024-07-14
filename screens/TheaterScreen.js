import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const TheaterScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [selectedSeats, setSelectedSeats] = useState([]);

  const [rows, setRows] = useState([
    {
      row: "A",
      seats: [
        { seat: "1", bookingStatus: "false" },
        { seat: "2", bookingStatus: "false" },
        { seat: "3", bookingStatus: "false" },
        { seat: "4", bookingStatus: "false" },
        { seat: "5", bookingStatus: "false" },
        { seat: "6", bookingStatus: "false" },
        { seat: "7", bookingStatus: "false" },
      ],
    },
    {
      row: "B",
      seats: [
        { seat: "1", bookingStatus: "false" },
        { seat: "2", bookingStatus: "false" },
        { seat: "3", bookingStatus: "false" },
        { seat: "4", bookingStatus: "false" },
        { seat: "5", bookingStatus: "false" },
        { seat: "6", bookingStatus: "false" },
        { seat: "7", bookingStatus: "false" },
      ],
    },
    {
      row: "C",
      seats: [
        { seat: "1", bookingStatus: "false" },
        { seat: "2", bookingStatus: "false" },
        { seat: "3", bookingStatus: "false" },
        { seat: "4", bookingStatus: "false" },
        { seat: "5", bookingStatus: "false" },
        { seat: "6", bookingStatus: "false" },
        { seat: "7", bookingStatus: "false" },
      ],
    },
    {
      row: "D",
      seats: [
        { seat: "1", bookingStatus: "false" },
        { seat: "2", bookingStatus: "false" },
        { seat: "3", bookingStatus: "false" },
        { seat: "4", bookingStatus: "false" },
        { seat: "5", bookingStatus: "false" },
        { seat: "6", bookingStatus: "false" },
        { seat: "7", bookingStatus: "false" },
      ],
    },
  ]);

  const renderSeats = () => {
    return rows.map((row, rowIndex) => {
      return (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10,
          }}
          key={rowIndex}
        >
          <View style={{ width: 30, marginRight: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold", marginLeft: 15 }}>
              {row.row}
            </Text>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {row.seats.map((seat, seatIndex) => (
                <Pressable
                  onPress={() => handleSeatPress(row.row, seat.seat)}
                    key={seatIndex}
                  style={[
                    styles.seat,
                    selectedSeats.some(
                      (selectedSeat) =>
                        selectedSeat.row === row.row &&
                        selectedSeat.seat === seat.seat
                    ) && styles.selectedSeat,
                    seat.bookingStatus === "disabled" && styles.bookedSeat,
                  ]}
                  disabled={seat.bookingStatus === "disabled"}
                >
                  <Text>{seat.seat}</Text>
                </Pressable>
              ))}
            </View>
          </ScrollView>
        </View>
      );
    });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
        >
          <Ionicons
            onPress={() => navigation.goBack()}
            name="arrow-back"
            size={24}
            color="black"
          />
          <Text>{route.params.mall}</Text>
        </Pressable>
      ),

      headerTitle: "",
      headerStyle: {
        backgroundColor: "white",
        shadowColor: "transparent",
        shadowopacity: 1,
        shadowOffset: { width: -1, height: 1 },
        shadowRadius: 3,
      },
    });
  }, [navigation]);

  const handleSeatPress = (row, seat) => {
    const isSelected = selectedSeats.some(
      (selectedSeat) => selectedSeat.row === row && selectedSeat.seat === seat
    );

    if (isSelected) {
      setSelectedSeats((prevState) =>
        prevState.filter(
          (selectedSeat) =>
            selectedSeat.row !== row || selectedSeat.seat !== seat
        )
      );
    } else {
      setSelectedSeats((prevState) => [...prevState, { row, seat }]);
    }
  };

  const pay = () => {
     const updatedRows = [...rows];
     selectedSeats.forEach((seat) => {
       const rowIndex = updatedRows.findIndex((row) => row.row === seat.row);
       console.log("row Index",rowIndex);
       const seatIndex = updatedRows[rowIndex].seats.findIndex((s) => s.seat === seat.seat);
       console.log("seat Index",seatIndex);
       updatedRows[rowIndex].seats[seatIndex].bookingStatus = "disabled";
     });

     setRows(updatedRows);
     setSelectedSeats([]);

    // navigation.navigate("Food", {
    //   mall: route.params.mall,
    //   showtime: route.params.showtime,
    //   name: route.params.name,
    //   selectedDate: route.params.selectedDate,
    //   seats: result,
    //   rows: route.params.rows,
    //   selectedSeats: selectedSeats,
    //   docId: route.params.docId,
    // });

    // navigation.navigate("Food");
  };
  const seatNumbers = selectedSeats.map((seat) => seat.row + seat.seat);
  const result = seatNumbers.join(" ");
  //   main return ________________________________________________________________________________________
  return (
    <>
      <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
        <Text style={{ marginTop: 10, textAlign: "center", fontSize: 15 }}>
          SCREEN THIS WAY
        </Text>
        <Text
          style={{
            marginTop: 10,
            textAlign: "center",
            fontSize: 15,
            color: "gray",
            marginBottom: 20,
          }}
        >
          CLASSIC (240)
        </Text>

        {/* reserSeat start ____________________________________________________________________________________ */}
        {renderSeats()}

        <View
          style={{
            backgroundColor: "#D8D8D8",
            padding: 10,
            marginTop: 25,
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 100,
            gap: 30,
          }}
        >
          <View>
            <FontAwesome
              style={{ textAlign: "center", marginBottom: 4 }}
              name="square"
              size={24}
              color="#ffc40c"
            />
            <Text>selected</Text>
          </View>
          <View>
            <FontAwesome
              style={{ textAlign: "center", marginBottom: 4 }}
              name="square"
              size={24}
              color="white"
            />
            <Text>Vacant</Text>
          </View>

          <View>
            <FontAwesome
              style={{ textAlign: "center", marginBottom: 4 }}
              name="square"
              size={24}
              color="gray"
            />
            <Text>Booked</Text>
          </View>
        </View>
      </ScrollView>

      {/* Proceed ____________________________________________________________________________________ */}
      {selectedSeats.length > 0 ? (
        <Pressable
          style={{
            backgroundColor: "#FEBE10",
            padding: 20,

            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "500" }}>
            {selectedSeats.length} seat's selected {result}
          </Text>
          <Pressable onPress={pay}>
            <Text style={{ fontSize: 15, fontWeight: "500" }}>Proceed</Text>
          </Pressable>
        </Pressable>
      ) : (
        <Pressable style={{ backgroundColor: "#D3D3D3", padding: 20 }}>
          <Text style={{ textAlign: "center" }}>0 SEATS SELECTED</Text>
        </Pressable>
      )}
    </>
  );
};

export default TheaterScreen;

const styles = StyleSheet.create({
  seat: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#C0C0C0",
  },
  selectedSeat: {
    backgroundColor: "#FFD700",
    borderColor: "transparent",
  },
  bookedSeat: {
    backgroundColor: "#989898",
    borderColor: "transparent",
  },
});
