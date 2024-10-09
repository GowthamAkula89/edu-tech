import React, { createContext, useContext, useState, useEffect } from "react";
import { auth, googleProvider, signInWithPopup, signOut } from "./firebaseConfig";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const login = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            setIsAuthenticated(true);
            setUser(result.user);
            localStorage.setItem("isAuthenticated", "true");
            setError(null);
        } catch (error) {
            console.error("Login failed", error);
            setError("Login failed. Please try again.");
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
            setIsAuthenticated(false);
            setUser(null);
            localStorage.removeItem("isAuthenticated");
            setError(null);
        } catch (error) {
            console.error("Logout failed", error);
            setError("Logout failed. Please try again.");
        }
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            if (currentUser) {
                setIsAuthenticated(true);
                setUser(currentUser);
                localStorage.setItem("isAuthenticated", "true");
            } else {
                setIsAuthenticated(false);
                setUser(null);
                localStorage.removeItem("isAuthenticated");
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, user, error }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
