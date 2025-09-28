import React, {useState} from "react"
import { KeyboardAvoidingView, View, Text, TextInput, Pressable } from "react-native"

import estilos from './estilos'
import { Venda } from "./venda"
import { gestorVenda } from "./gestorvenda"

const alteracao = () => {
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
    const buscar = async () => {
        const objetoVenda = await gestor.obterVenda(codigo);
        if (objetoVenda === null) {
            alert("Não existe um cadastro nesse código, tente novamente!");
        }
        setNomeCliente(objetoVenda.nome_cliente);
        setNomeProduto(objetoVenda.nome_produto);
        setQuantidade(objetoVenda.quantidade)
        setPreco(objetoVenda.preco);
        alert("Buscado com sucesso!");
    }
    const alterar = () => {
        const venda = new Venda(codigo, nome_cliente, nome_produto, quantidade, preco);
        if (venda.nome_cliente === '000') {
            gestor.removerVenda(codigo);
            alert("Venda removida com sucesso!");
            limparCampos();
        }
        else if (venda.codigo === '') {
            alert("Você não adicionou o código...");
        }
        else {       
        gestor.alterarVenda(venda);
        alert("Venda alterada com sucesso!");
        limparCampos();
        }
    }
    return (
        <KeyboardAvoidingView style={estilos.KeyboardView} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <View style={estilos.MenuMainView}>
                <View style={estilos.MenuSubView}>
                    <Text style={estilos.MenuMainText}>ALTERAÇÃO</Text>
                    <Text style={estilos.CadastroText}>CÓDIGO VENDA</Text>
                    <TextInput style={estilos.CadastroTextInput} keyboardType="numeric" value={codigo} onChangeText={setCodigo}></TextInput>
                    <Text style={estilos.CadastroText}>NOME CLIENTE</Text>
                    <TextInput style={estilos.CadastroTextInput} value={nome_cliente} onChangeText={setNomeCliente} placeholder="Digite 000 para REMOÇÃO"></TextInput>
                    <Text style={estilos.CadastroText}>NOME PRODUTO</Text>
                    <TextInput style={estilos.CadastroTextInput} value={nome_produto} onChangeText={setNomeProduto}></TextInput>
                    <Text style={estilos.CadastroText}>QUANTIDADE</Text>
                    <TextInput style={estilos.CadastroTextInput} keyboardType="numeric" value={quantidade} onChangeText={setQuantidade}></TextInput>
                    <Text style={estilos.CadastroText}>PREÇO</Text>
                    <TextInput style={estilos.CadastroTextInput} keyboardType="numeric" value={preco} onChangeText={setPreco}></TextInput>
                    <Pressable style={estilos.CadastroPressable} onPress={() => buscar()}><Text style={estilos.CadastroPressableText}>BUSCAR</Text></Pressable>
                    <Pressable style={estilos.CadastroPressable} onPress={() => alterar()}><Text style={estilos.CadastroPressableText}>ALTERAR</Text></Pressable>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

export default alteracao;
