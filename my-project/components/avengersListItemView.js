import React from 'react';
import {
    Image,
    View,
    Text,
} from 'react-native';

export const AvengersListItemView = ({item}) => {
    return(
        <View className="card">
            <Image ssource={item.avtar} className="card-img-top" alt="Avenger" title="Avenger Image"/>
            <View className="card-body">
                <Text className="card-title"> {item.Name} </Text>
                <Text className="card-text"> {`Powers : ${item.Powers}`} </Text>
                <Text className="card-text"> {item.Description} </Text>
            </View>
        </View>
    )
}