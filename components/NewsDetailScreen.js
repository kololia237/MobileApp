import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const NewsDetailScreen = ({ route }) => {
    const { news } = route.params;

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={{ uri: news.imageUrl }} style={styles.newsImage} />
            <View style={styles.newsDetails}>
                <Text style={styles.newsTitle}>{news.title}</Text>
                <Text style={styles.newsDate}>{news.date}</Text>
                <Text style={styles.newsDescription}>{news.description}</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 15,
    },
    newsImage: {
        width: '100%',
        height: 200,
        borderRadius: 8,
    },
    newsDetails: {
        padding: 10,
    },
    newsTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    newsDate: {
        fontSize: 18,
        color: '#888',
        marginBottom: 10,
    },
    newsDescription: {
        fontSize: 16,
    },
});

export default NewsDetailScreen;
