import { StyleSheet } from "react-native"

const estilos = StyleSheet.create({
    KeayboardView: {
        flex: 1,
    },
    MenuMainView: {
        width: "100%",
        height: "100%",
        backgroundColor: "#cecdcdff"
    },
    MenuSubView: {
        width: "80%",
        height: "85%",
        top: "70",
        left: "40",
        backgroundColor: "#ffffff",
        outlineWidth: 3
    },
    MenuMainText: {
        fontWeight: "bold",
        fontSize: 55,
        alignSelf: "center",
        borderBottomWidth: 2
    },
    CadastroText: {
        fontWeight: "bold",
        fontSize: 24,
        left: "20",
        top: "15"
    },
    CadastroTextInput: {
        width: "85%",
        left: "20",
        borderWidth: 1,
        top: "15"
    },
    CadastroPressable: {
        backgroundColor: "#000000",
        width: "70%",
        height: "6%",
        left: "40",
        borderWidth: 1,
        top: "25",
        marginTop: "15",
    },
    CadastroPressableText: {
        color: "#ffffff",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 28
    },
    ListaVendaView: {
        width: "75%",
        left: "30",
        borderBottomWidth: 1,
        marginTop: 10,
        marginBottom: 10,
    },
    ListaVendaTextView: {
        textAlign: "center",
    },
    ListaVendaText: {
        fontWeight: "bold",
        fontSize: "18"
    }
});

export default estilos;