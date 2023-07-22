import { StyleSheet } from "react-native";
import { Text, Box } from "native-base";
import { Link } from 'expo-router'

export default function Page() {
    return (
        <Box bg="brand.50" style={map.container}>
            <Box style={map.header}>
                <Link href="/filter">
                    <Box>
                        <Text bg="amber.100" style={map.filter}>
                            필터
                        </Text>
                    </Box>

                </Link>
                <Text style={map.search}>
                    검색
                </Text>
            </Box>
            <Box style={map.map}>
                <Text>
                    지도 api
                </Text>
            </Box>

            <Box style={info.infocase}>
                <Box style={info.area}>
                    <Text>면적</Text>
                </Box>
                <Box style={info.detail}>
                    <Text style={info.price}>시세</Text>
                    <Text style={info.floor}>평면도</Text>
                </Box>
            </Box>
            <Box bg="muted.200" style={underbar.bar}>
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
            </Box>
        </Box>
    );
}

const map = StyleSheet.create({
    container: {
        display: "flex"
    },
    map: {
        width: "100vw",
        height: "40vh",
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
const info = StyleSheet.create({
    infocase: {
        display: "flex",
        flexDirection: "row",
        width: "100vw",
        height: "45vh",
    },
    area: {
        width: "30vw",
        height: "45vh",

    },
    detail: {
        flex: 1,
        flexDirection: "column",
        width: "70vw",
        height: "45vh",
    },
    price: {

    },
    floor: {

    },
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