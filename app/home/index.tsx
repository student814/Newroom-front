import { StyleSheet, Text, View } from "react-native";
import { Link } from 'expo-router'

export default function Page() {
    return (
        <View style={home.container}>
            <Text style={home.map}>지도 api</Text>
            <View>
                <Text style={home.infocase}>정보</Text>
            </View>
            <Link href="/filter">
                <Text style={home.filter}>
                    필터
                </Text>
            </Link>
            <View style={underbar.bar}>
                <Text style={underbar.round}>
                    <Link href="/marketcondition">시세</Link>
                </Text>
                <Text style={underbar.round}>
                    <Link href="/map">지도</Link>
                </Text>
                <Text style={[underbar.round, underbar.main]}>홈</Text>
                <Text style={underbar.round}>
                    <Link href="/search">검색</Link>
                </Text>
                <Text style={underbar.round}>
                    <Link href="/option">설정</Link>
                </Text>
            </View>
        </View>
    )
}

const home = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: "100vw",
        height: "60vh",
        backgroundColor: "lightblue",

    },
    filter: {
        backgroundColor: "gray",
        width: 70,
        height: 40,
        padding: 6,
        fontSize: 20,
        top: "80vh",
        left: "75vw",
        position: "fixed",
        textAlign: "center",
    },
    infocase: {
        width: "100vw",
        height: "30vh",
    },
    info: {
        color: "gray",
        width: "100vw",
        height: "20vh",
    }
})
const underbar = StyleSheet.create({
    bar: {
        flex: 1,
        height: "10vh",
        width: "100vw",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "rgba(30, 30, 30, 0.1)"
    },
    round: {
        backgroundColor: "lightblue",
        borderRadius: "50%",
        width: "10vh",
        height: "10vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    main: {
        backgroundColor: "blue",
        color: "white",
    }
})