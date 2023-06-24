import { StyleSheet, Text, View, Pressable } from "react-native";
import { Link, useRouter } from 'expo-router'
export default function Page() {
    const router = useRouter();
    return (
        <View>
            <View style={header.upmenu}>
                <Pressable style={header.cancel} onPress={() => router.back()}>X</Pressable>
                <Text style={header.here}>
                    필터
                </Text>
                <Text style={header.reset}>
                    필터 초기화
                </Text>
            </View>
            <View style={filter.container}>
                <Text style={filter.block}>

                </Text>
                <Text style={filter.block}>

                </Text>
                <Text style={filter.block}>

                </Text>
            </View>
            <Text style={underbar.accept}>필터 설정완료</Text>
        </View>
    );
}

const header = StyleSheet.create({
    upmenu: {
        width: "100vw",
        height: "5vh",
        display: "flex",
        flexDirection: "row"
    },
    cancel: {
        width: "5vh",
        height: "5vh",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(50, 50, 50, 0.3)"
    },
    here: {
        width: "70vw",
        display: "flex",
        alignItems: "center",
    },
    reset: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 200, 0.2)",
        border: "1px solid blue"
    }
})
const filter = StyleSheet.create({
    container: {
        height: "85vh",
        width: "100vw"
    },
    block: {
        backgroundColor: "gray",
        width: "100%",
        height: "20vh",
        marginBottom: "5vh"
    },
    area: {

    },
    local: {

    },
    market_condition: {

    }
})
const underbar = StyleSheet.create({
    accept: {
        width: "100vw",
        height: "10vh",
        backgroundColor: "lightblue",
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
})