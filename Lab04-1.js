function gudetama(event)    {
    const details = document.querySelector('.details');
    const i = event.currentTarget.querySelector('i');
    const text = event.currentTarget.querySelector('span');

    Pleng = !Pleng;
    if(Pleng)   {
        details.classList.remove('hidden');
        i.classList = "Linetext";
        text.textContent = '\xa0Hide details';
    }else   {
        details.classList.add('hidden');
        i.classList = "Linetext";
        text.textContent = 'Show details';
    }
}
let Pleng = false;
const detailToggle = document.querySelector('.Textbox');
detailToggle.addEventListener('click', gudetama);