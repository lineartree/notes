"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[9367],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(n),k=l,m=d["".concat(o,".").concat(k)]||d[k]||c[k]||a;return n?r.createElement(m,u(u({ref:t},s),{},{components:n})):r.createElement(m,u({ref:t},s))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,u=new Array(a);u[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,u[1]=i;for(var p=2;p<a;p++)u[p]=n[p];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8003:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var r=n(7462),l=n(3366),a=(n(7294),n(3905)),u=["components"],i={},o="snake game",p={unversionedId:"tutorial-extras/snake-game",id:"tutorial-extras/snake-game",title:"snake game",description:"\u5728\u4e0a\u500b\u5b78\u671f\u4e2d\uff0c\u6211\u5df2\u5b78\u7fd2\u4e86C++\u7684\u57fa\u790e\u8a9e\u6cd5\uff0c\u5728\u9019\u500b\u5b78\u671f\uff0c\u6211\u6253\u7b97\u7de8\u5beb\u4e00\u500b\u5c0f\u7a0b\u5f0f\u4f86\u9a57\u6536\u6211\u7684\u6210\u679c\u3002",source:"@site/docs/tutorial-extras/snake-game.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/snake-game",permalink:"/notes/docs/tutorial-extras/snake-game",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-extras/snake-game.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Translate your site",permalink:"/notes/docs/tutorial-extras/translate-your-site"},next:{title:"Generate new SSH key",permalink:"/notes/docs/github/generating-a-new-ssh-key"}},s={},c=[{value:"Step 1 \u521d\u59cb\u5316SDL",id:"step-1-\u521d\u59cb\u5316sdl",level:2},{value:"Step 2 \u756b\u7246",id:"step-2-\u756b\u7246",level:2},{value:"Step 3 \u756b\u86c7\u7684\u8eab\u9ad4",id:"step-3-\u756b\u86c7\u7684\u8eab\u9ad4",level:2},{value:"Step 4 \u8b93\u86c7\u52d5",id:"step-4-\u8b93\u86c7\u52d5",level:2},{value:"Step 5 \u63a7\u5236\u86c7\u7684\u65b9\u5411",id:"step-5-\u63a7\u5236\u86c7\u7684\u65b9\u5411",level:2},{value:"Step 6 \u8b93\u86c7\u6b7b",id:"step-6-\u8b93\u86c7\u6b7b",level:2},{value:"Step 7 \u756b\u98df\u7269",id:"step-7-\u756b\u98df\u7269",level:2},{value:"Step 7 \u7d00\u9304\u5206\u6578",id:"step-7-\u7d00\u9304\u5206\u6578",level:2},{value:"Step 8 \u66f4\u63db\u7a0b\u5f0f\u5716\u6a19",id:"step-8-\u66f4\u63db\u7a0b\u5f0f\u5716\u6a19",level:2},{value:"\u9700\u8981\u7684\u77e5\u8b58",id:"\u9700\u8981\u7684\u77e5\u8b58",level:2},{value:"\u56f0\u96e3",id:"\u56f0\u96e3",level:2},{value:"\u5fc3\u5f97",id:"\u5fc3\u5f97",level:2}],d={toc:c};function k(e){var t=e.components,n=(0,l.Z)(e,u);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"snake-game"},"snake game"),(0,a.kt)("h1",{id:"\u52d5\u6a5f"},"\u52d5\u6a5f"),(0,a.kt)("p",null,"\u5728\u4e0a\u500b\u5b78\u671f\u4e2d\uff0c\u6211\u5df2\u5b78\u7fd2\u4e86C++\u7684\u57fa\u790e\u8a9e\u6cd5\uff0c\u5728\u9019\u500b\u5b78\u671f\uff0c\u6211\u6253\u7b97\u7de8\u5beb\u4e00\u500b\u5c0f\u7a0b\u5f0f\u4f86\u9a57\u6536\u6211\u7684\u6210\u679c\u3002\n\u8caa\u98df\u86c7\u662f\u4e00\u500b\u57fa\u672c\u7684\u5c0f\u904a\u6232\uff0c\u900f\u904e\u64cd\u4f5c\u86c7\u7684\u65b9\u5411\uff0c\u5403\u6389\u98df\u7269\uff0c\u7372\u5f97\u5206\u6578\u3002\n\u5728\u9019\u88e1\uff0c\u6211\u4f7f\u7528SDL\u7a0b\u5f0f\u5eab\u4f86\u986f\u793a\u87a2\u5e55\u3002"),(0,a.kt)("h1",{id:"\u8a2d\u8a08\u6d41\u7a0b"},"\u8a2d\u8a08\u6d41\u7a0b"),(0,a.kt)("p",null,"\u521d\u59cb\u5316SDL->\u756b\u7246->\u756b\u86c7\u7684\u8eab\u9ad4->\u8b93\u86c7\u52d5->\u63a7\u5236\u86c7\u7684\u65b9\u5411->\u8b93\u86c7\u6b7b->\u756b\u98df\u7269->\u7d00\u9304\u5206\u6578"),(0,a.kt)("h2",{id:"step-1-\u521d\u59cb\u5316sdl"},"Step 1 \u521d\u59cb\u5316SDL"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u6211\u9700\u8981\u521d\u59cb\u5316SDL\uff0c\u57f7\u884c\u7a0b\u5f0f\u5f8c\u5c31\u53ef\u4ee5\u770b\u5230\u7a7a\u767d\u7684\u87a2\u5e55\u3002",(0,a.kt)("br",null),"\n",(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/hys1vT0.png",alt:null})),(0,a.kt)("h2",{id:"step-2-\u756b\u7246"},"Step 2 \u756b\u7246"),(0,a.kt)("p",null,"\u7b2c\u4e8c\u6b65\uff0c\u6211\u756b\u51fa\u904a\u6232\u7684\u908a\u754c\u3002",(0,a.kt)("br",null),"\n",(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/QoCudxe.png",alt:null})),(0,a.kt)("h2",{id:"step-3-\u756b\u86c7\u7684\u8eab\u9ad4"},"Step 3 \u756b\u86c7\u7684\u8eab\u9ad4"),(0,a.kt)("p",null,"\u7b2c\u4e09\u6b65\uff0c\u6211\u756b\u51fa\u86c7\u7684\u8eab\u9ad4\uff0c\u4e26\u5857\u4e0a\u7da0\u8272\u3002\u4e26\u5728\u86c7\u7684\u8eab\u9ad4\u90e8\u4f4d\u756b\u4e0a\u9ed1\u8272\u908a\u754c\u4ee5\u7a81\u986f\u3002",(0,a.kt)("br",null),"\n",(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/JjC3kpU.png",alt:null})),(0,a.kt)("h2",{id:"step-4-\u8b93\u86c7\u52d5"},"Step 4 \u8b93\u86c7\u52d5"),(0,a.kt)("p",null,"\u900f\u904e\u66f4\u63db\u86c7\u982d\u7684\u4f4d\u7f6e\uff0c\u8b93\u86c7\u52d5\u3002"),(0,a.kt)("h2",{id:"step-5-\u63a7\u5236\u86c7\u7684\u65b9\u5411"},"Step 5 \u63a7\u5236\u86c7\u7684\u65b9\u5411"),(0,a.kt)("p",null,"\u4f7f\u7528\u65b9\u5411\u9375\u4ee5\u63a7\u5236\u86c7\u7684\u65b9\u5411\u3002"),(0,a.kt)("h2",{id:"step-6-\u8b93\u86c7\u6b7b"},"Step 6 \u8b93\u86c7\u6b7b"),(0,a.kt)("p",null,"\u7576\u86c7\u89f8\u78b0\u5230\u908a\u754c\u6642\uff0c\u5c31\u8b93\u86c7\u6b7b\uff0c\u4e26\u5c07\u86c7\u5857\u4e0a\u7d05\u8272\u3002"),(0,a.kt)("h2",{id:"step-7-\u756b\u98df\u7269"},"Step 7 \u756b\u98df\u7269"),(0,a.kt)("p",null,"\u4ee5rand\u51fd\u6578\u751f\u6210\u98df\u7269\u7684\u4f4d\u7f6e\uff0c\u4e26\u4f7f\u7528SDL_Image\u5c07\u98df\u7269\u66ff\u63db\u70ba\u860b\u679c\u5716\u7247\u3002"),(0,a.kt)("h2",{id:"step-7-\u7d00\u9304\u5206\u6578"},"Step 7 \u7d00\u9304\u5206\u6578"),(0,a.kt)("p",null,"\u7576\u86c7\u5403\u5230\u98df\u7269\u6642\uff0c\u4e5f\u5c31\u662f\u7576\u86c7\u982d\u7684\u4f4d\u7f6e\u7b49\u65bc\u98df\u7269\u7684\u4f4d\u7f6e\u6642\uff0c\u5c07\u5206\u6578\u52a0\u4e00\uff0c\u7d00\u9304\u86c7\u7e3d\u5171\u5403\u4e86\u591a\u5c11\u7684\u98df\u7269\uff0c\u4e26\u5c07\u5206\u6578\u986f\u793a\u5230\u87a2\u5e55\u4e0a\u3002"),(0,a.kt)("h2",{id:"step-8-\u66f4\u63db\u7a0b\u5f0f\u5716\u6a19"},"Step 8 \u66f4\u63db\u7a0b\u5f0f\u5716\u6a19"),(0,a.kt)("p",null,"\u900f\u904eSDL_SetWindowIcon\u51fd\u6578\u5c07\u7a0b\u5f0f\u5716\u6a19\u66f4\u63db\u70ba\u86c7\u7684\u5716\u6848",(0,a.kt)("br",null),"\n",(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/YioPiHp.png",alt:null})),(0,a.kt)("h2",{id:"\u9700\u8981\u7684\u77e5\u8b58"},"\u9700\u8981\u7684\u77e5\u8b58"),(0,a.kt)("p",null,"\u5728\u9019\u500b\u7a0b\u5f0f\u4e2d\uff0c\u6211\u4f7f\u7528\u5230enum\u7d00\u9304\u904a\u6232\u72c0\u614b\uff0c\u6709NOT_PLAYING\u3001PLAYING\u3001PAUSED\u3001GAME_OVER\u7b49",(0,a.kt)("br",null),"\n\u4f7f\u7528struct\u4f86\u7d00\u9304\u9019\u500b\u904a\u6232\u9700\u8981\u7528\u5230\u7684\u8b8a\u6578",(0,a.kt)("br",null),"\n\u4f7f\u7528\u51fd\u6578\u7c21\u5316\u7a0b\u5f0f\u78bc\uff0c\u4f7f\u5176\u66f4\u5bb9\u6613\u95b1\u8b80",(0,a.kt)("br",null),"\n\u4f7f\u7528\u6307\u91dd\uff0c\u76f4\u63a5\u4f7f\u7528\u8b8a\u6578\u5730\u5740\uff0c\u4e0d\u8907\u88fd\u8b8a\u6578\u589e\u52a0\u5167\u5b58",(0,a.kt)("br",null),"\n\u4f7f\u7528if-else\u8a9e\u53e5\uff0c\u5224\u65b7\u904a\u6232\u72c0\u614b\uff0c\u57f7\u884c\u60f3\u8981\u7684\u7d50\u679c",(0,a.kt)("br",null),"\n\u4f7f\u7528while\u8ff4\u5708\uff0c\u5224\u65b7\u904a\u6232\u72c0\u614b\uff0c\u7576\u904a\u6232\u7d50\u675f\u6642\u8df3\u51fa\u8ff4\u5708",(0,a.kt)("br",null),"\n\u4f7f\u7528for\u8ff4\u5708\uff0c\u6aa2\u8996\u86c7\u7e3d\u5171\u7684\u8eab\u9ad4\u6578\u91cf\uff0c\u5c07\u9700\u8981\u7684\u90e8\u4f4d\u986f\u793a\u6216\u6d88\u5931\u5728\u87a2\u5e55\u4e0a",(0,a.kt)("br",null)),(0,a.kt)("h2",{id:"\u56f0\u96e3"},"\u56f0\u96e3"),(0,a.kt)("p",null,"\u56f0\u96e3\u7684\u5730\u65b9\u5728\u65bc\u8b93\u86c7\u52d5\uff0c\u5be6\u969b\u4e0a\u662f\u66f4\u63db\u86c7\u6bcf\u4e00\u5e40\u7684\u4f4d\u7f6e\uff0c\u66f4\u65b0\u7a0b\u5f0f\uff0c\u986f\u793a\u5230\u87a2\u5e55\u4e0a\u3002\u8981\u8a08\u7b97\u86c7\u7684\u524d\u9032\u662f\u6700\u56f0\u96e3\u7684\u90e8\u4efd\u3002\u6211\u5728\u9019\u88e1\u5148\u5c07\u6bcf\u500b\u86c7\u7684\u8eab\u9ad4\u90e8\u4f4d\u9ad4\u63db\u70ba\u524d\u4e00\u500b\u8eab\u9ad4\u90e8\u4f4d\uff0c\u5c07\u86c7\u982d\u7684\u4f4d\u7f6e\u5411\u524d\u79fb\u4e00\u683c\uff0c\u4e26\u5c07\u86c7\u7684\u5c3e\u5df4\u90a3\u4e00\u683c\u53bb\u6389\uff0c\u66f4\u65b0\u7a0b\u5f0f\u5f8c\uff0c\u5c31\u80fd\u5275\u9020\u51fa\u86c7\u52d5\u7684\u756b\u9762\u3002"),(0,a.kt)("h2",{id:"\u5fc3\u5f97"},"\u5fc3\u5f97"),(0,a.kt)("p",null,"\u96d6\u7136\u4f7f\u7528\u7684C++\u8a9e\u6cd5\u4e0d\u96e3\uff0c\u4f46\u56e0\u70ba\u4f7f\u7528SDL\uff0c\u5c0d\u65bc\u9019\u500b\u51fd\u5f0f\u5eab\u5176\u5be6\u5f88\u964c\u751f\uff0c\u82b1\u4e86\u8f03\u591a\u6642\u9593\u5b78\u7fd2\uff0c\u4f46\u4e5f\u4e0d\u6789\u8cbb\u6211\u6240\u6295\u5165\u7684\u6642\u9593\uff0c\u6700\u5f8c\u80fd\u5920\u88fd\u4f5c\u51fa\u50cf\u6a23\u7684\u5c0f\u904a\u6232\uff0c\u6211\u611f\u5230\u975e\u5e38\u958b\u5fc3\uff0c\u8f9b\u82e6\u7684\u4ed8\u51fa\u7d42\u65bc\u6709\u4e86\u6536\u7a6b\u3002"))}k.isMDXComponent=!0}}]);