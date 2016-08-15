var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true })

nightmare
  .goto('http://amazon.com')
  .type('#twotabsearchtextbox', 'github nightmare')
  .click('.nav-input')
  .wait('#main')
  .evaluate(function () {
    return document.querySelector('#main .searchCenterMiddle li a').href
  })
  .end()
  .then(function (result) {
    console.log(result)
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });