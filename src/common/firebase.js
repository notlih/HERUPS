// import app from 'firebase/app'
// import 'firebase/auth'
// import 'firebase/firebase-firestore'

// const config = {
//     apiKey: "AIzaSyC6di1ZF_w-2JJLM7i87_yqrecjypoE-3Y",
//     authDomain: "fre-sha-voca-do.firebaseapp.com",
//     databaseURL: "https://fre-sha-voca-do.firebaseio.com",
//     projectId: "fre-sha-voca-do",
//     storageBucket: "fre-sha-voca-do.appspot.com",
//     messagingSenderId: "243499719793",
//     appId: "1:243499719793:web:c4c768f741bcdd42d64fd0",
//     measurementId: "G-FMJX3HGGKV"
// }

// class Firebase {
//     constructor() {
//         app.initializeApp(config)
//         this.auth = app.auth()
//         this.db = app.firestore()
//     }

//     login(email, password) {
//         return this.auth.signInWithEmailAndPassword(email, password)
//     }

//     logout() {
//         return this.auth.signOut()
//     }

//     async register(email, email, password) {
//         await this.auth.createUserWithEmailAndPassword(email, password)
//         return this.auth.currentUser.updateProfile({
//             displayName: name
//         })
//     }

//     isIntialized() {
//         return new Promise(resolve =>  {
//             this.auth().onAuthStateChanged(resolve)
//         })
//     }

//     getCurrentUsername() {
//         return this.auth().currentUser && this.auth.currentUser.displayName
//     }
// }

// export default new Firebase()
