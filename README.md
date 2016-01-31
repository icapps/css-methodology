# CSS Methodology - WIP

**Remember, this is a Work In Progress document**

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



## What are we solving?

By using this methodology, we try to enable a team of developers to stay confident when writing CSS in a large scale project or any project where code is written by mutliple developers. BEM naming provides independent blocks and css selectors which makes your code reusable and modular.


The official BEM website provides a good explanation on what BEM tries to solve: [https://en.bem.info/method/solved-problems/](https://en.bem.info/method/solved-problems/)




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

- [http://getbem.com](http://getbem.com)
- [https://en.bem.info](https://en.bem.info)
- [https://css-tricks.com/bem-101/](https://css-tricks.com/bem-101/)
- [MindBEMding – getting your head ’round BEM syntax'](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)
