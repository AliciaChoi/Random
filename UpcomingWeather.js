import React from 'react';
import { View, SafeAreaView, Text, StyleSheet, FlatList, ImageBackground } from 'react-native';
import GlobalStyles from '../../GlobalStyles';
import { Feather } from '@expo/vector-icons'; 
import ListItem from '../components/ListItem';

const DATA = [
    {
        dt_txt: '2023-02-18 12:00:00',
        main: {
            temp_max: 8.55,
            temp_min: 7.55
        },
        weather: [
            {
                mian: 'Clear'
            }
        ]
    },
    {
        dt_txt: '2023-02-18 15:00:00',
        main: {
            temp_max: 8.55,
            temp_min: 7.55
        },
        weather: [
            {
                mian: 'Clouds'
            }
        ]
    },
    {
        dt_txt: '2023-02-18 10:00:00',
        main: {
            temp_max: 8.55,
            temp_min: 7.55
        },
        weather: [
            {
                mian: 'Rain'
            }
        ]
    },
]

const UpcomingWeather = ( ) => {

    const renderItem = ({item}) => (
        <ListItem 
        condition={item.weather[0].main} 
        dt_txt={item.dt_txt} 
        min={item.main.temp_min} 
        max={item.main.temp_max}
        />
    )

    const {container, image} = styles
    return (
    <SafeAreaView style={[GlobalStyles.AndroidSafeArea, container]}>
            <ImageBackground 
                source={require('../../assets/upcoming-weather-bg.jpg')}
                style={image} 
            >
                <FlatList 
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.dt_txt }
                />
            </ImageBackground>
    </SafeAreaView>
    )

}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: 'royalblue',
    },
    image: {
        flex: 1
    }
})

export default UpcomingWeather