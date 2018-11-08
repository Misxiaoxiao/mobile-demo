const storage: Storage = window.localStorage;

const buildStorage = (prefix: string) => {
  const get = (key: string) => {
    const Key: string = prefix + key;
    const Value: any = storage.getItem(Key);
    try {
      return JSON.parse(Value);
    } catch (e) {
      return Value;
    }
  };

  const set = (key: string, value: any) => {
    const Key: string = prefix + key;
    let Value: any;
    try {
      Value = JSON.stringify(value);
    } catch (e) {
      Value = value;
    }
    storage.setItem(Key, Value);
  };

  const remove = (key: string) => {
    const Key: string = prefix + key;
    storage.removeItem(Key);
  };

  return {
    get,
    set,
    remove,
  };
};

export default buildStorage;
