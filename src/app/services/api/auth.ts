import { FirebaseError } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { auth } from "@services/firebase";
import { mapAuthCodeToMessage } from "@services/firebase/helpers/mapAuthCodeToMessage";

export async function register(name: string, email: string, password: string) {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    if (auth.currentUser) {
      await updateProfile(auth.currentUser, { displayName: name });
    } else {
      throw Error("Something went wrong!");
    }
  } catch (error) {
    if (error instanceof FirebaseError) {
      throw Error(mapAuthCodeToMessage(error.code));
    }
  }
  throw Error("Something went wrong!");
}

export function login(email: string, password: string) {
  return handleAuthError(async () => {
    await signInWithEmailAndPassword(auth, email, password);
  });
}

async function handleAuthError(authFunction: () => Promise<void>) {
  try {
    await authFunction();
  } catch (error) {
    if (error instanceof FirebaseError) {
      throw Error(mapAuthCodeToMessage(error.code));
    }

    throw Error("Something went wrong! Please try again!");
  }
}
