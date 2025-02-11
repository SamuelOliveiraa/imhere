import { Text, View } from "react-native";

export default function Header() {
  const newDate = new Date();

  const dateNow = new Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(newDate);

  return (
    <View className="bg-blue-900 gap-2">
      <Text className="text-2xl font-bold color-white-800">Nome do Evento</Text>
      <Text className="text-base color-blue-400">{dateNow}</Text>
    </View>
  );
}
