import React from 'react';

import {Header} from '../../components/Common/Header';
import Screen from '../../components/Common/Screen';
import {AuthStackScreenProps} from '../../../types';

export default function Login({navigation}: AuthStackScreenProps<'Login'>) {
  return (
    <Screen>
      <Header
        title="Login"
        focused={false}
        onBack={() => navigation.navigate('Onboarding')}
      />
    </Screen>
  );
}
