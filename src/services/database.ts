/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable class-methods-use-this */
import { firestore } from './firebase';

const db = firestore.collection('/games');

class FirestoreService {
  async getAll() {
    const snapshot = await db.get();
    return snapshot.docs.map(document => document.data());
  }

  async getOne(id: number | undefined) {
    const snapshotID: number[] = [];

    const snapshot = await db
      .where('id', '==', id)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          return snapshotID.push(doc.data().id);
        });
      });

    return snapshotID;
  }

  create(value) {
    return db.add(value);
  }

  update(id, value) {
    return db.doc(id).update(value);
  }

  async delete(id: number) {
    const snapshot = await db
      .where('id', '==', id)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          return db.doc(doc.id).delete();
        });
      });

    return snapshot;
  }
}

export default new FirestoreService();
