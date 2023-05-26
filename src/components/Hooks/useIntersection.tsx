import { useEffect, useState } from 'react';
import EffectCallback from './EffectCallbackRunner';

export default function useIntersection(
  element: React.MutableRefObject<any>,
  rate: number,
  callback = (elm: HTMLElement) => {}
): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const effectCleaner = new EffectCallback();

  useEffect(() => {
    effectCleaner.run(() => {
      const elmValue: HTMLElement = element.current;
      observe(elmValue, rate, () => {
        setIsIntersecting(() => true);
        callback(elmValue);
      });
    });
  }, []);

  return isIntersecting;
}

function observe(element: HTMLElement, rate: number, callback: Function) {
  const observer = new IntersectionObserver(
    (entries) => {
      if (!entries[0].isIntersecting) return;
      callback();
      observer.disconnect();
    },
    {
      threshold: rate,
    }
  );
  observer.observe(element);
}
