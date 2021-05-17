import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { Article } from './Article';
import { Footer } from './Footer';

export function ArticleList(props) {
  // eslint-disable-next-line react/prop-types
  const { articles, cart } = props;

  const allArticles = Object.values(articles).map(v => <Article picture={v.picture} price={v.price} key={v.id} />);

  return (
    <View style={styles.container}>
      {allArticles}
      <Footer cart={cart} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});

ArticleList.defaultProps = {
  articles: PropTypes.object,
  cart: PropTypes.object,
};

export default ArticleList;
