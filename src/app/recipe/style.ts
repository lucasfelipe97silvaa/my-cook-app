import { StyleSheet } from "react-native";
import { theme } from '@/theme'

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    image: {
        width: "100%",
        height: 192,
        backgroundColor: theme.colors.gray_300
    },
    body:{
        borderTopStartRadius: theme.borderRadius.lg,
        borderTopEndRadius: theme.borderRadius.lg,
        backgroundColor: theme.colors.white,
        marginTop: -24
    },
    content:{
        padding: 32,
    },
    header:{
        padding: 28
    },
    name:{
        fontSize: theme.fonts.size.heading.md,
        fontFamily: theme.fonts.family.bold,
        marginTop:22,
    },
    time:{
        fontSize: theme.fonts.size.body.sm,
        fontFamily: theme.fonts.family.regular,
        color: theme.colors.gray_400,
    },
    preparation:{
        fontSize: theme.fonts.size.body.sm,
        fontFamily: theme.fonts.family.medium,
        marginBottom: 16
    },
    containerScroll:{
        marginBottom: 14,
        height: 270

    }
})

export { styles }