const cursor = document.getElementById('cursor');
const buttonsSmall = document.querySelectorAll('#buttonSmall');
const logo = document.querySelector('#logo');

let xmouse, ymouse;
let x = void 0,
    y = void 0,
    dx = void 0,
    dy = void 0,
    tx = 0,
    ty = 0,
    key = -1;

document.addEventListener('mousemove', (e) => {
    xmouse = e.clientX || e.pageX;
    ymouse = e.clientY || e.pageY;
});

buttonsSmall.forEach(item => {
    item.addEventListener('mouseenter', () => {
        cursor.classList.add('cursorHoverEffect')
        cursor.classList.add('cursorHoverEffectSmall')
    })
    item.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursorHoverEffect')
        cursor.classList.remove('cursorHoverEffectSmall')
    })
})

logo.addEventListener('mouseenter', () => {
    cursor.classList.add('cursorHoverEffect')
    cursor.classList.add('cursorHoverEffectBig')
})

logo.addEventListener('mouseleave', () => {
    cursor.classList.remove('cursorHoverEffect')
    cursor.classList.remove('cursorHoverEffectBig')
})

let followMouse = () => {
    key = requestAnimationFrame(followMouse);

    if (!x || !y) {
        x = xmouse;
        y = ymouse;
    } else {
        dx = (xmouse - x) * 0.125;
        dy = (ymouse - y) * 0.125;
        if (Math.abs(dx) + Math.abs(dy) < 0.1) {
            x = xmouse;
            y = ymouse;
        } else {
            x += dx;
            y += dy;
        }
    }
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
};

followMouse();