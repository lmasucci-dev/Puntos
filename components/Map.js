import React from 'react';
import MapView from 'react-native-maps';
import { Dimensions, StyleSheet } from 'react-native';

export default () => {
    return (
        <MapView style={styles.map} /> 
    )
 }

 const styles = StyleSheet.create({
    map: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    },
 })