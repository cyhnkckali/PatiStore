import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F2F2',
        borderRadius: 10,
        padding: 10,
        margin: 5
    },
    image: {
        minHeight: 350,
        width: "auto",
        resizeMode: "stretch",
        borderRadius: 10,
        marginTop: 10,
    },
    title: {
        marginTop: 5,
        fontSize: 30,
        fontWeight: "bold",
        color: 'black',
    },
    price: {
        marginTop: 10,
        fontSize: 24,
        fontWeight: "bold",
        color: '#848484',
    },
    inStock: {
        marginTop: 5,
        fontSize: 24,
        fontWeight: "bold",
        color: '#D82121',
    }
})