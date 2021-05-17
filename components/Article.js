/* eslint-disable react/prop-types */
import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';

export function Article(props) {
  const { article } = props;

  return (
    <View style={styles.article}>
      <Image source={article.picture} style={{ width: 70, height: 70 }} resizeMode="center" />
      <Text>{article.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  article: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#303030',
    borderRadius: '5%',
    borderStyle: 'solid',
    borderWidth: 1,
  },
});

Article.defaultProps = {
  article: PropTypes.object,
};

export default Article;
