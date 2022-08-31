import { render, screen } from '@testing-library/react';
import { DateText } from '.';

describe('DateText', () => {
  test('表示の確認', () => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('1991/08/02').getTime());

    render(<DateText />);
    expect(screen.getByText('1991/08/02')).toBeInTheDocument();

    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });
});
