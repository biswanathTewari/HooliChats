import {CommonActions, StackActions} from '@react-navigation/native';

interface navProps {
  navigator?: any;
}

const config: navProps = {};

export function setNavigator(nav: any) {
  if (nav) {
    config.navigator = nav;
  }
}

export function navigate(routeName: string, params: any = {}) {
  if (config.navigator && config.navigator.current && routeName) {
    config.navigator.current.dispatch(
      CommonActions.navigate({
        name: routeName,
        params: params,
      }),
    );
  }
}

export function goBack() {
  if (config.navigator) {
    config.navigator.current.dispatch(CommonActions.goBack());
  }
}

export function reset(routeName: string, params: any) {
  if (config.navigator && routeName) {
    config.navigator.current.dispatch(StackActions.replace(routeName, params));
  }
}
