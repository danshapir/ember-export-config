# ember-export-config

Ever wanted to have your environment.js file kept not in the meta but as a separate file? Well this addon is doing just that!

This addon will create a new file called config.js in your assets directory.

You'll need to add it in your index.html file.

## Configuration
If you want to disable the plugin:
`var app = new EmberApp(defaults, {
    'ember-cli-bootstrap-sassy': {
      'js': false
    },
    SRI: {
      enabled: false
    },
    storeConfigInMeta: false
  });`

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
