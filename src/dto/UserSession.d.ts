import { Session } from "./Session";
import { User } from "./User";

export type UserSession = {
  userId: User["id"];
  sessionId: Session["code"];
}