import React, { useEffect, useState } from 'react';
import { Box } from 'native-base';
import { FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { DetailBackground } from '../../atomic/atoms/DetailBackground';
import { Categories } from '../../atomic/organism/Categories';
import { Header } from '../../atomic/molecules/Header';
import { MainBanner } from '../../atomic/molecules/MainBanner';
import { Card } from '../../atomic/molecules/Card';
import { api } from '../../services/api';

export type CardProps = {
  id: string;
  title: string;
  price: number;
  model: string;
  image: string;
  handleRedirect?: (id: string) => void;
}

const Home: React.FC = () => {

  const [equipments, setEquipements] = useState<CardProps[]>([]);
  const { navigate } = useNavigation();

  useEffect(() => {
    getEquipements();
  }, [])

  async function getEquipements() {
    try {
      const { data } = await api.get('equipments');
      setEquipements(data);
    } catch (err) {
      console.log(err);
    }
  }

  function handleDirection(item: CardProps) {
    navigate("Detail", { equipments: item })
  }

  return (
    <Box
      flex="1"
      padding="20px"
      pt="-10px"
      position="relative"
    >


      <FlatList
        ListHeaderComponent={() =>
          <>
            <Header text='Choose Your Bike' />
            <MainBanner />
            <Categories />
          </>
        }
        data={equipments}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Card
            onPress={() => handleDirection(item)}
            data={item}
          />
        )}

      />
    </Box>
  );

};

export { Home };