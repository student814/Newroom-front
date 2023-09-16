import React, { useState } from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { Box, Text } from 'native-base';
import { useRouter } from 'expo-router';

export default function Page() {
    const router = useRouter();
    const option = ['이용약관', '위치기반 서비스 이용 약관', '부동산 정보 알림', '개인 정보 처리 방침']

    const [selectedOption, setSelectedOption] = useState("");

    return (
        <Box bg="brand.50" style={select.container}>
            <Box style={header.nw}></Box>
            <Box style={header.headercontainer}>
                <Box style={header.cancel}>
                    <Pressable onPress={() => router.back()}>
                        <Text style={{ fontWeight: "bold" }}>＜</Text>
                    </Pressable>
                </Box>
                <Box style={header.explain}>
                    <Text>설정</Text>
                </Box>
            </Box>
            <Box>
                <Box>
                    {option.map((optiontext, index) => (
                        <Pressable
                            key={index}
                            style={[
                                select.list,
                                { backgroundColor: index % 2 === 0 ? "#E0DFFF" : "#9F9FFF" },
                                selectedOption === optiontext && { backgroundColor: "#c7d2fe" },
                            ]}
                            onPress={() => setSelectedOption(optiontext)}
                        >
                            <Text key={index}>{optiontext}</Text>
                        </Pressable>
                    ))}

                </Box>
            </Box>
        </Box>
    );
}

const header = StyleSheet.create({
    nw: {
        width: "100%",
        height: "5%"
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
        justifyContent: "center",
        alignItems: "center",
    },
    explain: {
        display: 'flex',
        height: '100%',
        width: '40%',
        justifyContent: "center",
        alignItems: "center",
    },
});

const select = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    list: {
        display: 'flex',
        width: '100%',
        height: '20%',
        justifyContent: "center",
        backgroundColor: "blue",
    },
});
