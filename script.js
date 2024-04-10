const mobile_menu = document.getElementById('mobile-menu-icon-id');

mobile_menu.addEventListener('click',()=>{
  document.getElementById('mobile-menu-id').classList.toggle('display');
})