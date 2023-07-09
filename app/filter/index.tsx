import { StyleSheet, Text, View, Pressable, } from "react-native";
import { useRouter } from "expo-router";
export default function Page() {
    const router = useRouter();
    const area = ['10평 이하', '10평대', '20평대', '30평대', '40평대', '50평대', '60평대', '70평 이상'];
    const region = ['수도권[서울, 경기]', '강원도', '충청남도', '충청북도', '전라북도', '전라남도', '경상북도', '경상남도']
    const makearea = area.map((v) => v);
    const makeregion = region.map((v) => v);
    return (
        <View>
            <View style={header.upmenu}>
                <Pressable style={header.cancel} onPress={() => router.back()}>＜</Pressable>
                <Text style={header.here}>
                    필터
                </Text>
                <Text style={header.reset}>
                    필터 초기화
                </Text>
            </View>
            <View style={filter.container}>
                <Text style={filter.block}>
                    <Text style={filter.title}>면적</Text>
                    <Text style={filter.selectbox}>
                        {makearea.map((areatext) => (
                            <Text style={filter.select}>{areatext}</Text>
                        ))}
                    </Text>
                </Text>
                <Text style={filter.block}>
                    <Text style={filter.title}>지역</Text>
                    <Text style={filter.selectbox}>
                        {makeregion.map((regiontext) => (
                            <Text style={filter.select}>{regiontext}</Text>
                        ))}
                    </Text>
                </Text>
                <Text style={filter.block}>
                    <Text style={filter.title}>시세</Text>
                    <Text>
                        <Text style={filter.selectbox}>
                            <Text style={price.down}>
                                최저가<input type="number" />
                            </Text>
                            <Text style={price.up}>
                                최고가<input type="number" />
                            </Text>
                        </Text>
                    </Text>
                </Text>
            </View>
            <Text style={underbar.accept}>필터 설정완료</Text>
        </View>
    );
}

const header = StyleSheet.create({
    upmenu: {
        width: "100vw",
        height: "5vh",
        display: "flex",
        flexDirection: "row"
    },
    cancel: {
        width: "5vh",
        height: "5vh",
        borderRadius: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(50, 50, 50, 0.3)"
    },
    here: {
        width: "70vw",
        display: "flex",
        alignItems: "center",
    },
    reset: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 200, 0.2)",
        border: "1px solid blue"
    }
})
const filter = StyleSheet.create({
    container: {
        height: "85vh",
        width: "100vw"
    },
    block: {
        backgroundColor: "gray",
        width: "100%",
        height: "20vh",
        marginBottom: "5vh",
    },
    title: {
        fontSize: 20,
        fontweight: "bold"
    },
    select: {
        border: "1px solid black",
        padding: "1vw",
        width: "40px",
        flex:1,
        textAlign:"center",
        backgroundColor:"rgb(217,217,217)"
    },
    selectbox: {
        width: "100vw",
        height: "15vh",
    },
})
const price = StyleSheet.create({
    down: {
        color: "blue"
    },
    up: {
        color: "red"
    }
})
const underbar = StyleSheet.create({
    accept: {
        width: "100vw",
        height: "10vh",
        backgroundColor: "lightblue",
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
})