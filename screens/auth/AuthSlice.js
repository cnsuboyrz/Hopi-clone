// authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  addDoc,
} from "firebase/firestore";

const initialState = {
  user: null,
  email: "",
  password: "",
  status: "idle",
  error: null,
};

export const loginAsync = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
    const auth = getAuth();
    const db = getFirestore();
    try {
      const q = query(collection(db, "users"), where("email", "==", email));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.size > 0) {
        try {
          await signInWithEmailAndPassword(auth, email, password);
        } catch (signInError) {
          throw new Error("Şifre yanlış");
        }
      } else {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        await addDoc(collection(db, "users"), {
          uid: userCredential.user.uid,
          email: email,
        });
      }
    } catch (error) {
      throw error; // Hata durumunu async thunk'a iletebiliriz
    }
  }
);
// export const checkAuthStatus = createAsyncThunk(
//   "auth/checkStatus",
//   async () => {
//     const auth = getAuth();

//     return new Promise((resolve) => {
//       const unsubscribe = onAuthStateChanged(auth, (user) => {
//         resolve(user);
//         unsubscribe();
//       });
//     });
//   }
// );

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    changeEmail: (state, action) => {
      state.email = action.payload;
    },
    changePassword: (state, action) => {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loginAsync.fulfilled, (state) => {
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
    // .addCase(checkAuthStatus.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.user = action.payload;
    // });
  },
});

export const selectEmail = (state) => state.auth.email;
export const selectPassword = (state) => state.auth.password;
export const selectStatus = (state) => state.auth.status;
export const selectError = (state) => state.auth.error;
export const selectUser = (state) => state.auth.user;
export const { changeEmail, changePassword } = authSlice.actions;
export default authSlice;
