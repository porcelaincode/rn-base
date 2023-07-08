import React from 'react';
import {AuthStackScreenProps} from '../../../types';
import Screen from '../../components/Common/Screen';
import {Button, Colors, View} from 'react-native-ui-lib';

export default function Onboarding({
  navigation,
}: AuthStackScreenProps<'Onboarding'>) {
  return (
    <Screen>
      <View style={{flex: 1}} />
      <Button
        label="Login"
        onPress={() => navigation.navigate('Login')}
        backgroundColor={Colors.primary}
        fullWidth
      />
      <Button
        label="Register Store"
        onPress={() => navigation.navigate('Register')}
        color={Colors.primary}
        backgroundColor={Colors.transparent}
        fullWidth
      />
    </Screen>
  );
}
