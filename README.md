# bulma-prefixer

A minimal setup to prefix [bulma](https://bulma.io/) classes using [postcss-prefixer](https://github.com/marceloucker/postcss-prefixer) and [gulp](https://gulpjs.com/)

## Summary

Currently, it is configured to prepend all bulma classes with `bu-`, unless they begin with `is-` or `has-`.

So, `notification is-primary` would become `bu-notification is-primary`, which should avoid conflicts with existing css classes you are using.

Edit gulpfile.js to change the namespace or to add other ignored classes.

## Run

To output the css file, run the following command from the project folder:

`gulp sass`

Make sure you have gulp available in your environment if that fails:

`npm install -g gulp`

## Credits

- [Bulma](https://bulma.io/)
- This is an extension of [this solution](https://github.com/jgthms/bulma/issues/302#issuecomment-661319900) shared in the [Bulma Namespace Issue](https://github.com/jgthms/bulma/issues/302)
- [postcss-prefixer](https://github.com/marceloucker/postcss-prefixer)
