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

interface Member {
  memberId: number;
  email: string;
  nickname: string;
  profileImageUrl: string;
  role: "USER" | "ADMIN"; // 역할이 정해져 있다면 유니온 타입 사용
  memberStatus: "ACTIVITY" | "INACTIVE";
}

export interface IFeedbackData {
  feedbackId: number;
  subject: string;
  content: string;
  category: "DELAY" | "MALFUNCTION" | "ADD-SIGNAL" | "ETC";
  likeCount: number;
  secret: boolean;
  answerStatus: "BEFORE" | "COMPLETION"; // 상태가 정해져 있다면 유니온 타입 사용
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
  member: Member;
}

interface FeedbackResponse {
  status: string;
  message: string | null;
  data: {
    totalElements: number;
    totalPages: number;
    currentPageNumber: number;
    pageSize: number;
    hasNext: boolean;
    hasPrevious: boolean;
    searchResults: Feedback[];
  };
}
