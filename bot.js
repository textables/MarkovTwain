const Source = require('./lib/models/Source');
require('./lib/models/Text');
const randomizer = require('./lib/utils/randomizer');
const twitterPost = require('./lib/utils/twitter-post');


const tweetQuote = async () => {
  const randomSource = await randomizer();
  const quoteObject = await Source.returnQuoteObject(randomSource);

  // return this here so you wait for this promise to finish
  return twitterPost(quoteObject);
};

module.exports = tweetQuote;
