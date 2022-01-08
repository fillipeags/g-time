/* eslint-disable no-shadow */
/* eslint-disable react/destructuring-assignment */
import { createContext, ReactNode, useEffect, useState } from 'react';
import ErrorHandler from '../helpers/Toast/Error';
import { auth, firebase } from '../services/firebase';

type User = {
  id: string;
  name: string;
  avatar: string;
};

type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderProps) {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        const { displayName, photoURL, uid } = user;

        if (!displayName || !photoURL) {
          throw new ErrorHandler(
            'Name And/Or Image Missing from Google Account',
          );
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);

    if (result.user) {
      const { displayName, photoURL, uid } = result.user;

      if (!displayName || !photoURL) {
        throw new ErrorHandler('Missing Information from Google Account');
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
      });
    }
  }

  function signOut() {
    try {
      auth.signOut();
      window.location.reload();
      return auth.signOut();
    } catch (error) {
      throw new ErrorHandler('Something Went Wrong with Signing Out');
    }
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle, signOut }}>
      {props.children}
    </AuthContext.Provider>
  );
}
