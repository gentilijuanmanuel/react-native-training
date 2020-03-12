import React from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../constants/colors';

const AppBrand = (props) => (
  <View style={styles.appBrandContainer}>
    <Icon name="glass" size={70} color={colors.white} />
    <View style={styles.textContainer}>
      <Text style={styles.cocktailText}>Cocktail</Text>
      <Text style={styles.finderText}>Finder</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  appBrandContainer: {
    alignItems: 'center'
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  cocktailText: {
    fontSize: 40,
    color: colors.white,
    fontFamily: 'Lato-Bold'
  },
  finderText: {
    fontSize: 40,
    color: colors.white,
    fontFamily: 'Lato-Regular'
  }
});

export default AppBrand;
