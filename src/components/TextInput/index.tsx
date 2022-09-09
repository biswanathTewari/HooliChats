import React from 'react';
import {FormControl, Input, Text, View} from 'native-base';
import {hs, ms, vs} from '../../utils';

interface Props {
  id: string;
  isRequired?: boolean;
  isInvalid?: boolean;
  label: string;
  placeholder: string;
  helperText?: string;
  errorMessage: string;
  type?: string;
  defaultValue: string;
  value: string;
  onChangeHandler: (id: string, val: string) => void;
  onBlurHandler: (id: string, e: any) => void;
}

const TextInput = ({
  id,
  isRequired = false,
  isInvalid = false,
  label,
  placeholder,
  helperText = '',
  errorMessage,
  type = 'text',
  defaultValue,
  value,
  onChangeHandler,
  onBlurHandler,
}: Props) => {
  return (
    <View {...styles.container}>
      <FormControl isRequired={isRequired} isInvalid={isInvalid}>
        <FormControl.Label>
          <Text {...styles.label}>{label}</Text>
        </FormControl.Label>
        <Input
          id={id}
          type={type}
          defaultValue={defaultValue}
          placeholder={placeholder}
          value={value}
          onChangeText={val => onChangeHandler(id, val)}
          onBlur={e => onBlurHandler(id, e)}
          autoCapitalize="none"
          autoCorrect={false}
          {...styles.input}
        />
        {helperText && (
          <FormControl.HelperText>
            <Text {...styles.helperText}>{helperText}</Text>
          </FormControl.HelperText>
        )}
        <FormControl.ErrorMessage>
          <Text {...{...styles.helperText, ...styles.error}}>
            {errorMessage}
          </Text>
        </FormControl.ErrorMessage>
      </FormControl>
    </View>
  );
};

export default TextInput;

const styles = {
  container: {
    mt: vs(10),
    alignItems: 'center',
    width: '100%',
  },
  label: {
    fontSize: ms(16),
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
  },
  input: {
    my: vs(5),
    py: vs(12),
    px: hs(10),
    bg: 'gray.200',
    borderRadius: 'md',
    fontSize: ms(18),
  },
  helperText: {
    fontSize: ms(12),
    fontFamily: 'Poppins-Regular',
    color: 'gray.500',
  },
  error: {
    color: 'red.500',
  },
};
