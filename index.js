function toggileMobileMenu(menu) {
    menu.classList.toggle('open');
}

function restoreTheme() {
    // disable animations on page load
    document.body.classList.add('no-transition');
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark');
        document.getElementById('theme-icon').classList.remove("uil-moon");
        document.getElementById('theme-icon').classList.add("uil-sun");
    } else {
        document.body.classList.remove('dark');
        document.getElementById('theme-icon').classList.remove("uil-sun");
        document.getElementById('theme-icon').classList.add("uil-moon");
    }
}

function toggleTheme() {
    // enable animations
    document.body.classList.remove('no-transition');
    if (document.body.classList.contains('dark')) {
        document.body.classList.remove('dark');
        document.getElementById('theme-icon').classList.remove("uil-sun");
        document.getElementById('theme-icon').classList.add("uil-moon");
    } else {
        // animate the transition to dark
        document.body.classList.add('dark');
        document.getElementById('theme-icon').classList.remove("uil-moon");
        document.getElementById('theme-icon').classList.add("uil-sun");
    }
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
}