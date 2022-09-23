const getElementById = (id) => {
    return document.getElementById(id);
};

document.getElementById('btn-send-n').addEventListener('click', ()=>{
    const nameValue = getElementById('name-fld').value;
    localStorage.setItem('name', nameValue);
})
document.getElementById('btn-delete-n').addEventListener('click', ()=>{
    localStorage.removeItem('name');
})
document.getElementById('btn-send-email').addEventListener('click', ()=>{
    const emailValue = getElementById('email-fld').value;
    localStorage.setItem('email', emailValue);
})
document.getElementById('btn-delete-email').addEventListener('click', ()=>{
    localStorage.removeItem('email');
})
document.getElementById('btn-send-msg').addEventListener('click', ()=>{
    const msgValue = getElementById('message-fld').value;
    localStorage.setItem('message', msgValue);
})
document.getElementById('btn-delete-msg').addEventListener('click', ()=>{
    localStorage.removeItem('message');
})

const contactInfo = {};

document.getElementById('btn-send').addEventListener('click', ()=>{
    contactInfo['name'] = document.getElementById('name-fld').value;
    contactInfo['email'] = document.getElementById('email-fld').value;
    contactInfo['message'] = document.getElementById('message-fld').value;
    localStorage.setItem('contact-info',JSON.stringify(contactInfo));
})

document.getElementById('btn-reset').addEventListener('click', ()=>{
    localStorage.clear();
})
