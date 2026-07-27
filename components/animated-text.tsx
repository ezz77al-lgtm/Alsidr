'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  variant?: 'fade-up' | 'word-by-word' | 'char-by-char' | 'typewriter';
}

export function AnimatedText({
  text,
  className,
  delay = 0,
  as: Tag = 'span',
  variant = 'fade-up',
}: AnimatedTextProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  if (variant === 'fade-up') {
    return (
      <Tag
        ref={ref as React.RefObject<any>}
        className={cn(
          'inline-block transition-all duration-1000',
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          className
        )}
        style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
      >
        {text}
      </Tag>
    );
  }

  if (variant === 'word-by-word') {
    const words = text.split(' ');
    return (
      <Tag ref={ref as React.RefObject<any>} className={cn(className)}>
        {words.map((word, i) => (
          <span
            key={i}
            className="inline-block overflow-hidden align-bottom"
            style={{ marginRight: '0.25em' }}
          >
            <span
              className="inline-block transition-all duration-700"
              style={{
                transitionDelay: `${delay + i * 80}ms`,
                transform: visible ? 'translateY(0)' : 'translateY(100%)',
                opacity: visible ? 1 : 0,
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              {word}
            </span>
          </span>
        ))}
      </Tag>
    );
  }

  if (variant === 'char-by-char') {
    const chars = text.split('');
    return (
      <Tag ref={ref as React.RefObject<any>} className={cn(className)}>
        {chars.map((char, i) => (
          <span
            key={i}
            className="inline-block transition-all duration-500"
            style={{
              transitionDelay: `${delay + i * 30}ms`,
              transform: visible ? 'translateY(0) rotateX(0)' : 'translateY(100%) rotateX(-90deg)',
              opacity: visible ? 1 : 0,
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </Tag>
    );
  }

  if (variant === 'typewriter') {
    return (
      <Tag ref={ref as React.RefObject<any>} className={cn(className)}>
        <TypewriterText text={text} delay={delay} visible={visible} />
      </Tag>
    );
  }

  return null;
}

function TypewriterText({
  text,
  delay,
  visible,
}: {
  text: string;
  delay: number;
  visible: boolean;
}) {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    if (!visible) return;
    let i = 0;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
        }
      }, 40);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [visible, text, delay]);

  return (
    <>
      {displayed}
      <span className="inline-block w-0.5 h-[1em] bg-current animate-pulse ml-0.5 align-middle" />
    </>
  );
}