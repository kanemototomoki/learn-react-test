import userEvent from '@testing-library/user-event';

/**
 * helper of user-event setup
 */
export function userEventSetup(
  options: Parameters<typeof userEvent['setup']>[0] = {}
): ReturnType<typeof userEvent['setup']> {
  return userEvent.setup({
    // useFakeTimer時にjest.advanceTimersByTimeを使ってタイマーを進める
    advanceTimers: jest.advanceTimersByTime,
    ...options,
  });
}
