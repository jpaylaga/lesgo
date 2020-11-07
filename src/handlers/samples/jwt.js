import middy from '@middy/core';
import httpMiddleware from 'Middlewares/httpMiddleware';
import verifyJwtMiddleware from 'Middlewares/verifyJwtMiddleware';
import ping from 'Core/utils/ping';
import app from 'Config/app';

const originalHandler = event => {
  return ping(event.input);
};

// eslint-disable-next-line import/prefer-default-export
export const handler = middy(originalHandler);

handler
  .use(verifyJwtMiddleware())
  .use(httpMiddleware({ debugMode: app.debug }));
