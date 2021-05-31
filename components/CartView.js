import { ScrollView, StyleSheet, View, Button, Alert } from 'react-native';
import React, { useContext } from 'react';
import { Footer } from './Footer';
import { MyContext } from '../context/store';
import { ArticleList } from './ArticleList';
import useCart from '../hooks/useCart';

export function CartView() {
  const { state } = useContext(MyContext);
  const filteredArticles = Object.values(state.articles).filter(article =>
    Object.values(state.cart).includes(article.id),
  );
  const { resetPanier } = useCart();

  const createButtonAlert = () =>
    Alert.alert(
      'Commande',
      'Vous êtes sur le point de commander les articles suivant: ',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false },
    );

  return (
    <>
      <ScrollView>
        <View style={styles.view}>
          <ArticleList articles={filteredArticles} inCart={state.cart} />
        </View>
      </ScrollView>
      <View style={styles.buttons}>
        <Button title="Lancer la commande !" onPress={createButtonAlert} />
        <Button title="Vider le panier" onPress={() => resetPanier()} />
      </View>
      <Footer route="/" />
    </>
  );
}

const styles = StyleSheet.create({
  view: {
    flexDirection: 'column',
    marginBottom: 80,
  },
  buttons: {
    flexDirection: 'column',
    marginBottom: 80,
  },
});

export default CartView;
