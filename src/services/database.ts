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

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

  delete(id) {
    return db.doc(id).delete();
  }
}

export default new FirestoreService();
