"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[2836],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(t),f=o,g=d["".concat(p,".").concat(f)]||d[f]||u[f]||l;return t?r.createElement(g,a(a({ref:n},c),{},{components:t})):r.createElement(g,a({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<l;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1584:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var r=t(7462),o=t(3366),l=(t(7294),t(3905)),a=["components"],i={},p=void 0,s={unversionedId:"minecraft-clone/notes",id:"minecraft-clone/notes",title:"notes",description:"Notes",source:"@site/docs/minecraft-clone/notes.md",sourceDirName:"minecraft-clone",slug:"/minecraft-clone/notes",permalink:"/notes/docs/minecraft-clone/notes",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/minecraft-clone/notes.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Generate new SSH key",permalink:"/notes/docs/github/generating-a-new-ssh-key"},next:{title:"OpenGL Functions",permalink:"/notes/docs/opengl/functions"}},c={},u=[{value:"\u524d\u7f6e\u4f5c\u696d",id:"\u524d\u7f6e\u4f5c\u696d",level:2},{value:"pyglet",id:"pyglet",level:3},{value:"pyglet options",id:"pyglet-options",level:3},{value:"\u7a0b\u5f0f\u4e3b\u9ad4",id:"\u7a0b\u5f0f\u4e3b\u9ad4",level:2}],d={toc:u};function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Notes"),(0,l.kt)("h2",{id:"\u524d\u7f6e\u4f5c\u696d"},"\u524d\u7f6e\u4f5c\u696d"),(0,l.kt)("h3",{id:"pyglet"},"pyglet"),(0,l.kt)("p",null,"pyglet \u662fPython \u7684\u8de8\u5e73\u53f0\u7a97\u53e3\u548c\u591a\u5a92\u9ad4\u904a\u6232\u5eab\u3002"),(0,l.kt)("p",null,"\u5b89\u88dd:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pip install --user pyglet\n")),(0,l.kt)("h3",{id:"pyglet-options"},"pyglet options"),(0,l.kt)("p",null,"\u9ed8\u8a8d\u60c5\u6cc1\u4e0b\uff0cshadow_window\u5141\u8a31\u5728\u61c9\u7528\u7a0b\u5e8f\u7a97\u53e3\u5275\u5efa\u4e4b\u524d\u52a0\u8f09\u8cc7\u6e90\u3002",(0,l.kt)("br",null),"\n\u4e00\u4e9bOpenGL\u5be6\u73fe\u53ef\u80fd\u4e0d\u652f\u6301\u5171\u4eabOpenGL\u4e0a\u4e0b\u6587\uff0c\u6240\u4ee5\u9700\u8981\u7981\u7528shadow_window"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'pyglet.options["shadow_window"] = False\n')),(0,l.kt)("p",null,"\u7981\u7528debug_gl\uff0c\u4f7f\u7a0b\u5f0f\u8dd1\u5f97\u66f4\u5feb"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'pyglet.options["debug_gl"] = False\n')),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pyglet.readthedocs.io/en/latest/programming_guide/options.html"},"More Information")),(0,l.kt)("h2",{id:"\u7a0b\u5f0f\u4e3b\u9ad4"},"\u7a0b\u5f0f\u4e3b\u9ad4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'class Window(pyglet.window.Window): # create a class extending pyglet.window.Window\n    def __init__(self, **args):\n        super().__init__(**args) # pass on arguments to pyglet.window.Window.__init__ function\n    \n    def on_draw(self):\n        gl.glClearColor(1.0, 0.5, 1.0, 1.0) # set clear colour\n        self.clear() # clear screen\n    \n    def on_resize(self, width, height):\n        print(f"Resize {width} * {height}") # print out window size\n')),(0,l.kt)("p",null,"\u5efa\u7acbWindow Class \u4e26\u5f9epyglet.window.window\u4e2d\u7e7c\u627f",(0,l.kt)("br",null)),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"super().__init__(**args)"),"\u7528\u4f86\u7e7c\u627f",(0,l.kt)("br",null)),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"**args"),"\u53ef\u4ee5\u7528\u4f86\u50b3\u905e\u591a\u500b\u53c3\u6578 ",(0,l.kt)("a",{parentName:"li",href:"https://book.pythontips.com/en/latest/args_and_kwargs.html"},"More Information"),(0,l.kt)("br",null)),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"on_draw"),"\u51fd\u6578\u8a2d\u7f6e\u87a2\u5e55\u7684\u984f\u8272",(0,l.kt)("br",null)),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"on_resize"),"\u5370\u51fa\u8996\u7a97\u5927\u5c0f",(0,l.kt)("br",null),(0,l.kt)("br",null))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'class Game:\n    def __init__(self):\n        self.config = gl.Config(double_buffer = True, major_version = 3, minor_version = 3) # use modern opengl\n        self.window = Window(config = self.config, width = 800, height = 600, caption = "Minecraft clone", resizable = True, vsync = False) # vsync with pyglet causes problems on some computers, so disable it\n    \n    def run(self):\n        pyglet.app.run() # run our application\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"depth_size")," \u8981\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"gl.glEnable(gl.GL_DEPTH_TEST)"),"\u4e00\u8d77\u4f7f\u7528\u624d\u6703\u6709\u6548\u679c"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pyglet.readthedocs.io/en/latest/programming_guide/context.html#:~:text=of%20these%20properties%3A-,depth_size,-A%20depth%20buffer"},"More Info")))}f.isMDXComponent=!0}}]);