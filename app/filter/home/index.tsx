import React, { useRef } from 'react';
import { StyleSheet, PanResponder, Animated } from "react-native";
import { Link } from 'expo-router';
import { Box, Text } from "native-base";
import { WebView } from 'react-native-webview';

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
        <Box bg="brand.50" style={styles.container}>
            <Box style={styles.nw}></Box>
            <Box style={styles.map}>
                <WebView source={{ uri: 'https://map-server-mu.vercel.app/' }} />
            </Box>
            <Box>
                <Text style={styles.infocase}></Text>
            </Box>
            <Box>

            </Box>
            <Box style={underbar.bar}>
                <Box style={underbar.round}>
                    <Link href="/filter/marketcondition">
                        <Text>시세</Text>
                    </Link>
                </Box>
                <Box style={underbar.round}>
                    <Link href="/filter/map">
                        <Text>지도</Text>
                    </Link>
                </Box>
                <Box style={[underbar.round, underbar.main]}>
                    <Text>홈</Text>
                </Box>
                <Box style={underbar.round}>
                    <Link href="/filter/search">
                        <Text>검색</Text>
                    </Link>
                </Box>
                <Box style={underbar.round}>
                    <Link href="/filter/option">
                        <Text>설정</Text>
                    </Link>
                </Box>
            </Box>
            <Animated.View
                style={[{ transform: getTranslateTransform() }, styles.filter]}
                {...panResponder.panHandlers}
            >
                <Link href="/filter">
                    <Text>
                        필터
                    </Text>
                </Link>
            </Animated.View>
        </Box>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: "hidden",
    },
    nw: {
        width: "100%",
        height: "5%"
    },
    map: {
        height: "55%",
    },
    filter: {
        position: "absolute",
        top: "70%",
        right: 0,
        display: "flex",
        width: 35,
        height: 70,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#a5b4fc",
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
    },

    infocase: {
        height: "30%",
    },
    info: {
        color: "gray",
    },
});

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