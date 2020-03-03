$(function(){
	// header部分
	$(".select").on("click",function(){
		if ($(".select-list").css("display")=="none") {
			$(".select-list").show();
		}else{
			$(".select-list").hide();
		}
	});
	$(".select-list a").on("mouseenter",function(){
		$(this).css("backgroundColor","rgba(165,162,162,.3)");
	});
	$(".select-list a").on("mouseleave",function(){
		$(this).css("backgroundColor","white");
	});
	$(".select-list a").on("click",function(){
		$(".select").text($(this).text());
		$(".select-list").hide();
	});
	$(".header_2 input").on("click",function(){
		if ($(".header_2 input").eq(0).val()=="请输入搜索内容"){
			$(".header_2 input").eq(0).val("");
		}
		return false
	});
	$(document).on("click",function(){
		if ($(".header_2 input").eq(0).val()==""){
			$(".header_2 input").eq(0).val("请输入搜索内容");}	
	});
	//nav部分
	$(".nav_1 a").on("mouseenter",function(){
		$(this).css("color","#d7f3ff");
	});
	$(".nav_1 a").on("mouseleave",function(){
		$(this).css("color","#ffffff");
	});
	// banner部分
	$(".banner_2_1").on("mouseenter",function(){
		$(this).css("backgroundColor","white");
		$(".banner_2_1 span").css("background","url(images/icon-menu.jpg) no-repeat 0px 0px");
		$(".a1").css("color","black");
		$(".a2").css("color","gray");
		$(".banner_21").stop().show();
	});
	$(".banner_2_1").on("mouseleave",function(){
		$(this).css("backgroundColor","#1fa4f0");
		$(".banner_2_1 span").css("background","url(images/icon-menu.jpg) no-repeat -22px 0px");
		$(".a1").css("color","white");
		$(".a2").css("color","white");
		$(".banner_21").stop().hide();
	});
	$(".banner_2_2").on("mouseenter",function(){
		$(this).css("backgroundColor","white");
		$(".banner_2_2 span").css("background","url(images/icon-menu.jpg) no-repeat 0px -22px");
		$(".b1").css("color","black");
		$(".b2").css("color","gray");
		// $(".banner_21").stop().show();
	});
	$(".banner_2_2").on("mouseleave",function(){
		$(this).css("backgroundColor","#1fa4f0");
		$(".banner_2_2 span").css("background","url(images/icon-menu.jpg) no-repeat -22px -22px");
		$(".b1").css("color","white");
		$(".b2").css("color","white");
		// $(".banner_21").stop().hide();
	});
	$(".banner_2_3").on("mouseenter",function(){
		$(this).css("backgroundColor","white");
		$(".banner_2_3 span").css("background","url(images/icon-menu.jpg) no-repeat 0px -44px");
		$(".c1").css("color","black");
		$(".c2").css("color","gray");
		// $(".banner_21").stop().show();
	});
	$(".banner_2_3").on("mouseleave",function(){
		$(this).css("backgroundColor","#1fa4f0");
		$(".banner_2_3 span").css("background","url(images/icon-menu.jpg) no-repeat -22px -44px");
		$(".c1").css("color","white");
		$(".c2").css("color","white");
		// if ($(".banner_21").css("display")=="none") {
		// 	 $(".banner_21").stop().hide();
		// }
	});
	//轮播图
	var settime=setInterval(rightClick,2000);
	var index=0;
	$(".banner_3").on("mouseenter",function(){
		clearInterval(settime);
	});
	$(".banner_3").on("mouseleave",function(){
		settime=setInterval(rightClick,2000);
	});
	$(".banner_3 li").eq(0).css("color","orange");
	$(".span2").on("click",rightClick);
	function rightClick() {
		index++;
		if (index==3) {
			index=0;
		}
		$(".banner_3 img").eq(index).show().siblings("img").hide();
		$(".banner_3 li").css("color","gray");
		$(".banner_3 li").eq(index).css("color","orange");
	}
	$(".span1").on("click",function(){
		index--;
		if (index==-1) {
			index=2;
		}
		$(".banner_3 img").eq(index).show().siblings("img").hide();
		$(".banner_3 li").css("color","gray");
		$(".banner_3 li").eq(index).css("color","orange");
	});
	for (var i = 0; i < $(".banner_3 li").length; i++) {
		$(".banner_3 li").eq(i).attr("number",i);	
	}
	$(".banner_3 li").on("mouseenter",function(){
		$(".banner_3 li").css("color","gray");
		$(this).css("color","orange");
		$(".banner_3 img").eq($(this).attr("number")).show().siblings("img").hide();
		index=$(this).attr("number");
	});
	//content部分
	$(".content_2_1 a").eq(0).css({"backgroundColor":"#00b3ea","color":"white"});
	$(".content_2_1 a").on("click",function(){
		$(this).css("backgroundColor","#00b3ea").siblings("a").css("backgroundColor","#f4f6fa");
		$(this).css("color","white").siblings("a").css("color","#00b3ea");
	});
	$(".content_2_2 a").eq(0).css({"backgroundColor":"#00b3ea","color":"white"});
	$(".content_2_2 a").on("click",function(){
		$(this).css("backgroundColor","#00b3ea").siblings("a").css("backgroundColor","white");
		$(this).css("color","white").siblings("a").css("color","#4c4948");
	});
	$(".content_2_2 a").eq(0).on("click",function(){
		$(".content_2_3").css("display","block");
		$(".content_2_30000").css("display","none");
	});
	$(".content_2_2 a").eq(0).siblings("a").on("click",function(){
		$(".content_2_3").css("display","none");
		$(".content_2_30000").css("display","block");
	});
	$(".content_2_1 a").eq(0).on("click",function(){
		$(".content_2_2").css("display","block");
		$(".content_2_3").css("display","block");
		$(".content_2_30000").css("display","none");
	});
	$(".content_2_1 a").eq(0).siblings("a").on("click",function(){
		$(".content_2_2").css("display","none");
		$(".content_2_3").css("display","none");
		$(".content_2_30000").css("display","block");
	});

});