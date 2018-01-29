window.onload = function() {
    var features = document.querySelectorAll('section > *'),
        title = 'Quintessentially',
        footer = document.querySelector('footer'),
        cta = document.querySelector('#CTA a'),
        hidden = document.querySelectorAll('article[style*="none"]');

    for (var i = 0; i < features.length; i++) {
        features[i].onclick = function() {
            if (!this.className) {
                for (var i in Object.keys(features)) {
                    features[i].removeAttribute("class");
                }
                this.className = 'open';
            } else {
                this.removeAttribute('class');
            }
        }
    }

    if (window.location.hash.indexOf('hsbc') == 1) {
        title = 'HSBC';
        footer.style.display = 'none';
        cta.innerHTML = 'jade.us@quintessentially.com';
        cta.href = 'mailto:jade.us@quintessentially.com';
        for (i = 0; i < hidden.length; ++i) {
            hidden[i].style.display = 'block';
        }
    } else if (window.location.hash.indexOf('blackstone') == 1) {
        title = 'Blackstone';
        document.querySelector('header img').src = 'logo.gif';
        footer.style.display = 'none';
    }

    document.title = title + ' ' + document.title;
}