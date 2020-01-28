(Twitter = require("twitter")),
  (config = require("../../config.js")),
  (module.exports = (message, prefix) => {
    var client = new Twitter({
      consumer_key: "vLdPIrnjQIclSUZnufGn0IjRl",
      consumer_secret: "Mi1pfR9pI41t2GB6lNu9AOUIRoWzVUetq7o804UuBF8j85WmG8",
      access_token_key: "161756148-6ikJqrcms4o8TehvovFSxwYJbE27I8yPG2CIG1Es",
      access_token_secret: "1SyJ1HzPhpqwg5cJ27F5YasltVslnvkQJExWLyUxDZd7F"
    });

    var params = {screen_name:"anicrossing2", count: 100};
    client.get("statuses/GET statuses/show/:id", params, function(
      error,
      tweets,
      response
    ) {
      if (!error) {
        console.log(tweets);
        message.channel.send(tweets);
      }else{
        console.log(error);
      }
    });

  });
