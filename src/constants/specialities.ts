import dishes from './dishes';

const specialities = dishes.flatMap((dish) => dish.specialities);

export default [...new Set(specialities)];
