import { createStackNavigator } from 'react-navigation';

import wrapNavigator, { routeKeys } from 'components/shared/wrapNavigator';

import Welcome from './Welcome';
import PinSetup from './PinSetup';

const AuthNavigator = createStackNavigator(
  {
    Welcome,
    PinSetup,
  },
  {
    headerMode: 'none',
  }
);

export const authRoutes = routeKeys(AuthNavigator);

export default wrapNavigator('Auth')(AuthNavigator);