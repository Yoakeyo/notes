# Vue

####	v-if 和 v-show 的区别

当条件为 false时，v-if会将元素从dom中删除

而v-show 只会将元素修改为 display:none

当显示和隐藏切换很频繁时，使用v-show

当切换次数较少时，使用v-if

#### Vue中对数组的操作

- push
  - 向数组末尾添加一个或多个元素

- pop
  - 删除数组中的最后一个元素

- shift
  - 删除第一个元素

- unshift
  - 在数组最前面添加元素

- splice
  - 删除/插入/替换元素
    - 删除元素 splice(起始下标，结束下标)
    - 替换元素 splice(起始下标，结束下标，要替换的元素)
    - 插入元素 splice(起始下标，0，要插入的元素)

- sort
  - 对数组

- reverse
  - 元素顺序调换