# React 动画 - SwitchTransition

用于有秩序的切换内部组件

默认情况下是：out-in

1. 当key值改变时，会将之前的DOM跟元素添加退出样式（exit，exit-active）
2. 退出完成后，讲该DOM元素移除
3. 重新渲染内部DOM元素
4. 为该渲染的DOM根元素添加进入样式（enter，enter-active，enter-done）

in-out：
1. 重新渲染内部DOM元素，保留之前的元素
2. 为新渲染的DOM根元素添加进入样式（enter，enter-active，enter-done）
3. 讲之前的DOM根元素添加退出样式（exit，exit-active）
4. 退出完成后，将该DOM元素移除

> 该库寻找dom元素的方式，是使用已经过时的API：findDomNode，该方法匡元找到某个组件下的DOM根元素