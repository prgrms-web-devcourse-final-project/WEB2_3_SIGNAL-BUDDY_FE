export interface IFeedbackCommentProps {
  uid: string;
  content: string;
  username: string;
  user_profile: string;
  created_at: Date;
  is_admin: boolean;
}

export interface FeedbackCommentListProps {
  comments: IFeedbackCommentProps[];
}

export interface IFeedbackData {
  uid: number;
  status: string;
  title: string;
  content: string;
  nickname: string;
  date: string;
}
