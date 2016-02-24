/**
 * Created by honoka on 16/2/23.
 * 判断数据类型工具库
 */
var util = function() {
    /**
     * 是否是数组类型
     * @param {Array} arr 判断数组
     * @retrun Boolean true 是数组类型
     */
    function isArr(arr) {
        //当页面存在多个全局作用域时，使用 instanceof 判断不同作用域的引用类型会造成混乱
        //故调用 Object 原生方法 toString 判断
        return Object.prototype.toString.call(arr) == "[object Array]";
    }
    /**
     * 是否是函数类型
     * @param {Function} fn 被判断函数
     * @retrun Boolean true 是函数类型
     */
    function isFunction(fn) {

    }
}();
