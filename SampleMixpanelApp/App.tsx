import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  Button,
  Alert,
} from 'react-native';
import {Mixpanel} from 'mixpanel-react-native';

const App = () => {
  const trackAutomaticEvents = false;
  const useNative = true;
  const mixpanel = new Mixpanel(
    'YOUR_PROJECT_TOKEN_HERE',
    trackAutomaticEvents,
  );

  mixpanel.init();
  mixpanel.setLoggingEnabled(true);
  console.log("If you see this, this means it's working");
  mixpanel.track("Sample Event from React Native SDK");

  const tracking = () => {
    mixpanel.track('button pressed');
  };

  const flush = () => {
    Alert.alert('Flushed Events');
    mixpanel.flush();
  };

  return (
    <ScrollView>
      <Text>Simple React Native App</Text>
      <View>
        <Image
          source={require('./img/smile.png')} // Hello icons created by Xinh Studio - Flaticon
          style={{width: 100, height: 100}}
        />
      </View>
      <Button
        title="Track Call"
        onPress={tracking} // Copy the entire button and set a new function for the rest of the functions
      />
      <Button title="Flush" onPress={flush} />
    </ScrollView>
  );
};

export default App;
