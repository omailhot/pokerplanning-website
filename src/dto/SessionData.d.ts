import { Question } from "./Question";
import { Session } from "./Session";
import { User } from "./User";
import { Vote } from "./Vote";

export type SessionData = {
  code: Session["code"];
  context: Session["context"];
  users: User["username"][];
  features: {
    finalVote?: Question["finalVote"];
    AIVote?: Question["AIVote"];
    AIDetails?: Question["AIDetails"];
    title: Question["title"];
    userVotes: {
      name: User["username"];
      vote: Vote["vote"];
    }[]
  }[]
}