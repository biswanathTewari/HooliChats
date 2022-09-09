import React from 'react';

interface IcredsObj {
  fullName: string;
  email?: string;
  userName: string;
  password: string;
  checkValue?: boolean;
}

interface IAuthForm {
  checkErrorMsg?: string;
  optionalCheck?: boolean; // for login form
}

type AuthFormReturnType = {
  creds: IcredsObj;
  error: {} | IcredsObj;
  onChangeHandler: (id: string, val: string) => void;
  hackHandler: () => void;
  onBlurHandler: (id: string, e: any) => void;
  checkHandler: () => void;
  validateForm: () => boolean;
  resetForm: () => void;
};

const credsObj: IcredsObj = {
  fullName: '',
  email: '',
  password: '',
  userName: '',
  checkValue: false,
};

const pwdRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
const emailRegex = /^\S+@\S+\.\S+$/;

const useAuthForm = ({
  checkErrorMsg = '',
  optionalCheck = false,
}: IAuthForm): AuthFormReturnType => {
  const [creds, setCreds] = React.useState(credsObj);
  const [error, setError] = React.useState<{} | typeof credsObj>(credsObj);

  const onChangeHandler = (id: string, val: string) => {
    setCreds({...creds, [id]: val});
  };

  const hackHandler = () => {
    setCreds({...creds, userName: 'iambizan', password: 'hoolicloud'});
  };

  const onBlurHandler = (id: string, e: any) => {
    const val = e.nativeEvent.text;
    if (val === '') {
      setError({...error, [id]: 'This field is required'});
    } else {
      setError({...error, [id]: ''});
    }
  };

  const checkHandler = () => {
    setCreds({...creds, checkValue: !creds.checkValue});
  };

  const validateForm = (): boolean => {
    const {email, password, checkValue, fullName, userName} = creds;
    const errors = {};

    if (!userName) {
      // @ts-ignore: creating new error property
      errors.userName = 'Username is required';
    }

    if (!password) {
      // @ts-ignore: creating new error property
      errors.password = 'Password is required';
    } else if (!pwdRegex.test(password) && !optionalCheck) {
      // @ts-ignore: creating new error property
      errors.password =
        'Password must be 6 characters long and contain atleast 1 letter , 1 digit & 1 special character!';
    }

    //~ signup form
    if (!optionalCheck) {
      // @ts-ignore: creating new error property
      if (!checkValue) errors.checkValue = checkErrorMsg;
      if (!email) {
        // @ts-ignore: creating new error property
        errors.email = 'Email is required';
      } else if (!emailRegex.test(email)) {
        // @ts-ignore: creating new error property
        errors.email = 'Invalid email';
      }
      if (!fullName) {
        // @ts-ignore: creating new error property
        errors.fullName = 'Full Name is required';
      }
    }
    setError(errors);
    return Object.keys(errors).length === 0;
  };

  const resetForm = () => {
    setCreds(credsObj);
    setError(credsObj);
  };

  return {
    creds,
    error,
    onChangeHandler,
    hackHandler,
    onBlurHandler,
    checkHandler,
    validateForm,
    resetForm,
  };
};

export {useAuthForm};
