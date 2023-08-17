import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import appColors from '../../utils/app-colors';
import { Text } from 'react-native';
import CustomView from './CustomView';

type Props = {
    rating: number;
};

const Rating: React.FC<Props> = ({ rating }) => {
    return (
        <CustomView className={'flex flex-row gap-x-1 items-center'}>
            <AntDesign name="star" size={24} color={appColors.chromeYellow} />
            <Text className={'font-semibold text-dark-gray text-sm'}>{Number(rating).toPrecision(2)}</Text>
        </CustomView>
    );
};

export default Rating;
