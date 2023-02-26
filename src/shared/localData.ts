import localforage from 'localforage';

export const saveToLocalDB = (data: any, key: string) => {
  localforage
    .setItem(key, data)
    .then((value) => {
      // console.log('local DB found:', value);
    })
    .catch((err) => {
      console.error('Error saving on local DB!');
      return err;
    });
};

export const removeLocalDB = (key: string) => {
  localforage
    .removeItem(key)
    .then((value) => {
      // console.log('DB removed!', value);
    })
    .catch((err) => {
      console.error(`Error removing ${key} from local DB!`);
      return err;
    });
};

export const getFromLocalDB = async (key: string) => {
  try {
    const value = await localforage.getItem(key);
    return value;
  } catch (err) {
    console.error(err);
    return err;
  }
};
