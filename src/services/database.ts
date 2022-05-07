/* eslint-disable class-methods-use-this */
import { firestore } from './firebase';

const db = firestore.collection('/games');

class FirestoreService {
  getAll() {
    return db;
  }

  create(value) {
    return db.add(value);
  }

  update(id, value) {
    return db.doc(id).update(value);
  }

  delete(id) {
    return db.doc(id).delete();
  }
}

export default new FirestoreService();
