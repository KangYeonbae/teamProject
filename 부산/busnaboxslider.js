// let currentIndex = 0;
//
// function showSlide(index) {
//     const wrapper = document.querySelector('.slider-wrapper');
//     const slides = document.querySelectorAll('.slide');
//     currentIndex = (index + slides.length) % slides.length;
//     const translateValue = -currentIndex * 100 + '%';
//     wrapper.style.transform = 'translateX(' + translateValue + ')';
// }
//
// function prevSlide() {
//     showSlide(currentIndex - 1);
// }
//
// function nextSlide() {
//     showSlide(currentIndex + 1);
// }

// $(function() {
//     $(".slide_gallery").bxSlider({
//         auto : true,
//         autoControls: true,
//         stopAutoOnClick : true,
//         pager : true
//     })
//
//     $(".btn3").on("click", function( ) {
//         // 현재 상황에 따라 slide up/ slide down 수행
//         $(".box").slideToggle(1000, "linear");
//     })
