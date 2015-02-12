The goal of this workshop is to use fuzzing to test a tool called `marqdown`, which takes a markdown file, and generates a html rendering of a survey:

See it in use at [checkbox.io](http://checkbox.io/researchers.html).

### Mutation Approach

Fuzzing can use a *generative* approach, which involves randomly creating input, or a *mutation* approach, which involves changing existing input templates.

To assist with input templates, two files have been provided, `simple.md`, and `test.md`.

##### Mutations

The goal is to use these input templates and apply the following transformations on the input:

* With 5% chance, reverse the input string.

* Alternate between templates.

* With 25% chance, remove a random set of characters, from a random start position:
HINT: [See `Array.splice`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

* With a 25% chance, insert random characters into the string
HINT: [See insert array into another](http://stackoverflow.com/questions/7032550/javascript-insert-an-array-inside-another-array)

* With a 5% chance, repeat.

See [random-js](https://www.npmjs.com/package/random-js) for tips on using some helpful random utilities.


### Minification

Fuzzing may create many inputs that are exercising the same bug.  A test suite minification step will attempt to discard test cases that are not any more effective.  Use stack trace to help determine if you are triggering the same bug, then only save the minimum tests needed (Inside `reducedTests`).

### Bonus

Consider a generative approach based on the grammar of markdown.

* Headers
* Lists
* Inline HTML
* etc.
