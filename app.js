(() => {
 const menu=document.getElementById('menu-toggle'), sidebar=document.getElementById('sidebar');
 const setMenu=open=>{sidebar.classList.toggle('open',open);menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'닫기 −':'메뉴 ＋';};
 menu.addEventListener('click',()=>setMenu(menu.getAttribute('aria-expanded')!=='true'));
 sidebar.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
 document.addEventListener('click',e=>{if(!sidebar.contains(e.target)&&!menu.contains(e.target))setMenu(false);});
 document.addEventListener('keydown',e=>{if(e.key==='Escape')setMenu(false);});
 matchMedia('(min-width:901px)').addEventListener('change',()=>setMenu(false));
 const links=[...document.querySelectorAll('.nav-link')],sections=links.map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);
 let scheduled=false;
 function updateNav(){let active=sections[0],lastTop=-Infinity;sections.forEach(s=>{const top=s.getBoundingClientRect().top;if(top<=160&&(top>lastTop+1||(Math.abs(top-lastTop)<=1&&location.hash==='#'+s.id))){active=s;lastTop=top;}});links.forEach(a=>{const current=a.getAttribute('href')==='#'+active.id;a.classList.toggle('active',current);if(current)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});scheduled=false;}
 addEventListener('scroll',()=>{if(!scheduled){scheduled=true;requestAnimationFrame(updateNav);}},{passive:true});addEventListener('resize',updateNav);updateNav();
 const dialog=document.getElementById('image-dialog'),image=document.getElementById('dialog-image'),caption=document.getElementById('dialog-caption'),original=document.getElementById('dialog-original');let opener;
 document.querySelectorAll('a.zoomable').forEach(a=>a.addEventListener('click',e=>{if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||!dialog.showModal)return;e.preventDefault();opener=a;image.src=a.getAttribute('href');image.alt=a.dataset.caption||a.querySelector('img')?.alt||'프로젝트 화면';caption.textContent=image.alt;original.href=image.src;dialog.showModal();document.body.classList.add('dialog-open');document.getElementById('dialog-close').focus();}));
 document.getElementById('dialog-close').addEventListener('click',()=>dialog.close());
 dialog.addEventListener('click',e=>{if(e.target!==dialog)return;const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();});
 dialog.addEventListener('close',()=>{document.body.classList.remove('dialog-open');opener?.focus({preventScroll:true});});
})();
