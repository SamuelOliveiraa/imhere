import AsyncStorage from "@react-native-async-storage/async-storage";

const ITEM_STORAGE_KEY = "itemStorage";

export type ItemsStorageProps = {
  id: string;
  name: string;
};

async function get(): Promise<ItemsStorageProps[]> {
  const storage = await AsyncStorage.getItem(ITEM_STORAGE_KEY);
  const response = storage ? JSON.parse(storage) : [];

  return response;
}

async function remove(id: string) {
  try {
    const storage = await get();

    const filtered = storage.filter(item => item.id !== id);

    await AsyncStorage.setItem(ITEM_STORAGE_KEY, JSON.stringify(filtered));
  } catch (error) {
    throw error;
  }
}

async function add(newItem: ItemsStorageProps) {
  try {
    const storage = await get();

    const updated = [...storage, newItem];

    await AsyncStorage.setItem(ITEM_STORAGE_KEY, JSON.stringify(updated));
  } catch (error) {
    throw error;
  }
}

export const itemStorage = { get, add, remove };
