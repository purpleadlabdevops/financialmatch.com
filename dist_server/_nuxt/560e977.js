(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{293:function(e,t,o){var content=o(304);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(52).default)("1d1d35c4",content,!0,{sourceMap:!1})},294:function(e,t,o){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},299:function(e,t,o){"use strict";var r=o(11),n=o(5),c=o(3),d=o(111),l=o(16),f=o(12),v=o(199),I=o(40),N=o(81),M=o(198),w=o(4),m=o(82).f,h=o(34).f,x=o(15).f,T=o(300),C=o(301).trim,y="Number",L=n.Number,j=L.prototype,_=n.TypeError,k=c("".slice),D=c("".charCodeAt),z=function(e){var t=M(e,"number");return"bigint"==typeof t?t:A(t)},A=function(e){var t,o,r,n,c,d,l,code,f=M(e,"number");if(N(f))throw _("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=C(f),43===(t=D(f,0))||45===t){if(88===(o=D(f,2))||120===o)return NaN}else if(48===t){switch(D(f,1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+f}for(d=(c=k(f,2)).length,l=0;l<d;l++)if((code=D(c,l))<48||code>n)return NaN;return parseInt(c,r)}return+f};if(d(y,!L(" 0o1")||!L("0b1")||L("+0x1"))){for(var S,E=function(e){var t=arguments.length<1?0:L(z(e)),o=this;return I(j,o)&&w((function(){T(o)}))?v(Object(t),o,E):t},Z=r?m(L):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),P=0;Z.length>P;P++)f(L,S=Z[P])&&!f(E,S)&&x(E,S,h(L,S));E.prototype=j,j.constructor=E,l(n,y,E,{constructor:!0})}},300:function(e,t,o){var r=o(3);e.exports=r(1..valueOf)},301:function(e,t,o){var r=o(3),n=o(23),c=o(13),d=o(302),l=r("".replace),f="["+d+"]",v=RegExp("^"+f+f+"*"),I=RegExp(f+f+"*$"),N=function(e){return function(t){var o=c(n(t));return 1&e&&(o=l(o,v,"")),2&e&&(o=l(o,I,"")),o}};e.exports={start:N(1),end:N(2),trim:N(3)}},302:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},303:function(e,t,o){"use strict";o(293)},304:function(e,t,o){var r=o(51),n=o(294),c=o(305),d=o(306),l=r(!1),f=n(c),v=n(d);l.push([e.i,".video-border{border-radius:10px;border:15px solid #fff;box-shadow:0 10px 20px 0 rgba(0,0,0,.2);margin-top:-100px;background:#fff}.video-holder__ratio{padding-bottom:56.25%;position:relative;background:#000}.video-holder__video-wrap{background:url("+f+") 50% no-repeat;background-size:cover;position:absolute;left:0;top:0;width:100%;height:100%;cursor:pointer}.video-holder__play{width:100px;height:100px;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);background:url("+v+") 50% no-repeat;background-size:cover;filter:drop-shadow(3px 3px 3px rgba(0,0,0,.3));pointer-events:none}.video-holder__iframe{width:100%;height:100%;position:absolute;top:0;left:0;border:none;outline:0}",""]),e.exports=l},305:function(e,t,o){e.exports=o.p+"img/video-holder.c8ebdf4.png"},306:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgZmlsbD0iI2ZmZiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMjU2LDBDMTE0LjYwOCwwLDAsMTE0LjYwOCwwLDI1NnMxMTQuNjA4LDI1NiwyNTYsMjU2czI1Ni0xMTQuNjA4LDI1Ni0yNTZTMzk3LjM5MiwwLDI1NiwweiBNMjU2LDQ5NgoJCQlDMTIzLjY2NCw0OTYsMTYsMzg4LjMzNiwxNiwyNTZTMTIzLjY2NCwxNiwyNTYsMTZzMjQwLDEwNy42NjQsMjQwLDI0MFMzODguMzM2LDQ5NiwyNTYsNDk2eiIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBvbHlnb24gcG9pbnRzPSIxODkuNzc2LDE0MS4zMjggMTg5Ljc3NiwzNzAuOTkyIDM4OC42NzIsMjU2LjE2IAkJIi8+Cgk8L2c+CjwvZz4KCjwvc3ZnPgo="},308:function(e,t,o){"use strict";o.r(t);o(299);var r={name:"VideoFrame",props:{videoId:{type:[String,Number],default:235215203}},data:function(){return{videoIsActivated:!1}}},n=(o(303),o(24)),component=Object(n.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"video-frame"},[t("div",{staticClass:"video-border"},[t("div",{staticClass:"video-holder",on:{click:function(t){e.videoIsActivated=!0}}},[t("div",{staticClass:"video-holder__ratio"},[e.videoIsActivated?t("iframe",{staticClass:"video-holder__iframe",attrs:{allowfullscreen:"",title:"vimeo Video Player",src:"https://player.vimeo.com/video/".concat(e.videoId,"?color&autopause=0&loop=0&muted=0&title=0&portrait=0&byline=0#t=")}}):t("div",{staticClass:"video-holder__video-wrap"},[t("div",{staticClass:"video-holder__play"})])])])])])}),[],!1,null,null,null);t.default=component.exports}}]);