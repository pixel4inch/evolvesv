
//============= INDEX > CURIOUS (GET DATA BY JSON FILE)=========================//

$.getJSON("./data/curious.json", function (data) {
  var curious = '';
  
  $.each(data, function (key, value) {
    curious += `
            <div class="row">
            <div class="col-lg-3 text-white p-2 m-0 left-block">
                <div class="text-center curious-info">
                    <h3> ${value.curiousNumber} </h3>
                    <p> ${value.curiousType}</p>
                </div>
            </div>
            <div class="col-lg-9  p-2 m-0">
                <div class="curious-logo w-100" id="CURIOUSlOGOS">
               `
                $.each(value.curiousImages, function(index, image) {
                  curious += `<div class="companyLogosBlock"><img src="../images/company-logos/${image.curimages}" alt="Curious Image ${index + 1}" /></div>`;
                });
                curious += `
                </div>
            </div>
            </div>
          `;
         
  });
  $('#curiousblock').html(curious);
}).fail(function () {
  document.write("An error has occurred.");
});


$(document).ready(function(){
  $('.curious-logo').slick({
    centerMode: true,
centerPadding: '60px',
slidesToShow:3,
easing:"linear",
autoplay:"true",
arrows:"flase",
cssEase:'linear',
focusOnSelect: false, 
autoplaySpeed:0,
speed: 12000,
infinite: true,
responsive: [
  {
    breakpoint: 768,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '40px',
      slidesToShow: 3
    }
  },
  {
    breakpoint: 480,
    settings: {
      arrows: false,
      centerMode: false,
      centerPadding: '40px',
      slidesToShow: 1
    }
  }
]
  });
});

