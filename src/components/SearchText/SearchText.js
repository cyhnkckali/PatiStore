import React from "react";
import { View, TextInput, StyleSheet } from 'react-native';



const SearchText = () => {
    return (
        <View style={styles.container}>
            <TextInput placeholder="Ara..." style={styles.input} placeholderTextColor={'#ACACAC'} ></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        marginHorizontal: 10,
        backgroundColor: '#F5F2F2',
        borderRadius: 10,
        padding: 10

    },
    input: {
        fontSize: 18,
        color: '#000000',
        fontWeight: "600",
    }

})

export default SearchText