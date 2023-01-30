import { Box, Image, Text } from 'native-base';
import React from 'react';
import { TouchableOpacity, TouchableOpacityProps} from 'react-native';

import { CardProps } from '../../screens/Home';
import { TextAlpha50 } from '../atoms/TextAlpha50';

type Props = {
  data: CardProps
}

type newProps = Props & TouchableOpacityProps;

const Card = ({ data, ...rest }: newProps) => {

  return (
    <TouchableOpacity
      style={{ padding: 5, width: '50%', height: 240, opacity: 0.9 }}
      {...rest}
    >

      <Box
        borderRadius="20px"
        p="4"
        flex="1"
        shadow="5"
        bg="primary.50:alpha.9" //dando uma opacty pelo alpha
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <Image src={data.image} width="121px" h="80px" alt="image" resizeMode='contain' />
          <Box>
            <TextAlpha50 text={data.title} />
            <Text fontSize="md" bold color="white">{data.model}</Text>
            <TextAlpha50 text={`R$ ${data.price}`} />

          </Box>

        </Box>
      </Box>

    </TouchableOpacity>
  );

};

export { Card };