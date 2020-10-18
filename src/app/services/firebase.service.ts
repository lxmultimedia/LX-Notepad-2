import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { query } from '@angular/animations';


@Injectable({
  providedIn: 'root',
})

export class FirebaseService {

  constructor(public db: AngularFirestore) { 
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
