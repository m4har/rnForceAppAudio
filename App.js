import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import Home from './app/Home'
import Data from './app/Data'
const nav = createStackNavigator({
  home:{
    screen:Home,
    navigationOptions:{
      title:'Its Home'
    }
  },
  data:{
    screen:Data,
    navigationOptions:{
      title:'Data'
    }
  }
},
{
  initialRouteName:'home'
}
)

export default createAppContainer(nav)