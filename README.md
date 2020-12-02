# bulma-prefixer

A minimal setup to prefix bulma classes using postcss-prefixer

## Summary

Currently, it is configured to prepend all bulma classes with `bu-`, unless they begin with `is-`.

So, `notification is-primary` would become `bu-notification is-primary`, which should avoid conflicts with existing css classes you are using.

Edit gulpfile.js to change the namespace or to add other ignored classes.

## Run

To output the css file, run the following command from the project folder:

`gulp sass`

Make sure you have gulp available in your environment if that fails:

`npm install -g gulp`
