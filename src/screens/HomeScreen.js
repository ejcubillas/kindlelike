import React, { useState, useEffect } from "react";
import {
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
  View
} from 'react-native';
import BookCard from "../components/BookCard";
import book1 from '../books/sample_book 1.txt';

function HomeScreen(props) {
  
  const [books, setBooks] = useState([
    {
      title: 'Book 1',
      img: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg'
    },

    {
      title: 'Book 2',
      img: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1637008457'
    }
  ])

  useEffect(() => {
    fetch(book1)
      .then(file => {
        console.log(file);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <ScrollView style={styles.container}>

      <View style={styles.booksContainer}>
        {
          books.map((val, i) => {
            return (
              <BookCard bookInfo={val} key={i}/>
            ) 
          })
        }
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
   backgroundColor: '#fff',
   paddingHorizontal: 20,
   paddingVertical: 20
  },
  
  booksContainer: {
    flexDirection: 'row',
  }
});

export default HomeScreen;