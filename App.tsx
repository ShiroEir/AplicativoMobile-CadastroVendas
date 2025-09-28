import React from "react"

import { NavigationContainer } from "@react-navigation/native"
import { createDrawerNavigator } from "@react-navigation/drawer"

import Menu from './modulos/menu'
import Cadastro from './modulos/cadastro'
import Alteracao from './modulos/alteracao'
import Listagem from "./modulos/listagem"

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Menu">
        <Drawer.Screen name="Menu" component={Menu}></Drawer.Screen>
        <Drawer.Screen name="Cadastro" component={Cadastro}></Drawer.Screen>
        <Drawer.Screen name="Alteração" component={Alteracao}></Drawer.Screen>
        <Drawer.Screen name="Listagem" component={Listagem}></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;