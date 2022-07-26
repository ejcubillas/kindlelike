import React, { useState, useEffect } from "react";
import {
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
  View,
  Platform
} from 'react-native';
import BookCard from "../components/BookCard";

import { readFile, selectFiles } from "../utils/book";

function HomeScreen(props) {
  const bookCovers = [
    'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1637008457',
    'https://www.adobe.com/express/create/cover/media_178ebed46ae02d6f3284c7886e9b28c5bb9046a02.jpeg?width=400&format=jpeg&optimize=medium'
  ];

  const [books, setBooks] = useState([]);

  const getBooks = () => {
    selectFiles()
      .then(files => {
        setBooks(files);
      })
      .catch(err => {
        console.log(err);
      })
  }
  
  const openBook = (book) => {
    readFile(book)
      .then(bookInfo => {
        props.navigation.navigate('Book', {
          bookInfo
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <View style={styles.container}>
      <View style={styles.booksContainer}>
      {
        
        books.map((val, i) => {
          return (
            <BookCard 
              key={i}
              bookInfo={{
                img: bookCovers[i]
              }}
              onPress={() => openBook(val)}
            />
          )
        })
      }
      </View>

      <Pressable
        onPress={getBooks}
        style={styles.button}
      >
        <Text style={styles.buttonText}>OPEN FILE</Text>
      </Pressable>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
   backgroundColor: '#fff',
   paddingHorizontal: 20,
   paddingVertical: 20,
   flex: 1,
  },
  
  booksContainer: {
    flexDirection: 'row',
    marginBottom: 20
  },
  
  button: {
    backgroundColor: '#222',
    padding: 20,
    borderRadius: 10
  },

  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center'
  }
});

export default HomeScreen;