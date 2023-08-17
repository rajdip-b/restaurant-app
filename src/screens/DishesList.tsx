import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { IDish, TRootStackParamList } from '../../types';
import { FlatList, Text, TextInput, TouchableOpacity } from 'react-native';
import dishes from '../constants/dishes';
import DishItem from '../components/dishes-list/DishItem';
import CustomView from '../components/common/CustomView';
import appColors from '../utils/app-colors';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import DishFilter from '../components/dishes-list/DishFilter';
import specialities from '../constants/specialities';

type Props = NativeStackScreenProps<TRootStackParamList, 'DishesList'>;

const DishesList: React.FC<Props> = ({ navigation }) => {
    const [items, setItems] = React.useState<IDish[]>(dishes);
    const [search, setSearch] = React.useState<string>('');
    const [dishFilterVisible, setDishFilterVisible] = React.useState<boolean>(false);
    const [vegOnly, setVegOnly] = React.useState<boolean>(false);
    const [selectedSpecialities, setSelectedSpecialities] = React.useState<string[]>(specialities);
    const [minRating, setMinRating] = React.useState<number>(1);

    React.useEffect(() => {
        setItems(
            dishes.filter(
                (d) =>
                    d.title.toLowerCase().includes(search.toLowerCase()) &&
                    (vegOnly ? d.isVeg : true) &&
                    d.ratings >= minRating &&
                    d.specialities.some((s) => selectedSpecialities.includes(s)),
            ),
        );
    }, [search, vegOnly, selectedSpecialities, minRating]);

    const handleDishClick = React.useCallback((dish: IDish) => navigation.navigate('DishDetails', { dish }), []);

    return (
        <>
            <DishFilter
                setVegOnly={setVegOnly}
                vegOnly={vegOnly}
                selectedSpecialities={selectedSpecialities}
                setSelectedSpecialities={setSelectedSpecialities}
                minRating={minRating}
                setMinRating={setMinRating}
                isOpen={dishFilterVisible}
                closeModal={() => setDishFilterVisible(false)}
            />
            <FlatList
                ListHeaderComponent={
                    <CustomView className={'w-[92vw] mx-auto gap-y-5 mb-5'}>
                        <CustomView className={'flex flex-row items-center justify-between'}>
                            <CustomView
                                className={
                                    'bg-white px-4 py-3 rounded-lg w-[85%] items-center flex flex-row justify-between'
                                }
                            >
                                <TextInput
                                    className={'bg-white text-dark-gray w-[90%]'}
                                    placeholderTextColor={appColors.mediumGray}
                                    placeholder={'Search by name'}
                                    value={search}
                                    onChangeText={setSearch}
                                />
                                <TouchableOpacity onPress={() => setSearch('')}>
                                    <AntDesign name="closecircle" size={20} color={appColors.black} />
                                </TouchableOpacity>
                            </CustomView>
                            <TouchableOpacity
                                onPress={() => setDishFilterVisible(true)}
                                className={'bg-white rounded-lg p-3 items-center justify-center w-fit'}
                            >
                                <Ionicons name="filter" size={24} color={appColors.black} />
                            </TouchableOpacity>
                        </CustomView>
                        <Text className={'text-dark-gray text-xl font-semibold'}>{items.length} items</Text>
                    </CustomView>
                }
                ListEmptyComponent={() => (
                    <Text className={'text-lg font-semibold text-medium-gray w-[70vw] text-center mx-auto'}>
                        Hmm... Looks like the chefs are on a holiday!
                    </Text>
                )}
                ListFooterComponent={() => <CustomView className={'h-10'} />}
                data={items}
                renderItem={({ item }) => <DishItem onPress={handleDishClick} dish={item} />}
                keyExtractor={(item) => String(item.dishId)}
            />
        </>
    );
};

export default DishesList;
