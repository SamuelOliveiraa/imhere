import { Alert, FlatList, Text } from "react-native";
import { useEffect, useState } from "react";
import { ItemsStorageProps, itemStorage } from "@/storage/itemStorage";
import Item from "./item";

export default function List() {
  const [names, setNames] = useState<ItemsStorageProps[]>([]);

  async function getItem() {
    try {
      const response = await itemStorage.get();

      if (!response) {
        setNames([]);
        return;
      }

      setNames(response);
    } catch (error) {
      Alert.alert("Erro", "Não foi possivel listar os participantes");
    }
  }
  useEffect(() => {
    getItem();
  }, [names]);

  function handleRemove(id: number) {

  }

  return (
    <FlatList
      data={names}
      renderItem={({ item }) => (item ? <Item name={item.name} id={item.id}/> : null)}
      ListEmptyComponent={<Text className="color-white-800 mt-8 text-lg text-center">Não há itens para mostrar agora</Text>}
    />
  );
}
