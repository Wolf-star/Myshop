$(function(){
	/*$('.login').click(function(){
		$('.notice li').each(function(){
			alert($(this).text())
		})
	})
	*/
	/*$('#inputSearch').keyup(function(e){
		if(e.which==13){
			$(this).submit()
		}
	});*/
	
	$('.phone').hover(function(){
		$('.ph').toggle();
	});
	/*$('#inputSearch').keyup(function(e){
		$('#aaa').html('key:'+e.which)
	})*/
	//hot热卖标记
	$('.promoted').append('<s class="hot"></s>');
	
	/*$('.ban>a').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		var index = $('.ban>a').index(this);
		$('.banImg>a').eq(index).show()
					   .siblings().hide();
	}).mouseover(function(){$(this).trigger('click')});
	*/
	//图片轮播
	var $imgrolls=$('#jnImageroll .ban>a');
	$imgrolls.css('opacity','0.7');
	var len=$imgrolls.length;
	var index=0;
	var adTimer=null;
	$imgrolls.mouseover(function(){
		index=$imgrolls.index(this);
		showImg(index);
	}).eq(2).mouseover();
	$('#jnImageroll').hover(function(){
		if(adTimer){
			clearInterval(adTimer);
			}
		},function(){
			adTimer=setInterval(function(){
			showImg(index);
			index++;
			if(index==len){index=0}
		},2000)}).trigger('mouseleave');
		//显示不同的幻灯片
		function showImg(index){
			var newhref=$imgrolls.eq(index).attr('href');
			$('.banImg').attr('href',newhref)
						.find('img').eq(index).show()
						.siblings().hide();
			$imgrolls.removeClass('active').css('opacity','0.7')
					 .eq(index).addClass('active').css('opacity','1');
		}
	//title效果	
	$('.notice a').mouseover(function(e){
		var x=10;
		var y=14;
		var myTitle;
		this.myTitle=this.title;
		this.title='';
		var box = $('<div id="toop">'+this.myTitle+'</div>');
		box.appendTo($('body'));
		$('#toop').css({'position':'absolute','top':(e.pageY+y)+'px','left':(e.pageX+x)+'px','font-size':'14px','background':'#eee','color':'red'}).show()
	}).mouseout(function(){
		$('#toop').remove();
		this.title=this.myTitle
	})
	//按钮点击切换css以及切换对应的内容效果
	$('.brand-right li a').click(function(){
		$(this).parent().addClass('active')
			   .siblings().removeClass('active');
		var idx=$('.brand-right li a').index(this);
		showBrandList(idx);//获取点击的index(this)值
		return false		   
	}).eq(0).click();
	//内容切换，animate()必须把元素设置相对定位
	function showBrandList(idx){//设置内容切换函数
		var rollWidth=$('.brandBottom li').outerWidth();
		rollWidth=rollWidth*4;
		$('.brandBottom li').stop(true,false).animate({left:-rollWidth*idx},2000)
	}

	//zoom插件的放大镜效果，还算实用
	$('.myclass').jqzoom({
		zoomWidth:300,
		zoomHeight:400,
        title:false
		})
	//点击切换查看图片的大图
	$('.product .smallP li a').bind('click',function(){
		$(this).parent().addClass('border').siblings().removeClass('border');
		var imgSrc =$(this).find('img').attr('src');
		var i = imgSrc.lastIndexOf('.');
		var unit = imgSrc.substring(i);
		imgSrc=imgSrc.substring(0,i);
		var imgSrc_big = imgSrc + '-big'+unit;
		$('#thickImg').attr('href',imgSrc_big)
	}).eq(0).click();
	
	
	//切换效果
	$('.pList li').bind('click mouseover',function(){
		$(this).addClass('active').siblings().removeClass('active');
		var index = $('.pList li').index(this);
		$('.pDetail div').eq(index).show().siblings().hide();
	}).eq(0).click()
	
	//右侧颜色图案,选中后联动
	$('.imglist a img').bind('click',function(){
		$(this).parent().parent().addClass('border').siblings().removeClass('border');
		var imgSrc= $(this).attr('src');
		var i = imgSrc.lastIndexOf('.');
		var unit = imgSrc.substring(i);
		imgSrc=imgSrc.substring(0,i);
		var imgSrc_big = imgSrc + '-big'+unit;
		$('#thickImg').attr('href',imgSrc_big);
		var imgSrc_small = imgSrc + '-small'+unit;
		$('#bigImg').attr('src',imgSrc_small);
		var alt =$(this).attr('alt');
		$('.color em').text(alt);
		var newImgSrc=imgSrc.replace('img/cloth-','');
		$('.smallP li').hide();
		$('.smallP').find('.smallP_'+newImgSrc).show()
					.eq(0).find('a').click()
	})

	//尺寸
	$('.sizestyle span').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	})
	
	//数量改动带动价格
	
	$('.select').change(function(){
		var num = $(this).val();
		var price=$('.price').text();
		var amount=num*price;
		$('.total').text(amount)
	}).change()
})
