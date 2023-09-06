import Jobs from './src/pages/Jobs/Jobs';
import FavoriteJobs from './src/pages/FavoriteJobs/FavoriteJobs';
import JobsDetail from './src/pages/JobsDetail/JobsDetail';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import UserProvider from './src/context/Provider';

export default function App() {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  const JobsNavigator = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="JobsScreen" component={Jobs} />
        <Stack.Screen name="JobsDetailScreen" component={JobsDetail} />
      </Stack.Navigator>
    )
  }

  return (
    <UserProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="JobsNavigatorScreen" component={JobsNavigator} />
          <Tab.Screen name="FavoriteJobsScreen" component={FavoriteJobs} />
        </Tab.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}
