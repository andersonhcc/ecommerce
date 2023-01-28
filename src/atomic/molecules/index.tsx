import React from 'react';
import { ImageBackground } from 'react-native';
import { Box, Image } from 'native-base';

import Slider from '../../img/slider.png';
import Bike from '../../img/bike.png';


const MainBanner: React.FC = () => {

  return (
    <Box
      w="100%"
      h="300"
      mt="60px" 
      position="absolute"
      >
      
      <ImageBackground 
      source={Slider}
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} 
      resizeMode="contain" 
      >
        <Image source={Bike} alt="img bike"/>

      </ImageBackground>
    
    
    </Box>
  
  
  );

};

export { MainBanner };