window.onload=function(){
	// 1.顶部搜索功能
	search();
	// 2.轮播图
	banner();
	// 3.倒计时
	downtime();

};
var search =function () {
	var searchBox=document.querySelector(".jd_search_box");
	var banner=document.querySelector(".jd_banner");
	var height=banner.offsetHeight;
	// 监听事件
	window.onscroll=function(){
		// 页面指定了DTD，即指定了DOCTYPE时，使用document.documentElement.scrollTop。
		// 页面没有DTD，即没指定DOCTYPE时，使用document.body.scrollTop。
		var scrollTop=document.documentElement.scrollTop;
		// console.log(scrollTop);
		var opacity=0;
		if (height>scrollTop) {
			opacity=(scrollTop/height)*0.85;
		}else{
			opacity=0.85;
		}
		searchBox.style.background="rgba(201,21,35,"+opacity+")";
	}
};

var banner =function () {
	// 1.自动轮播且无缝

	// 2.点随着图片改变

	// 3.滑动效果

	// 4.滑动结束的时候 吸附 不超过1/3 不改变

	// 5.滑动结束的时候 吸附 超过1/3 左/右改变

	var ban=document.querySelector(".jd_banner");
	var banWidth=ban.offsetWidth;
	var imagesBox=ban.querySelector("ul:first-child");
	var pointBox=ban.querySelector("ul:last-child");
	var points=pointBox.querySelectorAll("li");
	var addTrans=function(){
		imagesBox.style.transition="all 0.3s";
		imagesBox.style.webkitTransition="all 0.3s";
	};
	var removeTrans=function(){
		imagesBox.style.transition="none";
		imagesBox.style.webkitTransition="none";
	};
	var move=function(value){
		imagesBox.style.transform="translateX("+value+"px)";
		imagesBox.style.webkitTransform="translateX("+value+"px)";
	};
	var index=1;
	var time=setInterval(function(){
		index++;
		// 添加过渡且兼容
		addTrans();
		move(-index*banWidth);		
	},1000);
	// 需要等待最后一张动画结束后判断  瞬间定位到第一张
	imagesBox.addEventListener("transitionend",function(){
		// 自动滚动时的无缝
		if (index>=9) {
			index=1;
			// 瞬间过渡 清理过渡 位移指定位置
			removeTrans();
			move(-index*banWidth);
		}
		// 滑动滚动时的无缝
		else if (index<=0) {
			index=8;
			removeTrans();
			move(-index*banWidth);
		}
		setPoint();
	});
	var setPoint=function(){
		for (var i = 0; i < points.length; i++) {
			points[i].classList.remove("now");
		}
		points[index-1].classList.add("now");
	};
	// 绑定屏幕事件
	var startX=0;
	var distanceX=0;
	var isMove=false;
	imagesBox.addEventListener("touchstart",function(e){
		clearInterval(time);
		startX=e.touches[0].clientX;
	});
	imagesBox.addEventListener("touchmove",function(e){
		var moveX=e.touches[0].clientX;
		distanceX=moveX-startX;
		// 计算目标元素的位移
		var transmoveX=-index*banWidth+distanceX;
		removeTrans();
		move(transmoveX);
		isMove=true;
	});
	imagesBox.addEventListener("touchend",function(e){
		if (isMove) {
			if (Math.abs(distanceX)<banWidth/3) {
			// 吸附
			addTrans();
			move(-index*banWidth);
		}else{
			if (distanceX>0) {
			index--;
			}else{
			index++;
			}
			addTrans();
			move(-index*banWidth);
		}
		}
		distanceX=0;
		startX=0;
		isMove=false;
		clearInterval(time);
		time=setInterval(function(){
		index++;
		addTrans();
		move(-index*banWidth);		
	},1000);
		
	});
};
var downtime =function () {
	var time=2*60*60;
	var spans=document.querySelector(".time").querySelectorAll("span");
	var timer=setInterval(function(){
		time--;
		var hour=Math.floor(time/3600);
		var minute=Math.floor(time%3600/60);
		var second=Math.floor(time%60);
		spans[0].innerHTML=Math.floor(hour/10);
		spans[1].innerHTML=hour%10;
		spans[3].innerHTML=Math.floor(minute/10);
		spans[4].innerHTML=minute%10;
		spans[6].innerHTML=Math.floor(second/10);
		spans[7].innerHTML=second%10;
		if (time<=0) {
			clearInterval(timer);
		}
	},1000);
};