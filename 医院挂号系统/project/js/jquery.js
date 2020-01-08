//ui-search （搜索下拉框）
$.fn.UiSearch=function(){
	var ui=$(this);
	
	$('.ui-search-selected',ui).on('click',function(){
		$('.ui-search-select-list').show();
		return false;
	});

	$('.ui-search-select-list a',ui).on('click',function(){
		$('.ui-search-selected').text($(this).text());
		$('.ui-search-select-list').hide();
		return false; //防止冒泡
	});

	$('body').on('click',function(){
		// debugger;
		$('.ui-search-select-list').hide();
	});
}


//ui-menu（分类导航菜单）：是使用css的hover来实现的，


//UiChangeMenu（选项卡组件）：菜单栏的切换
$.fn.UiChangeMenu=function(){
	var ui=$(this);
	var menu=$('.content-tab .item',ui),
		list=$('.content-list',ui),
		li=$('.content-list .list li',ui),
		news=$('.news-all',ui),
		content_news=$('.news-all .content-news',ui);

	for(var i=0;i<menu.length;i++){
		menu.eq(i).attr('id',i);
	}

	for(var i=0;i<li.length;i++){
		li.eq(i).attr('li_id',i);
	}

	menu.on('click',function(){
		//设置默认值
		li.removeClass('li-focus').eq(0).addClass('li-focus');
		li.eq(9).addClass('li-focus');
		content_news.addClass('hidden').eq(0).removeClass('hidden');
		content_news.eq(9).removeClass('hidden');

		var index=$(this).attr('id');
		menu.removeClass('item-focus').eq(index).addClass('item-focus');
		list.addClass('hidden').eq(index).removeClass('hidden');
		news.addClass('hidden').eq(index).removeClass('hidden');	
	})

	li.on('click',function(){
		var index=$(this).attr('li_id');
		li.removeClass('li-focus').eq(index).addClass('li-focus');
		content_news.addClass('hidden').eq(index).removeClass('hidden');
	})

}


//ui-backTop回到顶部
$.fn.UiBackTop = function(){
	var ui = $(this);
	var el = $('<a class="ui-backTop" href="#0"></a>');
	ui.append( el );

	var windowHeight = $(window).height();

	$(window).on('scroll',function(){
		var top = $('html,body').scrollTop();
		if(top > windowHeight){
			el.show();
		}else{
			el.hide();
		}
	});
	el.on('click',function(){
		$(window).scrollTop(0);
	});
}


// UiSlider:轮播图
// 1.左右箭头切换图片
// 2.点击小圆点切换图片
// 3.自动循环轮播，小圆点样式改变

$.fn.UiSlider=function(){
	var ui=$(this);
	var img=$('.banner-img',ui),
		left=$('.left',ui),
		right=$('.right',ui),
		dots=$('.dots span',ui),
		index=0,
		timer=null;

	function changeImg(){
		img.removeClass('img-active').eq(index).addClass('img-active');
		dots.removeClass('dots-active').eq(index).addClass('dots-active');
	}


	//自动循环显示图片
	function imgInterval(){
		timer=setInterval(function(){
				index++;
				if(index>2){
					index=0;
				}
				changeImg();
		},2000);
	}
		
	imgInterval();

	ui.hover(function(){
		clearInterval(timer);
	},function(){
		imgInterval();
	})


	//箭头，小圆点切换图片
	left.on('click',function(){
		index--;
		if(index<0){
			index=2;
		}
		changeImg();
	})

	right.on('click',function(){
		index++;
		if(index>2){
			index=0;
		}
		changeImg();
	})

	dots.on('click',function(){
		var dindex=$(this).index();
		index=dindex;
		changeImg();
	})
	
}


//UiCascading(多级联动菜单组件)：当前菜单发生改动时，会初始化当前菜单下的所有菜单
//比如：选择省以后，下面就自动刷新出对应的市;
$.fn.UiCascading=function(){
	var ui=$(this);
	console.log(ui);
	var selects=$('select',ui);

	selects
	.on('change',function(){
		var val=$(this).val();
		var index=selects.index(this);
		
		//触发下一个select的更新，根据当前的值；
		ui.find('select:gt('+(index+1)+')')
		  .attr('data-where','')
		  .triggerHandler('reloadOptions');

	})
	.on('reloadOptions',function(){
		var method=$(this).attr('data-search');
		var data=AjaxRemoteGetData[method]();

		var select=$(this);
		select.find('option').remove();
		$.each(data,function(i,item){
			var el=$('<option value="'+item+'">'+item+'</option>');
			select.append(el);
		})
	})


}






 



//页面的脚本逻辑
$(function(){
	$('.ui-header-search').UiSearch();
	$('.content').UiChangeMenu();
	$('body').UiBackTop();
	$('.banner-slide').UiSlider();
})