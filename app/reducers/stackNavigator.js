import { addNavigationHelpers } from 'react-navigation';
import { StackNavigator, NavigationActions } from 'react-navigation';
import {AppNavigator} from '../views/RootPage';

//const AppNavigator = StackNavigator(AppRouteConfigs);


const firstAction = AppNavigator.router.getActionForPathAndParams('Home');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const initialNavState = AppNavigator.router.getStateForAction(
  tempNavState
);

function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case 'NAV_RULES_PAGE':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({routeName: 'Rules'}),
        state
      );
      break;

    // case 'Logout':
    //   nextState = AppNavigator.router.getStateForAction(
    //     NavigationActions.navigate({ routeName: 'Login' }),
    //     state
    //   );
    //   break;

    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }
  // Simply return the original `state` if `nextState` is null or undefined.

  return nextState || state;

}

export default nav;
// const initialAuthState = { isLoggedIn: false };

// function auth(state = initialAuthState, action) {
//   switch (action.type) {
//     case 'Login':
//       return { ...state, isLoggedIn: true };
//     case 'Logout':
//       return { ...state, isLoggedIn: false };
//     default:
//       return state;
//   }

// }