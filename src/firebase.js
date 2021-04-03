// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDRtxdF4-BL4S7gqynJNOGm_xzfNK0Gl_I",
  authDomain: "whatsapp-clone-9ae0f.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-9ae0f.firebaseio.com",
  projectId: "whatsapp-clone-9ae0f",
  storageBucket: "whatsapp-clone-9ae0f.appspot.com",
  messagingSenderId: "447943597368",
  appId: "1:447943597368:web:12b289bcf05c6aa49635cd",
  measurementId: "G-T32FDNQ6JC",
};

//initializing app
const firebaseApp = firebase.initializeApp(firebaseConfig);
//firebase database access
const db = firebaseApp.firestore();
//firebase authentication
const auth = firebase.auth();
//google authentication
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
