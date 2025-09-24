import { useCallback, useState } from 'react';

import { FeedbackRating, FeedbackState, UseFeedbackProps } from '../types';

export default function useFeedback({
  onRatingSelect,
  onSubmit,
  disabled = false,
}: UseFeedbackProps) {
  const [rating, setRating] = useState<FeedbackRating | null>(null);
  const [state, setState] = useState<FeedbackState>('default');
  const [comment, setComment] = useState('');

  const isExpanded = state === 'expanded' || state === 'submitted';

  const handleRatingSelect = useCallback(
    (rating: FeedbackRating) => {
      if (disabled) return;

      setRating(rating);
      onRatingSelect?.(rating);
      setState('expanded');
    },
    [disabled, onRatingSelect],
  );

  const handleSubmit = useCallback(
    (feedbackComment?: string) => {
      if (!rating || disabled) return;

      onSubmit?.(rating, feedbackComment || comment);
      setState('submitted');
    },
    [rating, disabled, onSubmit, comment],
  );

  const reset = useCallback(() => {
    setRating(null);
    setComment('');
    setState('default');
  }, []);

  return {
    state,
    comment,
    rating,
    isExpanded,
    handleRatingSelect,
    handleSubmit,
    setComment,
    setState,
    reset,
  };
}
