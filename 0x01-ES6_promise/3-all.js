import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promise = Promise.all([uploadPhoto(), createUser()]);
  return promise.then((values) => {
    const newStr = `${values[0].body} ${values[1].firstName} ${values[1].lastName}`;
    console.log(newStr);
  }).catch(() => console.log('Signup system offline'));
}
