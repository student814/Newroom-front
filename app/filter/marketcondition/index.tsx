import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Box, FlatList } from 'native-base';
import { Link } from 'expo-router';

export default function Page() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const getInfoApi = async () => {
    try {
      const response = await fetch(
        `http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev?serviceKey=yLVQG48l2MqLAydmwky0CfG1Uldaq6YnjcngEdxmfvzVun38Fh7jNVEg%2BtRRTWX4ZOVBgOSK4y%2BD5%2BDTnPSCXw%3D%3D&minPrice=${minPrice}&maxPrice=${maxPrice}`
      );
      const result = await response.json();
      const infoList = result?.response?.body?.items?.item;
      setData(infoList);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getInfoApi();
  }, [minPrice, maxPrice]); // minPrice, maxPrice가 변경될 때마다 API 재요청

  return (
    <Box bg="brand.50">
      <Box>
        <Box style={styles.header}>
          <Box style={styles.count}>
            <Text>찾아진 매물의 개수: {data.length}</Text>
          </Box>
          <Box bg="amber.100" style={styles.filter}>
            <Link href="/filter">
              <Text>필터</Text>
            </Link>
          </Box>
        </Box>
        <Box style={styles.info}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Box style={styles.infoItem}>
                <Text>{item.id}</Text>
                <Text>{item.전용면적}</Text>
                <Text>{item.거래금액}</Text>
              </Box>
            )}
          />
        </Box>
        <Box bg="muted.200" style={underbar.bar}>
          <Text style={underbar.round}>
            <Link href="/filter/search">검색</Link>
          </Text>
          <Text style={underbar.round}>
            <Link href="/filter/option">설정</Link>
          </Text>
          <Text style={[underbar.round, underbar.main]}>시세</Text>
          <Text style={underbar.round}>
            <Link href="/filter/map">지도</Link>
          </Text>
          <Text style={underbar.round}>
            <Link href="/filter/home">홈</Link>
          </Text>
        </Box>
      </Box>
    </Box>
  )
}


const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'column',
    height: '10vh',
  },
  count: {
    height: '5vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
  filter: {
    width: '15vw',
    height: '5vh',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
  },
  input: {
    width: '10vh',
    height: '5vh',
    marginLeft: '1vw',
    marginRight: '1vw',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 5,
  },
  info: {
    height: '80vh'
  },
  infoItem: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    padding: 10,
  },
});

const underbar = StyleSheet.create({
  bar: {
    flex: 1,
    height: "10vh",
    width: "100vw",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  round: {
    backgroundColor: "lightblue",
    borderRadius: 20,
    width: "10vh",
    height: "10vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  main: {
    backgroundColor: "blue",
    color: "white",
  }
})
