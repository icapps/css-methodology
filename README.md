# BEM (Block Element Modifier)

## TL;DR

This smalle example summarizes the block-element-modifier idea.


```css
/**
 * The top-level ‘Block’ of a component.
 */
.modal {}

  /**
   * An ‘Element’ that is a part of the larger Block.
   */
  .modal__title {}

/**
 * A ‘Modifier’ of the Block.
 */
.modal--large {}
```

[Block]()

## Block

Encapsulates a standalone entity that is meaningful on its own. While blocks can be nested and interact with each other, semantically they remain equal; there is no precedence or hierarchy. Holistic entities without DOM representation (such as controllers or models) can be blocks as well.

### Naming
Block names may consist of Latin letters, digits, and dashes. To form a CSS class, add a short prefix for namespacing: `.block`

### HTML

Any DOM node can be a block if it accepts a class name.

```html
<div class="block">...</div>
```


### CSS

- Use class name selector only
- No tag name or id's
- No dependency on other blocks/elements on a page

```css
.block { color: #042; }
```


## Element

Parts of a block and have no standalone meaning. Any element is semantically tied to its block.

### Naming

Element names may consist of Latin letters, digits, dashes and underscores. CSS class is formed as block name plus two underscores plus element name: `.block__elem`

### HTML

Any DOM node within a block can be an element. Within a given block, all elements are semantically equal.

```html
<div class="block">
  ...
  <span class="block__elem"></span>
</div>
```

### CSS

- Use class name selector only
- No tag name or id's
- No dependency on other blocks/elements on a page

**Good**

```css
.block__elem { color: #042; }
```

**Bad**

```css
.block .block__elem { color: #042; }
div.block__elem { color: #042; }
```



## Modifier

Flags on blocks or elements. Use them to change appearance, behavior or state.

### Naming

Modifier names may consist of Latin letters, digits, dashes and underscores. CSS class is formed as block’s or element’s name plus two dashes: .block--mod or .block__mod--mod and .block--color-black with .block--color-red. Spaces in complicated modifiers are replaced by dash.

### HTML

Modifier is an extra class name which you add to a block/element DOM node. Add modifier classes only to blocks/elements they modify, and keep the original class:

**Good**

```html
<div class="block block--mod">...</div>
<div class="block block--size-big block--shadow-yes">...</div>
```

**Bad**

```html
<div class="block--mod">...</div>
```


### CSS

Use modifier class name as selector:

```css
.block--hidden { }
```

To alter elements based on a block-level modifier:

```css
.block--mod .block__elem { }
```

Element modifier:

```css
.block__elem--mod { }
```


## Namespaces

- **l-** : layout
- **u-** : Signify that this class is a Utility class. It has a very specific role (often providing only one declaration) and should not be bound onto or changed. It can be reused and is not tied to any specific piece of UI. You will probably recognise this namespace from libraries and methodologies like SUIT.
- **t-** : Signify that a class is responsible for adding a Theme to a view. It lets us know that UI Components’ current cosmetic appearance may be due to the presence of a theme.
- **_** : Signify that this class is the worst of the worst—a hack! Sometimes, although incredibly rarely, we need to add a class in our markup in order to force something to work. If we do this, we need to let others know that this class is less than ideal, and hopefully temporary (i.e. do not bind onto this).
- **js-** : Signify that this piece of the DOM has some behaviour acting upon it, and that JavaScript binds onto it to provide that behaviour. If you’re not a developer working with JavaScript, leave these well alone.
- **qa-** : Signify that a QA or Test Engineering team is running an automated UI test which needs to find or bind onto these parts of the DOM. Like the JavaScript namespace, this basically just reserves hooks in the DOM for non-CSS purposes.

## Namespaces under consideration

- **o-** : Signify that something is an Object, and that it may be used in any number of unrelated contexts to the one you can currently see it in. Making modifications to these types of class could potentially have knock-on effects in a lot of other unrelated places. Tread carefully.
- **c-** : Signify that something is a Component. This is a concrete, implementation-specific piece of UI. All of the changes you make to its styles should be detectable in the context you’re currently looking at. Modifying these styles should be safe and have no side effects.
- **s-** : Signify that a class creates a new styling context or Scope. Similar to a Theme, but not necessarily cosmetic, these should be used sparingly—they can be open to abuse and lead to poor CSS if not used wisely.
- **is-, has-** : Signify that the piece of UI in question is currently styled a certain way because of a state or condition. This stateful namespace is gorgeous, and comes from SMACSS. It tells us that the DOM currently has a temporary, optional, or short-lived style applied to it due to a certain state being invoked.


## Links

- http://getbem.com
- https://en.bem.info
- https://css-tricks.com/bem-101/
- MindBEMding – getting your head ’round BEM syntax' [http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/]()