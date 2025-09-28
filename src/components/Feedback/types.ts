export type FeedbackState = 'collapsed' | 'submitted';

export type FeedbackRating = 1 | 2 | 3 | 4;

export interface FeedbackProps {
  onRatingSelect?: (rating: FeedbackRating | null) => void;
  onSubmit?: (rating: FeedbackRating, comment?: string) => void;
  className?: string;
  disabled?: boolean;
  placeholder?: string;
  label?: string;
  textareaPlaceholder?: string;
  sendButtonText?: string;
}

export interface UseFeedbackProps {
  onRatingSelect?: (rating: FeedbackRating | null) => void;
  onSubmit?: (rating: FeedbackRating, comment?: string) => void;
  disabled?: boolean;
}
