import { useCallback, useEffect, useRef, useState } from 'react';

import { usePrefersReducedMotion } from '@/hooks';

import { FeedbackRating, FeedbackState, UseFeedbackProps } from '../types';

export default function useFeedback({
  onRatingSelect,
  onSubmit,
  disabled = false,
}: UseFeedbackProps) {
  const [rating, setRating] = useState<FeedbackRating | null>(null);
  const [state, setState] = useState<FeedbackState>('collapsed');
  const [comment, setComment] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [initialWidth, setInitialWidth] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Detect user's motion preference for accessibility
  const prefersReducedMotion = usePrefersReducedMotion();
  const shouldAnimate = !prefersReducedMotion;

  const handleRatingSelect = useCallback(
    (newRating: FeedbackRating) => {
      if (disabled) return;

      // If clicking on the same rating, deselect it and collapse
      if (rating === newRating) {
        setRating(null);
        setIsExpanded(false);
        onRatingSelect?.(null);
      } else {
        setRating(newRating);
        setIsExpanded(true);
        onRatingSelect?.(newRating);
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
    setIsExpanded(false);
    setState('collapsed');
  }, []);

  useEffect(() => {
    if (state === 'submitted') {
      setTimeout(() => {
        setIsExpanded(false);
        setTimeout(reset, 400);
      }, 3000);
    }
  }, [state, reset]);

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
  }, [initialWidth, isExpanded, state]);

  useEffect(() => {
    if (isExpanded && inputRef.current) {
      // Add a small delay to ensure the input is visible before focusing
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isExpanded]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isExpanded &&
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setRating(null);
        setIsExpanded(false);
        onRatingSelect?.(null);
      }
    };

    if (state === 'collapsed') {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isExpanded, state, onRatingSelect]);

  return {
    state,
    comment,
    rating,
    isExpanded,
    handleRatingSelect,
    handleSubmit,
    setComment,
    setIsExpanded,
    setState,
    reset,
    containerRef,
    inputRef,
    shouldAnimate,
  };
}
