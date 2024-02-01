# A simple placeholder component

`<place-holder></place-holder>` is a simple block-level element that does nothing but give you a box with an X through it. Use it when you just need to focus on a layout and not worry about content (yet).

By default it’s a random color (with an X that’s the inverse color), but colors and line weight are customizable.

## Installation

Grab the script from this repo, or use NPM:

`npm install @noleli/place-holder`

## Usage

Import the script.

```html
<script src="./Placeholder.js" type="module"></script>
```

Or

```js
import { Placeholder } from "./Placeholder.js";
```

Then use `<place-holder></place-holder>` as you would any other block element.

Since it has no intrinsic size, you’ll probably want to add a size in one or the other direction.

```html
<body>
    <header><place-holder style="height: 10rem"></place-holder></header>
    <aside><place-holder style="width: 20ch; height: 100%"></place-holder></aside>
    <main><place-holder style="height: 100%"></place-holder></main>
    <footer><place-holder style="height: 10rem"></place-holder></footer>
</body>
````

Customize styles with these CSS custom properties:

- `--placeholder-color`
- `--placeholder-line-color`
- `--placeholder-line-width`
