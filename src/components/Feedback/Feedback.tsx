'use client';

import './animation.css';

import clsx from 'clsx';
import { FC } from 'react';

import { Button, Icon, Input } from '@/components';

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
    inputRef,
  } = useFeedback({
    onRatingSelect,
    onSubmit,
    disabled,
  });

  const renderRatingButton = (rating: FeedbackRating) => {
    const isButtonDisabled = disabled || state === 'submitted';

    return (
      <Button
        key={rating}
        iconOnly
        size={'small'}
        disabled={isButtonDisabled}
        shape={'rounded'}
        onClick={() => handleRatingSelect(rating)}
        className={feedbackRatingButtonVariants({
          selected: currentRating === rating,
          disabled: isButtonDisabled,
        })}
        aria-label={`Rate ${rating} out of 4`}
      >
        <Icon name={ratingIcons[rating]} size={16} />
      </Button>
    );
  };

  const renderContent = () => {
    switch (state) {
      case 'submitted':
        return (
          <div className="flex h-[10.75rem] flex-col items-center justify-center gap-2 overflow-hidden p-10 transition-all">
            <Icon name="check-circle-fill" size={32} className="animate-fade-slide-up" />
            <p className="text-gray-1000 typo-label-14 animate-fade-slide-up text-center delay-200">
              Your feedback has been received!
            </p>
            <p className="text-gray-1000 typo-label-14 animate-fade-slide-up text-center delay-400">
              Thank you for your help.
            </p>
          </div>
        );
      case 'collapsed':
        return (
          <div>
            <div className={'relative flex flex-1 flex-col p-2.5'}>
              <Input
                ref={inputRef}
                multiline
                resize="none"
                placeholder={textareaPlaceholder}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                disabled={disabled}
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
                disabled={disabled || !currentRating}
              >
                {sendButtonText}
              </Button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={'flex flex-col'}>
      <div
        ref={containerRef}
        className={feedbackTriggerVariants({
          expanded: isExpanded,
          disabled,
        })}
      >
        <div className={clsx((isExpanded || state === 'submitted') && 'flex w-full flex-col')}>
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
            className={clsx(
              'overflow-hidden transition-all duration-400 ease-in-out',
              isExpanded ? 'max-h-[14.4rem] opacity-100' : 'max-h-0 opacity-0',
            )}
          >
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

Feedback.displayName = 'Feedback';

export default Feedback;
