import { ActivityIndicator } from "react-native";
import AppNavigator from "./navigation/index";
import { Provider } from "react-redux";
import store from "./store/index";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    "Lato-Regular": require("../assets/fonts/Lato-Regular.ttf"),
    "Lato-Bold": require("../assets/fonts/Lato-Bold.ttf"),
    "Lato-Light": require("../assets/fonts/Lato-Light.ttf"),
    "Lato-Black": require("../assets/fonts/Lato-Black.ttf"),
    "Lato-Thin": require("../assets/fonts/Lato-Thin.ttf"),
    "Lato-Italic": require("../assets/fonts/Lato-Italic.ttf"),
  });

  if (!loaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}