export type Question = {
  id: number;
  title: string;
  sessionCode: string;
  AIVote?: number;
  AIDetails?: string;
  finalVote?: number;
}