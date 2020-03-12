import React from 'react';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';

import colors from '../constants/colors';
import AppBrand from '../componentes/AppBrand';
import SearchButton from '../componentes/SearchButton';

const WelcomeScreen = ({ navigation }) => {
  const searchCocktailsHandler = () => navigation.navigate('CocktailsScreen');

  return (
    <LinearGradient
      style={styles.screenContainer}
      colors={[
        colors.primary,
        colors.accent
      ]}
    >
      <AppBrand />
      <SearchButton searchCocktailsHandler={searchCocktailsHandler} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

WelcomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default WelcomeScreen;
