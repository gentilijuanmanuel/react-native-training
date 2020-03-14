import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SearchBar } from 'react-native-elements';

import DrinksList from '../components/DrinksList';

import BASE_URL from '../api/urls';
import colors from '../constants/colors';

const CocktailsScreen = (props) => {
  const [loading, setLoading] = useState(true);
  const [drinksResponse, setDrinksResponse] = useState(null);
  const [drinkEnteredValue, setDrinkEnteredValue] = useState('');

  useEffect(() => {
    if (drinkEnteredValue.length > 3 || drinkEnteredValue === '') {
      setLoading(true);
      fetch(BASE_URL + drinkEnteredValue)
        .then((response) => response.json())
        .then((responseJson) => {
          setDrinksResponse(responseJson);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    }
  }, [drinkEnteredValue]);

  const updateSearch = (searchValue) => setDrinkEnteredValue(searchValue);

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
        lightTheme
        style={styles.searchBarStyle}
        containerStyle={styles.searchBarContainerStyle}
        inputStyle={styles.inputStyle}
        showLoading={loading}
        onCancel={() => updateSearch('')}
        round
        value={drinkEnteredValue}
      />
      <DrinksList isLoading={loading} response={drinksResponse} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'stretch'
  },
  searchBarContainerStyle: {
    backgroundColor: colors.primary,
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent'
  },
  inputStyle: {
    fontFamily: 'Lato-Regular'
  }
});

export default CocktailsScreen;
