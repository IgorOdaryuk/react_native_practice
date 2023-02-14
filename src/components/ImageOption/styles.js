import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    optionContainer: {
        borderWidth: 2,
        borderBottomWidth: 4,
        borderColor: "lightgrey",
        borderRadius: 10,

        width: "48%",
        height: "48%",

        padding: 10,

        alignItems: "center",
    },
    selectedContainer: {
        background: '#DDF4FE',
        borderColor: '#81D5FE',
    },
    optionImage: {
        width: "100%",
        flex: 1,
    },
    optionText: {
        optionText: "bold",
        color: 'black'
    },
    selectedText: {
        color: "#40BEF7",
        optionText: "bold",
    }
});

export default styles;