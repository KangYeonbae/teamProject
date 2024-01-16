$(function () {
    let currentIndex = 0;

    setInterval(function () {
        let nextIndex = (currentIndex + 1) % 3;

        $(".slide").eq(currentIndex).fadeOut(1000);
        $(".slide").eq(nextIndex).fadeIn(1000);

        currentIndex = nextIndex;
    }, 2000);
});