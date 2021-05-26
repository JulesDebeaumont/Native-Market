import { ScrollView, StyleSheet, View } from 'react-native';
import React, { useContext } from 'react';
import { ArticleList } from './ArticleList';
import { Footer } from './Footer';
import { MyContext } from '../context/store';

export function ArticleView() {
  const { state } = useContext(MyContext);

  console.log(state);
  return (
    <>
      <ScrollView>
        <View style={styles.View}>
          <ArticleList articles={state.articles} inCart={state.cart} />
        </View>
      </ScrollView>
      <Footer />
    </>
  );
}

const styles = StyleSheet.create({
  view: {
    flexDirection: 'column',
  },
});

export default ArticleView;
