export default function signUpUser(firstName, lastName) {
  const promise = new Promise((resolve, reject) => { //eslint-disable-line
    resolve({ firstName, lastName });
  });
  return promise.resolve();
}