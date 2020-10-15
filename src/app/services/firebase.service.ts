import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { query } from '@angular/animations';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})

export class FirebaseService {

  constructor(public db: AngularFirestore, private firebaseAuth: AngularFireAuth) { 

    // Sign in existing user
    this.firebaseAuth.auth
      .signInWithEmailAndPassword("afv1@gmx.net", "spiderman87_")
      .then(value => {
        console.log('logged in!');
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
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
}
