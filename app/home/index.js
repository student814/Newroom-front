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
                    <Text style={underbar.round}>시세</Text>
                    <Text style={underbar.round}>지도</Text>
                    <Text style={underbar.main}>홈</Text>
                    <Text style={underbar.round}>검색</Text>
                    <Text style={underbar.round}>설정</Text>
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
        width:"100vw",
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
        height: 80,
        bottom: 0,
        position: "fixed",
        width: "100vw"
    },
    round: {
        backgroundColor: "lightblue",
        width: 40,
        height: 40,
        padding: 20,
        borderRadius: 100,
        margin:5
    },
    main: {
        backgroundColor: "blue",
        color:"white",
        fontSize:20,
        width: 50,
        height: 50,
        padding: 30,
        borderRadius: 100,
    }
})