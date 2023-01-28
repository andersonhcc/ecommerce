import React from 'react';
import { Text } from 'native-base';

type Props = {
  text: string;
}

const TextAlpha50 = ({ text }: Props) => {
  return <Text fontSize="sm" bold color="white:apha.50">{text}</Text>
};

export { TextAlpha50 };