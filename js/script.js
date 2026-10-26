/* ====== اطلاعات قابل ویرایش ====== */
// image: آدرس عکس (لینک اینترنتی یا مسیر فایل مثل images/shoes.jpg). خالی = طرح خودکار
// link: لینک سایت (خالی = دکمه نمایش داده نمی‌شود)
const projects = [
  {name:"Visit Shoes", desc:"فروشگاه اینترنتی کفش چرم دست‌دوز برای یک تولیدی.", tech:"WordPress", link:"https://visitshoes.ir/", image:"/assets/photos/visit.jpg"},
  {name:"سایت چمن", desc:"سایت وردپرسی برای معرفی و سفارش خدمات چمن.", tech:"WordPress", link:"", image:"/assets/photos/chaman.png"},
  {name:"آموزش HTML, CSS, JS, React", desc:"سایت آموزشی با مسیر یادگیری مرحله‌به‌مرحله.", tech:"HTML · CSS · JS · React", link:"", image:"/assets/photos/amoozesh.jpg"},
  {name:"کافه دن", desc:"سایت منو و معرفی کافه با طراحی اختصاصی.", tech:"کدنویسی اختصاصی", link:"", image:"/assets/photos/dan.jpg"},
  {name:"برگ", desc:"سایت اختصاصی با کد، سبک و ریسپانسیو.", tech:"کدنویسی اختصاصی", link:"", image:"/assets/photos/baeg.jpg"},
  {name:"نوا", desc:"سایت اختصاصی با کد، سبک و ریسپانسیو.", tech:"کدنویسی اختصاصی", link:"", image:"/assets/photos/nova.jpg"}
];
const team = [
  {name:"علیرضا خیابانی", role:"توسعه‌دهنده وب", site:"https://alirezakhiabani-boop.github.io/Web-s-Alireza/", tg:"Alireza_080_kh"},
  {name:"محمدحسین عبدی", role:"توسعه‌دهنده وب", site:"https://mhab27000-byte.github.io/Personal/?utm_source=chatgpt.com" , tg:"SML_Mh"},
  {name:"عرفان درودی", role:"توسعه‌دهنده وب", site:"https://erfan-pro-portfolio.vercel.app/", tg:"Erfan_daroodi"}
];
const mainContact = "Alireza_080_kh"; // تلگرام دکمه سفارش
/* ================================== */

const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const slug=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')||'project';

document.getElementById('projGrid').innerHTML=projects.map((p,i)=>{
  const bg=p.image?`style="background-image:url('${esc(p.image)}')"`:'';
  const ph=p.image?'':`<div class="ph"><b>const</b> project = {<br>&nbsp;&nbsp;id: ${i+1},<br>&nbsp;&nbsp;file: "${slug(p.name)}"<br>}</div>`;
  const go=p.link?`<a class="go" href="${esc(p.link)}" target="_blank" rel="noopener">visit_site()</a>`:'';
  return `<article class="card proj"><div class="thumb" ${bg}>${ph}</div><div class="body"><span class="tag">${esc(p.tech)}</span><h3>${esc(p.name)}</h3><p>${esc(p.desc)}</p>${go}</div></article>`;
}).join('');

document.getElementById('teamGrid').innerHTML=team.map(m=>{
  const site=m.site?`<a href="${esc(m.site)}" target="_blank" rel="noopener">🌐 ${esc(m.site.replace(/^https?:\/\//,'').replace(/\/$/,''))}</a>`:'';
  const tg=m.tg?`<a href="https://t.me/${esc(m.tg)}" target="_blank" rel="noopener">✈ @${esc(m.tg)}</a>`:'';
  return `<div class="card"><h3>${esc(m.name)}</h3><div class="role">${esc(m.role)}</div><div class="links">${site}${tg}</div></div>`;
}).join('');

document.getElementById('ctaBtns').innerHTML=`<a class="btn p" href="https://t.me/${mainContact}" target="_blank" rel="noopener">درخواست مشاوره در تلگرام</a>`;
document.getElementById('yr').textContent=new Date().getFullYear();

