import React from "react"
import { View, Text } from "react-native"

import estilos from "./estilos"

const Menu = () => {
    return (
        <View style={estilos.MenuMainView}>
            <View style={estilos.MenuSubView}>
                <Text style={estilos.MenuMainText}>MENU</Text>
            </View>
        </View>
    );
};

export default Menu;