# React-Flexbox

Demonstrates Flexbox options in a react app

```js
$ git clone https://github.com/tvc-school/react-flexbox.git
$ yarn install
$ yarn start
```

**Enjoy**

# Flexbox
*These notes are just reminders for me and are in not any way complete. See the resources at the bottom of the page for full discription of flexbox.*

## Defaults
- direction: row
- start on start edge
- main axis: do not stretch
- cross axis: stretch
- flexBasis: auto 
  - uses size of item. 
  - If item doesn't have size uses content for size
- flexWrap: nowrap
- flexGrow: 0 = can't grow
  - any positive integer means can grow
- flexShrink

## Shorthand
- flexFlow: flexDirection & flexWrap
- flex: flexGrow, flexShrink & flexBasis

## Alignment, justification & free space distribution
- alignItems: **stretch** | flex-start | flex-end | center
  - Aligns items on the cross axis
- justifyContent: **flex-start** | flex-end | center | space-around | space-between | space-evenly
  - Aligns items on the main axis


# Resources
- (1) [Basic concepts of flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
- (2) [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- (3) [Controlling Ratios of Flex Items Along the Main Axis
](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax)
