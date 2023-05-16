//se tirar a linha 2 a tela de registro não abre, 
//ela faz com que o app entenda que estamos  usando o banco firebase
import { db }  from "../firebase/config"; 

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
} from "firebase/auth";
  
import { useState, useEffect } from "react";
  
export const useAuthentication = () => {
  
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    const [cancelled, setCancelled] = useState(false);
  
    const auth = getAuth();
  
    function checkIfIsCancelled() {
      if (cancelled) {
        return;
      }
    }

    const createUser = async (data) => {
     
      checkIfIsCancelled();
      setLoading(true);
      setError(null);
  
      try {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );

        await updateProfile(user, {
          displayName: data.displayName,
        });

        setLoading(false);
        return user;

      } catch (error) {
               
        let systemErrorMessage;
  
        if (error.message.includes("Password")) {
          systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres.";
        } else if (error.message.includes("email-already")) {
          systemErrorMessage = "E-mail já cadastrado.";
        } else {
          systemErrorMessage = "Ocorreu um erro, por favor tenta mais tarde.";
        }
        
        setLoading(false);
        setError(systemErrorMessage);

      }
    };

    const logout = () => {
      checkIfIsCancelled();
      signOut(auth);
    }

    

    const login = async (data) => {
        checkIfIsCancelled();
        setLoading(true);
        setError('');
        
        try {
          await signInWithEmailAndPassword(auth, data.email, data.password);
          setLoading(false);
        } catch (error) {
              
          let systemErrorMessage;
          if (error.message.includes("user-not-found")) {
            systemErrorMessage = "Usuário não encontrado.";
          } else if (error.message.includes("wrong-password")) {
            systemErrorMessage = "Senha incorreta.";
          } else {
            systemErrorMessage = "Ocorreu um erro, por favor tenta mais tarde.";
          }
        
          setError(systemErrorMessage);
          setLoading(false);
        }
    }
    // colocar o cancelado com true assim que sair da pagina
    useEffect(() => {
      return () => setCancelled(true);
    }, []);
  
    return {
      auth,
      createUser,
      error,
      loading,
      logout,
      login
    };
} 