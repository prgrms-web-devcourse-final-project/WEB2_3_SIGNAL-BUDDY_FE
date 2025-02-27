import { IFeedbackCommentListResponse } from "@/src/types/feedback/feedbackList";

export const fetchCommentList = async (
  id: string
): Promise<IFeedbackCommentListResponse | null> => {
  try {
    const res = await fetch(
      `${process.env.API_BASE_URL}/api/feedbacks/${id}/comments`
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch comments. Status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching comments:", error);
    return null;
  }
};
