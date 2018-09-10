# generator-easy-wc [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> File structure and Yarn scripting for developing, testing, documenting, and deploying a web component.

## Installation

First, install [Yeoman](http://yeoman.io) and `generator-easy-wc` using [yarn](https://yarnpkg.com/en/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
yarn global add yo
yarn global add generator-easy-wc
```

## Initialization
Then generate your new project. Creating the git project before generating allows `husky` to set up your hooks appropriately. Once you've committed the generated code to master, I'd suggest branching immediately for appropriate use of a PR after you've established the functionality of your element:

```bash
mkdir element-name-here
cd element-name-here
git init
yo easy-wc
# ... follow the prompts ...
git add .
git commit -am 'Generated Element'
git checkout -b element-name-here
```

## Prompts
```bash
    _-----_     ╭──────────────────────────╮
   |       |    │      Welcome to the      │
   |--(o)--|    │      super-excellent     │
  `---------´   │     generator-easy-wc    │
   ( _´U`_ )    │        generator!        │
   /___A___\   /╰──────────────────────────╯
    |  ~  |     
  __'.___.'__   
´   `  |° ´ Y `

? What is your name? Your Name Here
? What is your GitHub username or organization? org or username here
? What would you like this element to be called? element-name-here
? What name would you like for the class that describes this element? ElementClassNameHere
? What should the element's package name be? (this will be combined with the user or org name a la: `@org/package-name`) element-name-here
? What does this element do? Something awesome!
```

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

Apache-2.0 © [Westbrook Johnson](github.com/westbrook)


[npm-image]: https://badge.fury.io/js/generator-easy-wc.svg
[npm-url]: https://npmjs.org/package/generator-easy-wc
[travis-image]: https://travis-ci.org/Westbrook/generator-easy-wc.svg?branch=master
[travis-url]: https://travis-ci.org/Westbrook/generator-easy-wc
[daviddm-image]: https://david-dm.org/Westbrook/generator-easy-wc.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/Westbrook/generator-easy-wc
