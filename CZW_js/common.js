/*
*根据id属性的值，返回对应的标签元素
*@param id id属性的值，string类型
*@returns {Element} 元素对象
*/
function myDX(id){
	return document.getElementById(id);
}

// 设置任意标签中间的任意文本内容
function setInnerText(element,text){
	if(typeof element.textContent=="undefined"){
		element.innerText=text;
	}else{
		element.textContent=text;
	}
}
// 获取任意便签中的文本内容
function getInnerText(element){
	if(typeof element.textContent=="undefined"){
		return element.innerText;
	}else{
		return element.textContent;
	}
}

//设置兼容代码，浏览器的点击事件

function beingEventListener(element,type,fn){
	if(element.addEventListener){
		element.addEventListener(type,fn,false);
	}else if(element.attachListener){
		element.attachListener("on"+type,fn);
	}else{
		element["on"+type]=fn;
	}
};
//封装的动画函数-----匀速动画
		function animate(ele,tag){
			clearInterval(ele.obj3);//清理定时器，防止叠加
			ele.obj3=setInterval(function(){
			var current=ele.offsetLeft;
			var step=10;
				step=current<tag?step:-step;
			current+=step;
			if (Math.abs(tag-current)>Math.abs(step)) {
			ele.style.left=current+"px";
			}else{
				clearInterval(ele.obj3);//给目标对象增加的属性 每次调用指向这个属性
				ele.style.left=tag+"px";
				}
			},10);}
//向上卷曲的距离兼容代码
	function getScroll() {
		return {
			left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0,
			top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
		};
	}
//封装的动画函数-----缓速动画 渐慢
	function animateSlow(ele,tag){
			clearInterval(ele.obj3);//清理定时器，防止叠加
			ele.obj3=setInterval(function(){//给目标对象增加的属性 每次调用指向这个属性
			var current=ele.offsetLeft;
			var step=(tag-current)/10;
			step=step>0?Math.ceil(step):Math.floor(step);
			current+=step;
			ele.style.left=current+"px";
			if (current==tag) {
				clearInterval(ele.obj3);
			}
			console.log("目标位置:"+tag+",当前位置:"+current+",每次移动步数:"+step);
			},10);}
//任意一个元素的样式属性值 字符串
	function getStyle(ele,attr) {
		return window.getComputedStyle?window.getComputedStyle(ele,null)[attr]:ele.currentStyle[attr];				
	}

//指定属性后移动变化 一个属性
	function animateSlow(ele,attr,tag){
			clearInterval(ele.obj3);//清理定时器，防止叠加
			ele.obj3=setInterval(function(){//给目标对象增加的属性 每次调用指向这个属性
			var current=parseInt(getStyle(ele,attr));
			var step=(tag-current)/10;
			step=step>0?Math.ceil(step):Math.floor(step);
			current+=step;
			ele.style[attr]=current+"px";
			if (current==tag) {
				clearInterval(ele.obj3);
			}
			console.log("目标位置:"+tag+",当前位置:"+current+",每次移动步数:"+step);
			},10);}


//变速动画函数封装增加任意多个属性和回调函数
function animateFn(element,json,fn) {
    clearInterval(element.timeId);
    element.timeId=setInterval(function () {
      var flag=true;//默认,假设,全部到达目标
      for(var attr in json){
        //获取元素这个属性的当前的值
        var current=parseInt(getStyle(element,attr));
        //当前的属性对应的目标值
        var target=json[attr];
        //移动的步数
        var step=(target-current)/10;
        step=step>0?Math.ceil(step):Math.floor(step);
        current+=step;//移动后的值
        element.style[attr]=current+"px";
        if(current!=target){
          flag=false;
        }
      }
      if(flag){
        //清理定时器
        clearInterval(element.timeId);
        //所有的属性到达目标才能使用这个函数,前提是用户传入了这个函数
        if(fn){
          fn();
        }
      }
  },20);
}
