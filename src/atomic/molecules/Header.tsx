import React from 'react';
import { Box, Icon, Text } from 'native-base';
import { GradientButton } from '../atoms/GradientButton';
import { AntDesign } from '@expo/vector-icons';

type Props = {
  text: string;
}

export function Header({ text }: Props) {
  return (
    <Box h="100px" alignItems="center" mt="16px" flexDirection="row" justifyContent="space-between">
      <Text fontSize="lg" fontWeight="bold" color="white">{text}</Text>
      <GradientButton>
        <Icon as={AntDesign} name="search1" color="white" />
      </GradientButton>
    </Box>
  );
}