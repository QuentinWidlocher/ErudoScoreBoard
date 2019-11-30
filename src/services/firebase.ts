import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

export class FirebaseService {
    public db: firebase.firestore.Firestore;
    public auth: firebase.auth.Auth;
    public storage: firebase.storage.Reference;

    public constructor() {
        let firebaseConfig = {
            apiKey: "AIzaSyDNYwVQE8IX-l_x2HWTqQkW6KR6jU21j58",
            authDomain: "erudoscoreboard.firebaseapp.com",
            databaseURL: "https://erudoscoreboard.firebaseio.com",
            projectId: "erudoscoreboard",
            storageBucket: "erudoscoreboard.appspot.com",
            messagingSenderId: "560911469792",
            appId: "1:560911469792:web:4a680dcc165b58b25e1485"
        };

        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);

        this.db = firebase.firestore();
        this.auth = firebase.auth();
        this.storage = firebase.storage().ref();

        this.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    }

    public getCurrentUser(): Promise<any> {
        return new Promise<any>(rslv => {
            const unsubscribe = this.auth.onAuthStateChanged((user: any) => {
                unsubscribe();
                rslv(user);
            });
        });
    }
}

export const firebaseService: FirebaseService = new FirebaseService();