/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Texto = (props) => {
  let total = `${props.firstName}${props.lastName}`.length;
  return (
    <View style={style.row}>
      <Text>
        O nome completo é {props.firstName} {props.lastName} e tem {total}{' '}
        letras
      </Text>
    </View>
  );
};

const App = () => {
  return (
    <View>
      <Texto firstName="Natanael" lastName="Diego" />
    </View>
  );
};

const style = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
  row: {flexDirection: 'row'},
});

export default App;
