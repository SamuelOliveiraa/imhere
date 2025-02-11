import Header from "@/components/header";
import Input from "@/components/input";
import List from "@/components/list";
import { colors } from "@/styles/colors";
import { StatusBar, View } from "react-native";

export default function Index() {
  return (
    <View className="px-6 py-8 bg-blue-900 flex-1">
      <StatusBar barStyle={"light-content"} backgroundColor={colors.blue[900]} />
      <Header />
      <Input />
      <View className="border border-white-200 mt-6 " />
      <List />
    </View>
  );
}
