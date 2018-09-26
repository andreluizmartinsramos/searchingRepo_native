import { createDrawerNavigator } from 'react-navigation';

import List from './pages/List';
import Detail from './pages/Detail';

const Routes = createDrawerNavigator({
    List,
    Detail
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#7159c1',
        },
        headerTintColor: '#FFF'
    },
});

export default Routes;