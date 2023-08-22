console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('data', (data) => {
  if (data) {
    const template = `Your name is: ${data}`;
    process.stdout.write(template);
    process.exit();
  }
});
process.on('exit', () => {
  console.log('This important software is now closing');
});
