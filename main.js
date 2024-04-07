'use strict';

const removeBtn = document.querySelector('.remove');
const saveBtn = document.querySelector('.save');
const appearText = document.querySelector('.appear-text');
const textarea = document.querySelector('textarea');

if(!localStorage.getItem('memo')) {
    textarea.value = '';
} else {
    textarea.value = localStorage.getItem('memo');
}

removeBtn.addEventListener('click', () => {
    if(confirm('本当に削除しますか？')) {
        textarea.value = '';
        localStorage.removeItem('memo');
    }
})
saveBtn.addEventListener('click', () => {
    localStorage.setItem('memo', textarea.value);
    appearText.animate([{
        offset: 0.3,
        opacity: 1,
    }, {
        offset: 0.7,
        opacity: 1,
    },{
        offset: 1,
        opacity: 0
    }], 2000)
})