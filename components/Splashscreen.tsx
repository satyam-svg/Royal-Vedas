import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import Svg, { Path, LinearGradient, Stop, Defs, Line } from "react-native-svg";
import { ThemedView } from "../components/ThemedView";
import { ThemedText } from "../components/ThemedText";

SplashScreen.preventAutoHideAsync();

const SplashScreenComponent = ({ navigation }: any) => {
  const [isReady, setIsReady] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        "CinzelDecorative-Bold": require("../assets/fonts/CinzelDecorative-Bold.ttf"),
      });
      setFontsLoaded(true);
    };

    const prepare = async () => {
      await loadFonts();
      await new Promise((resolve) => setTimeout(resolve, 5000));
      setIsReady(true);
      await SplashScreen.hideAsync();
      if (navigation) {
        navigation.replace("Home");
      }
    };

    prepare();
  }, [navigation]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemedView style={styles.container}>
      <Image source={require("../assets/images/splash.png")} style={styles.image} />

      <ThemedText style={styles.text}>
        <Text style={styles.highlight}>R</Text>OYAL
        <Svg width={25} height={20} viewBox="0 0 24 21" style={styles.svg}>
          <Defs>
            <LinearGradient id="paint0_linear" x1="11.5" y1="0" x2="11.5" y2="20">
              <Stop stopColor="#FFD700" />
              <Stop offset="1" stopColor="#C68919" />
            </LinearGradient>
            <LinearGradient id="paint1_linear" x1="11.5" y1="0.021" x2="11.536" y2="20.021">
              <Stop stopColor="#FFD700" />
              <Stop offset="1" stopColor="#C68919" />
            </LinearGradient>
          </Defs>
          <Path 
            d="M11.5 0L21.4593 15H1.54071L11.5 0Z" 
            fill="url(#paint0_linear)" 
          />
          <Path
            d="M11.5358 20.0205L1.54966 5.03838L21.4682 5.00272L11.5358 20.0205Z"
            fill="url(#paint1_linear)"
          />
        </Svg>
         VEDAS
      </ThemedText>

      <View style={styles.decorationContainer}>
        <Svg width={89} height={1} viewBox="0 0 89 1" style={styles.line}>
          <Defs>
            <LinearGradient id="paint0_linear_70_28" x1="0" y1="1.5" x2="89" y2="1.5" gradientUnits="userSpaceOnUse">
              <Stop offset="0.00166656" stopColor="#021A23"/>
              <Stop offset="1" stopColor="#FFD700"/>
            </LinearGradient>
          </Defs>
          <Line y1="0.5" x2="89" y2="0.5" stroke="url(#paint0_linear_70_28)"/>
        </Svg>

        <Text style={styles.subtitle}>VASTU AND OCCULT SCIENCE</Text>

        <Svg width={89} height={1} viewBox="0 0 89 1" style={styles.line}>
          <Defs>
            <LinearGradient id="paint0_linear_70_31" x1="89" y1="-0.5" x2="0" y2="-0.5" gradientUnits="userSpaceOnUse">
              <Stop offset="0.00166656" stopColor="#021A23"/>
              <Stop offset="1" stopColor="#FFD700"/>
            </LinearGradient>
          </Defs>
          <Line x1="89" y1="0.5" y2="0.5" stroke="url(#paint0_linear_70_31)"/>
        </Svg>
      </View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021A23",
  },
  text: {
    fontSize: 37,
    fontFamily: "CinzelDecorative-Bold",
    color: "white",
    position: "absolute",
    top: "63%",
    zIndex: 10,
    textAlign: "center",
    paddingVertical: 10,
    lineHeight: 70,
  },
  highlight: {
    fontSize: 67,
    color: "white",
    fontFamily: "CinzelDecorative-Bold",
  },
  image: {
    width: 360,
    height: 360,
    resizeMode: "contain",
    position: "relative",
  },
  svg: {},
  decorationContainer: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  line: {
    marginTop: -2
  },
  subtitle: {
    fontSize: 10,
    fontFamily: "CinzelDecorative-Bold",
    color: "#FFD700",
    marginVertical: 8,
    letterSpacing: 1.5,
  }
});

export default SplashScreenComponent;