import React from "react";
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from "prop-types";

export default function Weather() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {temp}
            </Text>
        </View>
    );
}

Weather.propTypes = {

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#2c2c2c',
        fontSize: 30,
    }
});