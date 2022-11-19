// //show the menu
// $('#show-menu').click(function(){
//     $('#show-effect').show(200);
// })

// //top menu hide effect
// $('#hide-menu').click(function(){
//     $('#show-effect').hide(100);
// });

let year = new Date().getFullYear()
  document.getElementById('year').innerText = year

const modalEvt= ()=>{
document.getElementById('contact').addEventListener('click', function(evt){
    // document.getElementsByClassName('modal-name')[0].text("Name: "+evt.target.dataset.name);
    // document.getElementsByClassName('modal-gender')[0].text('Gender: '+evt.target.dataset.gender);
    // document.getElementsByClassName('modal-height')[0].text('Height: '+evt.target.dataset.height);
    document.getElementsByClassName('modal')[0].style.display = 'block';
});

document.getElementById('hide-modal').addEventListener('click', function(evt){
    document.getElementsByClassName('modal')[0].style.display= 'none';
})

document.getElementsByTagName('body')[0].addEventListener('click', function(evt){
if (evt.target.className == 'modal') {
  document.getElementsByClassName('modal')[0].style.display= 'none';
}
});
}

modalEvt()
