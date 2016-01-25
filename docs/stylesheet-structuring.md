# Stylesheet structuring

Splitting up styles in different files is just as important in css as in javascript. The base idea is that **every directory has an index file**. This idnex is responsible for importing files from the same directory.

```css
styles/
|-- index.css
|
|-- base
|   |-- colors.css
|   |-- fonts.css
|   |-- variables.css
|
|-- blocks
|   |-- button.css
|   |-- index.css
|   |-- language-switch.css
|   |-- main-step.css
|   |-- modal.css
|   |-- my-form.css
|   |-- navbar.css
|   |-- sub-step.css
|
|-- mixins
|   |-- clearfix.css
|   |-- index.css
|
|-- layouts
|   |-- index.css
|   |-- l-fullscreen.css
|   |-- l-homepage.css
|   |-- l-secondary-page.css
|
|-- themes
|   |-- index.css
|   |-- t-mimimal.css
|   |-- t-christmas.css
|
|-- utilities
|   |-- index.css
|   |-- u-text-center.css
|   |-- u-block-center.css
```

`index.css` on the root level looks like this:

```css
// index.css

@import 'base/index';
@import 'blocks/index';
@import 'mixins/index';
@import 'layouts/index';
@import 'themes/index';
@import 'utilities/index';
```
