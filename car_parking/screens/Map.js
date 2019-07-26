import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  FlatList,
  TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MapView from "react-native-maps";

const { height, width } = Dimensions.get("screen");
const parkingsSpots = [
  {
    id: 1,
    title: "Parking 1",
    price: 5,
    rating: 4.2,
    spots: 20,
    free: 10,
    coordinate: {
      latitude: 37.78735,
      longitude: -122.4334
    },
    description: `Description about this parking lot
  Open year 2018
  Secure with CTV`
  },
  {
    id: 2,
    title: "Parking 2",
    price: 7,
    rating: 3.8,
    spots: 25,
    free: 20,
    coordinate: {
      latitude: 37.78845,
      longitude: -122.4344
    },
    description: `Description about this parking lot
  Open year 2014
  Secure with CTV`
  },
  {
    id: 3,
    title: "Parking 3",
    price: 10,
    rating: 4.9,
    spots: 50,
    free: 25,
    coordinate: {
      latitude: 37.78615,
      longitude: -122.4314
    },
    description: `Description about this parking lot
  Open year 2019
  Secure with CTV`
  }
];

export default class Map extends Component {
  state = {
    hours: {}
  };

  renderHeader = () => {
    return (
      <View style={styles.header}>
        <Text>Header</Text>
      </View>
    );
  };

  renderParking = ({ item }) => {
    const { hours } = this.state;
    return (
      <View key={item.id} style={styles.parking}>
        <View style={{ flex: 1, flexDirection: "column" }}>
          <Text style={{ fontSize: 16 }}>
            x{item.spots} {item.title}
          </Text>

          <View
            style={{
              borderRadius: 6,
              borderColor: "grey",
              borderWidth: 0.5,
              width: 100,
              padding: 4
            }}
          >
            <Text style={{ fontSize: 16 }}>05:00 hrs</Text>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
              <Ionicons name="ios-pricetag" size={18} />
              <Text style={{ marginLeft: 12, fontSize: 18 }}>{item.price}</Text>
            </View>

            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
              <Ionicons name="ios-star" size={18} />
              <Text style={{ marginLeft: 12, fontSize: 18 }}>{item.rating}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.buy}>
            <View style={{ flex: 1, justifyContent: "center" }}>
              <Text style={{ fontSize: 24, color: "white" }}>
                ${item.price * 2}
              </Text>
              <Text style={{ color: "white" }}>
                {item.price}x {hours[item.id]}hrs
              </Text>
            </View>
            <View
              style={{
                flex: 0.5,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text style={{ fontSize: 24, color: "white" }}>></Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  renderParkings = () => {
    return (
      <FlatList
        horizontal
        pagingEnabled
        style={styles.parkings}
        data={parkingsSpots}
        keyExtractor={(item, index) => `${item.id}`}
        showsHorizontalScrollIndicator={false}
        renderItem={this.renderParking}
        centerContent
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          style={styles.map}
        />
        {this.renderParkings()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    flex: 0.5,
    justifyContent: "center"
  },
  map: {
    flex: 3
  },
  parkings: {
    position: "absolute",
    right: 0,
    left: 0,
    bottom: 24
  },
  parking: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 6,
    padding: 12,
    marginHorizontal: 12,
    width: width - 24 * 2
  },
  buy: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "red",
    padding: 12,
    borderRadius: 6
  }
});
