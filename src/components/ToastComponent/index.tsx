import Toast from 'react-native-easy-toast';
import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {ms, vs} from '../../utils';

const {width} = Dimensions.get('window');

const toast: any = {};

export function setToastRef(reference: any) {
  if (reference) {
    toast.ref = reference;
  }
}

export function showToast(message: string, duration?: number) {
  // duration in millisecond
  if (toast?.ref) {
    toast?.ref.show(message, duration ? duration : 6000);
  }
}

export function ToastComponent() {
  return (
    <Toast
      position="top"
      textStyle={styles.textStyle}
      positionValue={vs(30)}
      ref={ref => setToastRef(ref)}
    />
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: ms(12),
    fontFamily: 'Poppins-Regular',
    color: 'white',
    width: 0.8 * width,
    textAlign: 'center',
    flexWrap: 'wrap',
  },
});
