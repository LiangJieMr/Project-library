//等待所有Dom元素加载完成后执行
$(function(){
    // 导航栏点击
    $(".headnav li").click(function(){
        var _id = $(this).index();
        $(this).addClass("current-menu").siblings().removeClass("current-menu");
        //导航栏与侧边栏连接
        $("#leftmenu").find(".leftmenu-item").eq(_id).show().siblings(".leftmenu-item").hide();
    });
    //隐藏菜单
    var flag1 = true
    $("#link_1").click(function(){
        if(flag1){
            $(".leftmenu").hide();
            $(this).find("a").html("显示菜单")
            $('body').addClass('hideleftmenu').removeClass('showleftmenu')
            flag1 = false;
        }else{
            $(".leftmenu").show();
            $(this).find("a").html("隐藏菜单")
            $('body').addClass('showleftmenu').removeClass('hideleftmenu')
            flag1 = true;
        }
    })
    //左侧边栏点击上滑隐藏下滑显示
    var flag = true;
    $(".leftmenu dl dt").click(function(){
        var $that = $(this);
        $(this).siblings("dd").slideToggle("fast",function(){
            if(flag){
                $that.css("background-position","right -40px");
                flag = false;
            }else{
                $that.css("background-position","right 12px");
                flag = true;
            }
        });
    });
    //左侧菜单切换
    $('#leftmenu dl dd ul li a').click(function(){
        var _link = $(this).attr('_link');

        //alert(_link);
        $('#main').attr('src', _link);
        $(this).addClass('current-menuleft').parent().siblings().children().removeClass('current-menuleft');
        $(this).parents('dl').siblings().find('dd ul li a').removeClass('current-menuleft');
    });


})

