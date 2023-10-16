import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import { Provider } from 'react-redux';
import { store } from './app/Store';


export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>

  );
}

