import React, { useState, useEffect } from "react";
import { StyleSheet, TextInput } from "react-native";
import { Text, Box } from "native-base";
import { Link } from 'expo-router';
import { WebView } from 'react-native-webview';

export default function Page() {
    const [searchValue, setSearchValue] = useState(""); // 검색 입력값을 상태로 관리

    useEffect(() => {
        // 검색 입력값이 바뀔 때마다 수행될 코드
        // fetch 등의 동작을 수행하거나 검색 결과를 업데이트할 수 있습니다.
        // 예: 검색 결과를 가져와서 표시하거나 다른 상태를 업데이트할 수 있습니다.
        console.log("Search value changed:", searchValue);
    }, [searchValue]); // 검색 입력값이 바뀔 때마다 실행되도록 설정

    return (
        <Box bg="brand.50" style={map.container}>
            <Box style={map.nw}></Box>
            <Box style={map.header}>
                <Box style={map.filterBox}>
                    <Link href="/filter" style={map.filterLink}>
                        <Text style={map.buttonText}>
                            필터
                        </Text>
                    </Link>
                </Box>
                <Box style={map.searchBox}>
                    <TextInput
                        style={map.search}
                        placeholder="검색"
                        value={searchValue}
                        onChangeText={text => setSearchValue(text)} // 입력값이 변경될 때마다 검색 입력값 상태 업데이트
                    />
                </Box>
            </Box>
            <WebView source={{ uri: 'https://map-server-mu.vercel.app/' }} />
            <Box style={underbar.bar}>
                <Box style={underbar.round}>
                    <Link href="/filter/option">
                        <Text>설정</Text>
                    </Link>
                </Box>
                <Box style={underbar.round}>
                    <Link href="/filter/marketcondition">
                        <Text>시세</Text>
                    </Link>
                </Box>
                <Box style={[underbar.round, underbar.main]}>
                    <Text>지도</Text>
                </Box>
                <Box style={underbar.round}>
                    <Link href="/filter/home">
                        <Text>홈</Text>
                    </Link>
                </Box>
                <Box style={underbar.round}>
                    <Link href="/filter/search">
                        <Text>검색</Text>
                    </Link>
                </Box>
            </Box>

        </Box>
    );
}

const map = StyleSheet.create({
    container: {
        flex: 1,
        height: "20%"
    },
    nw: {
        width: "100%",
        height: "5%"
    },
    map: {
        width: "100%",
        height: "80%",
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
        alignItems: "center",
        justifyContent: "center",
    },
    main: {
        backgroundColor: "#9F9FFF",
        color: "black",
    }
})