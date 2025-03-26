import React, { useEffect, useState, useRef } from "react";
import { View, Text, StyleSheet, Image, Animated, Easing } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import Svg, { Path, LinearGradient, Stop, Defs, Line } from "react-native-svg";
import { ThemedView } from "../components/ThemedView";
import { ThemedText } from "../components/ThemedText";

SplashScreen.preventAutoHideAsync();

const SplashScreenComponent = ({ navigation }: any) => {
    const [isReady, setIsReady] = useState(false);
    const [fontsLoaded, setFontsLoaded] = useState(false);
    
    // Animation refs
    const leftLineAnim = useRef(new Animated.Value(0)).current;
    const rightLineAnim = useRef(new Animated.Value(0)).current;
    const subtitleOpacityAnim = useRef(new Animated.Value(0)).current;
    const subtitleScaleAnim = useRef(new Animated.Value(0)).current;
    const scaleAnim = useRef(new Animated.Value(0)).current;
    const rotateAnim = useRef(new Animated.Value(0)).current;
    const opacityAnim = useRef(new Animated.Value(0)).current;
    const textTranslateY = useRef(new Animated.Value(20)).current;
    const textOpacity = useRef(new Animated.Value(0)).current;
    const textScale = useRef(new Animated.Value(0.8)).current;

    const loadFonts = async () => {
        await Font.loadAsync({
            "CinzelDecorative-Bold": require("../assets/fonts/CinzelDecorative-Bold.ttf"),
        });
        setFontsLoaded(true);
    };


  

    useEffect(() => {
      let timeout: NodeJS.Timeout | null = null; // Initialize timeout as null
  
      const prepare = async () => {
          try {
              await loadFonts(); // Ensure fonts load before animation
              
              // Start all animations
              Animated.parallel([
                  Animated.timing(scaleAnim, {
                      toValue: 1,
                      duration: 2000,
                      easing: Easing.bezier(0.4, 0, 0.2, 1),
                      useNativeDriver: true,
                  }),
                  Animated.timing(rotateAnim, {
                      toValue: 1,
                      duration: 2000,
                      easing: Easing.linear,
                      useNativeDriver: true,
                  }),
                  Animated.timing(opacityAnim, {
                      toValue: 1,
                      duration: 1500,
                      easing: Easing.ease,
                      useNativeDriver: true,
                  }),
  
                  // Text animations
                  Animated.parallel([
                      Animated.timing(textTranslateY, {
                          toValue: 0,
                          duration: 1500,
                          easing: Easing.out(Easing.quad),
                          useNativeDriver: true,
                      }),
                      Animated.timing(textOpacity, {
                          toValue: 1,
                          duration: 1200,
                          useNativeDriver: true,
                      }),
                      Animated.spring(textScale, {
                          toValue: 1,
                          friction: 3,
                          tension: 40,
                          useNativeDriver: true,
                      }),
                  ]),
  
                  // Lines and subtitle animations
                  Animated.sequence([
                      Animated.delay(800),
                      Animated.parallel([
                          Animated.stagger(200, [
                              Animated.timing(leftLineAnim, {
                                  toValue: 1,
                                  duration: 800,
                                  easing: Easing.out(Easing.quad),
                                  useNativeDriver: true,
                              }),
                              Animated.timing(rightLineAnim, {
                                  toValue: 1,
                                  duration: 800,
                                  easing: Easing.out(Easing.quad),
                                  useNativeDriver: true,
                              }),
                          ]),
                          Animated.parallel([
                              Animated.timing(subtitleOpacityAnim, {
                                  toValue: 1,
                                  duration: 1000,
                                  useNativeDriver: true,
                              }),
                              Animated.spring(subtitleScaleAnim, {
                                  toValue: 1,
                                  friction: 3,
                                  tension: 40,
                                  useNativeDriver: true,
                              }),
                          ]),
                      ]),
                  ]),
              ]).start();
  
              timeout = setTimeout(() => {
                  setIsReady(true);
                  SplashScreen.hideAsync();
                  navigation?.replace("Home");
              }, 2000);
          } catch (error) {
              console.error("Error during animation setup:", error);
          }
      };
  
      prepare();
  
      return () => {
          if (timeout) {
              clearTimeout(timeout);
          }
  
          // Stop all animations when unmounting
          scaleAnim.stopAnimation();
          rotateAnim.stopAnimation();
          opacityAnim.stopAnimation();
          textTranslateY.stopAnimation();
          textOpacity.stopAnimation();
          textScale.stopAnimation();
          leftLineAnim.stopAnimation();
          rightLineAnim.stopAnimation();
          subtitleOpacityAnim.stopAnimation();
          subtitleScaleAnim.stopAnimation();
      };
  }, [navigation]); // Ensure navigation is stable
  
  
  
  

    // Interpolations
    const rotateInterpolate = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    });

    const scaleInterpolate = scaleAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0.3, 1]
    });

    const leftLineTranslate = leftLineAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [-200, 0],
    });

    const rightLineTranslate = rightLineAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [200, 0],
    });

    const subtitleScale = subtitleScaleAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0.8, 1],
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <ThemedView style={styles.container}>
            <Animated.Image 
                source={require("../assets/images/splash.png")} 
                style={[styles.image, {
                    opacity: opacityAnim,
                    transform: [
                        { scale: scaleInterpolate },
                        { rotate: rotateInterpolate }
                    ]
                }]}
            />

            <Animated.View style={[styles.textContainer, {
                opacity: textOpacity,
                transform: [
                    { translateY: textTranslateY },
                    { scale: textScale }
                ]
            }]}>
                <ThemedText style={styles.text}>
                    <Animated.Text style={[styles.highlight, {
                        transform: [{ scale: scaleInterpolate }]
                    }]}>
                        R
                    </Animated.Text>
                    OYAL
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
            </Animated.View>

            <View style={styles.decorationContainer}>
                <Animated.View style={[
                    styles.lineContainer,
                    { 
                        transform: [{ translateX: leftLineTranslate }],
                        opacity: leftLineAnim
                    }
                ]}>
                    <Svg width={89} height={2} viewBox="0 0 89 2" style={styles.line}>
                        <Defs>
                            <LinearGradient id="paint0_linear_70_28" x1="0" y1="1" x2="89" y2="1" gradientUnits="userSpaceOnUse">
                                <Stop offset="0.00166656" stopColor="#021A23" />
                                <Stop offset="1" stopColor="#FFD700" />
                            </LinearGradient>
                        </Defs>
                        <Line 
                            y1="1" 
                            x2="89" 
                            y2="1" 
                            stroke="url(#paint0_linear_70_28)" 
                            strokeWidth={2}
                        />
                    </Svg>
                </Animated.View>

                <Animated.View style={{ 
                    opacity: subtitleOpacityAnim,
                    transform: [{ scale: subtitleScale }]
                }}>
                    <Text style={styles.subtitle}>VASTU AND OCCULT SCIENCE</Text>
                </Animated.View>

                <Animated.View style={[
                    styles.lineContainer,
                    { 
                        transform: [{ translateX: rightLineTranslate }],
                        opacity: rightLineAnim
                    }
                ]}>
                    <Svg width={89} height={2} viewBox="0 0 89 2" style={styles.line}>
                        <Defs>
                            <LinearGradient id="paint0_linear_70_31" x1="89" y1="1" x2="0" y2="1" gradientUnits="userSpaceOnUse">
                                <Stop offset="0.00166656" stopColor="#021A23" />
                                <Stop offset="1" stopColor="#FFD700" />
                            </LinearGradient>
                        </Defs>
                        <Line 
                            x1="89" 
                            y1="1" 
                            y2="1" 
                            stroke="url(#paint0_linear_70_31)" 
                            strokeWidth={2}
                        />
                    </Svg>
                </Animated.View>
            </View>
        </ThemedView>
    );
};

// Keep the same styles as before

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
    textContainer: {
        position: "absolute",
        top: "63%",
        zIndex: 10,
        alignItems: 'center',
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
    svg: {
        marginHorizontal: 4,
    },
    decorationContainer: {
        marginTop: 40,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },
    line: {
        marginTop:0
    },
    subtitle: {
        fontSize: 10,
        fontFamily: "CinzelDecorative-Bold",
        color: "#FFD700",
        marginVertical: 8,
        letterSpacing: 1.5,
    },
    lineContainer: {
        overflow: 'visible',
    },
});

export default SplashScreenComponent;