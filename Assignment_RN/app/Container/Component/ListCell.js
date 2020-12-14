import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet, Image } from 'react-native';

export default function ListCell({ data, onPress }) {
  console.log("ListCell", data)
  return (
    <TouchableHighlight onPress={() => onPress(data)} style={{
      flex: 1, marginVertical: 5,
    }}>
      <View style={{
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
      }}>
        <View style={{ flexDirection: 'row' }}>

          <Image
            style={{ width: 50, height: 50, margin: 5 }}
            resizeMode="contain"
            source={{ uri: data.owner.avatar_url }}
          />
          <View style={{ flex: 1, marginHorizontal: 10 }}>
            <Text
              numberOfLines={2}
              style={{ color: 'white', fontSize: 12, fontWeight: "bold", }}>
              {data.name}
            </Text>
            <Text style={{ color: 'white', fontSize: 10, marginTop: 5 }}>
              {data.description}
            </Text>
          </View>
        </View>

      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    // backgroundColor: 'white',
    // borderColor: 'grey',
    borderRadius: 20,
    alignItems: 'flex-start',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

  },
});
