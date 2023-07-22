import React, { useRef } from 'react';
import { StyleSheet, PanResponder, Animated } from "react-native";
import { Link } from 'expo-router'
import { Box, Text } from "native-base";

export default function Page() {
    const site = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([
                null,
                { dx: site.x, dy: site.y },
            ]),
            onPanResponderRelease: () => {
                site.extractOffset();
            },
        }),
    ).current;

    const getTranslateTransform = () => {
        return [
            {
                translateY: site.y,
            },
        ];
    };

    return (
        <Box bg="brand.50" style={home.container}>
            <Text style={home.map}>지도 API</Text>
            <Box>
                <Text style={home.infocase}>정보</Text>
            </Box>
            <Box>
                
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
            <Animated.View
                style={[{ transform: getTranslateTransform() }, home.filter]}
                {...panResponder.panHandlers}
            >
                <Link href="/filter">
                    <Text>
                        필터
                    </Text>
                </Link>
            </Animated.View>
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
        top: "70vh",
        right: 0,
        display: "flex",
        width: 35,
        height: 70,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fef3c7",
        borderTopLeftRadius:50,
        borderBottomLeftRadius:50,
    },
    infocase: {
        width: "100vw",
        height: "30vh",
    },
    info: {
        color: "gray",
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
