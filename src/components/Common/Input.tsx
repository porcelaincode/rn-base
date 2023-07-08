import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput as DefaultTextInput,
  TextInputProps,
} from 'react-native';
import {Colors} from 'react-native-ui-lib';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {View} from './View';
import {BoldText, Text} from './Text';

import Sizes from '../../constants/Sizes';

export function TextInput(props: TextInputProps) {
  const {style, ...otherProps} = props;

  return (
    <DefaultTextInput
      style={[
        {
          color: Colors.$textDefault,
          fontFamily: 'Inter-Regular',
          fontSize: Sizes.font.text,
        },
        style,
      ]}
      {...otherProps}
    />
  );
}

interface InputProps extends TextInputProps {
  title?: string;
  lines?: number;
  error?: boolean;
  errorMessage?: string;
  mini?: boolean;
  search?: boolean;
  locked?: boolean;
}

export function InputText(props: InputProps) {
  const [focus, setFocus] = useState(false);

  return (
    <View
      style={{
        ...styles.inputContainer,
        width: props.mini ? '50%' : '100%',
        marginRight: props.mini ? 10 : 0,
      }}>
      <BoldText
        style={{
          marginBottom: 5,
          color: props.locked
            ? '#666'
            : focus
            ? Colors.primary
            : Colors.$textDefault,
        }}
        text70>
        {props.title}
      </BoldText>
      <View
        style={{
          ...styles.inputStyle,
          backgroundColor: 'transparent',
        }}>
        <TextInput
          placeholder={props.placeholder}
          value={props.value}
          style={{
            flex: 1,
            marginRight: 10,
            fontSize: Sizes.font.text,
          }}
          multiline={props.lines ? true : false}
          numberOfLines={props.lines || 1}
          placeholderTextColor={Colors.tabIconDefault}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          editable={!props.locked}
          selectionColor={Colors.primary}
          {...props}
        />
        {props.locked && <AntDesign name="lock1" size={Sizes.icon.normal} />}
      </View>
      {props.error && (
        <View
          style={{
            width: '100%',
            padding: 10,
            alignSelf: 'center',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 5,
          }}>
          <Text
            style={{
              color: '#dd0000',
              fontSize: 14,
              textAlign: 'center',
            }}>
            {props.errorMessage}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    marginTop: 5,
    backgroundColor: 'transparent',
  },
  inputStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: 18,
  },
  errorText: {
    marginLeft: 10,
    color: '#d00',
  },
});
