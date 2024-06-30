import { db } from '../config/firebaseConfig';

const userCollection = db.collection('USERS');

const updateUser = async (userId: string, data: any) => {
  await userCollection.doc(userId).update(data);
};

const fetchUser = async (userId: string) => {
  const userDoc = await userCollection.doc(userId).get();
  return userDoc.exists ? userDoc.data() : null;
};

const fetchAllUsers = async () => {
  const users = await userCollection.get();
  return users.docs.map((doc) => doc.data());
}

export { updateUser, fetchUser, fetchAllUsers };
