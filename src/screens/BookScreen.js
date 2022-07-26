import React, { useEffect } from "react";
import {
  Text,
  ScrollView,
  View,
  StyleSheet,
  Dimensions
} from 'react-native';

function BookScreen(props) {

  useEffect(() => {
    props.navigation.setOptions({
      title: props.route.params.bookInfo.title
    })
  }, [])
 
  const pageWidth = Dimensions.get('screen').width;

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
      >
        {
          props.route.params.bookInfo.pages.map((val, i) => {
            return (
              <View key={i} style={{ width: pageWidth, height: '100%', padding: 20}}>
                <View style={{ marginBottom: 20 }}>
                  <Text style={{ fontSize: 20 }}>Page {i+1}</Text>
                </View>
                <View>
                  <Text style={{ fontSize: 20 }}>{val}</Text>
                </View>
              </View>
            )
          })
          
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

});

export default BookScreen;