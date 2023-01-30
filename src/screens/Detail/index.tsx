import { useRoute } from '@react-navigation/native';
import { Box, Image } from 'native-base';
import React from 'react';
import { SafeAreaView } from 'react-native';

import { CardProps } from '../Home';

import rectangle from "../../img/rectangle.png";

type Params = {
  equipments: CardProps;
}

const Detail: React.FC = () => {
  const route = useRoute();
  const { equipments } = route.params as Params;


  console.log(equipments);
  

  return (
    <SafeAreaView>
      <Box
        flex={1}
        position="relative"
        justifyContent="center"
        alignItems="center"
      >

        <Image 
          source={rectangle}
          alt="image of detail"
          position="absolute"
          top="-50"
          right="0"
          bottom="0"
        />

      </Box>

    </SafeAreaView>
  );

};

export { Detail };