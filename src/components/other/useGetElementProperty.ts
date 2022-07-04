import {useCallback} from 'react'
type DOMRectProperty = keyof Omit<DOMRect, 'toJSON'>;
export const useGetElementProperty = <T extends HTMLElement>(
  elementRef: RefObject<T>
) => {
  const GetElementProperty = useCallback((targetProperty: DOMRectProperty): number => {
    const clientRect = elementRef.current?.getBoundingClientRect();
    if (clientRect) {
      return clientRect[targetProperty];
    }

    return 0;
  },[elementRef])
  return {
    GetElementProperty,
  }
}
