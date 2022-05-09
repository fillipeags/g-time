/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable class-methods-use-this */
import useAuth from '../hooks/useAuth';
import { firestore } from './firebase';

const db = firestore.collection('games');

interface IGamesCollection {
  id: number;
  name: string;
  userId: string;
}

class FirestoreService {
  async getAll(userID) {
    const snapshotID: IGamesCollection[] = [];

    const snapshot = await db.get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        if (doc.data().userId === userID) {
          snapshotID.push(doc.data() as IGamesCollection);
        }
      });
    });

    return snapshotID;
  }

  async getOne(id: number | undefined, userID: string | undefined) {
    const snapshotID: number[] = [];

    const snapshot = await db
      .where('id', '==', id)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          if (doc.data().userId === userID) {
            snapshotID.push(doc.data().id);
          }
        });
      });

    return snapshotID;
  }

  async create({ id, name }, userId: string | undefined) {
    const user = await firestore
      .collection('user_info')
      .doc(userId)
      .set({ id: userId });

    const games = await db.add({ id, name, userId });

    const data = { games, user };
    return data;
  }

  update(id, value) {
    return db.doc(id).update(value);
  }

  async delete(id: number, userID) {
    const snapshot = await db
      .where('id', '==', id)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          if (doc.data().userId === userID) {
            db.doc(doc.id).delete();
          }
        });
      });

    return snapshot;
  }
}

export default new FirestoreService();
