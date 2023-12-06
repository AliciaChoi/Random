import React from "react";
import { View, SafeAreaView, Text, StyleSheet} from 'react-native';
import GlobalStyles from '../../GlobalStyles';
import { Feather } from '@expo/vector-icons'; 
import RowText from "../components/RowText";

const CurrentWeather = () => {

  const {container, temp, feels, highLowWrapper, highLow, bodyWrapper, description, message} = styles

  return (
    <SafeAreaView style={GlobalStyles.AndroidSafeArea}>
      <View style={container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={temp}>6</Text>
        <Text style={feels}>Feels like 5</Text>
        <RowText 
          messageOne={'High: 8 '} 
          messageTwo={'Low: 6'} 
          containerStyles={highLowWrapper} 
          messageOneStyles={highLow} 
          messageTwoStyles={highLow}
        />
        <RowText 
          messageOne={"It's sunny"} 
          messageTwo={"It's perfect t-shirt weather"} 
          containerStyles={bodyWrapper} 
          messageOneStyles={description} 
          messgaeTwoStyles={message}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create ({
      container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
      },
      temp: {
          color: 'black',
          fontSize: 48
      },
      feels: {
          color: 'black',
          fontSize: 30
      },
      highLow: {
          color: 'black',
          fontSize: 20        
      },
      highLowWrapper: {
          flexDirection: 'row'
      },
      bodyWrapper: {
          justifyContent: 'flex-end',
          alignItems: 'flex-start',
          paddingLeft: 25,
          marginBottom: 20
      },
      description: {
          fontSize: 48
      },
      message: {
          fontSize: 30
      }
  })

export default CurrentWeather

