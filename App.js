import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';
import { Title } from './components/Title';
import { MyContext } from './context/store';
import useArticles from './hooks/useArticles';
import { ArticleView } from './components/ArticleView';
import { CartView } from './components/CartView';

export default function App() {
  const { state, dispatch } = useArticles();

  return (
    <NativeRouter>
      <MyContext.Provider value={{ state, dispatch }}>
        <View style={styles.container}>
          <View style={styles.bar}>
            <StatusBar style="light" />
            <Title title="API-Panier" />
          </View>
          <Route exact path="/" component={ArticleView} />
          <Route exact path="/cart" component={CartView} />
        </View>
      </MyContext.Provider>
    </NativeRouter>
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
