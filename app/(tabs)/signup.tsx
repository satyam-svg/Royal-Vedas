import { View, Text, TextInput, Pressable, Image, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { useRouter } from "expo-router";
import { MotiView, MotiText } from "moti";
import { AntDesign, Feather, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Easing } from "react-native-reanimated";

export default function SignupScreen() {
  const router = useRouter();

  const FloatingBackground = () => (
    <MotiView
      from={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1000 }}
      style={styles.backgroundContainer}
    >
      <LinearGradient
        colors={['#021A23', '#0A3D4D', '#1A5C6E']}
        style={styles.gradient}
      />
      <View style={styles.floatingOrbs}>
        {[...Array(6)].map((_, i) => (
          <MotiView
            key={i}
            animate={{
              translateY: [0, -150, 0],
              translateX: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              type: 'timing',
              duration: 4000 + Math.random() * 2000,
              easing: Easing.linear,
              loop: true,
            }}
            style={[
              styles.orb,
              {
                backgroundColor: `hsla(${Math.random() * 360}, 70%, 70%, 0.2)`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }
            ]}
          />
        ))}
      </View>
    </MotiView>
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <FloatingBackground />
      
      {/* Logo Section */}
      <MotiView
        from={{ translateY: -50, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ type: 'spring', delay: 300 }}
        style={styles.logoContainer}
      >
        <Image
          source={require('../../assets/images/splash.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </MotiView>

      {/* Main Form */}
      <MotiView
        from={{ translateY: 100, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ type: 'spring', delay: 500 }}
        style={styles.formContainer}
      >
        {/* Full Name Input */}
        <MotiView
          from={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 700 }}
        >
          <View style={styles.inputContainer}>
            <Feather name="user" size={20} color="#00C2AB" style={styles.inputIcon} />
            <TextInput
              placeholder="Full name"
              placeholderTextColor="#6B8A94"
              style={styles.input}
              autoCapitalize="words"
            />
          </View>
        </MotiView>

        {/* Email Input */}
        <MotiView
          from={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 900 }}
        >
          <View style={styles.inputContainer}>
            <Feather name="mail" size={20} color="#00C2AB" style={styles.inputIcon} />
            <TextInput
              placeholder="Email address"
              placeholderTextColor="#6B8A94"
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
        </MotiView>

        {/* Password Input */}
        <MotiView
          from={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1100 }}
        >
          <View style={styles.inputContainer}>
            <Feather name="lock" size={20} color="#00C2AB" style={styles.inputIcon} />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#6B8A94"
              style={styles.input}
              secureTextEntry
            />
            <Pressable style={styles.visibilityToggle}>
              <MaterialIcons name="visibility-off" size={20} color="#6B8A94" />
            </Pressable>
          </View>
        </MotiView>

        <MotiView
          from={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1100 }}
        >
          <View style={styles.inputContainer}>
            <Feather name="lock" size={20} color="#00C2AB" style={styles.inputIcon} />
            <TextInput
              placeholder="Confirm Password"
              placeholderTextColor="#6B8A94"
              style={styles.input}
              secureTextEntry
            />
            <Pressable style={styles.visibilityToggle}>
              <MaterialIcons name="visibility-off" size={20} color="#6B8A94" />
            </Pressable>
          </View>
        </MotiView>

        {/* Signup Button */}
        <MotiView
          from={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', delay: 1300 }}
        >
          <Pressable
            style={({ pressed }) => [
              styles.signupButton,
              pressed && styles.buttonPressed
            ]}
          >
            <LinearGradient
              colors={['#00C2AB', '#00A8C2']}
              style={styles.buttonGradient}
            >
              <Text style={styles.buttonText}>Create Account</Text>
            </LinearGradient>
          </Pressable>
        </MotiView>

        {/* Social Login Section */}
        <MotiView
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1500 }}
          style={styles.socialContainer}
        >
          <View style={styles.socialDivider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>Or sign up with</Text>
            <View style={styles.dividerLine} />
          </View>

          <View style={styles.socialButtons}>
            <Pressable style={styles.socialButton}>
              <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2991/2991148.png' }}
                style={styles.socialIcon}
              />
            </Pressable>

            <Pressable style={styles.socialButton}>
              <AntDesign name="mobile1" size={24} color="#00C2AB" />
            </Pressable>
          </View>
        </MotiView>
      </MotiView>

      {/* Login Link */}
      <MotiView
        from={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1700 }}
        style={styles.loginLinkContainer}
      >
        <Text style={styles.loginLinkText}>Already have an account? </Text>
        <Pressable onPress={() => router.push('/')}>
          <Text style={styles.loginLink}>Log in</Text>
        </Pressable>
      </MotiView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#021A23',
  },
  backgroundContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  gradient: {
    flex: 1,
  },
  floatingOrbs: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  orb: {
    position: 'absolute',
    width: 150,
    height: 150,
    borderRadius: 75,
    filter: 'blur(50px)',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 30,
  },
  logo: {
    width: 160,
    height: 160,
  },
  formContainer: {
    marginHorizontal: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 30,
    padding: 25,
    backdropFilter: 'blur(10px)',
    shadowColor: '#00C2AB',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 15,
    paddingHorizontal: 20,
    marginBottom: 15,
    height: 50,
  },
  inputIcon: {
    marginRight: 15,
  },
  input: {
    flex: 1,
    color: 'white',
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
  },
  visibilityToggle: {
    padding: 5,
    marginLeft: 10,
  },
  signupButton: {
    borderRadius: 15,
    overflow: 'hidden',
    marginTop: 20,
    shadowColor: '#00C2AB',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  buttonPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
  buttonGradient: {
    paddingVertical: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Inter_700Bold',
    letterSpacing: 0.5,
  },
  socialContainer: {
    marginTop: 25,
  },
  socialDivider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  dividerText: {
    color: '#6B8A94',
    marginHorizontal: 10,
    fontFamily: 'Inter_500Medium',
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 25,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  socialIcon: {
    width: 24,
    height: 24,
  },
  loginLinkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
    marginBottom: 20,
  },
  loginLinkText: {
    color: '#6B8A94',
    fontFamily: 'Inter_400Regular',
  },
  loginLink: {
    color: '#00C2AB',
    fontFamily: 'Inter_600SemiBold',
  },
});