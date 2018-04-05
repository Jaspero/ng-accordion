[![Build Status](https://travis-ci.org/Jaspero/ng-accordion.svg?branch=master)](https://travis-ci.org/jaspero/ng-accordion)
[![NPM Version](https://img.shields.io/npm/v/@jaspero/ng-accordion.svg)](https://www.npmjs.com/package/@jaspero/ng-accordion)

# NG Accordion
An Accordion for Angular.

A demo can be found [here](https://stackblitz.com/edit/jaspero-ng-accordion)

## Installation

To install this library, run:

```bash
$ npm install --save @jaspero/ng-accordion
```

## Setup
Import `JasperoAccordionModule` in your `@NgModule`:

```ts
@NgModule({
    imports: [
        JasperoAccordionModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}
```

Then create the component in a root component (you can create it anywhere but you can only use it in that component on any lower ones).

## How To Use
Using the library is farly strait forward.
```html
<jaspero-accordion [singleActive]="false">
  <jaspero-accord [accordTitle]="templateRef">Content 1</jaspero-accord>
  <jaspero-accord [accordTitle]="'<p>example 2</p>'">Content 2</jaspero-accord>
  <jaspero-accord accordTitle="example 3">Content 3</jaspero-accord>
</jaspero-accordion>
<ng-template #templateRef>
  <p>This is an example</p>
</ng-template>
```

The `accordTitle` can be a simple string, a string containing html or a template ref.

### Options

Available inputs: 

```typescript

// jaspero-accordion
singleActive: boolean = true // Should more then one accord be toggled at the same time

// jaspero-accord
accordTitle: string | TemplateRef<any> = 'Accord'
active: boolean 
disabled: boolean // default value is false. Prevents tab from being toggled
```


### FAQ

**Does this library support AoT?**

Yes AoT is supported. 

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```
 
## License

MIT © [Jaspero co.](mailto:info@jaspero.co)
