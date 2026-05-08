(function () {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const body = document.body;
    if (!menuToggle || !navMenu) return;

    menuToggle.addEventListener('click', function (e) {
        e.stopPropagation();
        navMenu.classList.toggle('active');
        body.classList.toggle('menu-open');
        menuToggle.innerHTML = navMenu.classList.contains('active') ? '✕' : '☰';
    });

    document.addEventListener('click', function (event) {
        if (
            !navMenu.contains(event.target) &&
            !menuToggle.contains(event.target) &&
            navMenu.classList.contains('active')
        ) {
            navMenu.classList.remove('active');
            body.classList.remove('menu-open');
            menuToggle.innerHTML = '☰';
        }
    });
})();
