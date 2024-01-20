/**sticky navigation */
let navbar=$(".navbar");


$(window).scroll(function(){
   console.log(window.innerHeight);
  let otop=$(".section-2").offset().top-window.innerHeight;
  console.log(otop);
 if($(window).scrollTop()>otop){
     navbar.addClass("sticky");
 }else{
     navbar.removeClass("sticky");
 }
});
/**counter animation* */

let nCount =function(selector){
    $(selector).each(function(){
        $(this).animate({
            Counte:$(this).text()
        },{
            duration:4000,
            easing:"swing",
            step:function(value){
                $(this).text(Math.ceil(value));
            }
        })
    })
}
let a=0;
$(window).scroll(function(){
    let otop=$(".numbers").offset().top-window.innerHeight;
    if(a==0&&(window).screenTop()>=otop){
        a++;
        nCount(".rect>h1");
    }
})