import { StyleSheet, Text, View } from "react-native";
import { Link } from 'expo-router'

export default function Page() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>로그인</Text>
            <Link href="/filter/home">
                <Text style={{ fontSize: 40 }}>구글로 로그인</Text>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
    },
    title: {
        fontSize: 12,
        fontWeight: "bold",
    }
});