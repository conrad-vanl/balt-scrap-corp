// init controller
var controller = new ScrollMagic.Controller({vertical: false});

// Crane Toppper
new ScrollMagic.Scene({
    duration: function() { return $(window).width() }
  })
  .setTween(
    TweenMax.fromTo(
      ".scene-home .crane-topper img",
      1,
      { y: -100 },
      { y: 0 }
    )
  )
  .addTo(controller); // assign the scene to the controller

// parallax
// $(".layer[data-depth]").each(function(){
//   var i = parseFloat($(this).attr("data-depth"));
//   if(!i) return;

//   new ScrollMagic.Scene({
//       triggerElement: $(this).parents(".scene")[0],
//       duration: function() { return $(window).width() }
//     })
//     .setTween(
//       TweenMax.fromTo(
//         this,
//         1,
//         { x:  1 * (i) * ( $(window).width() * 0.20 ) },
//         { x: -1 * (i) * ( $(window).width() * 0.20 ) }
//       )
//     )
//     .addTo(controller); // assign the scene to the controller
// });