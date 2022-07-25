import React from "react";
import { Text, ScrollView } from 'react-native';

function BookScreen(props) {
  console.log(props.route.params);
  props.navigation.setOptions({
    title: props.route.params.bookTitle
  })

  return (
    <ScrollView>
      <Text>Book Screen</Text>
    </ScrollView>
  );
}

export default BookScreen;