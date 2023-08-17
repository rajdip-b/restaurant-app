export type TRootStackParamList = {
    DishesList: undefined;
    DishDetails: { dish: IDish };
};

export interface IDish {
    dishId: number;
    title: string;
    description: string;
    price: number;
    image: string;
    specialities: string[];
    isVeg: boolean;
    ratings: number;
    ingredients: string[];
}
