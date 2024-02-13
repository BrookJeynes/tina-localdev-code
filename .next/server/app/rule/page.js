(()=>{var e={};e.id=378,e.ids=[378],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},5477:e=>{"use strict";e.exports=require("punycode")},2781:e=>{"use strict";e.exports=require("stream")},7310:e=>{"use strict";e.exports=require("url")},9796:e=>{"use strict";e.exports=require("zlib")},1143:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>d,pages:()=>c,routeModule:()=>m,tree:()=>u});var a=r(482),s=r(9108),n=r(2563),o=r.n(n),i=r(8300),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);r.d(t,l);let u=["",{children:["rule",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,171)),"/Users/jeynesb/Documents/data-employee/tina_test/app/rule/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,2917)),"/Users/jeynesb/Documents/data-employee/tina_test/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"]}],c=["/Users/jeynesb/Documents/data-employee/tina_test/app/rule/page.tsx"],d="/rule/page",p={require:r,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/rule/page",pathname:"/rule",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},2576:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2583,23)),Promise.resolve().then(r.t.bind(r,6840,23)),Promise.resolve().then(r.t.bind(r,8771,23)),Promise.resolve().then(r.t.bind(r,3225,23)),Promise.resolve().then(r.t.bind(r,9295,23)),Promise.resolve().then(r.t.bind(r,3982,23))},5303:()=>{},2917:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var a=r(5036);function s({children:e}){return a.jsx("html",{lang:"en",children:a.jsx("body",{children:e})})}},171:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var a=r(5036),s=r(9639);let n=async function(){let e=await s.Z.queries.categoryConnection({first:0,last:9e3}),t=e.data.categoryConnection.edges?.map(e=>(console.debug(e),{slug:e?.node?._sys.filename,title:e?.node?.title,rules:e?.node?.rules}));return(0,a.jsxs)("div",{children:[a.jsx("a",{href:"http://localhost:3000/admin/index.html#/collections/edit/rule/Test-rule-1",children:"test"}),a.jsx("ul",{children:t?.map(e=>a.jsx("li",{children:e?.rules?.map(e=>a.jsx("p",{children:e?.rule.title},e?.rule.id))},e.slug))})]})}},9639:(e,t,r)=>{"use strict";r.d(t,{Z:()=>g});var a=r(6424);function s(e,...t){let r="";return e.forEach((e,a)=>{r+=e+(t[a]||"")}),r}let n=s`
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
    `,o=s`
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
    `,i=s`
    fragment RuleParts on Rule {
  __typename
  archived
  title
  body
}
    `,l=s`
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
    ${n}`,u=s`
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
    ${n}`,c=s`
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
    ${o}`,d=s`
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
    ${o}`,p=s`
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
    ${i}`,m=s`
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
    ${i}`,f=(e,t)=>async(t,r,a)=>{let s=e.apiUrl;if(a?.branch){let t=e.apiUrl.lastIndexOf("/");s=e.apiUrl.substring(0,t+1)+a.branch}let n=await e.request({query:t,variables:r,url:s});return{data:n?.data,errors:n?.errors,query:t,variables:r||{}}},g=(0,a.eI)({url:"https://content.tinajs.io/1.4/content/ee1a49e3-5fd9-4c39-9c5c-aefe2ebebc5f/github/main",token:"42e0caf391ee2a524d47db72ba0ccbc4ab0e1a58",queries:(e,t)=>(function(e){return{topic:(t,r)=>e(l,t,r),topicConnection:(t,r)=>e(u,t,r),category:(t,r)=>e(c,t,r),categoryConnection:(t,r)=>e(d,t,r),rule:(t,r)=>e(p,t,r),ruleConnection:(t,r)=>e(m,t,r)}})(f(e,t))})}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[22,893],()=>r(1143));module.exports=a})();