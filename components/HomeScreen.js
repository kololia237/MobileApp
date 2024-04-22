import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Config from "../config";

const HomeScreen = () => {
    const navigation = useNavigation();

    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        fetchNewsData();
    }, []);

    const fetchNewsData = async () => {
        try {
            const response = await fetch(Config.newsUrl);
            const data = await response.json();
            setNewsData(data);
        } catch (error) {
            console.error('Error fetching news data:', error);
        }
    };

    const handleNewsPress = (news) => {
        navigation.navigate('NewsDetail', { news });
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Новини</Text>
            {newsData.map((news) => (
                <TouchableOpacity key={news.id} style={styles.newsContainer} onPress={() => handleNewsPress(news)}>
                    <Image source={{ uri: news.imageUrl }} style={styles.newsImage} />
                    <View style={styles.newsDetails}>
                        <Text numberOfLines={1} style={styles.newsTitle}>{news.title}</Text>
                        <Text style={styles.newsDate}>{news.date}</Text>
                        <Text numberOfLines={3} ellipsizeMode="tail" style={styles.newsDescription}>{news.description}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 15
    },
    newsContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        height: 120,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        overflow: 'hidden',

        // https://ethercreative.github.io/react-native-shadow-generator/
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    newsImage: {
        width: 120,
        height: '100%',
    },
    newsDetails: {
        flex: 1,
        padding: 10,
    },
    newsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    newsDate: {
        fontSize: 14,
        color: '#888',
        marginBottom: 5,
    },
    newsDescription: {
        fontSize: 16,
    },
});

export default HomeScreen;
