import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Image, TouchableOpacity, Modal } from 'react-native';
import Config from "../config";
import ImageViewer from 'react-native-image-zoom-viewer';

const GalleryScreen = () => {
    const [imagesData, setImagesData] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    useEffect(() => {
        fetchImagesData();
    }, []);

    const fetchImagesData = async () => {
        try {
            const response = await fetch(Config.galleryUrl);
            const data = await response.json();
            setImagesData(data);
        } catch (error) {
            console.error('Error fetching gallery_images data:', error);
        }
    };

    const openImageViewer = (index) => {
        setSelectedImageIndex(index);
        setModalVisible(true);
    };

    const renderImages = () => {
        return imagesData.map((image, index) => (
            <TouchableOpacity key={index} style={styles.card} onPress={() => openImageViewer(index)}>
                <Image source={{ uri: image.imageUrl }} style={styles.image} />
            </TouchableOpacity>
        ));
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                {renderImages()}
            </ScrollView>
            <Modal visible={modalVisible} transparent={true}>
                <ImageViewer
                    imageUrls={imagesData.map(image => ({ url: image.imageUrl }))}
                    index={selectedImageIndex}
                    onCancel={() => setModalVisible(false)}
                    enableSwipeDown={true}
                    onSwipeDown={() => setModalVisible(false)}
                />
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 5,
    },
    card: {
        width: '50%',
        aspectRatio: 1,
        padding: 5,
    },
    image: {
        flex: 1,
        borderRadius: 8,
    },
});

export default GalleryScreen;
