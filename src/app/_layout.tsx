import { IBMPlexSans_400Regular } from '@expo-google-fonts/ibm-plex-sans/400Regular';
import { IBMPlexSans_500Medium } from '@expo-google-fonts/ibm-plex-sans/500Medium';
import { IBMPlexSans_600SemiBold } from '@expo-google-fonts/ibm-plex-sans/600SemiBold';
import { IBMPlexSans_700Bold } from '@expo-google-fonts/ibm-plex-sans/700Bold';
import { useFonts } from 'expo-font';
import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme, View } from 'react-native';

import { StorageBanner } from '@/features/backup/storage-banner';
import { FONTS, useColors } from '@/theme';

export default function RootLayout() {
  const scheme = useColorScheme();
  const c = useColors();
  // Each weight is its own file; a missing font falls back to the system face rather than blocking.
  const [fontsLoaded, fontError] = useFonts({ IBMPlexSans_400Regular, IBMPlexSans_500Medium, IBMPlexSans_600SemiBold, IBMPlexSans_700Bold });
  const base = scheme === 'dark' ? DarkTheme : DefaultTheme;
  const theme = {
    ...base,
    colors: { ...base.colors, primary: c.primary, background: c.background, card: c.surface, text: c.text, border: c.border },
    fonts: {
      regular: { fontFamily: FONTS.regular, fontWeight: '400' as const },
      medium: { fontFamily: FONTS.medium, fontWeight: '500' as const },
      bold: { fontFamily: FONTS.semibold, fontWeight: '600' as const },
      heavy: { fontFamily: FONTS.bold, fontWeight: '700' as const },
    },
  };
  // Native needs the font files before first use; the web swaps them in as they arrive.
  if (!fontsLoaded && !fontError && process.env.EXPO_OS !== 'web') return <View style={{ flex: 1, backgroundColor: c.background }} />;
  return (
    <ThemeProvider value={theme}>
      <StatusBar style="auto" />
      <View style={{ flex: 1 }}>
        <StorageBanner />
        <Stack screenOptions={{ headerBackButtonDisplayMode: 'minimal', contentStyle: { backgroundColor: c.background } }}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false, title: 'Home' }} />
          <Stack.Screen name="practice/[type]/index" options={{ title: 'Practice' }} />
          <Stack.Screen name="practice/[type]/[id]" options={{ title: 'Question' }} />
          <Stack.Screen name="mock/[kind]" options={{ title: 'Mock test', gestureEnabled: false }} />
          <Stack.Screen name="mock/result/[id]" options={{ title: 'Mock report' }} />
          <Stack.Screen name="vocab/review" options={{ title: 'Vocabulary review' }} />
          <Stack.Screen name="settings" options={{ title: 'Settings', presentation: 'modal' }} />
        </Stack>
      </View>
    </ThemeProvider>
  );
}
