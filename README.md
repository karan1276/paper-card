# \<paper-card>

This web component follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation
```bash
npm i paper-card
```

## Usage
```html
<script type="module">
  import 'paper-card/paper-card.js';
</script>

<paper-card
  front="front-img-scr.png"
  back="back-img-scr.png"
  height="175px"
  width="125px"
  isDraggable
  isFlippable
></paper-card>
```

## Local Demo with `web-dev-server`
```bash
npm start
```
To run a local development server that serves the basic demo located in `demo/index.html`
