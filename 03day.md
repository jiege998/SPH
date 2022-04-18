1.函数的防抖与节流
节流：在规定的间隔时间范围内不会重复触发回调，只有大于这个时间才会触发回调，把频繁触发变为少量触发。
防抖：前面的所有触发都被取消，最后一次执行在规定的时间之后才会触发，也就是说如果连续快速的触发 只会执行一次。（用户操作很频繁但是只是执行一次）
2.lodash插件，里面封装函数的防抖与节流业务（底层原理：闭包和延迟器
3.mock数据：前端模拟数据接口，拦截ajax请求，不会和服务器发生交互。（使用mock.js插件）
4.vm.$nextTick()函数，将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。可以保证在页面中的结构一定是有的，经常和很多插件一起使用(例如swiper)。