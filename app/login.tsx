import { View, Text, TextInput, Pressable, Image, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { MotiView, MotiText, AnimatePresence } from "moti";
import { AntDesign, Feather, MaterialIcons } from "@expo/vector-icons";
import { Easing } from "react-native-reanimated";

export default function LoginScreen() {
  const router = useRouter();
  // Floating particles component
  const FloatingParticles = () => (
    <View style={styles.particlesContainer}>
      {[...Array(20)].map((_, i) => (
        <MotiView
          key={i}
          from={{
            opacity: 0,
            translateY: -100,
            translateX: Math.random() * 400 - 200,
          }}
          animate={{
            opacity: [0, 0.4, 0],
            translateY: 1000,
          }}
          transition={{
            type: "timing",
            duration: 3000 + Math.random() * 2000,
            easing: Easing.linear,
            repeat: Infinity,
            delay: Math.random() * 2000,
          }}
          style={styles.particle}
        >
          <Text style={[styles.particleText, { 
            color: `hsl(${Math.random() * 360}deg 75% 75%)` 
          }]}>
            ★
          </Text>
        </MotiView>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      <FloatingParticles />
      
      {/* Logo Container */}
      <MotiView
        from={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', delay: 100 }}
        style={styles.logoContainer}
      >
        <Text style={styles.logoText}>YourLogo</Text>
      </MotiView>

      {/* Main Form Container */}
      <MotiView
        from={{ translateY: 50, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ type: 'spring', delay: 300 }}
        style={styles.formContainer}
      >
        {/* Email Input */}
        <MotiView 
          from={{ opacity: 0, translateX: -20 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ delay: 600 }}
          style={styles.inputContainer}
        >
          <View style={styles.inputWrapper}>
            <Feather name="mail" size={20} color="#00C2AB" />
            <TextInput
              placeholder="Email address"
              placeholderTextColor="#6b8a94"
              style={styles.input}
              keyboardType="email-address"
            />
          </View>
        </MotiView>

        {/* Password Input */}
        <MotiView 
          from={{ opacity: 0, translateX: -20 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ delay: 700 }}
          style={styles.inputContainer}
        >
          <View style={styles.inputWrapper}>
            <Feather name="lock" size={20} color="#00C2AB" />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#6b8a94"
              style={styles.input}
              secureTextEntry
            />
            <MaterialIcons name="visibility-off" size={20} color="#6b8a94" />
          </View>
        </MotiView>

        {/* Login Button */}
        <MotiView
          from={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', delay: 800 }}
        >
          <Pressable
            style={styles.loginButton}
            onPress={() => router.replace("/homepage")}
          >
            <Text style={styles.buttonText}>Sign In</Text>
          </Pressable>
        </MotiView>

        {/* Divider */}
        <MotiView 
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 900 }}
          style={styles.dividerContainer}
        >
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.dividerLine} />
        </MotiView>

        {/* Social Login */}
        <MotiView
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1000 }}
          style={styles.socialContainer}
        >
          <Pressable style={styles.googleButton}>
            <Image 
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2991/2991148.png' }}
              style={styles.icon}
            />
            <Text style={styles.socialButtonText}>Continue with Google</Text>
          </Pressable>

          <Pressable 
            style={styles.otpButton}
            onPress={() => router.push("/otp-login")}
          >
            <AntDesign name="mobile1" size={20} color="#00C2AB" />
            <Text style={styles.otpButtonText}>Login with Mobile OTP</Text>
          </Pressable>
        </MotiView>

        {/* Signup Link */}
        <MotiView
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1100 }}
          style={styles.signupContainer}
        >
          <Text style={styles.signupText}>Don't have an account? </Text>
          <Pressable onPress={() => router.push("/signup")}>
            <Text style={styles.signupLink}>Create one</Text>
          </Pressable>
        </MotiView>
      </MotiView>

      {/* Bottom Decoration */}
      <MotiView
        animate={{
          scaleX: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          type: 'timing',
          duration: 2000,
          loop: true
        }}
        style={styles.bottomDecoration}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#021A23",
    padding: 24,
  },
  particlesContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
  },
  particle: {
    position: 'absolute',
  },
  particleText: {
    fontSize: 24,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 48,
  },
  logoText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFD700',
  },
  formContainer: {
    backgroundColor: 'rgba(5, 44, 56, 0.9)',
    borderRadius: 24,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 32,
    color: '#FFD700',
  },
  inputContainer: {
    marginBottom: 24,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0a3d4d',
    borderRadius: 12,
    padding: 16,
    gap: 8,
  },
  input: {
    flex: 1,
    color: 'white',
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#00C2AB',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#00C2AB',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#37474F',
  },
  dividerText: {
    color: '#78909C',
    marginHorizontal: 16,
  },
  socialContainer: {
    gap: 16,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#1a4d5c',
    borderRadius: 12,
    padding: 16,
  },
  otpButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderWidth: 2,
    borderColor: '#00C2AB',
    borderRadius: 12,
    padding: 16,
  },
  icon: {
    width: 24,
    height: 24,
  },
  socialButtonText: {
    color: 'white',
    fontSize: 16,
  },
  otpButtonText: {
    color: '#00C2AB',
    fontSize: 16,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  signupText: {
    color: '#78909C',
  },
  signupLink: {
    color: '#00C2AB',
    fontWeight: '600',
  },
  bottomDecoration: {
    position: 'absolute',
    bottom: 40,
    left: 64,
    right: 64,
    height: 2,
    backgroundColor: '#00C2AB',
    borderRadius: 2,
  },
});