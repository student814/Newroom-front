import { StyleSheet, TextInput } from "react-native";
import { Text, Box } from "native-base";
import { Link } from 'expo-router'

export default function Page() {
    return (
        <Box bg="brand.50" style={map.container}>
            <Box style={header.nw}></Box>
            <Box style={header.header}>
                <Box style={header.filterBox}>
                    <Link href="/filter" style={header.filterLink}>
                        <Text style={header.buttonText}>
                            필터
                        </Text>
                    </Link>
                </Box>
                <Box style={header.searchBox}>
                    <TextInput style={header.search} placeholder="검색" />
                </Box>
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
                    <Link href="/filter/marketcondition">
                        <Text style={info.price}>시세</Text>
                    </Link>
                    <Link href="/filter/floorplan">
                        <Text style={info.floor}>평면도</Text>
                    </Link>
                </Box>
            </Box>
            <Box style={underbar.bar}>
                <Link style={underbar.round} href="/filter/map">
                    <Text>지도</Text>
                </Link>
                <Link style={underbar.round} href="/filter/home">
                    <Text>홈</Text>
                </Link>
                <Link style={[underbar.round, underbar.main]} href="/filter/search">
                    <Text>검색</Text>
                </Link>
                <Link style={underbar.round} href="/filter/option">
                    <Text>설정</Text>
                </Link>
                <Link style={underbar.round} href="/filter/marketcondition">
                    <Text>시세</Text>
                </Link>
            </Box>
        </Box>
    );
}
const header = StyleSheet.create({
    nw: {
        width:"100%",
        height:"5%"
    },
    header: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: "5%",
    },
    filterBox: {
        width: "20%",
        height: "100%",
    },
    filterLink: {
        backgroundColor: '#a5b4fc',
        paddingVertical: 8,
        paddingHorizontal: 16,
        textAlign: "center",
    },
    buttonText: {
        fontSize: 16,
        color: 'white',
    },
    search: {
        height: "100%",
        flex: 1,
        padding: 10,
        borderWidth: 1,
        borderColor: "white",
    },
    searchBox: {
        height: "100%",
        flex: 1,
        backgroundColor: "#c7d2fe"
    },
})
const map = StyleSheet.create({
    container: {
        display: "flex",
        height: "100%",
    },
    map: {
        width: "100%",
        height: "40%",
    },
});
const info = StyleSheet.create({
    infocase: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "40%",
    },
    area: {
        width: "30%",
        height: "45%",

    },
    detail: {
        flex: 1,
        flexDirection: "column",
        width: "70%",
        height: "45%",
    },
    price: {

    },
    floor: {

    },
})

const underbar = StyleSheet.create({
    bar: {
        display: "flex",
        height: "10%",
        flexDirection: "row",
        justifyContent: "space-between",
        overflow: "hidden",
    },
    round: {
        display: "flex",
        backgroundColor: "#E0DFFF",
        borderRadius: 20,
        width: "20%",
        height: "100%",
        flexDirection: "column",
        textAlign: "center",
        padding: "6%",
    },
    main: {
        backgroundColor: "#9F9FFF",
        color: "black",
    }
})