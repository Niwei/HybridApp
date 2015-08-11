///*
// * @namespace 基础函数
// */
//
//window.dome = (function () {
//      function Dome (els) {
//      	 for(var i = 0; i < els.length; i++ ) {
//              	this[i] = els[i];
//      		}
//      			this.length = els.length;
//      }
//      var dome = {
//              get: function (selector) {
//              	 var els;
//			        if (typeof selector === "string") {
//			        els = document.querySelectorAll(selector);
//			        } else if (selector.length) {
//			                els = selector;
//			        } else {
//			                els = [selector];
//			        }
//			        return new Dome(els);
//              }
//      };
//      return dome;
//}());

var GLOBAL = {};
/**
 * @namespace 请求模板文件 Dotjs使用
 * @name Size
 * @memberOf GLOBAL
 */
GLOBAL.setTpl = function(url,id,callback){
    var doc = document;
    if(doc.getElementById(id) === null){
        mui.get(url, function(d){
            var s   = doc.createElement('script') , tmp;
            s.type  = 'text/template';
            s.id    = id;
            s.text  = typeof d != "undefined" ? d : "";
            doc.body.appendChild(s);
            tmp = doc.getElementById(id).innerHTML;
            typeof callback && callback(tmp);
        });
    }
    
}
/**
 * @namespace 刷新页面js
 * @name Size
 * @memberOf GLOBAL
 */
GLOBAL.refresh=function(){
	 plus.webview.currentWebview().reload(true);
}
/**
 * @namespace 增加消费弹出框
 * @name Size
 * @memberOf GLOBAL
 */
GLOBAL.tip={}
GLOBAL.tip.config={
	
}

/**
 * @namespace 函数截流
 * @name Size
 * @memberOf GLOBAL
 */
function throttle(method,delay,duration){
            var timer=null, begin=new Date();
            return function(){
                var context=this, args=arguments, current=new Date();;
                clearTimeout(timer);
                if(current-begin>=duration){
                     method.apply(context,args);
                     begin=current;
                }else{
                    timer=setTimeout(function(){
                        method.apply(context,args);
                    },delay);
                }
            }
}
/**
 * @namespace 时间格式化
 * @name Size
 * @memberOf GLOBAL
 */
function   formatDate(d)   {
			  d=d*1000
			  var   now=new   Date(d);
              var   year=now.getFullYear();
              var   month=now.getMonth()+1;
              var   date=now.getDate();
              var   hour=now.getHours(); 
              var   minute=now.getMinutes();     
              var   second=now.getSeconds();
              return   year+"-"+month+"-"+date+"   "+hour+":"+minute+":"+second;
}
/**
 * @namespace 获取后两天时间
 * @name Size
 * @memberOf GLOBAL
 */
function GetDateStr(AddDayCount) 
{
var arr=[];
var dd = new Date();
var h = dd.getHours();
dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期 
var y = dd.getFullYear(); 
var m = dd.getMonth()+1;//获取当前月份的日期 
var d = dd.getDate();
arr.push(y);
arr.push(m);
arr.push(d);
arr.push(h);
return arr;
} 