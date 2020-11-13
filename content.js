console.log("Making an useful messenger extension");

let paragraphs = document.getElementsByTagName('p')

for (elem of paragraphs) {
    elem.style['background-color'] = '#FFC0CB'
}

$("[aria-label=Conversations]").css('visibility', 'hidden')
