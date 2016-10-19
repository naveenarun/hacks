// For http://10fastfingers.com/typing-test/english

// Fast Version - Rank 1 Worldwide (10/18/2016)
// 156 Characters
x=Array.prototype.slice.call($("[wordnr]"));countdown=0;x.map(function(x){$inputfield.val(x.innerHTML); $inputfield.trigger({type: 'keyup', which: 32});});

// ES6 "Tweetable" Version - Rank 1 Worldwide (10/18/2016)
// 108 Characters
i=$inputfield;countdown=0;$.map($("[wordnr]"),x=>{i.val(x.innerHTML);i.trigger({type:'keyup',which:32});});
