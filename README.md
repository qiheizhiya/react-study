# PureComponent

纯组件，用于避免不必要的渲染（运行render函数），从而提高效率

优化：如果一个组件的属性和状态，都没有发生变化，重新渲染该组件是没有必要的

PureComponent是一个组件，如果某个组件继承于该组件，则该组件的shouldComponentUpdate会进行优化，对属性和状态进行浅比较，如果相等则不会重新渲染

**注意**
1. PureComponent进行是浅比较
   1. 为了效率，应该尽量使用pureComponent
   2. 要求不要改动之前的状态，永远是新的状态覆盖之前的状态(immutable, 不可变对象)
   3. 有一个第三方JS库，Immutable.js ，他专门用于制作不可变对象
2. 函数组件，使用React.memo