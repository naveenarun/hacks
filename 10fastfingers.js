// Fast Version - Rank 1 Worldwide (10/16/2016)
x=Array.prototype.slice.call($("[wordnr]"));countdown=0;x.map(function(x){$inputfield.val(x.innerHTML); $inputfield.trigger({type: 'keyup', which: 32});});

// ES6 "Tweetable" Version - Rank 14 Worldwide (10/18/2016)
x.map(function(x){$inputfield.val(x.innerHTML); $inputfield.trigger({type: 'keyup', which: 32});});


