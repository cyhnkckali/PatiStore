import React from "react";
import { Dimensions, FlatList, View } from 'react-native';
import ProductCard from '../ProductCard'
import styles from './ProductList.style'

const renderProduct = ({ item }) => <ProductCard product={item} />
const keyExtractorProduct = (item) => item.id.toString()
let numColumns = Dimensions.get("window").width >= 300 ? 2 : 1;
const ProductList = ({ products }) => {
    return (
        <View style={styles.container}>
            <FlatList numColumns={numColumns} showsVerticalScrollIndicator={false} data={products} keyExtractor={keyExtractorProduct} renderItem={renderProduct} />
        </View>
    )
}

export default ProductList