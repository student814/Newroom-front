import { StyleSheet, Pressable, } from "react-native";
import { useRouter } from "expo-router";
import { Text, Box } from "native-base";
export default function Page() {
    const router = useRouter();
    const area = ['10평 이하', '10평대', '20평대', '30평대', '40평대', '50평대', '60평대', '70평 이상'];
    const region = ['수도권', '강원도', '충청남도', '충청북도', '전라북도', '전라남도', '경상북도', '경상남도']
    const makearea = area.map((v) => v);
    const makeregion = region.map((v) => v);
    return (
        <Box bg="brand.50">
            <Box style={header.upmenu}>
                <Pressable style={header.cancel} onPress={() => router.back()}>＜</Pressable>
                <Text style={header.here}>
                    필터
                </Text>
                <Box bg="brand.200" style={header.reset}>
                    <Text>
                        필터 초기화
                    </Text>
                </Box>
            </Box>
            <Box style={filter.container}>
                <Box bg="muted.50" style={filter.block}>
                    <Text style={filter.title}>면적</Text>
                    <Text style={filter.selectbox}>
                        {makearea.map((areatext) => (
                            <Text bg="amber.100" style={filter.select}>{areatext}</Text>
                        ))}
                    </Text>
                </Box>
                <Box bg="muted.50" style={filter.block}>
                    <Text style={filter.title}>지역</Text>
                    <Text style={filter.selectbox}>
                        {makeregion.map((regiontext) => (
                            <Text bg="amber.100" style={filter.select}>{regiontext}</Text>
                        ))}
                    </Text>
                </Box>

                <Box bg="muted.50" style={filter.block}>
                    <Text style={filter.title}>시세</Text>
                    <Text>
                        <Text style={filter.pricebox}>
                            <Text style={price.down}>
                                최저가 <input type="number" />
                            </Text>
                            <Text style={price.up}>
                                최고가 <input type="number" />
                            </Text>
                        </Text>
                    </Text>
                </Box>
            </Box>
            <Box bg="primary.200">
                <Text style={underbar.accept}>필터 설정완료</Text>
            </Box>
        </Box>
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
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    here: {
        width: "70vw",
        display: "flex",
        alignItems: "center",
    },
    reset: {
        width: "20vw",
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
        borderRadius: 10,
    }
})
const filter = StyleSheet.create({
    container: {
        height: "85vh",
        width: "100vw"
    },
    block: {
        width: "100%",
        height: "20vh",
        marginBottom: "5vh",
    },
    title: {
        fontSize: 20,
        fontweight: "bold"
    },
    select: {
        display:"flex",
        width:"20vw",
        height:"6vh",
        margin:1,
        alignItems:"center",
        justifyContent:"center",
        borderRadius: 10,
    },
    selectbox: {
        marginTop:"1vh",
        marginLeft:"1vw",
        marginEnd:"1vw",
        width: "98vw",
        height: "15vh",
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"space-between",
    },
    pricebox: {
        marginTop:"1vh",
        marginLeft:"1vw",
        width: "98vw",
        height: "10vh",
        display:"flex",
        flexDirection:"column",
        flexWrap:"wrap",
        justifyContent:"space-between",
    }
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
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
})