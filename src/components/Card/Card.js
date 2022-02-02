import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Card.style';

const Card = () => {
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Text style={styles.text}>
                    Hasan Hüseyin
                </Text>
            </View>
            <TouchableOpacity style={styles.button_container}>
                <Text style={styles.button_text}>Hİİİ</Text>
            </TouchableOpacity>

        </View>

    )
}

export default Card