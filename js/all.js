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
        $('html ,body').animate({scrollTop: $(PagePos[index]).position().top+150},500);
        }//2
else if(index === 3){
        $('html ,body').animate({scrollTop: $(PagePos[index]).position().top+150},500);
        }//3
else if(index === 4){
        $('html ,body').animate({scrollTop: $(PagePos[index]).position().top+150},500);
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

function menuAct(){
    $(header).addClass('header-scroll');
        $(box).addClass('w100h100');
        $(boxAf).addClass('box-after');
        $(logo2).addClass('opac-1 logo2-after');
        $('.header ul ,.header ul .logo ,.header .box .title-bg, .header .box .title-bg2').addClass('opac-0');
}

function menuReset(){
        $(header).removeClass('header-scroll');
        $(box).removeClass('w100h100');
        $(boxAf).removeClass('box-after');
        $(logo2).removeClass('opac-1 logo2-after');
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
    if(scrollval < 100)
    { menuReset(); }

    if(scrollval >= 100)
    { menuAct();}
    if(winW <= 980)
    {menuAct();}
    if(scrollval < 894)
    {   $(Points[0]).siblings().removeClass('L-start')
        $(Points[0]).addClass('L-start')}
    
    if(scrollval >= 890 && scrollval <2194)
    {   $(Points[1]).siblings().removeClass('L-start')
        $(Points[1]).addClass('L-start')}
    if(scrollval >= 2190 && scrollval <3634)
    {   $(Points[2]).siblings().removeClass('L-start')
        $(Points[2]).addClass('L-start')}
    if(scrollval >= 3634 && scrollval <4568)
    {   $(Points[3]).siblings().removeClass('L-start')
        $(Points[3]).addClass('L-start')}
    if(scrollval >= 4568)
    {   $(Points[4]).siblings().removeClass('L-start')
        $(Points[4]).addClass('L-start')}
    // console.log('scroll val ={'+scrollval+"}");
    // console.log('posmain val ={'+posmain.top+"}");
});//window


});//total