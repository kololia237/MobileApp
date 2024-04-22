import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Registration from "./Registration";
import GalleryScreen from "./GalleryScreen";
import HomeScreen from "./HomeScreen";
import NewsDetailScreen from "./NewsDetailScreen";

const HomeIcon = () => (
    <Image source={require('../assets/home.png')} style={styles.tabIcon} />
);

const GalleryIcon = () => (
    <Image source={require('../assets/gallery.png')} style={styles.tabIcon} />
);

const ProfileIcon = () => (
    <Image source={require('../assets/profile.png')} style={styles.tabIcon} />
);

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name="NewsDetail"
            component={NewsDetailScreen}
            options={{ headerShown: false }}
        />
    </Stack.Navigator>
);

const Navigation = () => {
    return (
        <View style={styles.container}>
            <Tab.Navigator screenOptions={screenOptions}>
                <Tab.Screen
                    name="Головна"
                    component={HomeStack}
                    options={{
                        tabBarIcon: HomeIcon,
                    }}
                />
                <Tab.Screen
                    name="Галерея"
                    component={GalleryScreen}
                    options={{
                        tabBarIcon: GalleryIcon,
                    }}
                />
                <Tab.Screen
                    name="Профіль"
                    component={Registration}
                    options={{
                        tabBarIcon: ProfileIcon,
                    }}
                />
            </Tab.Navigator>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1,
        paddingTop: 20,
    },
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabIcon: {
        width: 24,
        height: 24,
    },
});

const screenOptions = {
    tabBarStyle:{
        backgroundColor: '#f9f9f9',
        height: 85,
    },
    tabBarItemStyle:{
        margin: 8,
    }
};

export default Navigation;
