// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
function f(f,o,r,a){var l,t,e,i,n,c,d,u,v,g,h,p,s,x,b,j,k,m;if(t=o[3],e=o[2],i=o[1],n=o[0],!(t<=0||e<=0||i<=0||n<=0))for(arguments.length>4&&(l=arguments[4]),j=f[0],k=f[1],v=0;v<n;v++)for(p=j[v],b=k[v],u=0;u<i;u++)for(h=p[u],x=b[u],d=0;d<e;d++)for(g=h[d],s=x[d],c=0;c<t;c++)void 0!==(m=a.call(l,g[c],[v,u,d,c],[j,k]))&&(s[c]=r(m))}export{f as default};
//# sourceMappingURL=index.mjs.map
