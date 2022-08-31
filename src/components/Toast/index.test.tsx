import { act, render, screen } from '@testing-library/react';
import { userEventSetup } from '@test/userEventSetup';
import { AUTO_CLOSE_TIME, Toast, TOAST_ANIMATION_TIME } from '.';

describe('Toast', () => {
  beforeEach(() => {
    // タイマーをモックする
    jest.useFakeTimers();
  });

  afterEach(() => {
    // 保留中のタイマーを全て実行する
    jest.runOnlyPendingTimers();
    // モックから元のタイマーに戻す
    jest.useRealTimers();
  });

  test('Toastの表示と非表示の確認', async () => {
    const user = userEventSetup();

    render(<Toast>Hello</Toast>);
    expect(screen.queryByRole('alert')).toBeNull();

    await user.click(screen.getByRole('button'));
    expect(screen.getByRole('alert')).toBeInTheDocument();

    act(() => {
      // タイマーをTOAST_ANIMATION_TIME + AUTO_CLOSE_TIMEミリ秒進めて、
      // その経過時間中にsetTimeoutで行われる状態の更新を反映する
      jest.advanceTimersByTime(TOAST_ANIMATION_TIME + AUTO_CLOSE_TIME);
    });

    expect(screen.queryByRole('alert')).toBeNull();
  });
});
