import React from 'react';
import { Button } from 'native-base';

type Props = {
  title: string
}

const ButtonDetail = ({ title } : Props) => {

  return (
    <Button
      _pressed={{ bgColor: 'primary.50' }}
      shadow={1}
      borderRadius="10"
      bg="primary.10"
      w="149"
      h="43"
    >
      {title}
    </Button>
  );

};

export { ButtonDetail };