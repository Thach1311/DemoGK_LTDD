

import { View,Text,TouchableOpacity } from "react-native";

export default function Screen01({navigation}){
    return (
        <View>
            <Text>
                hello screen 1
            </Text>
            <TouchableOpacity onPress={()=>{navigation.navigate("Screen02")}}>
                <Text>Click</Text>
             
            </TouchableOpacity>
        </View>
    )
}