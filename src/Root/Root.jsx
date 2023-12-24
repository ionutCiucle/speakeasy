import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { store } from "../stateManagement/store";
import Home from "../pages/Home/Home";
import AddDrink from "../pages/AddDrink";
import AddMeal from "../pages/AddMeal";
import CreateSession from "../pages/CreateSession";
import SessionOverview from "../pages/SessionOverview";

const Stack = createNativeStackNavigator();

export const Root = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="CreateSession" component={CreateSession} />
          <Stack.Screen name="SessionOverview" component={SessionOverview} />
          <Stack.Screen name="AddDrink" component={AddDrink} />
          <Stack.Screen name="AddMeal" component={AddMeal} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
