// 1.搜索栏的切换
var selected=document.getElementById("selected"),
	select_list=document.getElementById("selectlist"),
	selected_a=document.getElementsByClassName("lista"),
	nav=document.getElementById("nav");

	selected.onclick=function(){
		select_list.className="ui-search-select-list";
	};

	nav.onclick=function(){
		select_list.className="ui-search-select-list hidden";
	};

	for(var i=0;i<selected_a.length;i++){
		selected_a[i].id=i;
		selected_a[i].onclick=function(){
			select_list.className="ui-search-select-list hidden";
			selected.innerHTML=this.innerHTML;
		}
	}



// 2.菜单栏的切换
var menu=document.getElementsByClassName("item"),
	list=document.getElementsByClassName("content-list"),
	li=document.querySelectorAll(".content-list .list li"),
	news=document.getElementsByClassName("news-all"),
	content_news=document.getElementsByClassName("content-news");

function changeMenu(){
	//大菜单栏
	for(var i=0;i<menu.length;i++){
		menu[i].id=i;

		//切换大的菜单栏，小菜单栏和大新闻模块的显示
		for(var j=0;j<menu.length;j++){

			menu[j].onclick=function(){
				//清除所有的样式
				for(var i=0;i<li.length;i++){
					li[i].className="";
				}
				for(var i=0;i<content_news.length;i++){
					content_news[i].className="content-news hidden";
				}
				//默认显示
				li[0].className="li-focus";
				li[9].className="li-focus";
				content_news[0].className="content-news";
				content_news[9].className="content-news";

				//切换大菜单栏
				for(var k=0;k<list.length;k++){
					list[k].className="content-list hidden";
					menu[k].className="item";
					news[k].className="news-all hidden";
				}
				var idx=this.id;
				list[idx].className="content-list";
				menu[idx].className="item item-focus";
				news[idx].className="news-all";
			}
		}
	}

	//小菜单栏
	for(var i=0;i<li.length;i++){
		li[i].setAttribute('li-id',i);

		for(j=0;j<li.length;j++){
			li[j].onclick=function(){
				for(var k=0;k<li.length;k++){
					li[k].className="";
					content_news[k].className="content-news hidden";
				}
				var li_idx=this.getAttribute("li-id");
				li[li_idx].className="li-focus";
				content_news[li_idx].className="content-news";
			}
		}	
	}
}


changeMenu();


//3.轮播图的切换
var main=document.getElementById("banner-slide"),
	index=0,
	timer=null,
	banner_img=document.getElementsByClassName("banner-img"),
	length=banner_img.length,
	left=document.getElementById("left"),
	right=document.getElementById("right"),
	dots=document.querySelectorAll(".dots span");

	function slideImg(){
		main.onmouseover=function(){
			if(timer) clearInterval(timer);
		}
		main.onmouseout=function(){
			timer=setInterval(function(){
				index++;
				if(index>=length){
					index=0;
				}
				//切换图片
				changeImg();
			},3000);
		}

		main.onmouseout();

		left.onclick=function(){
			index--;
			if(index<0){
				index=length-1;
			}
			changeImg();
		}

		right.onclick=function(){
			index++;
			if(index>=3){
				index=0;
			}
			changeImg();
		}

		for(var i=0;i<length;i++){
			dots[i].id=i;
			dots[i].onclick=function(){
				index=this.id;
				changeImg();
			}
		}
		
	}

	function changeImg(){
		for(var i=0;i<length;i++){
			banner_img[i].style.display="none";
		}
		banner_img[index].style.display="block";
	}

	slideImg();


	

