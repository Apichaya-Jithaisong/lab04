function onClickOuter() {
    outer.classList.add('selected');
}

function onClickInner() {
    inner.classList.add('selected');
}

function onClickReset() {
    inner.classList.remove('selected');
    outer.classList.remove('selected');
}

const outer = document.querySelector('#outer');
const inner = document.querySelector('#inner');
outer.addEventListener('click', onClickOuter);
inner.addEventListener('click', onClickInner);

const reset = document.querySelector('button');
reset.addEventListener('click', onClickReset);