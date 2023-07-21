const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjRjYjg1NDk4LTAzNjMtNDI0Yy1iNmE2LWE0MjJjNWQxY2E5MS0xNjg5OTQ1MDY1Njc4IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiYzU0NTZhMmEtMDAxOC00YTRiLTlkMDQtMjdjMDExYjAwMWY3IiwidHlwZSI6InQifQ.P2YHun2BHx6xV8jbx50cDhkx-tIjruUygT2oJgMowXI'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
