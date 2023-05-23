import { useState, createContext } from 'react';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {

	const [user, setUser] = useState(null);

	const login = (userCredentials) => {
		setUser(userCredentials);
	};

	const logout = () => setUser(null);

	return (
		<AuthContext.Provider
			value={{ user, login, logout }}>
			{children}
		</AuthContext.Provider>);
}