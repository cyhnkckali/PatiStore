import React from "react";
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import product_data from './data.json'
import ProductList from './components/ProductList'
import SearchText from './components/SearchText'

const App = () => {

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header_title}>PATIKASTORE</Text>
            <SearchText />
            <ProductList products={product_data} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    header_title: {
        color: '#8333A6',
        fontWeight: "700",
        fontSize: 36,
        paddingHorizontal: 5,
        paddingVertical: 10,
    },

})


export default App