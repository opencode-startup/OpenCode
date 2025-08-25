'use client';

import { useEffect, useState } from 'react';

interface UseTypingAnimationOptions {
  text?: string;
  speed?: number;
  delay?: number;
  showCursor?: boolean;
  humanLike?: boolean;
}

interface UseTypingAnimationReturn {
  displayText: string;
  isComplete: boolean;
  showCursor: boolean;
}

interface TypingStep {
  type: 'type' | 'backspace' | 'pause';
  text?: string;
  duration: number;
}
const keyboardLayout: Record<string, string[]> = {
  // Top row
  q: ['w', 'a', '1', '2'],
  w: ['q', 'e', 'a', 's', '1', '2', '3'],
  e: ['w', 'r', 's', 'd', '2', '3', '4'],
  r: ['e', 't', 'd', 'f', '3', '4', '5'],
  t: ['r', 'y', 'f', 'g', '4', '5', '6'],
  y: ['t', 'u', 'g', 'h', '5', '6', '7'],
  u: ['y', 'i', 'h', 'j', '6', '7', '8'],
  i: ['u', 'o', 'j', 'k', '7', '8', '9'],
  o: ['i', 'p', 'k', 'l', '8', '9', '0'],
  p: ['o', 'l', '9', '0'],

  // Middle row
  a: ['q', 'w', 's', 'z'],
  s: ['a', 'w', 'e', 'd', 'z', 'x'],
  d: ['s', 'e', 'r', 'f', 'x', 'c'],
  f: ['d', 'r', 't', 'g', 'c', 'v'],
  g: ['f', 't', 'y', 'h', 'v', 'b'],
  h: ['g', 'y', 'u', 'j', 'b', 'n'],
  j: ['h', 'u', 'i', 'k', 'n', 'm'],
  k: ['j', 'i', 'o', 'l', 'm'],
  l: ['k', 'o', 'p', 'm'],

  // Bottom row
  z: ['a', 's', 'x'],
  x: ['z', 's', 'd', 'c'],
  c: ['x', 'd', 'f', 'v'],
  v: ['c', 'f', 'g', 'b'],
  b: ['v', 'g', 'h', 'n'],
  n: ['b', 'h', 'j', 'm'],
  m: ['n', 'j', 'k', 'l'],

  // Numbers
  '1': ['2', 'q', 'w'],
  '2': ['1', '3', 'q', 'w', 'e'],
  '3': ['2', '4', 'w', 'e', 'r'],
  '4': ['3', '5', 'e', 'r', 't'],
  '5': ['4', '6', 'r', 't', 'y'],
  '6': ['5', '7', 't', 'y', 'u'],
  '7': ['6', '8', 'y', 'u', 'i'],
  '8': ['7', '9', 'u', 'i', 'o'],
  '9': ['8', '0', 'i', 'o', 'p'],
  '0': ['9', 'o', 'p'],
};

export function useTypingAnimation({
  text = '',
  speed = 100,
  delay = 0,
  showCursor = true,
  humanLike = true,
}: UseTypingAnimationOptions): UseTypingAnimationReturn {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [showCursorState, setShowCursorState] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [typingSteps, setTypingSteps] = useState<TypingStep[]>([]);

  // Generate human-like typing steps with mistakes
  useEffect(() => {
    if (!humanLike || !text) {
      return;
    }

    const steps: TypingStep[] = [];
    const targetText = text;

    // QWERTY keyboard layout typos based on proximity
    const getKeyboardTypos = (char: string): string[] => {
      const lowerChar = char.toLowerCase();
      const typos = keyboardLayout[lowerChar] || [];

      // Return typos in original case (upper/lower)
      return typos.map((typo) => {
        if (char === char.toUpperCase() && char !== char.toLowerCase()) {
          return typo.toUpperCase();
        }
        return typo;
      });
    };

    let currentText = '';

    for (let i = 0; i < targetText.length; i++) {
      const targetChar = targetText[i];

      // 30% chance of making a mistake (but not on first character)
      const shouldMakeMistake = i > 0 && Math.random() < 0.3;
      const availableTypos = getKeyboardTypos(targetChar);

      if (shouldMakeMistake && availableTypos.length > 0) {
        // Type wrong character
        const wrongChar = availableTypos[Math.floor(Math.random() * availableTypos.length)];
        steps.push({
          type: 'type',
          text: currentText + wrongChar,
          duration: speed + Math.random() * 50 - 25, // Variable speed
        });

        // Pause (realization of mistake)
        steps.push({
          type: 'pause',
          duration: 150 + Math.random() * 200,
        });

        // Backspace to correct
        steps.push({
          type: 'backspace',
          text: currentText,
          duration: 50,
        });

        // Short pause before typing correct character
        steps.push({
          type: 'pause',
          duration: 80 + Math.random() * 120,
        });
      }

      // Type correct character
      currentText += targetChar;
      steps.push({
        type: 'type',
        text: currentText,
        duration: speed + Math.random() * 50 - 25, // Variable speed
      });

      // Occasional pause (thinking)
      if (Math.random() < 0.1) {
        steps.push({
          type: 'pause',
          duration: 100 + Math.random() * 150,
        });
      }
    }

    setTypingSteps(steps);
  }, [text, speed, humanLike]);

  // Start typing animation after delay
  useEffect(() => {
    if (!text) return;

    const startTimeout = setTimeout(() => {
      setShowCursorState(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay, text]);

  // Execute typing steps (human-like mode)
  useEffect(() => {
    if (!humanLike || !showCursorState || stepIndex >= typingSteps.length) {
      if (stepIndex >= typingSteps.length && typingSteps.length > 0) {
        setIsComplete(true);
      }
      return;
    }

    const currentStep = typingSteps[stepIndex];

    const stepTimeout = setTimeout(() => {
      if (currentStep.type === 'type' || currentStep.type === 'backspace') {
        setDisplayText(currentStep.text || '');
      }

      setStepIndex((prev) => prev + 1);
    }, currentStep.duration);

    return () => clearTimeout(stepTimeout);
  }, [stepIndex, typingSteps, humanLike, showCursorState]);

  // Simple typing effect (non-human-like mode)
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (humanLike || !showCursorState || currentIndex >= text.length) {
      if (!humanLike && currentIndex >= text.length) {
        setIsComplete(true);
      }
      return;
    }

    const typingTimeout = setTimeout(() => {
      setDisplayText(text.slice(0, currentIndex + 1));
      setCurrentIndex((prev) => prev + 1);
    }, speed);

    return () => clearTimeout(typingTimeout);
  }, [currentIndex, text, speed, showCursorState, humanLike]);

  // Cursor blinking effect
  const [cursorVisible, setCursorVisible] = useState(true);
  useEffect(() => {
    if (!showCursor || !showCursorState) return;

    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 530); // Terminal-like cursor blink speed

    return () => clearInterval(cursorInterval);
  }, [showCursor, showCursorState]);

  return {
    displayText,
    isComplete,
    showCursor: showCursor && showCursorState && cursorVisible,
  };
}
