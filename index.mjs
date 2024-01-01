// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{primitives as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number-array@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-typed-array-like@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-t-cdf@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-t-quantile@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.1.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.1.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-mean@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-variance@v0.1.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-gcopy@v0.1.0-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.1.1-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.1.1-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@v0.1.1-esm/index.mjs";import{isPrimitive as j}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.1.1-esm/index.mjs";import{isPrimitive as f}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.1.1-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.1-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-contains@esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.1.0-esm/index.mjs";import{isPrimitive as x}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.1.1-esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-roundn@v0.1.0-esm/index.mjs";var E=["two-sided","less","greater"];function T(t,e){if(!i(e))return new TypeError(a("invalid argument. Options argument must be an object. Value: `%s`.",e));if(g(e,"alpha")){if(t.alpha=e.alpha,!j(t.alpha)||c(t.alpha))return new TypeError(a("invalid option. `%s` option must be a number. Option: `%s`.","alpha",t.alpha));if(t.alpha<0||t.alpha>1)return new RangeError(a("invalid option. `%s` option must be a number on the interval: [0, 1]. Option: `%f`.","alpha",t.alpha))}if(g(e,"alternative")){if(t.alternative=e.alternative,!f(t.alternative))return new TypeError(a("invalid option. `%s` option must be a string. Option: `%s`.","alternative",t.alternative));if(!b(E,t.alternative))return new Error(a('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"alternative",E.join('", "'),t.alternative))}return g(e,"mu")&&(t.mu=e.mu,!j(t.mu)||c(t.mu))?new TypeError(a("invalid option. `%s` option must be a number. Option: `%s`.","mu",t.mu)):null}function V(t){var e,s,n;if(s=4,e=!0,arguments.length>0){if(!i(t))throw new TypeError(a("invalid argument. First argument must be an object. Value: `%s`.",t));if(g(t,"digits")){if(!w(t.digits))throw new TypeError(a("invalid option. `%s` option must be a positive integer. Option: `%s`.","digits",t.digits));s=t.digits}if(g(t,"decision")){if(!x(t.decision))throw new TypeError(a("invalid option. `%s` option must be a boolean. Option: `%s`.","decision",t.decision));e=t.decision}}switch(n="",n+=this.method,n+="\n\n",n+="Alternative hypothesis: ","Paired t-test"===this.method?n+="True difference in means is ":n+="True mean is ",this.alternative){case"less":n+="less than ";break;case"greater":n+="greater than ";break;default:n+="not equal to "}return n+=this.nullValue,n+="\n\n",n+="    pValue: "+y(this.pValue,-s)+"\n",n+="    statistic: "+y(this.statistic,-s)+"\n",n+="    df: "+this.df+"\n",n+="    "+100*(1-this.alpha)+"% confidence interval: ["+y(this.ci[0],-s)+","+y(this.ci[1],-s)+"]",n+="\n\n",e&&(n+="Test Decision: ",this.rejected?n+="Reject null in favor of alternative at "+100*this.alpha+"% significance level":n+="Fail to reject null in favor of alternative at "+100*this.alpha+"% significance level",n+="\n"),n}function O(j){var f,c,g,b,w,x,y,E,O,F,P,k,q;if(!e(j)&&!t(j))throw new TypeError(a("invalid argument. First argument must be a numeric array. Value: `%s`.",j));if((E=j.length)<2)throw new Error(a("invalid argument. First argument must contain at least two elements. Value: `%s`.",j));if(w={mu:0,alpha:.05,alternative:"two-sided"},2===arguments.length){if(i(arguments[1])){if(y=T(w,arguments[1]))throw y}else if(!e(k=arguments[1])&&!t(k))throw new TypeError(a("invalid argument. Second argument must be either a numeric array or an options object. Value: `%s`.",k))}else if(arguments.length>2){if(!e(k=arguments[1])&&!t(k))throw new TypeError(a("invalid argument. Second argument must be a numeric array. Value: `%s`.",k));if(y=T(w,arguments[2]))throw y}if(k){if(k.length!==E)throw new Error("invalid arguments. First and second arguments must have the same length.");for(j=p(E,j,1,new u(E),1),q=0;q<E;q++)j[q]-=k[q]}return f=o(d(E,1,j,1)/E),x=((c=m(E,j,1))-w.mu)/f,F=E-1,"two-sided"===w.alternative?(b=2*n(-l(x),F),P=r(1-w.alpha/2,F),g=[w.mu+(x-P)*f,w.mu+(x+P)*f]):"greater"===w.alternative?(b=1-n(x,F),P=r(1-w.alpha,F),g=[w.mu+(x-P)*f,v]):(b=n(x,F),P=r(1-w.alpha,F),g=[h,w.mu+(x+P)*f]),s(O={},"rejected",b<=w.alpha),s(O,"alpha",w.alpha),s(O,"pValue",b),s(O,"statistic",x),s(O,"ci",g),s(O,"df",F),s(O,"nullValue",w.mu),s(O,"mean",c),s(O,"sd",f),s(O,"alternative",w.alternative),s(O,"method",k?"Paired t-test":"One-sample t-test"),s(O,"print",V),O}export{O as default};
//# sourceMappingURL=index.mjs.map
