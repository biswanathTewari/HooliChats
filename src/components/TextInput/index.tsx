import React from 'react';
import {
  Box,
  FormControl,
  Stack,
  Input,
  Text,
  KeyboardAvoidingView,
} from 'native-base';
import {hs, ms, vs} from '../../utils';

interface Props {
  isRequired?: boolean;
  isInvalid?: boolean;
  label: string;
  placeholder: string;
  helperText?: string;
  errorMessage: string;
  type?: string;
  defaultValue: string;
}

const TextInput = ({
  isRequired = false,
  isInvalid = false,
  label,
  placeholder,
  helperText = '',
  errorMessage,
  type = 'text',
  defaultValue,
}: Props) => {
  return (
    <KeyboardAvoidingView {...styles.container}>
      <FormControl isRequired={isRequired} isInvalid={isInvalid}>
        <FormControl.Label>
          <Text {...styles.label}>{label}</Text>
        </FormControl.Label>
        <Input
          type={type}
          defaultValue={defaultValue}
          placeholder={placeholder}
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
    </KeyboardAvoidingView>
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
