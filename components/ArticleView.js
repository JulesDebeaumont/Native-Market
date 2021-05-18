import { StyleSheet, View } from 'react-native';
import React from 'react';
import { ArticleList } from './ArticleList';
import { Footer } from './Footer';

export function ArticleView() {
  return (
    <View style={styles.View}>
      <ArticleList articles={articles} />
      <Footer cart={cart} />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flexDirection: 'column',
  },
});

export default ArticleView;