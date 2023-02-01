import { useRoute } from '@react-navigation/native';
import { Box, Button, HStack, Image, Text, Center } from 'native-base';
import React from 'react';

import { CardProps } from '../Home';
import { ButtonDetail } from '../../atomic/atoms/ButtonDetail';

import rectangle from "../../img/rectangle.png";
import { ImagePreview } from '../../atomic/atoms/ImagePreview';

type Params = {
  equipments: CardProps;
}

const Detail: React.FC = () => {
  const route = useRoute();
  const { equipments } = route.params as Params;

  return (
    <>
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

        <ImagePreview showDescription={false} equipments={equipments} />

      </Box>


      {true ? <Box
        bg="primary.100"
        justifyContent="center"
        p="7"
        borderTopRadius={30}
        shadow={5}
        h="110px"
      >

        <HStack
          w="100%"
          justifyContent="space-between"
        >
          <ButtonDetail title='Description' />
          <ButtonDetail title='Specification' />

        </HStack>

      </Box> :
        <Box
          bg="primary.100"
          borderTopRadius={30}
          shadow={5}
          h="460px"
        >

          <Box pl="7" p="7" pt="7">

            <HStack
              w="100%"
              justifyContent="space-between"
            >
              <ButtonDetail title='Description' />
              <ButtonDetail title='Specification' />
            </HStack>

            <Box mt="30">
              <Text bold color="white" fontSize="17">{equipments.title}</Text>

              <Text bold color="white" opacity="0.7" mt="8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam eget ante ex. Aliquam commodo tempor rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada
                fames ac turpis egestas. Quisque ante erat, vulputate vitae congue et, sollicitudin vestibulum tellus. Donec pharet
              </Text>

            </Box>

          </Box>

          <HStack
            bg="primary.200"
            borderTopRadius={30}
            justifyContent="space-between"
            shadow={5}
            h={100}
            width="100%"
            mt="30"
            alignItems="center"
            p="7"
          >

            <Text bold color="ocean.200" fontSize="17">{equipments.price}</Text>

            <Button
              w="149"
              h="43"
              _pressed={{
                bgColor:
                  'transparent'
              }}
              bgColor="transparent"
              alignItems="center"
              justifyContent="center"
              shadow={5}
              bg="ocean.200"
            >
              Add to Cart
            </Button>
          </HStack>
        </Box>
      }


    </>
  );
};

export { Detail };