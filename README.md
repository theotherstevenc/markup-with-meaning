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
There are three files required to make this work, currently. Make sure these lines are included before the closing `body`.  
```
    <!-- leave this line for functionality -->
    <link rel="stylesheet" href="markupstyle.css" type="text/css"><button class="viewSourceBtn"></button><textarea class="viewSourcePreview"></textarea><script src="targets.js" type="text/javascript"></script><script src="source.js" type="text/javascript"></script>
    <!-- it will be removed in the source preivew -->
```
> In upcoming updates, this will be condensed
