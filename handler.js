'use strict';

module.exports.hello = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `MY_CUSTOM_VAL from env: ${process.env.MY_CUSTOM_VAL}`,
    }),
  };
};