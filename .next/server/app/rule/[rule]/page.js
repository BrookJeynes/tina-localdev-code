(()=>{var e={};e.id=104,e.ids=[104],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},5477:e=>{"use strict";e.exports=require("punycode")},2781:e=>{"use strict";e.exports=require("stream")},7310:e=>{"use strict";e.exports=require("url")},9796:e=>{"use strict";e.exports=require("zlib")},3470:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>s.a,__next_app__:()=>p,originalPathname:()=>m,pages:()=>u,routeModule:()=>d,tree:()=>c});var n=r(482),a=r(9108),l=r(2563),s=r.n(l),o=r(8300),i={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>o[e]);r.d(t,i);let c=["",{children:["rule",{children:["[rule]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,5076)),"/Users/jeynesb/Documents/data-employee/tina_test/app/rule/[rule]/page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,2917)),"/Users/jeynesb/Documents/data-employee/tina_test/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"]}],u=["/Users/jeynesb/Documents/data-employee/tina_test/app/rule/[rule]/page.tsx"],m="/rule/[rule]/page",p={require:r,loadChunk:()=>Promise.resolve()},d=new n.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/rule/[rule]/page",pathname:"/rule/[rule]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},2576:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2583,23)),Promise.resolve().then(r.t.bind(r,6840,23)),Promise.resolve().then(r.t.bind(r,8771,23)),Promise.resolve().then(r.t.bind(r,3225,23)),Promise.resolve().then(r.t.bind(r,9295,23)),Promise.resolve().then(r.t.bind(r,3982,23))},5303:()=>{},2917:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var n=r(5036);function a({children:e}){return n.jsx("html",{lang:"en",children:n.jsx("body",{children:e})})}},5076:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u});var n=r(5036),a=r(2);let l=({content:e,components:t={}})=>{if(!e)return null;let r=Array.isArray(e)?e:e.children;return r?a.createElement(a.Fragment,null,r.map((e,r)=>a.createElement(o,{components:t,key:r,child:e}))):null},s=e=>{if(e.bold){let{bold:t,...r}=e;if(e.components.bold){let t=e.components.bold;return a.createElement(t,null,a.createElement(s,{...r}))}return a.createElement("strong",null,a.createElement(s,{...r}))}if(e.italic){let{italic:t,...r}=e;if(e.components.italic){let t=e.components.italic;return a.createElement(t,null,a.createElement(s,{...r}))}return a.createElement("em",null,a.createElement(s,{...r}))}if(e.underline){let{underline:t,...r}=e;if(e.components.underline){let t=e.components.underline;return a.createElement(t,null,a.createElement(s,{...r}))}return a.createElement("u",null,a.createElement(s,{...r}))}if(e.strikethrough){let{strikethrough:t,...r}=e;if(e.components.strikethrough){let t=e.components.strikethrough;return a.createElement(t,null,a.createElement(s,{...r}))}return a.createElement("s",null,a.createElement(s,{...r}))}if(e.code){let{code:t,...r}=e;if(e.components.code){let t=e.components.code;return a.createElement(t,null,a.createElement(s,{...r}))}return a.createElement("code",null,a.createElement(s,{...r}))}if(e.components.text){let t=e.components.text;return a.createElement(t,null,e.text)}return a.createElement(a.Fragment,null,e.text)},o=e=>a.useMemo(()=>a.createElement(i,{...e}),[JSON.stringify(e)]),i=({components:e,child:t})=>{var r,n,o,i,c,u;let{children:m,...p}=t;switch(t.type){case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":case"p":case"blockquote":case"ol":case"ul":case"li":if(e[t.type]){let r=e[t.type];return a.createElement(r,{...p},a.createElement(l,{components:e,content:m}))}return a.createElement(t.type,{children:a.createElement(l,{components:e,content:m})});case"lic":if(e.lic){let t=e.lic;return a.createElement(t,{...p},a.createElement(l,{components:e,content:m}))}return a.createElement("div",null,a.createElement(l,{components:e,content:t.children}));case"img":if(e[t.type]){let r=e[t.type];return a.createElement(r,{...p})}return a.createElement("img",{src:t.url,alt:t.caption});case"a":if(e[t.type]){let r=e[t.type];return a.createElement(r,{...p},a.createElement(l,{components:e,content:m}))}return a.createElement("a",{href:t.url},a.createElement(l,{components:e,content:m}));case"code_block":let d=t.value;if(e[t.type]){let r=e[t.type];return a.createElement(r,{...p})}return a.createElement("pre",null,a.createElement("code",null,d));case"hr":if(e[t.type]){let r=e[t.type];return a.createElement(r,{...p})}return a.createElement("hr",null);case"break":if(e[t.type]){let r=e[t.type];return a.createElement(r,{...p})}return a.createElement("br",null);case"text":return a.createElement(s,{components:e,...t});case"mdxJsxTextElement":case"mdxJsxFlowElement":let f=e[t.name];if(f){let e=t.props?t.props:{};return a.createElement(f,{...e})}{if("table"===t.name){let s=null==(r=t.props)?void 0:r.firstRowHeader,m=(s?null==(n=t.props)?void 0:n.tableRows.filter((e,t)=>0!==t):null==(o=t.props)?void 0:o.tableRows)||[],p=null==(c=null==(i=t.props)?void 0:i.tableRows)?void 0:c.at(0),d=e.table||(e=>a.createElement("table",{...e})),f=e.tr||(e=>a.createElement("tr",{...e})),h=e.th||(e=>a.createElement("th",{style:{textAlign:(null==e?void 0:e.align)||"auto"},...e})),y=e.td||(e=>a.createElement("td",{style:{textAlign:(null==e?void 0:e.align)||"auto"},...e})),b=(null==(u=t.props)?void 0:u.align)||[];return a.createElement(d,null,s&&a.createElement("thead",null,a.createElement(f,null,p.tableCells.map((e,t)=>a.createElement(l,{key:t,components:{p:e=>a.createElement(h,{align:b[t],...e})},content:e.value})))),a.createElement("tbody",null,m.map((e,t)=>{var r;return a.createElement(f,{key:t},null==(r=null==e?void 0:e.tableCells)?void 0:r.map((e,t)=>a.createElement(l,{key:t,components:{p:e=>a.createElement(y,{align:b[t],...e})},content:e.value})))})))}let s=e.component_missing;if(s)return a.createElement(s,{name:t.name});return a.createElement("span",null,`No component provided for ${t.name}`)}case"maybe_mdx":return null;case"html":case"html_inline":if(e[t.type]){let r=e[t.type];return a.createElement(r,{...p})}return t.value;case"invalid_markdown":return a.createElement("pre",null,t.value);default:if("string"==typeof t.text)return a.createElement(s,{components:e,...t})}};var c=r(9639);let u=async function({params:e}){let t=(await c.Z.queries.rule({relativePath:`${e.rule}.mdx`})).data.rule;return n.jsx("div",{children:n.jsx(l,{content:t.body})})}},9639:(e,t,r)=>{"use strict";r.d(t,{Z:()=>h});var n=r(6424);function a(e,...t){let r="";return e.forEach((e,n)=>{r+=e+(t[n]||"")}),r}let l=a`
    fragment TopicParts on Topic {
  __typename
  slug
  title
  topics {
    __typename
    category {
      ... on Category {
        __typename
        slug
        title
        rules {
          __typename
          rule {
            ... on Rule {
              __typename
              archived
              title
              body
            }
            ... on Document {
              _sys {
                filename
                basename
                breadcrumbs
                path
                relativePath
                extension
              }
              id
            }
          }
        }
      }
      ... on Document {
        _sys {
          filename
          basename
          breadcrumbs
          path
          relativePath
          extension
        }
        id
      }
    }
  }
}
    `,s=a`
    fragment CategoryParts on Category {
  __typename
  slug
  title
  rules {
    __typename
    rule {
      ... on Rule {
        __typename
        archived
        title
        body
      }
      ... on Document {
        _sys {
          filename
          basename
          breadcrumbs
          path
          relativePath
          extension
        }
        id
      }
    }
  }
}
    `,o=a`
    fragment RuleParts on Rule {
  __typename
  archived
  title
  body
}
    `,i=a`
    query topic($relativePath: String!) {
  topic(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...TopicParts
  }
}
    ${l}`,c=a`
    query topicConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: TopicFilter) {
  topicConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...TopicParts
      }
    }
  }
}
    ${l}`,u=a`
    query category($relativePath: String!) {
  category(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...CategoryParts
  }
}
    ${s}`,m=a`
    query categoryConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: CategoryFilter) {
  categoryConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...CategoryParts
      }
    }
  }
}
    ${s}`,p=a`
    query rule($relativePath: String!) {
  rule(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...RuleParts
  }
}
    ${o}`,d=a`
    query ruleConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: RuleFilter) {
  ruleConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...RuleParts
      }
    }
  }
}
    ${o}`,f=(e,t)=>async(t,r,n)=>{let a=e.apiUrl;if(n?.branch){let t=e.apiUrl.lastIndexOf("/");a=e.apiUrl.substring(0,t+1)+n.branch}let l=await e.request({query:t,variables:r,url:a});return{data:l?.data,errors:l?.errors,query:t,variables:r||{}}},h=(0,n.eI)({url:"https://content.tinajs.io/1.4/content/ee1a49e3-5fd9-4c39-9c5c-aefe2ebebc5f/github/main",token:"42e0caf391ee2a524d47db72ba0ccbc4ab0e1a58",queries:(e,t)=>(function(e){return{topic:(t,r)=>e(i,t,r),topicConnection:(t,r)=>e(c,t,r),category:(t,r)=>e(u,t,r),categoryConnection:(t,r)=>e(m,t,r),rule:(t,r)=>e(p,t,r),ruleConnection:(t,r)=>e(d,t,r)}})(f(e,t))})}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[22,893],()=>r(3470));module.exports=n})();