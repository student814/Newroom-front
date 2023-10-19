import React, { useState } from "react";
import { StyleSheet, Pressable, TextInput } from "react-native";
import { useRouter } from "expo-router";
import { Text, Box } from "native-base";

export default function FilterPage() {
    const router = useRouter();
    const area = ['10평 이하', '10평대', '20평대', '30평대', '40평대', '50평대', '60평대', '70평 이상'];
    const region = ['수도권', '강원도', '충청남도', '충청북도', '전라북도', '전라남도', '경상북도', '경상남도']

    // 각 필터 항목에 대한 상태 변수 추가
    const [selectedArea, setSelectedArea] = useState("");
    const [selectedRegion, setSelectedRegion] = useState("");
    const [selectedAreaValue, setSelectedAreaValue] = useState(""); // 새로운 state 변수
    const [selectedRegionValue, setSelectedRegionValue] = useState(""); // 새로운 state 변수

    return (
        <Box bg="brand.50" style={styles.container}>
            <Box style={styles.nw}></Box>
            <Box style={styles.header}>
                <Pressable style={styles.cancel} onPress={() => router.back()}>
                    <Text>＜</Text>
                </Pressable>
                <Text style={styles.title}>
                    필터
                </Text>
                <Box bg="brand.200" style={styles.reset}>
                    <Text>
                        필터 초기화
                    </Text>
                </Box>
            </Box>
            <Box style={styles.filterContainer}>
                <Box bg="muted.50" style={styles.filterBlock}>
                    <Text style={styles.filterTitle}>면적</Text>
                    <Box style={styles.selectBox}>
                        {area.map((areatext, index) => (
                            <Pressable
                                key={index}
                                style={[
                                    styles.select,
                                    selectedArea === areatext && { backgroundColor: "#c7d2fe" },
                                ]}
                                onPress={() => {
                                    setSelectedArea(areatext); // "selectedArea" state 업데이트
                                    setSelectedAreaValue(areatext); // "selectedAreaValue" state 업데이트
                                }}
                            >
                                <Text key={index}>{areatext}</Text>
                            </Pressable>
                        ))}

                    </Box>
                </Box>
                <Box bg="muted.50" style={styles.filterBlock}>
                    <Text style={styles.filterTitle}>지역</Text>
                    <Box style={styles.selectBox}>
                        {region.map((regiontext, index) => (
                            <Pressable
                                key={index}
                                style={[
                                    styles.select,
                                    selectedRegion === regiontext && { backgroundColor: "#c7d2fe" },
                                ]}
                                onPress={() => {
                                    setSelectedRegion(regiontext); // "selectedRegion" state 업데이트
                                    setSelectedRegionValue(regiontext); // "selectedRegionValue" state 업데이트
                                }}
                            >
                                <Text key={index}>{regiontext}</Text>
                            </Pressable>
                        ))}

                    </Box>
                </Box>
                <Box bg="muted.50" style={styles.filterBlock}>
                    <Text style={styles.filterTitle}>시세</Text>
                    <Box style={styles.priceBox}>
                        <TextInput style={styles.input} keyboardType="number-pad" placeholder="최저가" />
                        <TextInput style={styles.input} keyboardType="number-pad" placeholder="최고가" />
                    </Box>
                </Box>
                <Box>
                    <Text>설정된 필터</Text>
                    <Text>{selectedAreaValue}</Text>
                    <Text>{selectedRegionValue}</Text>
                </Box>
            </Box>
            <Box bg="primary.200" style={styles.accept}>
                <Pressable>
                    <Text>필터 설정완료</Text>
                </Pressable>
            </Box>
        </Box>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    nw: {
        width: "100%",
        height: "5%"
    },
    header: {
        width: "100%",
        height: "5%",
        display: "flex",
        flexDirection: "row"
    },
    cancel: {
        width: "10%",
        height: "100%",
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        display: "flex",
        height: "100%",
        width: "70%",
        textAlign: "center",
        paddingTop: "2%",
    },
    reset: {
        width: "20%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    filterContainer: {
        height: "80%",
        width: "100%",
    },
    filterBlock: {
        width: "100%",
        height: "20%",
        marginBottom: "5%",
    },
    filterTitle: {
        fontSize: 20,
        fontWeight: "bold",
        margin: 2,
    },
    select: {
        display: "flex",
        width: "20%",
        height: "200%",
        margin: 2,
        borderRadius: 10,
        padding: "2%",
        backgroundColor: "#FFFFA6",
        justifyContent: "center",
        alignItems: "center"
    },
    selectBox: {
        marginTop: "1%",
        marginLeft: "1%",
        marginEnd: "1%",
        width: "98%",
        height: "15%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
    },
    priceBox: {
        marginTop: "1%",
        marginLeft: "1%",
        width: "40%",
        height: "20%",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    input: {
        color: "blue",
        width: "100%",
        height: "100%",
        borderWidth: 1,
        borderColor: "blue",
        borderRadius: 5,
    },
    accept: {
        width: "100%",
        height: "10%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
});
