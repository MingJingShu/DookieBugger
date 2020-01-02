$(document).ready(function(){
    console.log("hello This is {Pony all.js}");

let PagePos = [
    '.stage1',
    '.stage2',
    '.stage3',
    '.stage4',
    '.stage5'
];
function GetPos()
{
    PagePos[0] = $('.stage1').position().top;
    PagePos[1] = $('.stage2').position().top;
    PagePos[2] = $('.stage3').position().top;
    PagePos[3] = $('.stage4').position().top;
    PagePos[4] = $('.stage5').position().top;
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
        $('.stage1').siblings().removeClass('stage-act');
    }
    
     if(bodyval >= 800 && bodyval <1969)
    {   $(Points[1]).siblings().removeClass('L-start')
        $(Points[1]).addClass('L-start');
        // $('.stage2').siblings().removeClass('stage-act');
        $('.stage2').addClass('stage-act');
        console.log('stage2');
    }//stage2
    if(bodyval >= 1969 && bodyval <3774)
    {   $(Points[2]).siblings().removeClass('L-start')
        $(Points[2]).addClass('L-start')
        // $('.stage3').siblings().removeClass('stage-act');
        $('.stage3').addClass('stage-act');
        $('.stage3 .about-us ,.stage3 .about-us p:nth-child(2),.stage3 .about-us p:nth-child(3),.stage3 .about-us p:nth-child(4),.stage3 .about-us p:nth-child(5)')
        .removeClass('stage-act');
        // $('.stage3 .about-us p:nth-child(2)').removeClass('stage-act');
        // $('.stage3 .about-us p:nth-child(3)').removeClass('stage-act');
        console.log('stage3');
    }//stage3
    if(bodyval >= 2649 && bodyval <3774)
    {
        $('.stage3 .about-us').addClass('stage-act');
        console.log('stage3.5');
    }//3.5
    if(bodyval >= 2749 && bodyval <3774)
    {
        $('.stage3 .about-us p:nth-child(2)').addClass('stage-act');
        console.log('stage3.6');
    }//3.6
    if(bodyval >= 2849 && bodyval <3774)
    {
        $('.stage3 .about-us p:nth-child(3)').addClass('stage-act');
        console.log('stage3.7');
    }//3.7
    if(bodyval >= 2949 && bodyval <3774)
    {
        $('.stage3 .about-us p:nth-child(4)').addClass('stage-act');
        console.log('stage3.8');
    }//3.8
    if(bodyval >= 3249 && bodyval <3774)
    {
        $('.stage3 .about-us p:nth-child(5)').addClass('stage-act');
        console.log('stage3.9');
    }//3.9

     if(bodyval >= 3569 && bodyval <4454)
    {   $(Points[3]).siblings().removeClass('L-start')
        $(Points[3]).addClass('L-start')
        // $('.stage4').siblings().removeClass('stage-act');
        $('.stage4').addClass('stage-act');
        $('.stage4 .box .subtitle').addClass('stage-act');
        $('.stage4 .box .content ,.stage4 .box .subtitle,.stage4 .box .map').removeClass('stage-act');
        console.log('stage4');
    }//stage4
    if(bodyval >= 3669 && bodyval <4454)
    {
        $('.stage4 .box .subtitle').addClass('stage-act');
        console.log('stage4.1');
    }//4.1
    if(bodyval >= 3729 && bodyval <4454)
    {
        $('.stage4 .box .content').addClass('stage-act');
        console.log('stage4.2');
    }//4.2
    if(bodyval >= 3829 && bodyval <4454)
    {
        $('.stage4 .box .map').addClass('stage-act');
        $('.stage5').removeClass('stage-act');
        console.log('stage4.3');
    }
     if(bodyval >= 4400 && bodyval <7000)
    {   $(Points[4]).siblings().removeClass('L-start')
        $(Points[4]).addClass('L-start')
        // $('.stage5').siblings().removeClass('stage-act');
        $('.stage5').addClass('stage-act');
        $('.stage5 .box .item:nth-child(1),.stage5 .box .item:nth-child(2),.stage5 .box .item:nth-child(3),.stage5 .box .item:nth-child(4), .stage5 .box .item:nth-child(5),.stage5 .box .item:nth-child(6)')
        .removeClass('stage-act');
        console.log('stage5');
    }//stage5 4454 width<764  origin4568
    if(bodyval >= 4615 && bodyval <7000)
    {
        $('.stage5 .box .item:nth-child(1)').addClass('stage-act');
        console.log('stage5.1');
    }
    if(bodyval >= 5014 && bodyval <7000)
    {
        $('.stage5 .box .item:nth-child(2)').addClass('stage-act');
        console.log('stage5.2');
    }
    if(bodyval >= 5472 && bodyval <7000)
    {
        $('.stage5 .box .item:nth-child(3)').addClass('stage-act');
        console.log('stage5.3');
    }
    if(bodyval >= 5805 && bodyval <7000)
    {
        $('.stage5 .box .item:nth-child(4)').addClass('stage-act');
        console.log('stage5.4');
    }
    if(bodyval >= 6250 && bodyval <7000)
    {
        $('.stage5 .box .item:nth-child(5)').addClass('stage-act');
        console.log('stage5.5');
    }
    if(bodyval >= 6700 && bodyval <7000)
    {
        $('.stage5 .box .item:nth-child(6)').addClass('stage-act');
        console.log('stage5.6');
    }

    // console.log('scroll val ={'+scrollval+"}");
    // console.log('posmain val ={'+posmain.top+"}");
    // $('.stage3 .about-us ,.stage3 .about-us p:nth-child(2),.stage3 .about-us p:nth-child(3),.stage3 .about-us p:nth-child(4),.stage3 .about-us p:nth-child(5)')
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



});//total