import React from 'react';
import CustomView from '../common/CustomView';

type Props = {
    isVeg: boolean;
};

const VegIndicator: React.FC<Props> = ({ isVeg }) => {
    return (
        <CustomView className={`rounded border ${isVeg ? 'border-green' : 'border-red'} p-1`}>
            <CustomView className={`w-[10px] h-[10px] rounded-full ${isVeg ? 'bg-green' : 'bg-red'}`} />
        </CustomView>
    );
};

export default VegIndicator;
