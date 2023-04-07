import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Accepts and pushes some data to the database
export const putDb = async (content) => {
  const txtEditorDB = await openDB('jate', 1);
  const transVar = txtEditorDB.transaction('jate', 'readwrite');
  const storeVar = transVar.objectStore('jate');
  const request = storeVar.put({ id: 1, value: content });

  const result = await request;
  console.log('Data has been saved to database', result.value);
};

// Pulling all data from database
export const getDb = async () => {
  const txtEditorDB = await openDB('jate', 'readonly');
  const storeVar = trasnVar.objectStore('jate');
  const request = storeVar.get(1);
  const result = await request;
  result
    ? console.log('Data received from the database', result.value)
    : console.log('Data not found');
};

initdb();
