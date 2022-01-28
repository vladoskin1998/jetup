import 'react-native-gesture-handler';
import { Provider } from 'react-redux'
import store from './store/store';
import { MainRouter } from './components/navigation/mainRouter';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainRouter />
      </NavigationContainer>
    </Provider>
  );
}
