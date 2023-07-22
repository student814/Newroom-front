import { StyleSheet } from "react-native";
import { Link } from 'expo-router'
import { Box, Text } from "native-base";

export default function Page() {
    return (
        <Box bg="brand.50" style={home.container}>
            <Text style={home.map}>지도 api</Text>
            <Box>
                <Text style={home.infocase}>정보</Text>
            </Box>
            <Box bg="amber.100" style={home.filter}>
                <Link href="/filter">
                    <Text>
                        필터
                    </Text>
                </Link>
            </Box>
            <Box bg="muted.200" style={underbar.bar}>
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
            </Box>
        </Box>
    )
}

const home = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: "100vw",
        height: "60vh",

    },
    filter: {
        position: "absolute",
        display: "flex",
        width: 35,
        height: 70,
        top:"70%",
        right:0,
        justifyContent: "center",
        alignItems: "center",
        borderTopLeftRadius:50,
        borderBottomLeftRadius:50,
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
    },
    round: {
        backgroundColor: "lightblue",
        borderRadius: 20,
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