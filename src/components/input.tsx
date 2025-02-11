import Button from "./button";
import { useState } from "react";
import "react-native-get-random-values";
import { itemStorage } from "@/storage/itemStorage";
import { Alert, TextInput, View } from "react-native";

import { v4 as uuidv4 } from "uuid";

type Props = {
  colors?: string;
};

export default function Input({ colors }: Props) {
  const [name, setName] = useState("");

  function handleAdd() {
    try {
      if (name.trim() === "" || name.length <= 2) {
        Alert.alert("Nome Inválido", "Coloque um nome de participante válido, por favor.");
        return;
      }
      const id = uuidv4();
      const item = { id, name };
      itemStorage.add(item);
      setName("");
    } catch (error) {
      Alert.alert("Erro", "Não foi possivel adicionar o Participante");
    }
  }

  return (
    <View className="bg-blue-500 flex-row space-between rounded-sm mt-9 ">
      <TextInput
        placeholder="Nome do Participante"
        className="placeholder:text-blue-400 flex-1 h-12 pl-4 text-white-800"
        value={name}
        onChangeText={data => setName(data)}
        onSubmitEditing={handleAdd}
        returnKeyType="done"
      />
      <Button color={colors} onPress={handleAdd} />
    </View>
  );
}
