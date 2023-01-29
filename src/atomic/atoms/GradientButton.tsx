import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Center } from 'native-base';
import { Gradient } from './Gradient';

type Props = {
  children: React.ReactNode;
  isGradient?: boolean;
}

const GradientButton = ({ children, isGradient = true }: Props) => {

  return (
    <TouchableOpacity>
      <Center
        shadow="5"
        w="44px"
        h="44px"
        borderRadius="10px"
        bg="primary.50:alpha.9">
        {isGradient ? <Gradient>{children}</Gradient> : children}
      </Center>
    </TouchableOpacity>
  );
};

export { GradientButton };