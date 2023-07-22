import { StyleSheet, Text, View, Pressable } from "react-native";
import { useRouter } from "expo-router";
export default function Page() {
    const router = useRouter();
    return (
        <View>
            <Text style={header.headercontainer}>
                <Pressable style={header.cancel} onPress={() => router.back()}>＜</Pressable>
            </Text>
            <Text style={option.first}>이용약관</Text>
            <Text style={option.second}>위치기반 서비스 이용 약관</Text>
            <Text style={option.first}>부동산 정보 알림</Text>
            <Text style={option.second}>개인정보 처리 방침</Text>
        </View>
    );
}
const header = StyleSheet.create({
    headercontainer: {
        height: "5vh",
        width: "100vw"
    },
    cancel: {
        width: "5vh",
        height: "5vh",
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(50, 50, 50, 0.3)"
    }
})
const option = StyleSheet.create({
    first: {
        display: "flex",
        width: "100vw",
        height: "10vh",
        backgroundColor: "rgb(212, 212, 212)",
        alignItems: "center"
    },
    second: {
        display: "flex",
        width: "100vw",
        height: "10vh",
        backgroundColor: "rgb(227, 227, 227)",
        alignItems: "center"
    }
})