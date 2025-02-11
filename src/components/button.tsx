import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, PressableProps } from "react-native";

type ButtonProps = PressableProps & {
  color?: string;
};

export default function Button({ color, ...rest }: ButtonProps) {
  return (
    <Pressable className={`p-2 ${color ? "bg-red-400" : "bg-green-300"} rounded-sm  justify-center items-center`} {...rest}>
      <MaterialIcons name={color ? "remove" : "add"} color={colors.white[800]} size={28} />
    </Pressable>
  );
}
