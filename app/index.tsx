import { StyleSheet } from "react-native";
import { Link } from 'expo-router'
import { Box } from 'native-base'
export default function Page() {
  return (
    <Box style={styles.container}>
      <Box style={styles.main}>
        <Link style={{
          textAlign: 'center',
          fontSize: 30,
          fontWeight: 'bold'
        }} href="/login">시작</Link>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
