import { StyleSheet } from 'react-native';
import { Text, Box } from 'native-base';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <Box bg="brand.50" flex={1}>
      <Box style={styles.nw}></Box>
        <Box style={styles.header}>
          <Box style={styles.count}>
            <Text>찾아진 매물의 개수:</Text>
          </Box>
          <Box style={styles.filter}>
            <Link href="/filter">
              <Text style={styles.filterText}>필터</Text>
            </Link>
          </Box>
        </Box>
        <Box style={styles.info}>
          {/* <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Box style={styles.infoItem}>
                <Text>{item.id}</Text>
                <Text>{item.전용면적}</Text>
                <Text>{item.거래금액}</Text>
              </Box>
            )}
          /> */}
        </Box>
        <Box style={underbar.bar}>
          <Link href="/filter/search" style={underbar.round}>
            <Text >검색</Text>
          </Link>
          <Link href="/filter/option" style={underbar.round}>
            <Text >설정</Text>
          </Link>
          <Text style={[underbar.round, underbar.main]}>시세</Text>
          <Link href="/filter/map" style={underbar.round}>
            <Text >지도</Text>
          </Link>
          <Link href="/filter/home" style={underbar.round}>
            <Text>홈</Text>
          </Link>
        </Box>
    </Box>
  )
}

const styles = StyleSheet.create({
  container: {
      width:"100%",
      height:"100%"
  },
  nw: {
    width:"100%",
    height:"5%"
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    height:"10%"
  },
  count: {
    width:"100%",
    height: "50%",
    textAlign:"center",
  },
  filter: {
    width:"15%",
    height: "50%",
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    backgroundColor: "#a5b4fc",
  },
  filterText: {
    color: "white"
  },
  info: {
    width:"100%",
    height:"75%",
  },
});

const underbar = StyleSheet.create({
  bar: {
    display: "flex",
    height: "10%",
    flexDirection: "row",
    justifyContent: "space-between",
    overflow: "hidden",
  },
  round: {
    display: "flex",
    backgroundColor: "#E0DFFF",
    borderRadius: 20,
    width: "20%",
    height: "100%",
    flexDirection: "column",
    textAlign: "center",
    padding: "6%",
  },
  main: {
    backgroundColor: "#9F9FFF",
    color: "black",
  }
})