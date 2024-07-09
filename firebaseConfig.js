
  import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyCWy8hd8YUFNFNS3XAl6iTqtmSolgGdcqk',
  databaseURL: 'https://console.firebase.google.com/project/storezoid/firestore/databases/-default-/data/~2F',
  projectId: 'storezoid',
  storageBucket: 'storezoid.appspot.com',
  appId: '1:1068791938237:android:8f1532a0f70b1405348bd4',
  
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
