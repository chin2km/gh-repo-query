(this["webpackJsonpgh-repo-query"]=this["webpackJsonpgh-repo-query"]||[]).push([[5],{196:function(e,n,t){"use strict";t.d(n,"a",(function(){return b}));var r,a=t(28),c=t(49),i=(t(0),t(97)),o=t.n(i),s=t(42),d=t(10),b=function(e){var n=e.message;return Object(d.jsx)(c.Page,{children:Object(d.jsxs)(j,{"data-testid":"error-message",children:[Object(d.jsx)(o.a,{size:100}),Object(d.jsx)(c.Divider,{}),n,Object(d.jsx)(l,{message:n})]})})},l=function(e){var n=e.message;return(null===n||void 0===n?void 0:n.includes("status code 401"))?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(c.Divider,{}),Object(d.jsx)("h5",{children:"Not Authenticated. Pass a valid github Personal Access Token in the query parameter"}),Object(d.jsx)("h6",{children:"eg: ?token=you_personal_access_token"})]}):null},j=s.a.section(r||(r=Object(a.a)(["\n    box-sizing: border-box;\n    padding: 2rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"])))},197:function(e,n,t){"use strict";t.d(n,"a",(function(){return f}));var r,a,c,i,o=t(0),s=t(28),d=t(49),b=t(13),l=t(42),j=t(86),u=t(10),p=function(){var e=Object(j.g)(),n=e.repoName,t=e.debouncedRepoName,r=e.setRepoName,a=Object(j.d)(),c=a.ownerName,i=a.debouncedOwnerName,s=a.setOwnerName,l=Object(j.e)({debouncedRepoName:t,debouncedOwnerName:i}),p=Object(b.g)();return Object(o.useEffect)((function(){!l||l.debouncedOwnerName===i&&l.debouncedRepoName===t||p.push("/".concat(i,"/").concat(t))}),[i,t,p,l]),Object(u.jsxs)(x,{children:[Object(u.jsx)(O,{children:"You are viewing repository"}),Object(u.jsx)(d.Input,{"data-testid":"repository-input",size:"large",placeholder:"repository",value:n,onChange:function(e){return r(e.target.value)}}),Object(u.jsx)(O,{children:"by"}),Object(u.jsx)(d.Input,{"data-testid":"owner-input",size:"large",placeholder:"owner",value:c,onChange:function(e){return s(e.target.value)}})]})},x=l.a.section(r||(r=Object(s.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 0.5rem;\n    position: sticky;\n    top: 0;\n    background-color: rgb(255 255 255 / 70%);\n    backdrop-filter: blur(5px);\n    z-index: 20;\n    width: 100%;\n"]))),O=l.a.span(a||(a=Object(s.a)(["\n    margin: 0 1rem;\n"]))),h=t(87),m=function(e){var n=e.basename,t=Object(b.h)().pathname;return Object(u.jsxs)(g,{children:[Object(u.jsx)(v,{to:n,$active:t===n,children:"Home"}),Object(u.jsx)(v,{to:"".concat(n,"/issues"),$active:t==="".concat(n,"/issues"),children:"Issues"})]})},g=l.a.nav(c||(c=Object(s.a)(["\n    display: flex;\n    justify-content: center;\n    box-sizing: border-box;\n    padding: 1rem;\n    position: sticky;\n    top: 56px;\n    z-index: 20;\n    margin-bottom: 2rem;\n    width: 100%;\n\n    background-color: rgb(255 255 255 / 70%);\n    backdrop-filter: blur(5px);\n    box-shadow: rgb(130 130 130 / 10%) 0px 8px 7px 0px, rgb(0 0 0 / 9%) 2px 3px 5px 0px;\n"]))),v=Object(l.a)(h.b)(i||(i=Object(s.a)(["\n    line-height: 2rem;\n    color: black;\n    margin: 0 0.5rem;\n    box-sizing: border-box;\n    border-bottom: solid 2px;\n    border-color: ",";\n\n    &:hover {\n        border-color: black;\n    }\n"])),(function(e){return e.$active?"black":"transparent"})),f=function(e){return function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(p,{}),Object(u.jsx)(m,{basename:Object(j.a)()}),Object(u.jsx)(e,{})]})}}},199:function(e,n,t){"use strict";t.r(n);var r,a,c,i,o,s,d=t(28),b=t(49),l=t(87),j=t(42),u=t(98),p=t(196),x=t(60),O=t(86),h=t(197),m=t(10);n.default=Object(h.a)((function(){var e,n,t=Object(O.a)(),r=Object(O.h)(),a=r.searchKeyword,c=r.setSearchKeyword,i=r.debouncedSearchKeyword,o=Object(O.c)(),s=o.issueState,d=o.setIssueState,l=Object(O.f)(),j=l.owner,h=l.repo,z=Object(x.c)({variables:{query:"\n                repo:".concat(j,"/").concat(h,"\n                is:issue\n                is:").concat(s.toLowerCase(),"\n                ").concat(i,"\n            ").trim()},fetchPolicy:"cache-first"});return z.loading?Object(m.jsx)(u.a,{}):z.data?Object(m.jsxs)(g,{children:[Object(m.jsxs)(v,{children:[Object(m.jsxs)("div",{children:["Search in title or content:",Object(m.jsx)(b.Input,{placeholder:"type search term",width:"100%",value:a,onChange:function(e){var n=e.target.value;return c(n)},"data-testid":"search-repo"})]}),Object(m.jsxs)("div",{children:["State:",Object(m.jsxs)(b.Radio.Group,{value:s,onChange:function(e){return d(e)},useRow:!0,children:[Object(m.jsx)(b.Radio,{value:x.a.Open,children:"Open"}),Object(m.jsx)(b.Radio,{value:x.a.Closed,children:"Closed"})]})]})]}),Object(m.jsxs)(b.Divider,{children:["Issues: ",Object(m.jsx)(b.Badge,{children:z.data.search.issueCount})]}),Object(m.jsx)(b.Card,{"data-testid":"issues-list",children:null===(e=z.data.search.nodes)||void 0===e?void 0:e.map((function(e,n){var r,a;return"Issue"===(null===e||void 0===e?void 0:e.__typename)&&Object(m.jsx)(w,{hoverable:!0,children:Object(m.jsxs)(k,{to:"".concat(t,"/issues/").concat(e.number),"data-testid":"issue-link",children:[Object(m.jsx)(f,{"data-testid":"issue-title",children:null===e||void 0===e?void 0:e.title}),Object(m.jsxs)(y,{children:[Object(m.jsx)(b.Avatar,{src:null===(r=e.author)||void 0===r?void 0:r.avatarUrl,size:"mini"}),Object(m.jsxs)("span",{children:["Opened on ",new Date(e.createdAt).toDateString()," by ",Object(m.jsx)("i",{children:null===(a=e.author)||void 0===a?void 0:a.login})]})]})]})},n)}))})]}):z.error?Object(m.jsx)(p.a,{message:null===(n=z.error)||void 0===n?void 0:n.message}):null}));var g=j.a.section(r||(r=Object(d.a)(["\n    box-sizing: border-box;\n    padding: 2rem;\n    display: flex;\n    flex-direction: column;\n    width: 70%;\n    margin: auto;\n"]))),v=j.a.section(a||(a=Object(d.a)(["\n    display: flex;\n    flex-direction: row;\n    margin-bottom: 2rem;\n    gap: 2rem;\n    justify-content: center;\n"]))),f=j.a.div(c||(c=Object(d.a)(["\n    margin-bottom: 0.5rem;\n"]))),y=j.a.div(i||(i=Object(d.a)(["\n    color: #333;\n    font-size: 12px;\n\n    span {\n        margin-left: 0.5rem;\n    }\n"]))),w=Object(j.a)(b.Card)(o||(o=Object(d.a)(["\n  min-height: 75px;\n  margin-bottom: 0.5rem !important;\n"]))),k=Object(j.a)(l.b)(s||(s=Object(d.a)(["\n    transition: all 0.3s ease-in-out;\n    border-bottom: solid 1.5px transparent;\n\n    &:hover {\n        color: #04b177 !important;\n        border-color: #999;\n    }\n"])))}}]);
//# sourceMappingURL=5.ce38f4ba.chunk.js.map