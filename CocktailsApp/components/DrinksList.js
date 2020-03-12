import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet
} from 'react-native';

import DrinkItem from './DrinkItem';

import colors from '../constants/colors';

const DrinksList = ({ isLoading, response }) => {
  let display = null;
  if (isLoading) {
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
        data={response.drinks}
        keyExtractor={(drink) => drink.idDrink}
        renderItem={(drink) => <DrinkItem drink={drink} />}
      />
    );
  }

  return display;
};

const styles = StyleSheet.create({
  activityIndicatorStyle: {
    margin: 20
  },
  drinksFlatView: {
    flex: 1
  }
});

export default DrinksList;
