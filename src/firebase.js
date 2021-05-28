import firebase from "firebase/app";

import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCzuZKKtfShMrp8a9rokWEztxN0HqyQOI4",
  authDomain: "yt-clone-98.firebaseapp.com",
  projectId: "yt-clone-98",
  storageBucket: "yt-clone-98.appspot.com",
  messagingSenderId: "857644951032",
  appId: "1:857644951032:web:bb459e02239d843097e20d",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
