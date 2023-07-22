import { Slot } from "expo-router";
import { extendTheme, NativeBaseProvider } from "native-base";
const newColorTheme = {
    brand: {
        900: "#312e81",
        800: "#3730a3",
        700: "#4338ca",
        600: "#4f46e5",
        500: "#6366f1",
        400: "#818cf8",
        300: "#a5b4fc",
        200: "#c7d2fe",
        100: "#e0e7ff",
        50: "#eef2ff",

    },
    Text: {
        baseStyle: {
            color: 'emerald.400'
        },
        defaultProps: {
            size: 'lg'
        },
        sizes: {
            xl: {
                fontSize: '64px'
            },
            lg: {
                fontSize: '32px'
            },
            md: {
                fontSize: '16px'
            },
            sm: {
                fontSize: '12px'
            }
        }
    }
}


export default function App() {
    const theme = extendTheme({ colors: newColorTheme });
    return <NativeBaseProvider theme={theme}>
        <Slot />
    </NativeBaseProvider>
}