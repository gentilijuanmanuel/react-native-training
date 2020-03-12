import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';
import PropTypes from 'prop-types';

const DrinkItem = (props) => {
  const { drink } = props;

  return (
    <View key={drink.item.idDrink} style={styles.drinkItemContainer}>
      <Image
        style={styles.drinkImage}
        source={{ uri: drink.item.strDrinkThumb }}
      />
      <Text
        style={styles.drinkTitle}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {drink.item.strDrink}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  drinkItemContainer: {
    flexDirection: 'row',
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center'
  },
  drinkImage: {
    width: 100,
    height: 100,
    borderRadius: 100
  },
  drinkTitle: {
    fontSize: 20,
    margin: 15,
    fontFamily: 'Lato-Regular'
  }
});

DrinkItem.propTypes = {
  drink: PropTypes.object.isRequired
};

export default DrinkItem;
