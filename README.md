# Paper Card

🃏 Customizable playing card web component. This web component follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

[![Generic badge](https://img.shields.io/badge/license-MIT-darkcyan.svg)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/Status-Alpha-orange.svg)](https://shields.io/)
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

## Local Demo
To run a local development server that serves the basic demo located in `demo/index.html`
```bash
cd paper-card
npm start
```
