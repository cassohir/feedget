import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import {  View} from 'react-native';
import AppLoading from 'expo-app-loading';
import{useFonts,Inter_400Regular,Inter_500Medium } from '@expo-google-fonts/inter';
import { theme } from './src/theme';
import Widget from './src/components/Widget';
import BottomSheet from '@gorhom/bottom-sheet';

export default function App() {

  const [fontsloaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium

  });
  
  if(!fontsloaded) {

    return <AppLoading />;
  }

  return (
    <View style={{
      flex: 1,
      backgroundColor: theme.colors.background
      
    }}
    >
      

      <StatusBar 
        style="light" 
        backgroundColor="transparent"
    
      
      />

    <Widget/>
    </View>
  );
}


