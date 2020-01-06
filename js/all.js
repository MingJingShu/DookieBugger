$(document).ready(function(){
    console.log("hello This is {Pony all.js}");

let PagePos = [
    '.main',
    '.menu',
    '.about',
    '.address',
    '.blog'
];

function GetPos()
{
    PagePos[0] = $('.main').position().top;
    PagePos[1] = $('.menu').position().top;
    PagePos[2] = $('.about').position().top;
    PagePos[3] = $('.address').position().top;
    PagePos[4] = $('.blog').position().top;
    for(let i = 0;i<PagePos.length ;i++)
    {/*console.log('PagePos['+i+'] = {'+PagePos[i]+'}')*/}
}
// GetPos();


const Points = [
    '.L1',
    '.L2',
    '.L3',
    '.L4',
    '.L5'
];
$('.container section').each(function(index){
    
    $(Points[index]).click(function(){
        console.log('index ={'+index+'}')
        GoToScroll(index);
    })//click
});
function GoToScroll(index)
{
    // $('html ,body').animate(
    //          {scrollTop: $(PagePos[index]).position().top},500);
 if(index === 0){
        $('html ,body').animate({scrollTop: $(PagePos[index]).position().top},500);
        }//0
else if(index === 1){
       $('html ,body').animate({scrollTop: $(PagePos[index]).position().top+60},500);
        }//1
else if(index === 2){
        $('html ,body').animate({scrollTop: $(PagePos[index]).position().top+140},500);
        }//2
else if(index === 3){
        $('html ,body').animate({scrollTop: $(PagePos[index]).position().top+120},500);
        }//3
else if(index === 4){
        $('html ,body').animate({scrollTop: $(PagePos[index]).position().top+120},500);
        }//4
    // $('html ,body').animate(
    //     {scrollTop: $(PagePos[index]).position().top+60},500);
}//GoToScroll

const header = '.header';
const box = '.header .box';
const boxAf = '.header .box:after';
const titleBg1 ='.header .box .title-bg';
const titleBg2 ='.header .box .title-bg2';
const UL = '.header ul';
const ULlogo = '.header ul .logo';

const logo2 = '.header .box .logo2';
const hamburger = '.hamburger';
function menuAct(){
        $(header).addClass('header-scroll');
        $(box).addClass('w100h100');
        $(boxAf).addClass('box-after');
        $(logo2).addClass('opac-1 logo2-after');
        $(hamburger).addClass('ham-active');
        $('.header ul ,.header ul .logo ,.header .box .title-bg, .header .box .title-bg2').addClass('opac-0');
}

function menuReset(){
        $(header).removeClass('header-scroll');
        $(box).removeClass('w100h100');
        $(boxAf).removeClass('box-after');
        $(logo2).removeClass('opac-1 logo2-after');
        $(hamburger).removeClass('ham-active');
        $('.header ul ,.header ul .logo ,.header .box .title-bg, .header .box .title-bg2').removeClass('opac-0');
}


$(window).resize(function(){
    let winW = $(window).width();
    let scrollval =$(window).scrollTop();
    console.log('window width ={'+winW+'}');
    if(winW<= 980)
    {menuAct();}
    else if(winW >980 && scrollval<100)
    {menuReset();}
})

$(window).scroll(function(){
    let scrollval = $(this).scrollTop();
    let winW = $(window).width();
    let bodyval = $(document).scrollTop();
   
    // console.log('bodyval ={'+bodyval+'}');
    // console.log('Scrollval ={'+scrollval+'}');
    if(scrollval < 100)
    { menuReset(); }

    if(scrollval >= 100)
    { menuAct();}
    if(winW <= 980)
    {menuAct();}
    if(bodyval < 1094)
    {   $(Points[0]).siblings().removeClass('L-start')
        $(Points[0]).addClass('L-start')
        $('main').siblings().removeClass('stage-act');
    }
    
     if(bodyval >= 800 && bodyval <1969)
    {   $(Points[1]).siblings().removeClass('L-start')
        $(Points[1]).addClass('L-start');
        // $('menu').siblings().removeClass('stage-act');
        $('.menu').addClass('stage-act');
        console.log('stage2');
    }//menu
    if(bodyval >= 1969 && bodyval <3774)
    {   $(Points[2]).siblings().removeClass('L-start')
        $(Points[2]).addClass('L-start')
        // $('.about').siblings().removeClass('stage-act');
        $('.about').addClass('stage-act');
        $('.about .about-us ,.about .about-us p:nth-child(2),.about .about-us p:nth-child(3),.about .about-us p:nth-child(4),.about .about-us p:nth-child(5)')
        .removeClass('stage-act');
        // $('.about .about-us p:nth-child(2)').removeClass('stage-act');
        // $('.about .about-us p:nth-child(3)').removeClass('stage-act');
        console.log('about');
    }//about
    if(bodyval >= 2649 && bodyval <3774)
    {
        $('.about .about-us').addClass('stage-act');
        console.log('about.5');
    }//3.5
    if(bodyval >= 2749 && bodyval <3774)
    {
        $('.about .about-us p:nth-child(2)').addClass('stage-act');
        console.log('about.6');
    }//3.6
    if(bodyval >= 2849 && bodyval <3774)
    {
        $('.about .about-us p:nth-child(3)').addClass('stage-act');
        console.log('about.7');
    }//3.7
    if(bodyval >= 2949 && bodyval <3774)
    {
        $('.about .about-us p:nth-child(4)').addClass('stage-act');
        console.log('about.8');
    }//3.8
    if(bodyval >= 3249 && bodyval <3774)
    {
        $('.about .about-us p:nth-child(5)').addClass('stage-act');
        console.log('about.9');
    }//3.9

     if(bodyval >= 3569 && bodyval <4454)
    {   $(Points[3]).siblings().removeClass('L-start')
        $(Points[3]).addClass('L-start')
        // $('.address').siblings().removeClass('stage-act');
        $('.address').addClass('stage-act');
        $('.address .box .subtitle').addClass('stage-act');
        $('.address .box .content ,.address .box .subtitle,.address .box .map').removeClass('stage-act');
        console.log('address');
    }//address
    if(bodyval >= 3669 && bodyval <4454)
    {
        $('.address .box .subtitle').addClass('stage-act');
        console.log('address.1');
    }//4.1
    if(bodyval >= 3729 && bodyval <4454)
    {
        $('.address .box .content').addClass('stage-act');
        console.log('address.2');
    }//4.2
    if(bodyval >= 3829 && bodyval <4454)
    {
        $('.address .box .map').addClass('stage-act');
        $('.blog').removeClass('stage-act');
        console.log('address.3');
    }
     if(bodyval >= 4400 && bodyval <7000)
    {   $(Points[4]).siblings().removeClass('L-start')
        $(Points[4]).addClass('L-start')
        // $('.blog').siblings().removeClass('stage-act');
        $('.blog').addClass('stage-act');
        $('.blog .box .item:nth-child(1),.blog .box .item:nth-child(2),.blog .box .item:nth-child(3),.blog .box .item:nth-child(4), .blog .box .item:nth-child(5),.blog .box .item:nth-child(6)')
        .removeClass('stage-act');
        console.log('blog');
    }//blog 4454 width<764  origin4568
    if(bodyval >= 4615 && bodyval <7000)
    {
        $('.blog .box .item:nth-child(1)').addClass('stage-act');
        console.log('blog.1');
    }
    if(bodyval >= 5014 && bodyval <7000)
    {
        $('.blog .box .item:nth-child(2)').addClass('stage-act');
        console.log('blog.2');
    }
    if(bodyval >= 5472 && bodyval <7000)
    {
        $('.blog .box .item:nth-child(3)').addClass('stage-act');
        console.log('blog.3');
    }
    if(bodyval >= 5805 && bodyval <7000)
    {
        $('.blog .box .item:nth-child(4)').addClass('stage-act');
        console.log('blog.4');
    }
    if(bodyval >= 6250 && bodyval <7000)
    {
        $('.blog .box .item:nth-child(5)').addClass('stage-act');
        console.log('blog.5');
    }
    if(bodyval >= 6700 && bodyval <7000)
    {
        $('.blog .box .item:nth-child(6)').addClass('stage-act');
        console.log('blog.6');
    }

    // console.log('scroll val ={'+scrollval+"}");
    // console.log('posmain val ={'+posmain.top+"}");
    // $('.about .about-us ,.about .about-us p:nth-child(2),.about .about-us p:nth-child(3),.about .about-us p:nth-child(4),.about .about-us p:nth-child(5)')
    //.removeClass('stage-act');
});//window

//hamburger toggle
$(hamburger).click(function(){
    $(this).toggleClass('span-act');
    $('.dark-bg').toggleClass('dark-act');
})//hamburger toggle

//header Li
const Titles = [
    '.header li:nth-child(1)',
    '.header li:nth-child(2)',
    '.header li:nth-child(5)',
    '.header li:nth-child(6)',    
];
//dark-bg
const darkTitles = [
    '.dark-bg ul li:nth-child(1)',
    '.dark-bg ul li:nth-child(2)',
    '.dark-bg ul li:nth-child(3)',
    '.dark-bg ul li:nth-child(4)',
];

//List Buttons
$('.header ul li').each(function(index){
    // console.log('UL index ={'+index+'}');
    $(Titles[index]).click(function(){
        GoToScroll(index+1);
    });
    $(darkTitles[index]).click(function(){
        GoToScroll(index+1);
    $(hamburger).toggleClass('span-act');
    $('.dark-bg').toggleClass('dark-act');
    });

    $(logo2).click(function(){
    $(hamburger).toggleClass('span-act');
    $('.dark-bg').toggleClass('dark-act');
        GoToScroll(0);
    
    });
});
//List Buttons

//slide fixed
$('.menu .box .content .p1,.menu .box .content .p2,.menu .box .content .p3').addClass('w100');




});//total