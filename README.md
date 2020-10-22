### Description
This repository is for the purposes of demonstrating and alternative reproduction case for an open issue with recursive components in Angular 10. Notably this reproduction was created without the `--strict` flag

### Repro steps
- `yarn start`
- view local:4200
- notice no errors in the console
- in [`AComponent`](https://github.com/algcifaldi/repro-not-strict/blob/master/src/app/a/a.component.ts#L9) change `console.log('foo')` to `console.log('foos')`
- see the app recompile
- notice an error in the console: `Can't bind to 'ngIf' since it isn't a known property of 'app-a'.`
