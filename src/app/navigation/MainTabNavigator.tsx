import React from 'react';
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Image, Text } from 'react-native';

import Home from '@src/modules/home/screens/Home';
import plusIcon from '@assets/images/plus-icon.png';

const tabBarOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarAllowFontScaling: false,
  // tabBarLabelStyle: styles.labelStyles,
  // tabBarActiveTintColor: colors.colorPalette.black,
  // tabBarStyle: styles.generalStyles,
  tabBarLabelPosition: 'below-icon',
};

const MainTabNavigator: React.FC = () => {
  const TabStack = createBottomTabNavigator();

  return (
    <TabStack.Navigator screenOptions={tabBarOptions}>
      <TabStack.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <Entypo name="home" size={25} color={color} />,
        }}
      />
      <TabStack.Screen
        name="Search"
        component={() => <Text>Search</Text>}
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="search1" size={25} color={color} />,
        }}
      />
      <TabStack.Screen
        name="Upload"
        component={Home}
        options={{
          tabBarIcon: ({}) => <Image source={plusIcon} style={{ height: 35, resizeMode: 'contain' }} />,
          tabBarLabel: () => null,
        }}
      />
      <TabStack.Screen
        name="Inbox"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="message-minus-outline" size={25} color={color} />,
        }}
      />
      <TabStack.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="person-outline" size={25} color={color} />,
        }}
      />
      {/* <TabStack.Screen name={HOME} component={Home} />
      <TabStack.Screen name={CARDS} component={Cards} />
      <TabStack.Screen name={PROFILE} component={Profile} /> */}
    </TabStack.Navigator>
  );
};

export default MainTabNavigator;
