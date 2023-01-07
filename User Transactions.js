const request = require('request');

function myFetch(url) {
  return new Promise((resolve, reject) => {
    request(url, function (error, response, body) {
      if(error) reject(error)

      else resolve(body)
    });
  });
}

async function getNumTransactions(username) {
    // write your code here
    const url = "https://jsonmock.hackerrank.com/api/article_users?username=" + username;
    const response = await myFetch(url);
    const data = JSON.parse(response);
    if(data.data.length == 0) return "Username Not Found";
    const urlId = "https://jsonmock.hackerrank.com/api/transactions?userId=" + data.data[0].id;
    const responseId = await myFetch(urlId);
    const dataId = JSON.parse(responseId);
    return dataId.total;
}