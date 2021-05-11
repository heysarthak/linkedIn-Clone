import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBaI36zk7FWsfFjGAbK7QfAjDQy-goVHf4",
  authDomain: "linkedin-clone-heysarthak.firebaseapp.com",
  projectId: "linkedin-clone-heysarthak",
  storageBucket: "linkedin-clone-heysarthak.appspot.com",
  messagingSenderId: "964047764922",
  appId: "1:964047764922:web:f5f352158588d72d8ff183"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
