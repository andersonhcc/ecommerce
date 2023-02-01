import React from 'react';
import { Center, Image } from 'native-base';

import { CardProps } from '../../screens/Home';

type Props = {
  showDescription: boolean
  equipments: CardProps;
}

const ImagePreview= ({ showDescription = false, equipments }: Props) => {

  return (
    <Center
      width="100%"
      height={!showDescription ? "280" : "200"}
    >

      <Image
        src={equipments.image}
        w="350px"
        h="250px"
        alt={equipments.title}
        resizeMode="contain"
        flex={1}
      />

    </Center>
  );

};

export { ImagePreview };