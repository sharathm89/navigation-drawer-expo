import { AsyncStorage } from "react-native"

export async function getUser() {
	try {
		return await AsyncStorage.getItem("isLogin");
	} catch (error) {
		throw error;
	}
}

export async function setUser() {
	try {
		await AsyncStorage.setItem("isLogin", "1");
	} catch (error) {
		throw error;
	}
}

export async function deleteAll() {
	try {
		await AsyncStorage.clear();
	} catch (error) {
		throw error;
	}
}
