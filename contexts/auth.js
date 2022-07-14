import React, { createContext, useState, useRef } from "react";
import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext({})

export default function AuthProvider({ children }) {
    const [token, setToken] = useState(null)
    const modalCurrais = useRef(null)
    const modalAnimais = useRef(null)

    function onOpenModalCurrais() {
        modalCurrais.current?.open()
    }

    function onOpenModalAnimais() {
        modalAnimais.current?.open()
    }

    return (
        <AuthContext.Provider value={{
            token, setToken, modalCurrais, onOpenModalCurrais, modalAnimais,
            onOpenModalAnimais
        }}>
            {children}
        </AuthContext.Provider>
    )

}