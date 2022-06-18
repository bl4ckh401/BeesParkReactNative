import 'react-native-gesture-handler';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Header from './Components/Header';
import HomePage from './Screens/HomePage';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@rneui/themed';
import LeaderBoard from './Screens/LeaderBoard';
import WorkOut from './Screens/WorkOut';
import Fitness from './Screens/Fitness';
import Profile from './Screens/Profile';

export default function App() {
  const Tab = createBottomTabNavigator()
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar hidden={true} />
        <Header />
        <Tab.Navigator initialRouteName='Login'
          screenOptions={{
            tabBarStyle:
            {
              backgroundColor: "#F49401",
              borderTopColor: "black",
            },
            tabBarShowLabel: false,
          }}>
          <Tab.Screen
            name='Login'
            component={Login}
            options={
              {
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                  <Icon name='login' type='material-icons' color='black' size={18} />
                )
              }
            }
          />
          <Tab.Screen
            name='SignUp'
            component={SignUp}
            options={
              {
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                  <Icon name='account-box' type='material-icons' color='black' size={18} />
                )
              }
            }
          />
          <Tab.Screen
            name='HomePage'
            component={HomePage}
            options={
              {
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                  <Icon name='home' type='material-icons' color='black' size={18} />
                )
              }
            }
          />
          <Tab.Screen
            name='WorkOut'
            component={WorkOut}
            options={
              {
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                  <Icon name='dumbbell' color='black' size={18} />
                )
              }
            }
          />
          <Tab.Screen
            name='Fitness'
            component={Fitness}
            options={
              {
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                  <Icon name='leaderboard' type='material-icons' color='black' size={18} />
                )
              }
            }
          />
          <Tab.Screen
            name='Profile'
            component={Profile}
            options={
              {
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                  <Icon name='leaderboard' type='material-icons' color='black' size={18} />
                )
              }
            }
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider >
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F49401",
    width: "100%",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
