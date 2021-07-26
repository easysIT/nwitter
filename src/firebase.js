import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "myapiKey...",
  authDomain: "myauthDomain...",
  projectId: "myprojectId...",
  storageBucket: "mystorageBucket...",
  messagingSenderId: "mymessagingSenderId...",
  appId: "myappId...",
};

export default firebase.initializeApp(firebaseConfig);
