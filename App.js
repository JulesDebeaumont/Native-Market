import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Title } from './components/Title';
import { ArticleList } from './components/ArticleList';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.bar}>
        <StatusBar style="light" />
        <Title title="Le titre !" />
      </View>
      <ArticleList articles={articles} cart={cart} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  bar: {
    backgroundColor: '#707070',
  },
});


/*
APP
  TITLE
  ARTICLEVIEW
    ARTICLELIST
      ARTICLE
        QUANTITY
    FOOTER
*/