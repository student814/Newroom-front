import { Slot } from "expo-router";
import { NativeBaseProvider } from "native-base";

export function App(){
    return <NativeBaseProvider>
        <Slot />
    </NativeBaseProvider>
}