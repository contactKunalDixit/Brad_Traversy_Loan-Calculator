# Brad_Traversy_Loan-Calculator

**_HTML_**

## Bootstrap - Bootstap classes used:

.bg-dark: color
.container:most basic layout element in Bootstrap and are required when using our default grid system
.row:Rows are wrappers for columns

---

.col-md-6:(col classes indicate the number of columns you'd like to use out of the possible 12 per row..will be 6 wide,
-md- breakpoint: which is width 100% untill the specified breakpoint
.mx-auto :centers and keeps the element to middle: sets the margin to auto on right and left)

---

.card:is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options. If you’re familiar with Bootstrap 3, cards replace bootstraps3 old panels, wells, and thumbnails.
.card-body : used when padded section is neededd within the card
.text-center: for centering the text
.mt-5: Margin top is 5 units. card component by itself doesnt have margin thus added additionally.

---

.heading: All HTML headings
.display-5: to make it a certain size
.pb-3: padding below to size 3

---

.form-group: to add some structure to forms, to wrap the inputs and labels within form-group div. Each specific input and associated label would have thier own form-group.

.input-group: Easily extend form controls by adding text, buttons or button groups on either side of textual inputs, custom selects and custom file inputs

.input-group-prepend/ append: Input group addons are now specific to their placement relative to an <input>. Newer bootstrap dropped .input-group-addon and .input-group-btn for two new classes, .input-group-prepend and .input-group-append. You must explicitly use an append or a prepend now, simplifying much of bootstrap3's CSS.

.input-group-text: Within an append or prepend, place your buttons as they would exist anywhere else, but wrap text in .input-group-text.

.form-control: styles the bootstrap <input>, <selects> and <textarea>, and gives it the general appearance, focus state, sizing, padding, and makes it the block level element.

---

disabled: disables the particular option by greying out

///////////////////////////////////////////////////////

**_JS_**

1. parsefloat() : Converts a string or an object into a floating decimal number..checks if the first character of a string/ an object can be converted to a floating decimal number and if yes, then it parses the string until it reaches the end of the number, and returns as a number, not a string

If the number cant be converted into number, parsefloat() returns NaN

2. Math.pow: Math.pow(4,3)
   equals 4*4*4

3. isFinite() : checks werhwe number is a finite, legitimate number

The possible values can be +infinity, -infinity, or NaN(Not-a-Number), otherwise it returns True

4.  toFixed(): Converts a number into a STRING, rounding to a specfied number of decimals

5.  insertBefore(): applied to the parent element and it inserts an node before a certain node,eg,
    parent node.insertBefore(newnode, existingnode)

6.a. setTimeOut(function,3000):
Window Function calls a function or evaluates an expression after a specified number of milliseconds.

6.b. setInterval(function,3000): calls a function every 3 Seconds. The setInterval() method will continue calling the function until clearInterval()
is called, or the window is closed.

6.c. clearInterval() : clears a timer set with the setTimeOut() or setInterval() and prevents the callouts for those 2 methods
