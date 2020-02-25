import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import colors from '../constants/colors';

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
      <View style={styles.controlsContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.cocktailText}>Cocktail</Text>
          <Text style={styles.finderText}>Finder</Text>
        </View>
        <TouchableOpacity style={styles.searchCocktailsButton} onPress={searchCocktailsHandler}>
          <View style={styles.findBox} />
          <Text style={styles.findCocktailText}>Search your favorite cocktail</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  controlsContainer: {
  },
  textContainer: {
    flexDirection: 'row'
  },
  cocktailText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white'
  },
  finderText: {
    fontSize: 40,
    color: 'white'
  },
  searchCocktailsButton: {
    flexDirection: 'row',
    alignContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10
  },
  findBox: {
    width: 40,
    height: 40,
    backgroundColor: colors.primary
  },
  findCocktailText: {
    color: 'grey',
    alignSelf: 'center',
    margin: 5
  }
});

export default WelcomeScreen;
