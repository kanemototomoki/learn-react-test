import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SelectBox } from '.';

describe('SelectBox', () => {
  test('focusがkeyの入力通りに移動すること', async () => {
    render(<SelectBox onClick={() => undefined} />);

    // cellの数
    const cells = screen.getAllByRole('gridcell');
    expect(cells.length).toBe(4);

    // 最初のセルにフォーカスが当たっているか
    const firstCellButton = within(cells[0]).getByRole('button');
    expect(firstCellButton).toHaveFocus();

    const secondCellButton = within(cells[1]).getByRole('button');
    expect(secondCellButton).not.toHaveFocus();

    await userEvent.keyboard('{ArrowRight}');
    expect(secondCellButton).toHaveFocus();

  });
  test.each([
    { key: "{Enter}", keyName: "Enter" },
    {key: " ", keyName: "Space"}
  ])('Enter押下でonClickが呼ばれること', async ({ key }) => {
    const onClickMock = jest.fn();
    render(<SelectBox onClick={onClickMock} />)

    await userEvent.keyboard(`{ArrowRight>3/}`);
    await userEvent.keyboard(key)

    expect(onClickMock).toHaveBeenCalledWith(3)
  })
});
