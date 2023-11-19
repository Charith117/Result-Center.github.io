const firebaseConfig = {
  apiKey: "AIzaSyB1KI9SJ42kAc4mIIP3hZfWlEUzvwyp6-A",
  authDomain: "result-center.firebaseapp.com",
  databaseURL: "https://result-center-default-rtdb.firebaseio.com",
  projectId: "result-center",
  storageBucket: "result-center.appspot.com",
  messagingSenderId: "64165779818",
  appId: "1:64165779818:web:e747b855a7c23aa56e2d13",
  measurementId: "G-C7FJG8VV3N"
};


const app =initializeApp(firebaseConfig);
const db =getDatabase();
const auth =getAuth(app);


            let regnum = document.getElementById('regnum');
            let email = document.getElementById('email');
            let usertype = document.getElementById('usertype');
            let Faculty = document.getElementById('Faculty');
            let course = document.getElementById('course');
            let Password = document.getElementById('Password');
            let conpassword = document.getElementById('conpassword');


let RegisterUser= evt => {

  evt.preventDefault();

  createUserWithEmailAndPassword(auth.email.value,password.value)
  .then((credentails)=>{
console.log(error.code);
  })
  .catch((error)=>{
    alert(error.message);
    console.log(error.code);
    console.log(error.message);
  })
}