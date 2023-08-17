import React from 'react';
import CustomView from './CustomView';
import { Text } from 'react-native';

type Props = {
    speciality: string;
    style?: any;
};

const Speciality: React.FC<Props> = ({ speciality, style }) => {
    return (
        <CustomView style={style} className={'rounded-lg my-1 bg-blue/10 border border-blue px-3 py-1'}>
            <Text className={'text-blue text-sm'}>{speciality}</Text>
        </CustomView>
    );
};

export default Speciality;
