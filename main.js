var dropBox = document.getElementById('dropBox');

dropBox.onclick = function() {
    var secretBox = document.getElementById('secretBox');
    if (secretBox.style.display !== 'block') {
        secretBox.style.display = 'block';
    }
    else {
        secretBox.style.display = 'none';
    }
};
