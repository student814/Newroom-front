import { StyleSheet } from "react-native";
import { Text, Box } from "native-base";
import { Link } from 'expo-router';

export default function Page() {
    return (
        <Box bg="brand.50" style={map.container}>
            <Box style={map.header}>
                <Box bg="amber.100">
                    <Link href="/filter">
                        <Text style={map.filter}>
                            필터
                        </Text>
                    </Link>
                </Box>

                <Text style={map.search}>
                    검색
                </Text>
            </Box>
            <Text style={map.map}>
                지도 api
            </Text>
            <Box bg="muted.200" style={underbar.bar}>
                <Text style={underbar.round}>
                    <Link href="/option">설정</Link>
                </Text>
                <Text style={underbar.round}>
                    <Link href="/marketcondition">시세</Link>
                </Text>
                <Text style={[underbar.round, underbar.main]}>지도</Text>
                <Text style={underbar.round}>
                    <Link href="/home">홈</Link>
                </Text>
                <Text style={underbar.round}>
                    <Link href="/search">검색</Link>
                </Text>
            </Box>
        </Box>
    );
}

const map = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: "100vw",
        height: "85vh",
    },
    header: {
        display: "flex",
        flexDirection: "row"
    },
    filter: {
        width: "20vw",
        height: "5vh",
        display: "flex",
        alignItems: "center",
        justifyContent:"center",
    },
    search: {
        height: "5vh",
        width: "80vw",
        display: "flex",
        alignItems: "center",
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