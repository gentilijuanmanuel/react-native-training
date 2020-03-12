import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../constants/colors';

const SearchButton = ({ searchCocktailsHandler }) => (
  <View style={styles.searchButtonContainer}>
    <TouchableOpacity style={styles.searchCocktailsButton} onPress={searchCocktailsHandler}>
      <Icon name="search" size={25} color={colors.primary} />
      <Text style={styles.findCocktailText}>Search your favorite cocktail</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  searchButtonContainer: {
    alignItems: 'center'
  },
  searchCocktailsButton: {
    flexDirection: 'row',
    alignContent: 'center',
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 10
  },
  findCocktailText: {
    color: 'grey',
    alignSelf: 'center',
    margin: 5,
    fontFamily: 'Lato-Regular'
  }
});

export default SearchButton;
