import AsyncStorage from "@react-native-async-storage/async-storage";

export class Storage {
  async getTasks() {
    try {
      const value = await AsyncStorage.getItem('tasks');
      return value;
    } catch (error) {
      console.log(error);
    }
  }

  async setTasks(value: string) {
    try {
      await AsyncStorage.setItem('tasks', value);
    } catch (error) {
      console.log(error);
    }
  }

  async removeTasks() {
    try {
      await AsyncStorage.removeItem('tasks');
    } catch (error) {
      console.log(error);
    }
  }
}