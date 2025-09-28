import AsyncStorage from "@react-native-async-storage/async-storage"
import { Venda } from './venda'

const asyncAdicionar = async (key: string, value: any) => {
    try{
        const dadoJson = JSON.stringify(value);
        await AsyncStorage.setItem(key,dadoJson);
     } catch (e) {}
}
const asyncAlterar = async(key: string, value: any) => {
    try{
        const dadoJson = JSON.stringify(value);
        await AsyncStorage.mergeItem(key,dadoJson);
    } catch (e) {}
}
const asyncObter = async (key: string) => {
    try{
        const venda = await AsyncStorage.getItem(key);
        if (venda != null) {
            const objeto = JSON.parse(venda);
            return objeto;
        } else { return null; }
    } catch (e) {}
}
const asyncObterTodas = async() => {
    try{
        const chaves = await AsyncStorage.getAllKeys();
        let objetosJSON = await AsyncStorage.multiGet(chaves);
        let objetos: Venda[] = [];
        objetosJSON.forEach(elemento => {
            if (elemento[1] != null) {
                let venda: Venda = JSON.parse(elemento[1]);
                objetos.push(venda);
            } else { return null; }
        });
        return objetos;
        } catch (e) {}
    }
const asyncRemover = async(key: string) => {
    try{
        await AsyncStorage.removeItem(key);
    } catch (e) {}
}

export class gestorVenda {
    public async adicionarVenda(venda: Venda){
        asyncAdicionar(venda.codigo.toString(),venda);
    }
    public async alterarVenda(venda: Venda){
        asyncAlterar(venda.codigo.toString(),venda);
    }
    public async removerVenda(key: string){
        asyncRemover(key);
    }
    public async obterVenda(key: string){
        return asyncObter(key);
    }
    public async obterTodasVendas(){
        return asyncObterTodas();
    }
}