import React from "react";
import { Pressable, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function BookCard (props) {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigation.navigate('Book', {
          bookTitle: props.bookInfo.title
        });
      }}

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