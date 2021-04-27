import React from 'react';
import { Dimensions, StyleSheet, Button, View } from 'react-native';

export default ({ onPressLeft, textLeft, togglePointsFilter }) => {
    return (
        <View style={styles.panel}>
            <Button style={styles.button} onPress={onPressLeft} title={textLeft} />
            <Button style={styles.button} title="Mostrar - Ocultar" onPress={togglePointsFilter}/>
        </View>
        )
 }

 const styles = StyleSheet.create({
    panel: {
        flex: 1,
        //flexDirection: 'row',
        justifyContent: 'center',
    },
 })