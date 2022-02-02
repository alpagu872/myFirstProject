import React from 'react';
import { Text, TouchableOpacity, View, Alert } from 'react-native'
import styles from './card.style'

const Card = (props) => {
    return (

        <View style={styles.container}>
            <Text style={styles.title}>
                {props.title}
            </Text>
            <Text style={styles.text}>
                {props.text}
            </Text>
            <View style={styles.button_container}>
                <TouchableOpacity>
                <Text style={styles.button_title}>
                    LES GO
                </Text>
               </TouchableOpacity>
            </View>
        </View>

    )
}
export default Card;
