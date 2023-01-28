import React, { useEffect, useState } from 'react';
import { Box } from 'native-base';
import { FlatList } from 'react-native';

import { DetailBackground } from '../../atomic/atoms/DetailBackground';
import { MainBanner } from '../../atomic/molecules';
import { Card } from '../../atomic/molecules/Card';
import { api } from '../../services/api';

export type CardProps = {
  id: string;
  title: string;
  price: number;
  model: string;
  image: string
}

const Home: React.FC = () => {

  const [equipments, setEquipements] = useState<CardProps[]>([]);

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

  return (
    <Box
      flex="1"
      padding="20px"
      pt="-10px"
      position="relative"
    >

      <FlatList
        ListHeaderComponent={() => <MainBanner /> }
        data={equipments}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Card data={item} />
        )}

      />
    </Box>
  );

};

export { Home };