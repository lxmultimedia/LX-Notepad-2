import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { query } from '@angular/animations';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root',
})

export class FirebaseService {

  userData;

  constructor(public db: AngularFirestore, private firebaseAuth: AngularFireAuth) { 
    this.userData = firebaseAuth.authState;
  }

  createPost(note) {
    return this.db.collection('notes').doc(note.id).set(note);
  }

  deletePost(userKey) {
    return this.db.collection('notes').doc(userKey).delete();
  }

  async getPosts() {
    const snapshot = await this.db.collection('notes').ref.get()
    return snapshot;
  }

  login() {
    // Sign in existing user
    // it's hardcoded here: only 1 user
    // this is a fake e-mail address
    this.firebaseAuth.auth
      .signInWithEmailAndPassword(environment.login.email, environment.login.password)
      .then(value => {
        console.log('logged in!');
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });  
  }

}
