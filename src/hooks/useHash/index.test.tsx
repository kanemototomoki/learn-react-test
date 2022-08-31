import { renderHook, waitFor } from '@testing-library/react';
import { useHash } from '.';

describe('useHash', () => {
  beforeEach(() => {
    window.location.hash = '#hashMock';
  });

  test('hashが更新されること', async () => {
    const { result } = renderHook(() => useHash());
    expect(result.current.hash).toBe('#hashMock');

    window.location.hash = '#changeHash';

    // 結果を少し待つ必要があるのでwaitForで何度も確認する
    await waitFor(() => expect(result.current.hash).toBe('#changeHash'));
  });
});
