import { addNavigationHelpers } from 'react-navigation';
import { StackNavigator, NavigationActions } from 'react-navigation';
import { AppNavigator } from '../views/RootPage';

//const AppNavigator = StackNavigator(AppRouteConfigs);


const firstAction = AppNavigator.router.getActionForPathAndParams('Home');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const initialNavState = AppNavigator.router.getStateForAction(
  tempNavState
);
let inAction = false;

function nav(state = initialNavState, action) {
  let nextState;
  //
  switch (action.type) {
    case 'NAV_RULES_PAGE':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Rules' }),
        state
      );
      break;
    case 'NAV_CLAN_PAGE':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Home' }),
        state
      );
      break;
    case 'NAV_STATISTIC_PAGE':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Statistic' }),
        state
      );
      break;
    case 'NAV_LOGIN_PAGE':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' }),
        state
      );
      break;
    case 'ADD_RULES_VIEW':
      var navig = NavigationActions.navigate({ routeName: 'AddRules', params: { ...action.payload, type: 'add' } });
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'AddRules', params: { ...action.payload, type: 'add' } }),
        state
      );
      break;
    case 'EDIT_RULES_VIEW':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'AddRules', params: { ...action.payload, type: 'edit' } }),
        state
      );
      break;
    case 'NAV_SETTINGS_PAGE':
      var navig = NavigationActions.navigate({ routeName: 'Settings', params: { ...action.payload, } });
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Settings', params: { ...action.payload, } }),
        state
      );
      break;
    // case "CHANGE_STATUS":
    //   inAction = !inAction;
    //   nextState = AppNavigator.router.getStateForAction({ }, state);
    //   nextState.router
    //   break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }
  // Simply return the original `state` if `nextState` is null or undefined.

  return nextState || state;

}

export default nav;