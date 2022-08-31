import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button, ButtonClass } from '.';

describe('Button', () => {
  test('onClickが呼ばれること', async () => {
    const onClickMock = jest.fn();
    render(<Button onClick={onClickMock}>label</Button>);
    await userEvent.click(screen.getByRole('button'));

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  test('classのonClickが呼ばれること', async () => {
    const onClickMock = jest.fn();
    render(<ButtonClass onClick={onClickMock}>label</ButtonClass>);
    await userEvent.click(screen.getByRole('button'));

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
