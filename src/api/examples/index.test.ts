import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { getExamples, GetExamplesResponse } from '.';

describe('/examples', () => {
  const server = setupServer();
  beforeAll(() => server.listen());
  beforeEach(() => {
    server.use(
      rest.get('/examples', async (_req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json<GetExamplesResponse>({
            examples: [
              { id: '1', name: 'user1' },
              { id: '2', name: 'user2' },
              { id: '3', name: 'user3' },
            ],
          })
        );
      })
    );
  });

  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test('getでデータがとれること', async () => {
    const response = await getExamples();
    expect(response).toStrictEqual({
      examples: [
        { id: '1', name: 'user1' },
        { id: '2', name: 'user2' },
        { id: '3', name: 'user3' },
      ],
    });
  });
});
