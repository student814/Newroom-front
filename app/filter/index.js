import { StyleSheet, Text, View } from "react-native";

export default function Page() {
    return (
        <View>
            <Text style={filter.block}>
                
            </Text>
            <Text style={filter.block}>

            </Text>
            <Text style={filter.block}>

            </Text>
        </View>
    );
}

const filter = StyleSheet.create({
    block: {
        backgroundColor:"gray",
        width: "100vw",
        height: "20vh",
        marginBottom : "5vh"
    },
    area: {

    },
    local: {

    },
    market_condition: {

    }
})