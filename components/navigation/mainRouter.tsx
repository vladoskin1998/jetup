import { createDrawerNavigator } from '@react-navigation/drawer';
import { OnlineNotebook } from '../screen/onlineNotebook';
import { CheckWordsRouter } from './checkWordsRouter';
import { AddWords } from '../screen/addWords';
import { HistoryRouter } from './historyRouter';

const Drawer = createDrawerNavigator();

export const MainRouter = () => {

    return (
        <Drawer.Navigator initialRouteName="OnlineNotebook">
            <Drawer.Screen name="OnlineNotebook" options={{ title: 'Онлайн словник' }} component={OnlineNotebook} />
            <Drawer.Screen name="AddWords" options={{ title: 'Додавати слова' }} component={AddWords} />
            <Drawer.Screen name="CheckWordsRouter" options={{ title: 'Перевірити слoва', unmountOnBlur:true }} component={CheckWordsRouter} />
            <Drawer.Screen name="HistoryRouter" options={{ title: 'Історія перевірок', unmountOnBlur:true }} component={HistoryRouter} />
        </Drawer.Navigator>
    )

}

