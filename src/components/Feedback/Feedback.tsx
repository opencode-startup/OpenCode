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
      <div
        className={feedbackTriggerVariants({
          state,
          disabled,
        })}
      >
        <div className={isExpanded ? 'flex w-full flex-col' : ''}>
          <div className="flex items-center gap-2 overflow-hidden px-4 py-2">
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

          {isExpanded && (
            <>
              <div className="relative flex h-[6.25rem] w-full flex-col items-start justify-center gap-1 p-2.5">
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};

Feedback.displayName = 'Feedback';

export default Feedback;
