var version = require('./index.js');
var v='';
// setInterval(function(){
//     v=version(v);
//     console.log(v);
// },300);


setInterval(function(){
    v=version({
        version:v,
        max:3
    });
    console.log(v);
},300);