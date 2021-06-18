import firebase from 'firebase';
 
 
 firebase.initializeApp({
 apiKey: '****',
 authDomain: '****',
 databaseURL: '****',
 
 client_secret:'****',
 projectId: '****',
 storageBucket: '****',
 messagingSenderId: '****',
 client_id:
   '****',
 appId:'****',
 REACT_APP_GOOGLE_CLIENT_ID:
   '****',
});
 
export const db = firebase.database();