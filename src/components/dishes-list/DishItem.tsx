import React from 'react';
import { IDish } from '../../../types';
import CustomView from '../common/CustomView';
import { Image, Text, TouchableOpacity } from 'react-native';
import Speciality from '../common/Speciality';
import VegIndicator from './VegIndicator';
import Rating from '../common/Rating';

type Props = {
    dish: IDish;
    onPress: (dish: IDish) => void;
};

const DishItem: React.FC<Props> = ({ dish, onPress }) => {
    return (
        <TouchableOpacity
            onPress={() => onPress(dish)}
            className={'flex flex-row my-2 rounded-lg bg-white w-[92vw] mx-auto p-3 items-start'}
        >
            <Image source={{ uri: dish.image }} className={'w-[90px] h-[90px] rounded-lg'} />
            <CustomView className={'flex flex-col gap-y-1 pl-3 w-[70%]'}>
                <CustomView className={'flex flex-row items-center justify-between'}>
                    <Text className={'font-semibold text-black'}>{dish.title}</Text>
                    <Rating rating={dish.ratings} />
                </CustomView>
                <Text className={'font-semibold text-medium-gray flex-wrap'}>{dish.description}</Text>
                <CustomView className={'flex flex-row flex-wrap gap-x-2'}>
                    {dish.specialities.map((s, index) => (
                        <Speciality speciality={s} key={index} />
                    ))}
                </CustomView>
                <CustomView className={'flex flex-row items-center justify-between'}>
                    <Text className={'font-semibold text-lg text-green'}>$ {dish.price}</Text>
                    <VegIndicator isVeg={dish.isVeg} />
                </CustomView>
            </CustomView>
        </TouchableOpacity>
    );
};

export default DishItem;
