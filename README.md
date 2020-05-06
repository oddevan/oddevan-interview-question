# Interview Question

For the WordPress Block Editor (a.k.a. Gutenberg).

![Screenshot of block editor](screenshot-back.png)

![Screenshot of website](screenshot-front.png)

## Setup

1. Navigate to the downloaded directory
2. Run `npm install`
3. Run `npm run build` again.

To build your changes, simply run `npm run build` again.

## Styling

The output of the block is very simple:

```html
<div class="wp-block-oddevan-interview-question">
	<div class="question">
		<p>What is your quest?</p>
	</div>
	<div class="answer">
		<p>To seek The Grail™.</p>
	</div>
</div>
```

## Hooks

No hooks yet.

## Credit

Based on the [Block Starter from WebDevStudios](https://github.com/WebDevStudios/create-block).
