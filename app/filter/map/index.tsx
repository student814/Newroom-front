import { StyleSheet, TextInput } from "react-native";
import { Text, Box } from "native-base";
import { Link } from 'expo-router';

export default function Page() {
    return (
        <Box bg="brand.50" style={map.container}>
            <Box style={map.header}>
                <Box style={map.filterBox}>
                    <Link href="/filter" style={map.filterLink}>
                        <Text style={map.buttonText}>
                            필터
                        </Text>
                    </Link>
                </Box>
                <Box style={map.searchBox}>
                    <TextInput style={map.search} placeholder="검색" />
                </Box>
            </Box>
            <Text style={map.map}>
                지도 api
            </Text>
            <Box style={underbar.bar}>
                <Link href="/filter/option" style={underbar.round}>
                    <Text>설정</Text>
                </Link>
                <Link href="/filter/marketcondition" style={underbar.round}>
                    <Text>시세</Text>
                </Link>
                <Text style={[underbar.round, underbar.main]}>지도</Text>

                <Link href="/filter/home" style={underbar.round}>
                    <Text>홈</Text>
                </Link>
                <Link href="/filter/search" style={underbar.round}>
                    <Text>검색</Text>
                </Link>
            </Box>

        </Box>
    );
}

const map = StyleSheet.create({
    container: {
        flex: 1,
        height: "20%"
    },
    map: {
        width: "100%",
        height: "85%",
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
        textAlign:"center",
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
        borderColor:"white",
    },
    searchBox:{
        height: "100%",
        flex: 1,
        backgroundColor:"#c7d2fe"
    }
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