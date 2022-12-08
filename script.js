var menu = document.querySelector('.toggle');
var nav = document.querySelector('.navigation');
var rooms = document.querySelector('.booking__forms--button');

menu.addEventListener('click', () => {
    const currentState = menu.getAttribute("data-state");
    console.log(currentState);

    if (!currentState || currentState === "closed") {
        menu.setAttribute("data-state", "opened");
        menu.setAttribute("aria-expanded","true");
        nav.setAttribute("aria-expanded","true");
    } else {
        menu.setAttribute("data-state", "closed");
        menu.setAttribute("aria-expanded", "false");
        nav.setAttribute("aria-expanded","false");
    }
});

rooms.addEventListener('click', () => {
    document.querySelector('.booking__rooms').style.display='grid';
});