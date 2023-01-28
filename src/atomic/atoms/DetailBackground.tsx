import React from 'react';
import { Image } from 'native-base';

import Detail from '../../img/detail.png';


const DetailBackground: React.FC = () => {

    return (
        <Image
            source={Detail}
            alt="detail of home"
            top="140"
            bottom="0"
            right="0"
        />
    );

};

export { DetailBackground };