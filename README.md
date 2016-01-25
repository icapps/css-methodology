# CSS Methodology

This document explains BEM in a simple example. To lean more about the topic, check the following pages or the links below.

- [BEM theory](docs/BEM-theory.md)
- [Namespaces](docs/namespaces.md)
- [Stylesheet structure](docs/stylesheet-structuring.md)




## Installation

This repository depends on Webpack and PostCSS. Get started:

```javascript
$ npm install
$ npm run dev
```


## BEM (Block Element Modifier)

#### TL;DR

This small example summarizes the block-element-modifier idea.


```css
/**
 * The top-level ‘Block’ of a component.
 */
.modal {}

/**
 * An ‘Element’ that is a part of the rger Block.
 */
.modal__title {}

/**
 * A ‘Modifier’ of the Block.
 */
.modal--large {}
```


## Links

- [http://getbem.com]()
- [https://en.bem.info]()
- [https://css-tricks.com/bem-101/]()
- [MindBEMding – getting your head ’round BEM syntax'](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)
