import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Header = ({ title, subTitle, imageUrl }) => {
    return (
        <View style={styles.headerContainer}>
            <Image source={imageUrl} style={styles.image} resizeMode="contain"/>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>{subTitle}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 20,
        paddingHorizontal: 20,
        backgroundColor: '#f9f9f9',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,

        // https://ethercreative.github.io/react-native-shadow-generator/
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    image: {
        width: 150,
        height: 50,
        marginRight: 10,
        marginTop: 15,
        marginBottom: 10
    },
    titleContainer: {
        flex: 1,
        alignItems: 'flex-end',
    },
    title: {
        paddingTop: 15,
        fontSize: 17,
        fontWeight: 'bold',
    },
    subTitle: {
        fontSize: 14,
    }
});

export default Header;
