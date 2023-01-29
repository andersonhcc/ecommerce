import React from 'react';
import { Box, HStack, Text, Image } from 'native-base';
import { GradientButton } from '../atoms/GradientButton';

import Bike from "../../img/categories/subtract.png";
import Road from "../../img/categories/road.png";
import Helmet from "../../img/categories/helmet.png";
import Mountain from "../../img/categories/mountain.png";

const Categories: React.FC = () => {

   return (
      <Box mb="20px" mt="5px" alignSelf="center" width="100%">
         <HStack justifyContent="space-between" width="95px">


            <Box ml="20px">
               <GradientButton >
                  <Text color="white">All</Text>
               </GradientButton>
            </Box>

            <Box ml="20px" mt="-10px">
               <GradientButton isGradient={false}>
                  <Image source={Bike} alt="Bike" resizeMode='contain' />
               </GradientButton>
            </Box>


            <Box ml="20px" mt="-20px">

               <GradientButton isGradient={false}>
                  <Image source={Road} alt="Road" resizeMode='contain' />
               </GradientButton>
            </Box>

            <Box ml="20px" mt="-30px">

               <GradientButton isGradient={false}>
                  <Image source={Helmet} alt="Helmet" resizeMode='contain' />
               </GradientButton>
            </Box>

            <Box ml="20px" mt="-40px">
               <GradientButton isGradient={false}>
                  <Image source={Mountain} alt="Bike" resizeMode='contain' />
               </GradientButton>
            </Box>

         </HStack>
      </Box>
   );

};

export { Categories };