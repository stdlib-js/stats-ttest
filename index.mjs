// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{primitives as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number-array@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-typed-array-like@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-t-cdf@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-t-quantile@v0.2.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.2.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-mean@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-variance@v0.2.1-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-gcopy@v0.2.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.2.1-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.2.1-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@v0.2.1-esm/index.mjs";import{isPrimitive as f}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.2.0-esm/index.mjs";import{isPrimitive as c}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.1-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.1-esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.1-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-contains@v0.2.1-esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.2.1-esm/index.mjs";import{isPrimitive as x}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.2.1-esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-roundn@v0.2.1-esm/index.mjs";var E=["two-sided","less","greater"];function L(t,e){if(!i(e))return new TypeError(a("1Lr2V",e));if(g(e,"alpha")){if(t.alpha=e.alpha,!f(t.alpha)||u(t.alpha))return new TypeError(a("1Lr8P","alpha",t.alpha));if(t.alpha<0||t.alpha>1)return new RangeError(a("1Lr8V","alpha",t.alpha))}if(g(e,"alternative")){if(t.alternative=e.alternative,!c(t.alternative))return new TypeError(a("1Lr2W","alternative",t.alternative));if(!b(E,t.alternative))return new Error(a("1Lr4S","alternative",E.join('", "'),t.alternative))}return g(e,"mu")&&(t.mu=e.mu,!f(t.mu)||u(t.mu))?new TypeError(a("1Lr8P","mu",t.mu)):null}function T(t){var e,s,r;if(s=4,e=!0,arguments.length>0){if(!i(t))throw new TypeError(a("1Lr3L",t));if(g(t,"digits")){if(!w(t.digits))throw new TypeError(a("1Lr3P","digits",t.digits));s=t.digits}if(g(t,"decision")){if(!x(t.decision))throw new TypeError(a("1Lr2o","decision",t.decision));e=t.decision}}switch(r="",r+=this.method,r+="\n\n",r+="Alternative hypothesis: ","Paired t-test"===this.method?r+="True difference in means is ":r+="True mean is ",this.alternative){case"less":r+="less than ";break;case"greater":r+="greater than ";break;default:r+="not equal to "}return r+=this.nullValue,r+="\n\n",r+="    pValue: "+y(this.pValue,-s)+"\n",r+="    statistic: "+y(this.statistic,-s)+"\n",r+="    df: "+this.df+"\n",r+="    "+100*(1-this.alpha)+"% confidence interval: ["+y(this.ci[0],-s)+","+y(this.ci[1],-s)+"]",r+="\n\n",e&&(r+="Test Decision: ",this.rejected?r+="Reject null in favor of alternative at "+100*this.alpha+"% significance level":r+="Fail to reject null in favor of alternative at "+100*this.alpha+"% significance level",r+="\n"),r}function P(f){var c,u,g,b,w,x,y,E,P,V,k,q,A;if(!e(f)&&!t(f))throw new TypeError(a("1Lr8R",f));if((E=f.length)<2)throw new Error(a("1LrA2",f));if(w={mu:0,alpha:.05,alternative:"two-sided"},2===arguments.length){if(i(arguments[1])){if(y=L(w,arguments[1]))throw y}else if(!e(q=arguments[1])&&!t(q))throw new TypeError(a("1LrA3",q))}else if(arguments.length>2){if(!e(q=arguments[1])&&!t(q))throw new TypeError(a("1Lr9k",q));if(y=L(w,arguments[2]))throw y}if(q){if(q.length!==E)throw new Error(a("1Lr1E"));for(f=h(E,f,1,new j(E),1),A=0;A<E;A++)f[A]-=q[A]}return c=l(o(E,1,f,1)/E),x=((u=m(E,f,1))-w.mu)/c,V=E-1,"two-sided"===w.alternative?(b=2*r(-d(x),V),k=n(1-w.alpha/2,V),g=[w.mu+(x-k)*c,w.mu+(x+k)*c]):"greater"===w.alternative?(b=1-r(x,V),k=n(1-w.alpha,V),g=[w.mu+(x-k)*c,v]):(b=r(x,V),k=n(1-w.alpha,V),g=[p,w.mu+(x+k)*c]),s(P={},"rejected",b<=w.alpha),s(P,"alpha",w.alpha),s(P,"pValue",b),s(P,"statistic",x),s(P,"ci",g),s(P,"df",V),s(P,"nullValue",w.mu),s(P,"mean",u),s(P,"sd",c),s(P,"alternative",w.alternative),s(P,"method",q?"Paired t-test":"One-sample t-test"),s(P,"print",T),P}export{P as default};
//# sourceMappingURL=index.mjs.map
