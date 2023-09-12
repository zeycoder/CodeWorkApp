import Jobs from './src/pages/Jobs/Jobs';
import FavoriteJobs from './src/pages/FavoriteJobs/FavoriteJobs';
import JobsDetail from './src/pages/JobsDetail/JobsDetail';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import UserProvider from './src/context/Provider';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function App() {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  const JobsNavigator = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown:true}}>
        <Stack.Screen options={{headerTitle:"Jobs"}} name="JobsScreen" component={Jobs} />
        <Stack.Screen options={{headerTitle:"Jobs Detail"}} name="JobsDetailScreen" component={JobsDetail} />
      </Stack.Navigator>
    )
  }

  return (
    <UserProvider>
      <NavigationContainer >
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen options={{tabBarLabel:'Jobs', tabBarIcon:()=>(<FontAwesome5 name={'bookmark'} size={22}/>)}} name="JobsNavigatorScreen" component={JobsNavigator} />
          <Tab.Screen options={{tabBarLabel:'Favorites', tabBarIcon:()=>(<FontAwesome5 name={'heart'} size={22} />)}} name="FavoriteJobsScreen" component={FavoriteJobs} />
        </Tab.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}
