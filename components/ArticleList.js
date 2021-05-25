import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { Article } from './Article';

export function ArticleList(props) {
  // eslint-disable-next-line react/prop-types
  const { articles } = props;

  const allArticles = Object.values(articles).map(v => <Article article={v} key={v.id} />);

  return <View style={styles.list}>{allArticles}</View>;
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
});

ArticleList.defaultProps = {
  articles: PropTypes.object,
};

export default ArticleList;
