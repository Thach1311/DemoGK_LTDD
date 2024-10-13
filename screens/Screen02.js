

import { View,Text,TouchableOpacity } from "react-native";

export default function Screen02({navigation}){
    return (
        <View>
            <Text>
                hello screen 2
            </Text>
            <TouchableOpacity onPress={()=>{navigation.navigate("Screen01")}}>
                <Text>Click</Text>
            </TouchableOpacity>
        </View>
    )
}