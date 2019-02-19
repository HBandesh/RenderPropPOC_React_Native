import React from 'react';
import {
    FlatList,
} from 'react-native';
import { AvengersListItemView } from "./avengersListItemView";

export const AvengersListView = ({data}) =>{
    return(
        <FlatList className="avenger-lits-wrapper"
                  data={data}
                  renderItem={AvengersListItemView}>
        </FlatList>
    );
};