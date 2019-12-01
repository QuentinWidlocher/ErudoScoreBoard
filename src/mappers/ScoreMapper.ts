import Score from "@/models/Score";
import * as firebase from 'firebase/app';
import 'firebase/firestore';

export default class ScoreMapper {
    public static toScore(o: firebase.firestore.DocumentSnapshot): Score {
        const score: Score = new Score();
        const data: any = o.data();

        score.id = o.id;
        score.value = data.value;
        score.date = data.date.toDate();
        score.name = data.name;
        score.description = data.description;

        return score;
    }

    public static toDocument(o: Score): Object {
        const document: any = Object.assign({}, o);

        document.date = new firebase.firestore.Timestamp(Math.round(o.date.getTime() / 1000), 0);
        delete document.id;
        
        return document;
    }
}

