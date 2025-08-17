import { itemStorage } from "@/storage/itemStorage";
import { Alert, Text, View, ViewProps } from "react-native";
import Button from "./button";

type ItemProps = ViewProps & {
  name: string;
  id: string;
};

export default function Item({ name, id }: ItemProps) {
  function handleRemove() {
    try {
      Alert.alert("Remover Participante", `Deseja realmente remover ${name}?`, [
        {
          text: "Não",
          style: "cancel"
        },
        {
          text: "Sim",
          onPress: () => itemStorage.remove(id)
        }
      ]);
    } catch (error) {
      Alert.alert(
        "Erro de Exclusão",
        "Não foi possivel excluir o Participante"
      );
    }
  }
  return (
    <View className="bg-blue-500 flex-row space-between rounded-sm mt-9 ">
      <Text className="flex-1 p-3  pl-4 color-white-800 ">{name}</Text>
      <Button color="red" onPress={handleRemove} />
    </View>
  );
}
