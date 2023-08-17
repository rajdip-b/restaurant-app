import React from 'react';
import { Modal, Switch, Text, TouchableOpacity } from 'react-native';
import CustomView from '../common/CustomView';
import { RadioButton } from 'react-native-paper';
import { Checkbox } from 'expo-checkbox';
import specialities from '../../constants/specialities';
import { AntDesign } from '@expo/vector-icons';
import appColors from '../../utils/app-colors';

type Props = {
    isOpen: boolean;
    closeModal: () => void;
    vegOnly: boolean;
    setVegOnly: React.Dispatch<React.SetStateAction<boolean>>;
    selectedSpecialities: string[];
    setSelectedSpecialities: React.Dispatch<React.SetStateAction<string[]>>;
    minRating: number;
    setMinRating: (value: number) => void;
};

const DishFilter: React.FC<Props> = (props) => {
    return (
        <Modal transparent={true} visible={props.isOpen} onRequestClose={props.closeModal}>
            <CustomView className={'w-screen h-screen flex flex-col items-center justify-center bg-black/50'}>
                <CustomView className={'p-5 bg-light-gray w-[80vw] rounded-xl'}>
                    <CustomView className={'w-full flex flex-row justify-between'}>
                        <Text className={'text-xl font-semibold text-dark-gray'}>Filter your dishes</Text>
                        <TouchableOpacity onPress={props.closeModal}>
                            <AntDesign name="closecircle" size={20} color={appColors.black} />
                        </TouchableOpacity>
                    </CustomView>
                    <CustomView className={'flex flex-row items-center'}>
                        <Text className={'text-dark-gray mr-5'}>Veg only</Text>
                        <Switch value={props.vegOnly} onValueChange={() => props.setVegOnly((prev) => !prev)} />
                    </CustomView>
                    <CustomView className={'flex flex-col items-start'}>
                        <Text className={'text-dark-gray mr-5'}>Minimum rating</Text>
                        <CustomView className={'flex flex-row'}>
                            {Array.from({ length: 5 }).map((_, i) => (
                                <CustomView key={i} className={'flex flex-row items-center'}>
                                    <RadioButton
                                        value={Number(i + 1).toPrecision(2)}
                                        status={props.minRating === i + 1 ? 'checked' : 'unchecked'}
                                        onPress={() => props.setMinRating(i + 1)}
                                    />
                                    <Text className={'text-dark-gray ml-2'}>{i + 1}</Text>
                                </CustomView>
                            ))}
                        </CustomView>
                    </CustomView>
                    <CustomView className={'flex flex-col items-start'}>
                        <Text className={'text-dark-gray mr-5'}>Specialities</Text>
                        <CustomView className={'grid grid-cols-2 w-full'}>
                            {specialities.map((s, i) => (
                                <CustomView key={i} className={'flex flex-row items-center'}>
                                    <Checkbox
                                        value={props.selectedSpecialities.includes(s)}
                                        onValueChange={() => {
                                            console.log('clicked');
                                            if (props.selectedSpecialities.includes(s)) {
                                                props.setSelectedSpecialities((prev) => prev.filter((p) => p !== s));
                                            } else {
                                                props.setSelectedSpecialities((prev) => [...prev, s]);
                                            }
                                        }}
                                    />
                                    <Text className={'text-dark-gray ml-2'}>{s}</Text>
                                </CustomView>
                            ))}
                        </CustomView>
                    </CustomView>
                </CustomView>
            </CustomView>
        </Modal>
    );
};

export default DishFilter;
