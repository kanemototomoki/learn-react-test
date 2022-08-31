import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { useCounter } from '.';

describe('useCounter', () => {
  test('countが増えること', () => {
    const { result } = renderHook(() => useCounter()); // 1. render hook
    expect(result.current.count).toBe(0);

    act(() => {
      result.current.addCount(); // 2. act addCount
    });
    expect(result.current.count).toBe(1); // 3. check increment
  });
});
