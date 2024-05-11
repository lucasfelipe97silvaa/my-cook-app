import { StyleSheet } from "react-native";
import { theme } from "@/theme";

export const styles = StyleSheet.create({
    container:{
       borderWidth: 2,
       borderColor: theme.colors.gray_200,
       borderRadius: 16,
       paddingHorizontal: 16,
       height: 42,
       alignItems: 'center',
       flexDirection: 'row',
       gap: 6
},
    image: {
        width: 16,
        height: 16,
    }
})