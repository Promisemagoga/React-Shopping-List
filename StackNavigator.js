import Welcome from "./Components/Welcome"
import AddForm from './Components/AddForm';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import DisplayList from "./Components/DisplayList";
function StackNavigator() {

    const Stack = createNativeStackNavigator()


    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Group>
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="display" component={DisplayList} />
                <Stack.Screen name="AddForm" component={AddForm} />
            </Stack.Group>
        </Stack.Navigator>
    )
}

export default StackNavigator