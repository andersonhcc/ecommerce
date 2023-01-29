import React from 'react';
import { TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme, Box } from 'native-base';

type Props = {
  children: React.ReactNode;
}

const GradientButton = ({ children }: Props) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity>
      <Box shadow="5">
        <LinearGradient
          colors={[colors.ocean[100], colors.purple[100]]}
          style={{
            width: 44,
            height: 44,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10
          }}
        >
          {children}
        </LinearGradient>
      </Box>
    </TouchableOpacity>
  );

};

export { GradientButton };