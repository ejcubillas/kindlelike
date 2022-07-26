import React from "react";
import { Pressable, Image, StyleSheet } from 'react-native';

function BookCard (props) {
  return (
    <Pressable
      onPress={props.onPress}
      style={styles.card}
    >
      <Image
        source={{
          uri: props.bookInfo.img
        }}
        style={{
          width: 140,
          height: 200
        }}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
   margin: 10
  },

});

export default BookCard;