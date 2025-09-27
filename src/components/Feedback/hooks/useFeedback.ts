import { useCallback, useEffect, useRef, useState } from 'react';

import { FeedbackRating, FeedbackState, UseFeedbackProps } from '../types';

export default function useFeedback({
  onRatingSelect,
  onSubmit,
  disabled = false,
}: UseFeedbackProps) {
  const [rating, setRating] = useState<FeedbackRating | null>(null);
  const [state, setState] = useState<FeedbackState>('default');
  const [comment, setComment] = useState('');
  const [initialWidth, setInitialWidth] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isExpanded = state === 'expanded' || state === 'submitted';

  const handleRatingSelect = useCallback(
    (newRating: FeedbackRating) => {
      if (disabled) return;

      // If clicking on the same rating, deselect it and collapse
      if (rating === newRating) {
        setRating(null);
        setComment('');
        setState('default');
        onRatingSelect?.(null);
      } else {
        setRating(newRating);
        onRatingSelect?.(newRating);
        setState('expanded');
      }
    },
    [disabled, onRatingSelect, rating],
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

  useEffect(() => {
    if (containerRef.current && initialWidth === null) {
      setInitialWidth(containerRef.current.offsetWidth);
    }
  }, [initialWidth]);

  useEffect(() => {
    if (containerRef.current && initialWidth) {
      const element = containerRef.current;
      element.style.width = isExpanded ? `330px` : `${initialWidth}px`;
    }
  }, [initialWidth, isExpanded]);

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
    containerRef,
  };
}
