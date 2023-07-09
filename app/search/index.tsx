import { StyleSheet, Text, View } from "react-native";
import { Link } from 'expo-router'

export default function Page() {
    return (
        <View style={map.container}>
            <View style={map.header}>
                <Link href="/filter">
                    <Text style={map.filter}>
                        필터
                    </Text>
                </Link>
                <Text style={map.search}>
                    검색
                </Text>
            </View>
            <Text style={map.map}>
                지도 api
            </Text>
            <Text style={map.infocase}>
                info
            </Text>
            <View style={underbar.bar}>
                <Text style={underbar.round}>
                    <Link href="/map">지도</Link>
                </Text>
                <Text style={underbar.round}>
                    <Link href="/home">홈</Link>
                </Text>
                <Text style={[underbar.round, underbar.main]}>검색</Text>
                <Text style={underbar.round}>
                    <Link href="/option">설정</Link>
                </Text>
                <Text style={underbar.round}>
                    <Link href="/marketcondition">시세</Link>
                </Text>
            </View>
        </View>
    );
}

const map = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: "100vw",
        height: "40vh",
        backgroundColor: "lightblue"
    },
    header: {
        display: "flex",
        flexDirection: "row"
    },
    filter: {
        backgroundColor: "rgba(30, 30, 30, 0.3)",
        width: "20vw",
        height: "5vh",
        display: "flex",
        alignItems: "center",
    },
    search: {
        height: "5vh",
        width: "80vw",
        display: "flex",
        alignItems: "center",
    },
    infocase: {
        width: "100vw",
        height: "45vh",
    },
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
        borderRadius: 50,
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