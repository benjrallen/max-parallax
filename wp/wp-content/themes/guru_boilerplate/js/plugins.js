// place any jQuery/helper plugins in here, instead of separate, slower script files.


/*
 * Try/Catch the console
 */
try{
    console.log('Hello Console.');
} catch(e) {
    window.console = {};
    var cMethods = "assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(",");
    for (var i=0; i<cMethods.length; i++) {
        console[ cMethods[i] ] = function(){};
    }
}



/*!
 * json2.js - minified
 */
this.JSON||(JSON=function(){function k(b){return b<10?"0"+b:b}function o(b){p.lastIndex=0;return p.test(b)?'"'+b.replace(p,function(b){var c=r[b];if(typeof c==="string")return c;return"\\u"+("0000"+(+b.charCodeAt(0)).toString(16)).slice(-4)})+'"':'"'+b+'"'}function l(b,i){var c,d,h,m,g=e,f,a=i[b];a&&typeof a==="object"&&typeof a.toJSON==="function"&&(a=a.toJSON(b));typeof j==="function"&&(a=j.call(i,b,a));switch(typeof a){case "string":return o(a);case "number":return isFinite(a)?String(a):"null";
case "boolean":case "null":return String(a);case "object":if(!a)return"null";e+=n;f=[];if(typeof a.length==="number"&&!a.propertyIsEnumerable("length")){m=a.length;for(c=0;c<m;c+=1)f[c]=l(c,a)||"null";h=f.length===0?"[]":e?"[\n"+e+f.join(",\n"+e)+"\n"+g+"]":"["+f.join(",")+"]";e=g;return h}if(j&&typeof j==="object"){m=j.length;for(c=0;c<m;c+=1)d=j[c],typeof d==="string"&&(h=l(d,a))&&f.push(o(d)+(e?": ":":")+h)}else for(d in a)Object.hasOwnProperty.call(a,d)&&(h=l(d,a))&&f.push(o(d)+(e?": ":":")+h);
h=f.length===0?"{}":e?"{\n"+e+f.join(",\n"+e)+"\n"+g+"}":"{"+f.join(",")+"}";e=g;return h}}Date.prototype.toJSON=function(){return this.getUTCFullYear()+"-"+k(this.getUTCMonth()+1)+"-"+k(this.getUTCDate())+"T"+k(this.getUTCHours())+":"+k(this.getUTCMinutes())+":"+k(this.getUTCSeconds())+"Z"};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()};var q=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
p=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,e,n,r={"\u0008":"\\b","\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},j;return{stringify:function(b,i,c){var d;n=e="";if(typeof c==="number")for(d=0;d<c;d+=1)n+=" ";else typeof c==="string"&&(n=c);if((j=i)&&typeof i!=="function"&&(typeof i!=="object"||typeof i.length!=="number"))throw Error("JSON.stringify");return l("",{"":b})},parse:function(b,e){function c(b,
d){var g,f,a=b[d];if(a&&typeof a==="object")for(g in a)Object.hasOwnProperty.call(a,g)&&(f=c(a,g),f!==void 0?a[g]=f:delete a[g]);return e.call(b,d,a)}var d;q.lastIndex=0;q.test(b)&&(b=b.replace(q,function(b){return"\\u"+("0000"+(+b.charCodeAt(0)).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(b.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return d=eval("("+b+")"),typeof e===
"function"?c({"":d},""):d;throw new SyntaxError("JSON.parse");}}}());




