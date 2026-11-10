import { useEffect, useState } from 'react';

/**
 * Types the first name, then the last name on a new line, with a blinking cursor.
 * An invisible copy of the full name reserves the space, so the layout never jumps.
 * Shows the full name instantly for reduced-motion users.
 */
export default function TypedName({ first, last, speed = 85, startDelay = 400 }) {
  const total = first.length + last.length;
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(total);
      return;
    }
    let i = 0;
    let timer;
    const tick = () => {
      i += 1;
      setCount(i);
      if (i < total) {
        // short pause at the line break, like someone hitting Enter
        timer = setTimeout(tick, i === first.length ? speed * 4 : speed);
      }
    };
    timer = setTimeout(tick, startDelay);
    return () => clearTimeout(timer);
  }, [first.length, total, speed, startDelay]);

  const typedFirst = first.slice(0, count);
  const typedLast = last.slice(0, Math.max(0, count - first.length));
  const onLast = count > first.length;
  const cursor = <span className="cursor-blink font-light text-emerald-400">|</span>;

  return (
    <span className="grid" aria-hidden="true">
      {/* reserves the final size */}
      <span className="invisible col-start-1 row-start-1">
        {first}
        <br />
        {last}
      </span>
      {/* the typed text, layered on top */}
      <span className="col-start-1 row-start-1">
        {typedFirst}
        {!onLast && cursor}
        <br />
        <span className="text-neutral-500">{typedLast}</span>
        {onLast && cursor}
      </span>
    </span>
  );
}
