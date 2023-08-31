import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { Box, Text } from 'native-base';
import { useRouter } from 'expo-router';

export default function Page() {
    const router = useRouter();

    return (
        <Box bg="brand.50" style={option.container}>
            <Box style={header.nw}></Box>
            <Box style={header.headercontainer}>
                <Box style={header.cancel}>
                    <Pressable onPress={() => router.back()}>
                        <Text style={{fontWeight:"bold"}}>＜</Text>
                    </Pressable>
                </Box>
                <Box style={header.explain}>
                    <Text>설정</Text>
                </Box>
            </Box>
            <Box bg="primary.200" style={option.list}>
                <Text >
                    이용약관
                </Text>
            </Box>
            <Box  bg="primary.100" style={option.list}>
                <Text>
                    위치기반 서비스 이용 약관
                </Text>
            </Box>
            <Box bg="primary.200" style={option.list}>
                <Text>
                    부동산 정보 알림
                </Text>
            </Box>
            <Box bg="primary.100" style={option.list}>
                <Text>
                    개인정보 처리 방침
                </Text>
            </Box>

        </Box>
    );
}

const header = StyleSheet.create({
    nw: {
        width:"100%",
        height:"5%"  
    },
    headercontainer: {
        display: 'flex',
        width: '200%',
        flexDirection: 'row',
        height: "5%"
    },
    cancel: {
        display: 'flex',
        width: '5%',
        height: '100%',
        borderRadius: 10,
        justifyContent:"center",
        alignItems:"center",
    },
    explain: {
        display: 'flex',
        height: '100%',
        width:'50%',
        borderWidth: 1,
        justifyContent:"center",
        borderColor:"white",
    },
});

const option = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    list: {
        display: 'flex',
        width: '100%',
        height: '10%',
        justifyContent:"center",
    },
});
