import { StyleSheet, Pressable } from "react-native"; // react-native의 Pressable 추가
import { Box, Text } from "native-base"; // native-base의 Box와 Text 사용
import { useRouter } from "expo-router";

export default function Page() {
    const router = useRouter();
    return (
        <Box bg="brand.50" style={option.container}>
            <Box style={header.headercontainer}>
                <Box bg="amber.50" style={header.cancel}>
                    <Pressable onPress={() => router.back()}>＜</Pressable>
                </Box>
                <Box style={header.explain}>
                    <Text>설정</Text>
                </Box>
            </Box>
            <Text bg="primary.200" style={option.list}>이용약관</Text>
            <Text bg="primary.100" style={option.list}>위치기반 서비스 이용 약관</Text>
            <Text bg="primary.200" style={option.list}>부동산 정보 알림</Text>
            <Text bg="primary.100" style={option.list}>개인정보 처리 방침</Text>
        </Box>
    );
}

const header = StyleSheet.create({
    headercontainer: {
        display: "flex",
        height: "5vh",
        width: "100vw",
        flexDirection: "row",
    },
    cancel: {
        display: "flex",
        width: "5vh",
        height: "5vh",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    explain: {
        display: "flex",
        height: "5vh",
        justifyContent: "center",
        alignItems: "center",
    },
});

const option = StyleSheet.create({
    container: {
        width: "100vw",
        height: "100vh",
    },
    list: {
        display: "flex",
        width: "100vw",
        height: "10vh",
        alignItems: "center",
    },
});
