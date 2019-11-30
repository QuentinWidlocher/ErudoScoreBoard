import Score from "@/models/Score";

export default function toScore(o:firebase.firestore.DocumentSnapshot): Score {
    const score: Score = new Score();
    const data: any = o.data();

    score.id = o.id;
    score.value = data.value;
    score.date = data.date.toDate();
    score.name = data.name;
    score.description = data.description;

    return score;
}