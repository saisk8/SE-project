// Controller to handle all login/* routes
/* eslint-disable no-console */
import Users from '../Models/Users.model';

exports.verifyCredentials = (request, response) => {
  console.log(`${JSON.stringify(request.body, null, 4)}`);
  Users.findOne({ user: request.body.user }).exec((err, doc) => {
    if (err) console.log('An error cooured while verifying');
    if (doc === []) return response.send('Not found');
    if (doc) {
      console.log(`here1 ${doc}`);
      if (doc.password === request.body.password) {
        return response.send('Success');
      }
    }
    return response.send('Invalid');
  });
};
