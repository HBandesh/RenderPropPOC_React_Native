import React from 'react';
import {
    SectionList,
} from 'react-native';
import { AvengersListItemView } from "./avengersListItemView";

export const AvengersListView = ({data}) =>{
    const sections = {data};
    return(
        <React.Fragment>
            {data && data.length ? (
                <SectionList className="avenger-lits-wrapper"
                             sections={sections}
                             renderItem={AvengersListItemView}>
                </SectionList>
            ): null}
        </React.Fragment>
    );
};