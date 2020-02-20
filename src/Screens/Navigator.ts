import {
  createSwitchNavigator,
  createAppContainer,
  createSta
} from 'react-navigation';

import CheckLogin from '~/Screens/CheckLogin';
import Login from '~/Screens/Login';
import MovieHome from '~/Screens/MovieHome';
import MovieDetail from '~/Screens/MovieDetail';

const LoginNavigator = createSwitchNavigator({Login});

const MovieNavigator = createSwitchNavigator({
  MovieHome,
  MovieDetail,
});

const AppNavigator = createSwitchNavigator(
  {
    CheckLogin,
    LoginNavigator,
    MovieNavigator,
  },
  {
    initialRouteName: 'CheckLogin',
  },
);

export default createAppContainer(AppNavigator);
