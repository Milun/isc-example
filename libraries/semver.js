define(function(){var n={},c=function(){},t=(n.SEMVER_SPEC_VERSION="2.0.0",256),i=Number.MAX_SAFE_INTEGER||9007199254740991,s=n.re=[],e=n.src=[],a=n.tokens={},r=0;function o(e){a[e]=r++}o("NUMERICIDENTIFIER"),e[a.NUMERICIDENTIFIER]="0|[1-9]\\d*",o("NUMERICIDENTIFIERLOOSE"),e[a.NUMERICIDENTIFIERLOOSE]="[0-9]+",o("NONNUMERICIDENTIFIER"),e[a.NONNUMERICIDENTIFIER]="\\d*[a-zA-Z-][a-zA-Z0-9-]*",o("MAINVERSION"),e[a.MAINVERSION]="("+e[a.NUMERICIDENTIFIER]+")\\.("+e[a.NUMERICIDENTIFIER]+")\\.("+e[a.NUMERICIDENTIFIER]+")",o("MAINVERSIONLOOSE"),e[a.MAINVERSIONLOOSE]="("+e[a.NUMERICIDENTIFIERLOOSE]+")\\.("+e[a.NUMERICIDENTIFIERLOOSE]+")\\.("+e[a.NUMERICIDENTIFIERLOOSE]+")",o("PRERELEASEIDENTIFIER"),e[a.PRERELEASEIDENTIFIER]="(?:"+e[a.NUMERICIDENTIFIER]+"|"+e[a.NONNUMERICIDENTIFIER]+")",o("PRERELEASEIDENTIFIERLOOSE"),e[a.PRERELEASEIDENTIFIERLOOSE]="(?:"+e[a.NUMERICIDENTIFIERLOOSE]+"|"+e[a.NONNUMERICIDENTIFIER]+")",o("PRERELEASE"),e[a.PRERELEASE]="(?:-("+e[a.PRERELEASEIDENTIFIER]+"(?:\\."+e[a.PRERELEASEIDENTIFIER]+")*))",o("PRERELEASELOOSE"),e[a.PRERELEASELOOSE]="(?:-?("+e[a.PRERELEASEIDENTIFIERLOOSE]+"(?:\\."+e[a.PRERELEASEIDENTIFIERLOOSE]+")*))",o("BUILDIDENTIFIER"),e[a.BUILDIDENTIFIER]="[0-9A-Za-z-]+",o("BUILD"),e[a.BUILD]="(?:\\+("+e[a.BUILDIDENTIFIER]+"(?:\\."+e[a.BUILDIDENTIFIER]+")*))",o("FULL"),o("FULLPLAIN"),e[a.FULLPLAIN]="v?"+e[a.MAINVERSION]+e[a.PRERELEASE]+"?"+e[a.BUILD]+"?",e[a.FULL]="^"+e[a.FULLPLAIN]+"$",o("LOOSEPLAIN"),e[a.LOOSEPLAIN]="[v=\\s]*"+e[a.MAINVERSIONLOOSE]+e[a.PRERELEASELOOSE]+"?"+e[a.BUILD]+"?",o("LOOSE"),e[a.LOOSE]="^"+e[a.LOOSEPLAIN]+"$",o("GTLT"),e[a.GTLT]="((?:<|>)?=?)",o("XRANGEIDENTIFIERLOOSE"),e[a.XRANGEIDENTIFIERLOOSE]=e[a.NUMERICIDENTIFIERLOOSE]+"|x|X|\\*",o("XRANGEIDENTIFIER"),e[a.XRANGEIDENTIFIER]=e[a.NUMERICIDENTIFIER]+"|x|X|\\*",o("XRANGEPLAIN"),e[a.XRANGEPLAIN]="[v=\\s]*("+e[a.XRANGEIDENTIFIER]+")(?:\\.("+e[a.XRANGEIDENTIFIER]+")(?:\\.("+e[a.XRANGEIDENTIFIER]+")(?:"+e[a.PRERELEASE]+")?"+e[a.BUILD]+"?)?)?",o("XRANGEPLAINLOOSE"),e[a.XRANGEPLAINLOOSE]="[v=\\s]*("+e[a.XRANGEIDENTIFIERLOOSE]+")(?:\\.("+e[a.XRANGEIDENTIFIERLOOSE]+")(?:\\.("+e[a.XRANGEIDENTIFIERLOOSE]+")(?:"+e[a.PRERELEASELOOSE]+")?"+e[a.BUILD]+"?)?)?",o("XRANGE"),e[a.XRANGE]="^"+e[a.GTLT]+"\\s*"+e[a.XRANGEPLAIN]+"$",o("XRANGELOOSE"),e[a.XRANGELOOSE]="^"+e[a.GTLT]+"\\s*"+e[a.XRANGEPLAINLOOSE]+"$",o("COERCE"),e[a.COERCE]="(^|[^\\d])(\\d{1,16})(?:\\.(\\d{1,16}))?(?:\\.(\\d{1,16}))?(?:$|[^\\d])",o("COERCERTL"),s[a.COERCERTL]=new RegExp(e[a.COERCE],"g"),o("LONETILDE"),e[a.LONETILDE]="(?:~>?)",o("TILDETRIM"),e[a.TILDETRIM]="(\\s*)"+e[a.LONETILDE]+"\\s+",s[a.TILDETRIM]=new RegExp(e[a.TILDETRIM],"g");o("TILDE"),e[a.TILDE]="^"+e[a.LONETILDE]+e[a.XRANGEPLAIN]+"$",o("TILDELOOSE"),e[a.TILDELOOSE]="^"+e[a.LONETILDE]+e[a.XRANGEPLAINLOOSE]+"$",o("LONECARET"),e[a.LONECARET]="(?:\\^)",o("CARETTRIM"),e[a.CARETTRIM]="(\\s*)"+e[a.LONECARET]+"\\s+",s[a.CARETTRIM]=new RegExp(e[a.CARETTRIM],"g"),o("CARET"),e[a.CARET]="^"+e[a.LONECARET]+e[a.XRANGEPLAIN]+"$",o("CARETLOOSE"),e[a.CARETLOOSE]="^"+e[a.LONECARET]+e[a.XRANGEPLAINLOOSE]+"$",o("COMPARATORLOOSE"),e[a.COMPARATORLOOSE]="^"+e[a.GTLT]+"\\s*("+e[a.LOOSEPLAIN]+")$|^$",o("COMPARATOR"),e[a.COMPARATOR]="^"+e[a.GTLT]+"\\s*("+e[a.FULLPLAIN]+")$|^$",o("COMPARATORTRIM"),e[a.COMPARATORTRIM]="(\\s*)"+e[a.GTLT]+"\\s*("+e[a.LOOSEPLAIN]+"|"+e[a.XRANGEPLAIN]+")",s[a.COMPARATORTRIM]=new RegExp(e[a.COMPARATORTRIM],"g");o("HYPHENRANGE"),e[a.HYPHENRANGE]="^\\s*("+e[a.XRANGEPLAIN]+")\\s+-\\s+("+e[a.XRANGEPLAIN]+")\\s*$",o("HYPHENRANGELOOSE"),e[a.HYPHENRANGELOOSE]="^\\s*("+e[a.XRANGEPLAINLOOSE]+")\\s+-\\s+("+e[a.XRANGEPLAINLOOSE]+")\\s*$",o("STAR"),e[a.STAR]="(<|>)?=?\\s*\\*";for(var E=0;E<r;E++)c(E,e[E]),s[E]||(s[E]=new RegExp(e[E]));function u(e,r){if(e instanceof h)return e;if("string"!=typeof e)return null;if(e.length>t)return null;if(!((r=r&&"object"==typeof r?r:{loose:!!r,includePrerelease:!1}).loose?s[a.LOOSE]:s[a.FULL]).test(e))return null;try{return new h(e,r)}catch(e){return null}}function h(e,r){if(r&&"object"==typeof r||(r={loose:!!r,includePrerelease:!1}),e instanceof h){if(e.loose===r.loose)return e;e=e.version}else if("string"!=typeof e)throw new TypeError("Invalid Version: "+e);if(e.length>t)throw new TypeError("version is longer than "+t+" characters");if(!(this instanceof h))return new h(e,r);c("SemVer",e,r),this.options=r,this.loose=!!r.loose;r=e.trim().match(r.loose?s[a.LOOSE]:s[a.FULL]);if(!r)throw new TypeError("Invalid Version: "+e);if(this.raw=e,this.major=+r[1],this.minor=+r[2],this.patch=+r[3],this.major>i||this.major<0)throw new TypeError("Invalid major version");if(this.minor>i||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>i||this.patch<0)throw new TypeError("Invalid patch version");r[4]?this.prerelease=r[4].split(".").map(function(e){if(/^[0-9]+$/.test(e)){var r=+e;if(0<=r&&r<i)return r}return e}):this.prerelease=[],this.build=r[5]?r[5].split("."):[],this.format()}n.parse=u,n.valid=function(e,r){e=u(e,r);return e?e.version:null},n.clean=function(e,r){e=u(e.trim().replace(/^[=v]+/,""),r);return e?e.version:null},(n.SemVer=h).prototype.format=function(){return this.version=this.major+"."+this.minor+"."+this.patch,this.prerelease.length&&(this.version+="-"+this.prerelease.join(".")),this.version},h.prototype.toString=function(){return this.version},h.prototype.compare=function(e){return c("SemVer.compare",this.version,this.options,e),e instanceof h||(e=new h(e,this.options)),this.compareMain(e)||this.comparePre(e)},h.prototype.compareMain=function(e){return e instanceof h||(e=new h(e,this.options)),l(this.major,e.major)||l(this.minor,e.minor)||l(this.patch,e.patch)},h.prototype.comparePre=function(e){if(e instanceof h||(e=new h(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;var r=0;do{var t=this.prerelease[r],n=e.prerelease[r];if(c("prerelease compare",r,t,n),void 0===t&&void 0===n)return 0;if(void 0===n)return 1;if(void 0===t)return-1;if(t!==n)return l(t,n)}while(++r)},h.prototype.compareBuild=function(e){e instanceof h||(e=new h(e,this.options));var r=0;do{var t=this.build[r],n=e.build[r];if(c("prerelease compare",r,t,n),void 0===t&&void 0===n)return 0;if(void 0===n)return 1;if(void 0===t)return-1;if(t!==n)return l(t,n)}while(++r)},h.prototype.inc=function(e,r){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",r);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",r);break;case"prepatch":this.prerelease.length=0,this.inc("patch",r),this.inc("pre",r);break;case"prerelease":0===this.prerelease.length&&this.inc("patch",r),this.inc("pre",r);break;case"major":0===this.minor&&0===this.patch&&0!==this.prerelease.length||this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":0===this.patch&&0!==this.prerelease.length||this.minor++,this.patch=0,this.prerelease=[];break;case"patch":0===this.prerelease.length&&this.patch++,this.prerelease=[];break;case"pre":if(0===this.prerelease.length)this.prerelease=[0];else{for(var t=this.prerelease.length;0<=--t;)"number"==typeof this.prerelease[t]&&(this.prerelease[t]++,t=-2);-1===t&&this.prerelease.push(0)}r&&(this.prerelease[0]!==r||isNaN(this.prerelease[1]))&&(this.prerelease=[r,0]);break;default:throw new Error("invalid increment argument: "+e)}return this.format(),this.raw=this.version,this},n.inc=function(e,r,t,n){"string"==typeof t&&(n=t,t=void 0);try{return new h(e,t).inc(r,n).version}catch(e){return null}},n.diff=function(e,r){{if(O(e,r))return null;var t,n,i=u(e),o=u(r),s="";for(n in(i.prerelease.length||o.prerelease.length)&&(s="pre",t="prerelease"),i)if(("major"===n||"minor"===n||"patch"===n)&&i[n]!==o[n])return s+n;return t}},n.compareIdentifiers=l;var p=/^[0-9]+$/;function l(e,r){var t=p.test(e),n=p.test(r);return t&&n&&(e=+e,r=+r),e===r?0:t&&!n||(!n||t)&&e<r?-1:1}function I(e,r,t){return new h(e,t).compare(new h(r,t))}function R(e,r,t){return 0<I(e,r,t)}function f(e,r,t){return I(e,r,t)<0}function O(e,r,t){return 0===I(e,r,t)}function L(e,r,t){return 0!==I(e,r,t)}function N(e,r,t){return 0<=I(e,r,t)}function m(e,r,t){return I(e,r,t)<=0}function T(e,r,t,n){switch(r){case"===":return(e="object"==typeof e?e.version:e)===(t="object"==typeof t?t.version:t);case"!==":return(e="object"==typeof e?e.version:e)!==(t="object"==typeof t?t.version:t);case"":case"=":case"==":return O(e,t,n);case"!=":return L(e,t,n);case">":return R(e,t,n);case">=":return N(e,t,n);case"<":return f(e,t,n);case"<=":return m(e,t,n);default:throw new TypeError("Invalid operator: "+r)}}function A(e,r){if(r&&"object"==typeof r||(r={loose:!!r,includePrerelease:!1}),e instanceof A){if(e.loose===!!r.loose)return e;e=e.value}if(!(this instanceof A))return new A(e,r);c("comparator",e,r),this.options=r,this.loose=!!r.loose,this.parse(e),this.semver===v?this.value="":this.value=this.operator+this.semver.version,c("comp",this)}n.rcompareIdentifiers=function(e,r){return l(r,e)},n.major=function(e,r){return new h(e,r).major},n.minor=function(e,r){return new h(e,r).minor},n.patch=function(e,r){return new h(e,r).patch},n.compare=I,n.compareLoose=function(e,r){return I(e,r,!0)},n.compareBuild=function(e,r,t){e=new h(e,t),r=new h(r,t);return e.compare(r)||e.compareBuild(r)},n.rcompare=function(e,r,t){return I(r,e,t)},n.sort=function(e,t){return e.sort(function(e,r){return n.compareBuild(e,r,t)})},n.rsort=function(e,t){return e.sort(function(e,r){return n.compareBuild(r,e,t)})},n.gt=R,n.lt=f,n.eq=O,n.neq=L,n.gte=N,n.lte=m,n.cmp=T;var v={};function S(e,r){if(r&&"object"==typeof r||(r={loose:!!r,includePrerelease:!1}),e instanceof S)return e.loose===!!r.loose&&e.includePrerelease===!!r.includePrerelease?e:new S(e.raw,r);if(e instanceof A)return new S(e.value,r);if(!(this instanceof S))return new S(e,r);if(this.options=r,this.loose=!!r.loose,this.includePrerelease=!!r.includePrerelease,this.raw=e,this.set=e.split(/\s*\|\|\s*/).map(function(e){return this.parseRange(e.trim())},this).filter(function(e){return e.length}),!this.set.length)throw new TypeError("Invalid SemVer Range: "+e);this.format()}function w(e,r){for(var t=!0,n=e.slice(),i=n.pop();t&&n.length;)t=n.every(function(e){return i.intersects(e,r)}),i=n.pop();return t}function g(e){return!e||"x"===e.toLowerCase()||"*"===e}function P(e,r,t,n,i,o,s,a,E,u,p,c,l){return((r=g(t)?"":g(n)?">="+t+".0.0":g(i)?">="+t+"."+n+".0":">="+r)+" "+(a=g(E)?"":g(u)?"<"+(+E+1)+".0.0":g(p)?"<"+E+"."+(+u+1)+".0":c?"<="+E+"."+u+"."+p+"-"+c:"<="+a)).trim()}function C(e,r,t){try{r=new S(r,t)}catch(e){return!1}return r.test(e)}function d(e,r,t,n){var i,o,s,a,E;switch(e=new h(e,n),r=new S(r,n),t){case">":i=R,o=m,s=f,a=">",E=">=";break;case"<":i=f,o=N,s=R,a="<",E="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(C(e,r,n))return!1;for(var u=0;u<r.set.length;++u){var p=r.set[u],c=null,l=null;if(p.forEach(function(e){e.semver===v&&(e=new A(">=0.0.0")),c=c||e,l=l||e,i(e.semver,c.semver,n)?c=e:s(e.semver,l.semver,n)&&(l=e)}),c.operator===a||c.operator===E)return!1;if((!l.operator||l.operator===a)&&o(e,l.semver))return!1;if(l.operator===E&&s(e,l.semver))return!1}return!0}return(n.Comparator=A).prototype.parse=function(e){var r=this.options.loose?s[a.COMPARATORLOOSE]:s[a.COMPARATOR],r=e.match(r);if(!r)throw new TypeError("Invalid comparator: "+e);this.operator=void 0!==r[1]?r[1]:"","="===this.operator&&(this.operator=""),r[2]?this.semver=new h(r[2],this.options.loose):this.semver=v},A.prototype.toString=function(){return this.value},A.prototype.test=function(e){if(c("Comparator.test",e,this.options.loose),this.semver===v||e===v)return!0;if("string"==typeof e)try{e=new h(e,this.options)}catch(e){return!1}return T(e,this.operator,this.semver,this.options)},A.prototype.intersects=function(e,r){var t,n,i,o,s;if(e instanceof A)return r&&"object"==typeof r||(r={loose:!!r,includePrerelease:!1}),""===this.operator?""===this.value||(t=new S(e.value,r),C(this.value,t,r)):""===e.operator?""===e.value||(t=new S(this.value,r),C(e.semver,t,r)):(t=!(">="!==this.operator&&">"!==this.operator||">="!==e.operator&&">"!==e.operator),n=!("<="!==this.operator&&"<"!==this.operator||"<="!==e.operator&&"<"!==e.operator),i=this.semver.version===e.semver.version,o=!(">="!==this.operator&&"<="!==this.operator||">="!==e.operator&&"<="!==e.operator),s=T(this.semver,"<",e.semver,r)&&(">="===this.operator||">"===this.operator)&&("<="===e.operator||"<"===e.operator),r=T(this.semver,">",e.semver,r)&&("<="===this.operator||"<"===this.operator)&&(">="===e.operator||">"===e.operator),t||n||i&&o||s||r);throw new TypeError("a Comparator is required")},(n.Range=S).prototype.format=function(){return this.range=this.set.map(function(e){return e.join(" ").trim()}).join("||").trim(),this.range},S.prototype.toString=function(){return this.range},S.prototype.parseRange=function(e){var r=this.options.loose,t=(e=e.trim(),r?s[a.HYPHENRANGELOOSE]:s[a.HYPHENRANGE]),n=(e=e.replace(t,P),c("hyphen replace",e),e=e.replace(s[a.COMPARATORTRIM],"$1$2$3"),c("comparator trim",e,s[a.COMPARATORTRIM]),e=(e=(e=e.replace(s[a.TILDETRIM],"$1~")).replace(s[a.CARETTRIM],"$1^")).split(/\s+/).join(" "),r?s[a.COMPARATORLOOSE]:s[a.COMPARATOR]),t=e.split(" ").map(function(e){return e=e,r=this.options,c("comp",e,r),e=function(e,r){return e.trim().split(/\s+/).map(function(e){var o=e,e=r;return c("caret",o,e),e=e.loose?s[a.CARETLOOSE]:s[a.CARET],o.replace(e,function(e,r,t,n,i){return c("caret",o,e,r,t,n,i),e=g(r)?"":g(t)?">="+r+".0.0 <"+(+r+1)+".0.0":g(n)?"0"===r?">="+r+"."+t+".0 <"+r+"."+(+t+1)+".0":">="+r+"."+t+".0 <"+(+r+1)+".0.0":i?(c("replaceCaret pr",i),"0"===r?"0"===t?">="+r+"."+t+"."+n+"-"+i+" <"+r+"."+t+"."+(+n+1):">="+r+"."+t+"."+n+"-"+i+" <"+r+"."+(+t+1)+".0":">="+r+"."+t+"."+n+"-"+i+" <"+(+r+1)+".0.0"):(c("no pr"),"0"===r?"0"===t?">="+r+"."+t+"."+n+" <"+r+"."+t+"."+(+n+1):">="+r+"."+t+"."+n+" <"+r+"."+(+t+1)+".0":">="+r+"."+t+"."+n+" <"+(+r+1)+".0.0"),c("caret return",e),e})}).join(" ")}(e,r),c("caret",e),e=function(e,r){return e.trim().split(/\s+/).map(function(e){var o=e,e=r;return e=r.loose?s[a.TILDELOOSE]:s[a.TILDE],o.replace(e,function(e,r,t,n,i){return c("tilde",o,e,r,t,n,i),e=g(r)?"":g(t)?">="+r+".0.0 <"+(+r+1)+".0.0":g(n)?">="+r+"."+t+".0 <"+r+"."+(+t+1)+".0":i?(c("replaceTilde pr",i),">="+r+"."+t+"."+n+"-"+i+" <"+r+"."+(+t+1)+".0"):">="+r+"."+t+"."+n+" <"+r+"."+(+t+1)+".0",c("tilde return",e),e})}).join(" ")}(e,r),c("tildes",e),e=function(e,r){return c("replaceXRanges",e,r),e.split(/\s+/).map(function(e){return p=r,u=(u=e).trim(),e=p.loose?s[a.XRANGELOOSE]:s[a.XRANGE],u.replace(e,function(e,r,t,n,i,o){c("xRange",u,e,r,t,n,i,o);var s=g(t),a=s||g(n),E=a||g(i);return"="===r&&E&&(r=""),o=p.includePrerelease?"-0":"",s?e=">"===r||"<"===r?"<0.0.0-0":"*":r&&E?(a&&(n=0),i=0,">"===r?(r=">=",i=a?(t=+t+1,n=0):(n=+n+1,0)):"<="===r&&(r="<",a?t=+t+1:n=+n+1),e=r+t+"."+n+"."+i+o):a?e=">="+t+".0.0"+o+" <"+(+t+1)+".0.0"+o:E&&(e=">="+t+"."+n+".0"+o+" <"+t+"."+(+n+1)+".0"+o),c("xRange return",e),e});var u,p}).join(" ")}(e,r),c("xrange",e),e=function(e,r){return c("replaceStars",e,r),e.trim().replace(s[a.STAR],"")}(e,r),c("stars",e),e;var r},this).join(" ").split(/\s+/);return t=(t=this.options.loose?t.filter(function(e){return!!e.match(n)}):t).map(function(e){return new A(e,this.options)},this)},S.prototype.intersects=function(e,t){if(e instanceof S)return this.set.some(function(r){return w(r,t)&&e.set.some(function(e){return w(e,t)&&r.every(function(r){return e.every(function(e){return r.intersects(e,t)})})})});throw new TypeError("a Range is required")},n.toComparators=function(e,r){return new S(e,r).set.map(function(e){return e.map(function(e){return e.value}).join(" ").trim().split(" ")})},S.prototype.test=function(e){if(e){if("string"==typeof e)try{e=new h(e,this.options)}catch(e){return!1}for(var r=0;r<this.set.length;r++)if(function(e,r,t){for(var n=0;n<e.length;n++)if(!e[n].test(r))return;if(!r.prerelease.length||t.includePrerelease)return 1;for(n=0;n<e.length;n++)if(c(e[n].semver),e[n].semver!==v&&0<e[n].semver.prerelease.length){var i=e[n].semver;if(i.major===r.major&&i.minor===r.minor&&i.patch===r.patch)return 1}return}(this.set[r],e,this.options))return!0}return!1},n.satisfies=C,n.maxSatisfying=function(e,r,t){var n=null,i=null;try{var o=new S(r,t)}catch(e){return null}return e.forEach(function(e){!o.test(e)||n&&-1!==i.compare(e)||(i=new h(n=e,t))}),n},n.minSatisfying=function(e,r,t){var n=null,i=null;try{var o=new S(r,t)}catch(e){return null}return e.forEach(function(e){!o.test(e)||n&&1!==i.compare(e)||(i=new h(n=e,t))}),n},n.minVersion=function(e,r){e=new S(e,r);var t=new h("0.0.0");if(e.test(t))return t;if(t=new h("0.0.0-0"),e.test(t))return t;t=null;for(var n=0;n<e.set.length;++n)e.set[n].forEach(function(e){var r=new h(e.semver.version);switch(e.operator){case">":0===r.prerelease.length?r.patch++:r.prerelease.push(0),r.raw=r.format();case"":case">=":t&&!R(t,r)||(t=r);break;case"<":case"<=":break;default:throw new Error("Unexpected operation: "+e.operator)}});if(t&&e.test(t))return t;return null},n.validRange=function(e,r){try{return new S(e,r).range||"*"}catch(e){return null}},n.ltr=function(e,r,t){return d(e,r,"<",t)},n.gtr=function(e,r,t){return d(e,r,">",t)},n.outside=d,n.prerelease=function(e,r){e=u(e,r);return e&&e.prerelease.length?e.prerelease:null},n.intersects=function(e,r,t){return e=new S(e,t),r=new S(r,t),e.intersects(r)},n.coerce=function(e,r){if(e instanceof h)return e;"number"==typeof e&&(e=String(e));if("string"!=typeof e)return null;var t,n=null;if((r=r||{}).rtl){for(;(t=s[a.COERCERTL].exec(e))&&(!n||n.index+n[0].length!==e.length);)n&&t.index+t[0].length===n.index+n[0].length||(n=t),s[a.COERCERTL].lastIndex=t.index+t[1].length+t[2].length;s[a.COERCERTL].lastIndex=-1}else n=e.match(s[a.COERCE]);return null!==n?u(n[2]+"."+(n[3]||"0")+"."+(n[4]||"0"),r):null},n});