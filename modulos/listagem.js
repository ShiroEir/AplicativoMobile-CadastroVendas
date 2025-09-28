import React, {useState, useEffect} from "react"
import { View, Text, FlatList, Pressable } from "react-native"

import { useIsFocused } from '@react-navigation/native';

import estilos from './estilos'
import { gestorVenda } from "./gestorvenda";

const Venda = ({venda_codigo, venda_nome_cliente, venda_nome_produto, venda_quantidade, venda_preco}) => (
    <View style={estilos.ListaVendaView}>
        <Text style={estilos.ListaVendaTextView}>
            <Text style={estilos.ListaVendaText}>{venda_codigo} </Text>
            <Text style={estilos.ListaVendaText}>{venda_nome_cliente}  </Text>
        </Text>
        <Text style={estilos.ListaVendaTextView}>
            <Text style={estilos.ListaVendaText}>{venda_nome_produto}</Text>
        </Text>
        <Text style={estilos.ListaVendaTextView}>
            <Text style={estilos.ListaVendaText}>{venda_quantidade}x  </Text>
            <Text style={estilos.ListaVendaText}>R$ {venda_preco}</Text>
        </Text>
    </View>
);

const listagem = () => {
    const gestor = new gestorVenda();
    const [vendas, setVendas] = useState([]);
    useEffect(() => {
        gestor.obterTodasVendas().then(objetos => setVendas(objetos));
    }, [useIsFocused()]);
    const renderizarItem = ({item}) => (
        <Venda venda_codigo={item.codigo} venda_nome_cliente={item.nome_cliente} venda_nome_produto={item.nome_produto} venda_quantidade={item.quantidade} venda_preco={item.preco}></Venda>
    )
    return (
        <View style={estilos.MenuMainView}>
            <View style={estilos.MenuSubView}>
                <Text style={estilos.MenuMainText}>LISTAGEM</Text>
                <FlatList data={vendas} renderItem={renderizarItem}></FlatList>
            </View>
        </View>
    );
};

export default listagem;
