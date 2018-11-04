# \<<%= elementName %>\>

<%= elementDescription %>

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="<%= elementName %>.html">
    <style>
      <%= elementName %> {
      }
    </style>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<<%= elementName %>>
</<%= elementName %>>
```

## Usage
Add notes on the usage of your component here.

## Styling

| Custom property | Description | Default |
| --- | --- | --- |
| `--custom-property` | What it does | `value` |

# Development

## Clone the repo
```
git clone https://github.com/<%= orgName %>/<%= elementName %>.git
```

## Getting started
Make sure you have both `yarn` installed locally. Then run `yarn` in the repo's directory to get all of your dependancies installed.

## Testing your component
You'll find some failing tests pre populated in your testing files. This is both an example of how to write tests and an immediate blocker to CircleCI based continuous integration processes. Also, note the availability of `should` in the test context.
```
element.tests.passing.should.be.true;
```

## Web Component Tester + Sauce Labs based x-browser tests
By default WCT is configured to run your tests in your local headless Chrome and Firefox browsers. This can sometimes be an issue when running in various CI environments as the default Firefox installation may be outside of your support matrix. Update the `plugins.local.browsers` entry to `wct.conf.json` to `["chrome", "firefox"]` as needed to support your development workflow.

When looking to expand your x-browser testing suite to include real browsers on [saucelabs.com](https://saucelabs.com/), make sure the edit `wct.conf.json` appropriately.
```
"sauce": {
  "disabled": false, // <--- change to `true`
  "username": "username",  // <--- add your username here
  "accessKey": "accessKey",  // <--- add your access key here
```
[Learn more](https://github.com/Polymer/web-component-tester#plugins) about working with Sauce Labs and web-component-tester to take full advantage of it in your project.

## Yarn scripting

####
To build component documentation use:
```
yarn analyze
```

#### Linting
To lint your styles, JS, and HTML use:
```
yarn lint
```
This is great for when you're refactoring file connections.

#### Serve locally
To serve your component in a browser, and have your default automatically opened to the component documentation, use:
```
yarn serve
```

While this is running you can access the following helpful URLs:

| URL | Description |
| --- | --- |
| `/` | The analysis.json documentation and demos of the component. |
| `/test` | Your WTC tests rum in the browser of your choice. (ignore the `lodash` errors...) |
| `/demo` | Direct path to main demo page, no navigation will be present. |

#### Deploy gh-pages
To publish the current version of your documentation of GitHub pages use:
```
yarn pages
```

#### Create and tag a GitHub release
To release a new version of your code to Github and NPM use:
```
yarn release
```
By default this will create a "bug fix", meaning it will bump the last number of the semver 0.0.x. Adding `minor`, `major`, or an explicit semver `1.1.2` is also available when making more precise releases. Visit the  `release-it` [documentation site](https://webpro.github.io/release-it/) for more information on the underlying API.

Once the release process is complete this command will also trigger the `yarn pages` command deploying your component documentation to GitHub.

#### Testing
To run web-component-tester with Istanbul based test coverage:
```
yarn test
```
Update your settings in `wct.conf.json` if you want to attach to Sauce Labs or other browsers, etc.

#### Changes across multiple repos
To make it easier to make changed to your project configurations across multiple repos the command `yarn update-settings` has been provided to batch update a number of configuration files in the repo. If you want to diverge from the expected settings there in, but would still like to do so in batch, you can make changes to `scripts/update-settings` in order to point to an separate package of configuration files.

### PROTIP
If any of these commands fail through the course of your development, it's possible that required `yarn post*` commands won't be called correctly. If you have trouble activating subsequent commands, try manually calling the `yarn post*` to clean up any incomplete tasks.
