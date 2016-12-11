# info
Auto generate version look like 0.0.0  0.0.0.1 ……
# install

`
npm install version --save
`

# use
```
var v='';
setInterval(function(){
    v=version(v);
    console.log(v);
},300);
```

```
var v='';
setInterval(function(){
    v=version({
        version:v,
        max:3
    });
    console.log(v);
},300);

```
