### 1. 内容的渲染和语法的高亮
本来打算直接使用`dangerouslySetInnerHTML`，但是不太安全，万一弄个xss攻击岂不是尴尬，虽然也应该没人来搞我这个小站点。后面决定发现了这个库[next-mdx-remote](https://github.com/hashicorp/next-mdx-remote)来提供渲染。其中的`<MDXRemote {...source} components={components} />`，关键在于属性`components`，可以自定义渲染时对应的内容。

对于语法高亮部分采用[react-syntax-highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter)。
### 2. 动画效果
想达到的目的是慢慢出现内容，就是透明度的问题，使用[framer-motion](https://www.framer.com/docs/introduction/), 它是一个声明式的动画库。封装一个动画组件:
``` js
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const Animation = (props) => {
  const {
    initialState = { opacity: 0 },
    finalState = { opacity: 1 },
    duration = 0.5,
    showWhenVisible = true,
    children,
  } = props;

  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView || !showWhenVisible) controls.start(finalState);
  }, [controls, inView, initialState]);

  return (
    <motion.div
      initial={initialState}
      animate={controls}
      transition={{ duration }}
      ref={ref}
    >
      {children}
    </motion.div>
  );
};

export default Animation;
```
### 3. 其他细节
其实还有些细节，比如说通过标签过滤博客，整体的样式布局，这个博客搭建还是花了我些时间。其实主要的就是遇见问题怎么搜索解决，还是google搜索靠谱。[博客源码](https://github.com/inspire-lts/myblogV2)