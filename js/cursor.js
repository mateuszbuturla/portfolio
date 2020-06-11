let xmouse, ymouse;
document.addEventListener('mousemove', (e) => {
    xmouse = e.clientX || e.pageX;
    ymouse = e.clientY || e.pageY;
});

const cursor = document.getElementById('cursor')
let x = void 0,
    y = void 0,
    dx = void 0,
    dy = void 0,
    tx = 0,
    ty = 0,
    key = -1;

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