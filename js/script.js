document.addEventListener('DOMContentLoaded', () => {
    const miniFish = document.querySelector('.mini-fish');
    let direction = 1;
    let position = 0;

    function swimVertically() {
        position += direction;
        if (position >= window.innerHeight - miniFish.clientHeight || position <= 0) {
            direction *= -1; // Change direction
        }
        miniFish.style.top = `${position}px`;
        requestAnimationFrame(swimVertically);
    }

    swimVertically();
});
