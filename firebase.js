// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCN6Q5ylohlv7dOv1062CCaxOPECDgSZsg",
  authDomain: "m-irfan-portfolio.firebaseapp.com",
  databaseURL: "https://m-irfan-portfolio.firebaseio.com",
  projectId: "m-irfan-portfolio",
  storageBucket: "m-irfan-portfolio.appspot.com",
  messagingSenderId: "779544296679",
  appId: "1:779544296679:web:ce0d4ef0df71fe0f13b642",
  measurementId: "G-R6MZWM21ER"
};
//console.log("ok")
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
db.collection('messeges').orderBy("timestamp","desc").onSnapshot(
  (snapshot) => {
    l = snapshot.docs.map(doc => doc.data())
    l.forEach((e) => {
      na = e.name
      text = e.text
      mail = e.mail
      subject = e.subject
      addItems(na, mail, subject, text)
    })

  })


