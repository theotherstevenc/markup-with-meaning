# Markup With Meaning

Using keywords, we can begin to create a new markup. 

## Example
Instead of writing:
```
@media screen and (-webkit-device-pixel-ratio) .foo {
  ...
}
```
We can write:
```
-webkit .foo {
  ...
}
```
In this context, the keyword `webkit` is simple to recognize. It has semantic meaning to a developer, and even to the non-developer. At build time, Javascript will update the keyword to `@media screen and (-webkit-device-pixel-ratio)`, which will then provide meaning to the rendering engine.

Arbitrary keywords has been chosen for this initial concept, with consideration for markup highlights in common text editors.

## Instructions for use:

Place this script tag before the closing body tag in your working `html` file. it will convert all predefined keywords.
```
<script src="targets.js" type="text/javascript"></script>
````

In order to retrieve the generated html markup, insert this script tag. it will display the source, instead of rendering the markup.

```
<script src="show-source.js" type="text/javascript"></script>
```

> Currently, in order to ensure this does not end up in the final markup, these script tags, and file names, may not be altered.
