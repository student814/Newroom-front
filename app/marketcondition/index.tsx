import { StyleSheet } from "react-native";
import { Text, Box } from "native-base";
import { Link } from "expo-router";
export default function Page() {
    return (
        <Box bg="brand.50">
            <Box>
                <Box style={header.count}>
                    <Text>찾아진 매물의 개수 : </Text>
                </Box>
                <Box>
                    <Box bg="amber.100" style={header.filter}>
                        <Link href="/filter">
                            <Text>필터</Text>
                        </Link>
                    </Box>
                </Box>

            </Box>
            <Box style={info.infocase}>
                {/* <Box style={info.info}>
                    <Text>면적:</Text>
                    <Text>지역:</Text>
                    <Text>시세:</Text>
                </Box> */}
            </Box>
            <Box bg="muted.200" style={underbar.bar}>
                <Text style={underbar.round}>
                    <Link href="/search">검색</Link>
                </Text>
                <Text style={underbar.round}>
                    <Link href="/option">설정</Link>
                </Text>
                <Text style={[underbar.round, underbar.main]}>시세</Text>
                <Text style={underbar.round}>
                    <Link href="/map">지도</Link>
                </Text>
                <Text style={underbar.round}>
                    <Link href="/home">홈</Link>
                </Text>
            </Box>
        </Box>
    );
}
const header = StyleSheet.create({
    count: {
        display: "flex",
        height: "5vh",
        justifyContent: "center",
    },
    filter: {
        display: "flex",
        width: "15vw",
        height: "5vh",
        justifyContent: "center",
        alignItems: "center",
        right:0,
    }
})
const info = StyleSheet.create({
    infocase: {
        height: "80vh",
    },
    info: {
        height: "10vh",
        backgroundColor: "white"
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
        backgroundColor:"blue",
        color: "white",
    }
})