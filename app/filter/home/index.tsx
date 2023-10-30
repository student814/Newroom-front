import React, { useRef, useState } from 'react';
import { StyleSheet, PanResponder, Animated } from 'react-native';
import { Link } from 'expo-router';
import { Box, Text } from 'native-base';
import { WebView } from 'react-native-webview';
type Data = {
    거래금액: string;
    건축년도: string;
    년: string;
    도로명: string;
    도로명건물본번호코드: string;
    도로명건물부번호코드: string;
    도로명시군구코드: number; // 숫자 타입으로 변경
    도로명일련번호코드: string;
    도로명코드: string;
    법정동: string;
    법정동본번코드: string;
    법정동부번코드: string;
    법정동시군구코드: number; // 숫자 타입으로 변경
    법정동읍면동코드: string;
    법정동지번코드: string;
    아파트: string;
    월: string;
    일: string;
    전용면적: string;
    지번: string;
    지역코드: number; // 숫자 타입으로 변경
    층: string;
};
export default function Page() {
    const site = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
    const [parsedData, setData] = useState<Data[]>([]);

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
                <WebView
                    source={{ uri: 'https://map-server-mu.vercel.app' }}
                    onMessage={(event) => {
                        const dataFromSvelte = event.nativeEvent.data;
                        const parsed = JSON.parse(dataFromSvelte)
                        setData(parsed);
                    }}
                />
            </Box>
            <Box>
                <Box style={styles.infocase}>
                    {parsedData.map((v,i) => <Text key={i}>
                        {v.거래금액}
                        {v.법정동}
                    </Text>)}
                </Box>
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
                    <Text>필터</Text>
                </Link>
            </Animated.View>
        </Box>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: 'hidden',
    },
    nw: {
        width: '100%',
        height: '5%',
    },
    map: {
        height: '55%',
    },
    filter: {
        position: 'absolute',
        top: '70%',
        right: 0,
        display: 'flex',
        width: 35,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#a5b4fc',
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
    },
    infocase: {
        height: '30%',
        display:'flex',
    },
    info: {
        color: 'gray',
    },
});

const underbar = StyleSheet.create({
    bar: {
        display: 'flex',
        height: '10%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        overflow: 'hidden',
    },
    round: {
        display: 'flex',
        backgroundColor: '#E0DFFF',
        borderRadius: 20,
        width: '20%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    main: {
        backgroundColor: '#9F9FFF',
        color: 'black',
    },
});