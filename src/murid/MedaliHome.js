import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const MendaliComponent = () => {
  // Example individual conditions for each image
  const conditions = {
    medalRed: true,
    medalBlue: false,
    medalUngu: false,
    medalGold: false,
  };

  return (
    <View style={styles.container}>
      <View style={styles.medali}>
        <Image
          style={[
            styles.image,
            { opacity: conditions.medalRed ? 1 : 0.5 },
          ]}
          source={require('../../assets/medalred.png')}
        />
        <Image
          style={[
            styles.image,
            { opacity: conditions.medalBlue ? 1 : 0.5 },
          ]}
          source={require('../../assets/medalblue.png')}
        />
        <Image
          style={[
            styles.image,
            { opacity: conditions.medalUngu ? 1 : 0.5 },
          ]}
          source={require('../../assets/medalungu.png')}
        />
        <Image
          style={[
            styles.image,
            { opacity: conditions.medalGold ? 1 : 0.5 },
          ]}
          source={require('../../assets/medalgold.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  medali: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: 50,
    height: 50,
    marginHorizontal: 5,
  },
});

export default MendaliComponent;
