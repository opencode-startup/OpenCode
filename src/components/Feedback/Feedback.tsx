'use client';

import { FC } from 'react';

import { Button, Icon } from '@/components';

import { ratingIcons } from './data';
import { useFeedback } from './hooks';
import { FeedbackProps, FeedbackRating } from './types';
import { feedbackRatingButtonVariants, feedbackTriggerVariants } from './variants';

const Feedback: FC<FeedbackProps> = ({
  onRatingSelect,
  onSubmit,
  disabled = false,
  label = 'Feedback',
  textareaPlaceholder = 'Your feedback...',
  sendButtonText = 'Send',
}) => {
  const {
    rating: currentRating,
    state,
    comment,
    isExpanded,
    handleRatingSelect,
    handleSubmit,
    setComment,
    containerRef,
  } = useFeedback({
    onRatingSelect,
    onSubmit,
    disabled,
  });

  const renderRatingButton = (rating: FeedbackRating) => (
    <Button
      key={rating}
      iconOnly
      size={'small'}
      disabled={disabled}
      shape={'rounded'}
      onClick={() => handleRatingSelect(rating)}
      className={feedbackRatingButtonVariants({
        selected: currentRating === rating,
        disabled,
      })}
      aria-label={`Rate ${rating} out of 4`}
    >
      <Icon name={ratingIcons[rating]} size={16} />
    </Button>
  );

  return (
    <div className={'flex flex-col'}>
      <div ref={containerRef} className={feedbackTriggerVariants({ state, disabled })}>
        <div className={isExpanded ? 'flex w-full flex-col' : ''}>
          <div className="flex items-center justify-center gap-2 overflow-hidden px-4 py-2">
            <div
              className="typo-label-14 relative flex shrink-0 flex-col justify-center text-sm leading-none font-normal
                whitespace-nowrap text-gray-900"
            >
              <p className="leading-5 whitespace-pre">{label}</p>
            </div>
            <div className="relative flex shrink-0 items-center gap-0.5">
              {([1, 2, 3, 4] as FeedbackRating[]).map(renderRatingButton)}
            </div>
          </div>

          <div
            className={`overflow-hidden transition-all duration-400 ease-in-out ${
              isExpanded ? 'max-h-[14.4rem] opacity-100' : 'max-h-0 opacity-0' }`}
          >
            <div
              className={`relative flex w-full flex-col items-start justify-center gap-1 p-2.5 transition-all duration-500
                ease-in-out ${isExpanded ? 'h-[7.5rem]' : 'h-[6.25rem]'}`}
            >
              <textarea
                className="bg-background-100 border-gray-alpha-400 relative flex h-full min-h-px w-full min-w-px grow basis-0
                  resize-none items-start rounded border border-solid px-3 py-2.5 text-sm text-gray-700
                  placeholder:text-gray-700 focus:border-transparent focus:ring-2 focus:ring-blue-700
                  focus:outline-none"
                placeholder={textareaPlaceholder}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                disabled={disabled || state === 'submitted'}
              />
            </div>
            <div
              className="bg-gray-alpha-100 relative flex w-full flex-col items-end justify-center gap-2.5 border-t
                border-gray-400 p-2.5"
            >
              <Button
                type="submit"
                size={'small'}
                onClick={() => handleSubmit()}
                disabled={disabled || !currentRating || state === 'submitted'}
              >
                {state === 'submitted' ? 'Sent' : sendButtonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Feedback.displayName = 'Feedback';

export default Feedback;
