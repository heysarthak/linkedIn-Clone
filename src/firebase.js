import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAl-9-nFY_9ZAVp_3JtqK_FxAWpjI5tjm0",
  authDomain: "linkedinclone-1ecc4.firebaseapp.com",
  projectId: "linkedinclone-1ecc4",
  storageBucket: "linkedinclone-1ecc4.appspot.com",
  messagingSenderId: "2985883413",
  appId: "1:2985883413:web:c5e1b85217fb95d2201b1c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
