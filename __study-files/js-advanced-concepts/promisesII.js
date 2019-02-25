function talkLater(seconds, phrase) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(phrase);
    }, seconds * 1000);
  })
}

talkLater(3, 'Done')
  .then(phrase => console.log(phrase))
  .catch(e => console.log(e));