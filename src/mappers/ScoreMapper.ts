import Score from "@/models/Score";

export default function toScore(o:any): Score {
    const score: Score = new Score();

    score.value = o.value;
    score.date = o.date.toDate();
    score.name = o.name;
    score.description = o.name;

    return score;
}