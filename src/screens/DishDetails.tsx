import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TRootStackParamList } from '../../types';
import CustomView from '../components/common/CustomView';
import { Image, ScrollView, Text, TouchableOpacity } from 'react-native';
import Rating from '../components/common/Rating';
import Speciality from '../components/common/Speciality';
import VegIndicator from '../components/dishes-list/VegIndicator';

type Props = NativeStackScreenProps<TRootStackParamList, 'DishDetails'>;

const DishDetails: React.FC<Props> = ({ navigation, route }) => {
    const dish = route.params.dish;

    const handleBackClick = React.useCallback(() => navigation.goBack(), []);

    return (
        <ScrollView className={'h-screen w-screen'}>
            <CustomView className={'flex flex-col gap-y-2 w-[92vw] mx-auto'}>
                <Image source={{ uri: dish.image }} className={'w-full h-[300px] rounded-xl mb-4'} />
                <CustomView className={'flex flex-row w-full justify-between items-center'}>
                    <Text className={'text-xl font-semibold text-black'}>{dish.title}</Text>
                    <Rating rating={dish.ratings} />
                </CustomView>
                <CustomView className={'flex flex-row items-center justify-between'}>
                    <Text className={'font-semibold text-2xl text-green'}>$ {dish.price}</Text>
                    <VegIndicator isVeg={dish.isVeg} />
                </CustomView>
                <Text className={'text-sm text-medium-gray'}>{dish.description}</Text>
                <CustomView className={'flex flex-row flex-wrap gap-x-2 mb-3'}>
                    {dish.specialities.map((s, index) => (
                        <Speciality speciality={s} key={index} />
                    ))}
                </CustomView>
                <Text className={'text-lg font-semibold text-dark-gray'}>Ingredients:</Text>
                <CustomView className={'flex flex-col gap-y-1 mb-5'}>
                    {dish.ingredients.map((i, index) => (
                        <CustomView key={index} className={'flex flex-row gap-x-2 items-center'}>
                            <CustomView className={'w-[5px] h-[5px] rounded-full bg-medium-gray'} />
                            <Text className={'text-medium-gray font-light'}>{i}</Text>
                        </CustomView>
                    ))}
                </CustomView>
                <TouchableOpacity
                    onPress={handleBackClick}
                    className={'border-2 rounded-lg w-full border-blue py-3 my-5'}
                >
                    <Text className={'text-blue text-center text-lg'}>Back To Menu</Text>
                </TouchableOpacity>
            </CustomView>
        </ScrollView>
    );
};

export default DishDetails;
