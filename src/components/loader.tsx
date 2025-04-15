import { ActivityIndicator, View } from "react-native";

export default function Loader(){
    return(
        <View>
            <ActivityIndicator size="large" color="#183257" />
        </View>
    )
}