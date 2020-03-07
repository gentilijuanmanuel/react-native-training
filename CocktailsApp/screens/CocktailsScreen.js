import React, { useState } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  FlatList
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SearchBar } from 'react-native-elements';
import DrinkItem from '../componentes/DrinkItem';

import BASE_URL from '../api/urls';
import colors from '../constants/colors';

const CocktailsScreen = (props) => {
  const [loading, setLoading] = useState(true);
  const [drinksResponse, setDrinksResponse] = useState(null);
  const [drinkEnteredValue, setDrinkEnteredValue] = useState('');

  const getDrinksFromApiAsync = (search) => fetch(BASE_URL + search)
    .then((response) => response.json())
    .then((responseJson) => {
      setDrinksResponse(responseJson);
      setLoading(false);
    })
    .catch((error) => {
      console.error(error);
      setLoading(false);
    });

  const updateSearch = (searchValue) => {
    setDrinkEnteredValue(searchValue);
    if (searchValue.length > 3 || searchValue === '') {
      setLoading(true);
    }
    setTimeout(() => {
      if (searchValue.length > 3 || searchValue === '') {
        getDrinksFromApiAsync(searchValue);
      }
    }, 1000);
  };

  if (loading && drinkEnteredValue === '') {
    getDrinksFromApiAsync(drinkEnteredValue);
  }

  let display = null;
  if (loading) {
    display = (
      <ActivityIndicator
        style={styles.activityIndicatorStyle}
        size="large"
        color={colors.white}
      />
    );
  } else {
    display = (
      <FlatList
        style={styles.drinksFlatView}
        data={drinksResponse.drinks}
        renderItem={(drink) => <DrinkItem drink={drink} />}
      />
    );
  }

  return (
    <LinearGradient
      style={styles.screenContainer}
      colors={[
        colors.primary,
        colors.accent
      ]}
    >
      <SearchBar
        placeholder="Search drinks..."
        onChangeText={updateSearch}
        lightTheme="true"
        containerStyle={styles.searchBarContainerStyle}
        showLoading={loading}
        onCancel={() => updateSearch('')}
        round="true"
        value={drinkEnteredValue}
      />
      {display}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'stretch'
  },
  drinksFlatView: {
    flex: 1,
    margin: 20
  },
  searchBarContainerStyle: {
    backgroundColor: colors.primary
  },
  activityIndicatorStyle: {
    margin: 20
  }
});

export default CocktailsScreen;