/* تایپ کد در هیرو */
const lines=[
 '<span class="c">// آماده‌ی ساخت سایت شما</span>',
 '<span class="k">const</span> team = <span class="s">"TriCode"</span>;',
 '<span class="k">const</span> skills = [<span class="s">"WordPress"</span>, <span class="s">"React"</span>,<br>  <span class="s">"JavaScript"</span>, <span class="s">"CSS"</span>];',
 '',
 '<span class="k">function</span> <span class="f">buildSite</span>(business) {',
 '  <span class="k">return</span> <span class="f">design</span>(business) + <span class="f">code</span>();',
 '}',
 '',
 '<span class="f">buildSite</span>(<span class="s">"کسب‌وکار شما"</span>);<span class="cur"></span>'
];
const el=document.getElementById('typed');
if(matchMedia('(prefers-reduced-motion:reduce)').matches){el.innerHTML=lines.join('\n')}
else{let n=0;(function t(){el.innerHTML=lines.slice(0,++n).join('\n');if(n<lines.length)setTimeout(t,380)})()}

/* پس‌زمینه‌ی کدنویسی کم‌رنگ */
(function(){
  const snip=['const app = express();','useEffect(() => { load(); }, []);','display: grid; place-items: center;','git commit -m "launch"','<section class="hero">','export default function Shop() {','document.querySelector(".cart")','@media (max-width: 760px) {','npm run build','add_action("wp_enqueue_scripts");','fetch("/api/products").then(r => r.json())','backdrop-filter: blur(18px);','return <Header />;','await db.orders.find({});'];
  let out='';for(let i=0;i<60;i++){out+=snip[(i*7)%snip.length]+'\n\n'}
  document.getElementById('codebg').textContent=out+out;
})();

/* نور دنبال‌کننده‌ی موس روی کارت‌های شیشه‌ای */
document.addEventListener('pointermove',e=>{
  document.querySelectorAll('.card,.code').forEach(c=>{
    const r=c.getBoundingClientRect();
    c.style.setProperty('--mx',(e.clientX-r.left)+'px');
    c.style.setProperty('--my',(e.clientY-r.top)+'px');
  });
});

/* ---------- انتخاب رنگ سایت ---------- */
const themes=[
  {n:"بنفش",a:"#8b6cff",b:"#2fe0cf",o:["#6d4aff","#10c9b8","#ff4f9a"]},
  {n:"آبی",a:"#3b9bff",b:"#22e0ff",o:["#1f6bff","#00b4d8","#7a5cff"]},
  {n:"سبز",a:"#2ee59d",b:"#b6f23a",o:["#0fa968","#1fd1a5","#6bd400"]},
  {n:"نارنجی",a:"#ff7a45",b:"#ffcf4a",o:["#ff5a1f","#ff2e63","#ffb300"]},
  {n:"صورتی",a:"#ff4f9a",b:"#ff9ad5",o:["#e0207a","#8b3dff","#ff6fb5"]},
  {n:"نقره‌ای",a:"#cfd6ff",b:"#ffffff",o:["#5a6285","#3b4268","#8a93b8"]}
];
const box=document.getElementById('themes');
function applyTheme(i){
  const t=themes[i],s=document.documentElement.style;
  s.setProperty('--a',t.a);s.setProperty('--b',t.b);
  t.o.forEach((c,k)=>s.setProperty('--o'+(k+1),c));
  [...box.children].forEach((el,k)=>el.setAttribute('aria-pressed',k===i));
  try{localStorage.setItem('tricode-theme',i)}catch(e){}
}
themes.forEach((t,i)=>{
  const b=document.createElement('button');
  b.style.setProperty('--c1',t.a);b.style.setProperty('--c2',t.b);
  b.title=t.n;b.setAttribute('aria-label','رنگ '+t.n);
  b.onclick=()=>applyTheme(i);
  box.appendChild(b);
});
let saved=0;try{saved=+localStorage.getItem('tricode-theme')||0}catch(e){}
applyTheme(saved<themes.length?saved:0);
