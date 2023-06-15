import { StyleSheet, Text, View } from "react-native";
import { Link, withLayoutContext } from 'expo-router'

export default function Page() {
    return (
        <View style={home.container}>
            <Text style={home.map}>지도 api</Text>
            <Link href="/filter">
                <View style={{
                    flex: 1,
                    flexDirection: "row-reverse"
                }}>
                    <Text style={home.filter}>
                        필터
                    </Text>
                </View>
            </Link>
            <View>
                <Text style={underbar.bar}>
                    <Link href="price">
                        <Text style={underbar.round}>시세</Text>
                    </Link>
                    <Link href="/map">
                        <Text style={underbar.round}>지도</Text>
                    </Link>
                    <Text style={underbar.main}>홈</Text>
                    <Link href="/search">
                        <Text style={underbar.round}>검색</Text>
                    </Link>
                    <Link href="/option">
                        <Text style={underbar.round}>설정</Text>
                    </Link>
                </Text>
            </View>
        </View>
    )
}

const home = StyleSheet.create({
    container: {
        flex: 1,
        textAlign: "center",
    },
    map: {
        width: "100vw",
        height: "60vh",
        backgroundColor: "lightblue"
    },
    filter: {
        backgroundColor: "gray",
        width: 40,
        height: 40,
        margin: 20,
        padding: 10,
        fontSize: 10,
        left: "70vw",
        position: "fixed",
    },
})
const underbar = StyleSheet.create({
    bar: {
        backgroundColor: "rgba(50, 50, 50, 0.1)",
        height: "10vh",
        bottom: 0,
        position: "fixed",
        width: "100vw"
    },
    round: {
        backgroundColor: "lightblue",
        padding: 20,
        borderRadius: 100,
        margin: "1%",
    },
    main: {
        backgroundColor: "blue",
        color: "white",
        fontSize: 20,
        padding: 30,
        borderRadius: 100,
        margin: "2%",
    }
})