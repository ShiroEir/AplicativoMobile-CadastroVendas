import React, { useState } from "react"
import { KeyboardAvoidingView, View, Text, TextInput, Pressable } from "react-native"

import estilos from './estilos'
import { Venda } from "./venda"
import { gestorVenda } from "./gestorvenda"

const cadastro = () => {
    const gestor = new gestorVenda();
    const[codigo,setCodigo] = useState('');
    const[nome_cliente,setNomeCliente] = useState('');
    const[nome_produto,setNomeProduto] = useState('');
    const[quantidade,setQuantidade] = useState('');
    const[preco,setPreco] = useState('');
    const limparCampos = () => {
        setCodigo('');
        setNomeCliente("");
        setNomeProduto("");
        setQuantidade("");
        setPreco("");
    }
    const cadastrarVenda = () => {
        const venda = new Venda(codigo, nome_cliente, nome_produto, quantidade, preco);
        if (venda.codigo === '') {
            alert("Você não adicionou o código...");
        }
        else {
            gestor.adicionarVenda(venda);
            alert("Essa venda foi cadastrada com sucesso!");
            limparCampos();
        }
    }
    return (
        <KeyboardAvoidingView style={estilos.KeyboardView} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <View style={estilos.MenuMainView}>
            <View style={estilos.MenuSubView}>
                <Text style={estilos.MenuMainText}>CADASTRO</Text>
                <Text style={estilos.CadastroText}>CÓDIGO VENDA</Text>
                <TextInput style={estilos.CadastroTextInput} keyboardType="numeric" value={codigo} onChangeText={setCodigo}></TextInput>
                <Text style={estilos.CadastroText}>NOME CLIENTE</Text>
                <TextInput style={estilos.CadastroTextInput} value={nome_cliente} onChangeText={setNomeCliente}></TextInput>
                <Text style={estilos.CadastroText}>NOME PRODUTO</Text>
                <TextInput style={estilos.CadastroTextInput} value={nome_produto} onChangeText={setNomeProduto}></TextInput>
                <Text style={estilos.CadastroText}>QUANTIDADE</Text>
                <TextInput style={estilos.CadastroTextInput} keyboardType="numeric" value={quantidade} onChangeText={setQuantidade}></TextInput>
                <Text style={estilos.CadastroText}>PREÇO</Text>
                <TextInput style={estilos.CadastroTextInput} keyboardType="numeric" value={preco} onChangeText={setPreco}></TextInput>
                <Pressable style={estilos.CadastroPressable} onPress={() => cadastrarVenda()}><Text style={estilos.CadastroPressableText}>CADASTRAR</Text></Pressable>
            </View>
        </View>
        </KeyboardAvoidingView>
    );
};

export default cadastro;
