import { Question } from "./Question";
import { User } from "./User";

export type Vote = {
  userId: User["id"];
  questionId: Question["id"];
  vote: number;
}