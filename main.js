var test = require('tap').test,
    fuzzer = require('fuzzer'),
    marqdown = require('./marqdown.js'),
    fs = require('fs')
    ;
 
fuzzer.seed(0);
 
test('markedMutation', function(t) {

	var str = 
"{NumberQuestions:true}\n\
---\n\
\n\
### Question\n\
> {rows:3}\n\
\n\
[![NPM version](https://badge.fury.io/js/marked.png)][badge]\n\
\n\
### Install\n\
\n\
``` bash\n\
npm install marked --save\n\
```\n\
* Hello\n\
* No\n\
";

    var str2 = fs.readFileSync('simple.md','utf-8');

    for (var i = 0; i < 1000; i++) {

    	var mut = fuzzer.mutate.string(str2);

    	try
    	{
    		marqdown.render(mut);
    		t.ok(true, mut);
        }
        catch(e)
        {
			t.ok(false, JSON.stringify(e.stack));
        }
    }

    t.end();
});


// Alternative...
// Grammar...
// Markdown...
// Headers...
// Inline, bold, html...
// smarter assertions?
