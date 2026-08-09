<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Happy Birthday, Shifa</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,500&family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Jost:wght@300;400;500&display=swap" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<style>
  :root{
    --ivory:#FBF7EE;
    --gold:#C9A227;
    --gold-soft:#E8D5A8;
    --gold-deep:#9C7A1B;
    --charcoal:#221E17;
    --blush:#F1E4D3;
    --white:#FFFDF9;
  }
  *{box-sizing:border-box; margin:0; padding:0;}
  html{scroll-behavior:smooth;}
  body{
    background:var(--ivory);
    color:var(--charcoal);
    font-family:'Jost', sans-serif;
    overflow-x:hidden;
    min-height:100vh;
    cursor:default;
  }
  @media (prefers-reduced-motion: reduce){ *{animation-duration:0.01ms !important; transition-duration:0.01ms !important;} }

  .grain{
    position:fixed; inset:0; pointer-events:none; z-index:1; opacity:0.035;
    background-image:radial-gradient(circle, var(--charcoal) 1px, transparent 1px);
    background-size:3px 3px;
  }
  .progress-bar{
    position:fixed; top:0; left:0; height:2px; width:100%;
    background:var(--gold); transform-origin:left; transform:scaleX(0);
    z-index:99;
  }
  .sparkle-field{ position:fixed; inset:0; pointer-events:none; z-index:2; overflow:hidden; }
  .sparkle{
    position:absolute; width:4px; height:4px; border-radius:50%;
    background:var(--gold-soft); opacity:0;
  }

  section{
    position:relative; min-height:100svh;
    display:flex; flex-direction:column; align-items:center; justify-content:center;
    padding:52px 24px; text-align:center;
  }
  .section-label{
    font-family:'Cormorant Garamond', serif; font-style:italic;
    color:var(--gold-deep); letter-spacing:0.14em; margin-bottom:10px; font-size:1rem;
    overflow:hidden;
  }
  .section-title{
    font-family:'Playfair Display', serif; font-weight:600;
    font-size:clamp(1.8rem, 6vw, 2.6rem); margin-bottom:16px;
  }

  /* ---------- GATE (envelope) ---------- */
  #gate{
    position:fixed; inset:0; z-index:100;
    display:flex; align-items:center; justify-content:center;
    background:radial-gradient(ellipse at center, var(--blush) 0%, var(--ivory) 70%);
  }
  .envelope{ width:220px; text-align:center; }
  .env-wrap{ cursor:pointer; }
  .env-body{
    position:relative; width:220px; height:150px;
    background:linear-gradient(180deg, var(--white), var(--blush));
    border:1px solid var(--gold-soft);
    box-shadow:0 20px 40px rgba(150,120,40,0.22);
    overflow:visible;
  }
  .env-flap{
    position:absolute; top:0; left:0; width:0; height:0;
    border-left:110px solid transparent;
    border-right:110px solid transparent;
    border-top:78px solid var(--gold-soft);
    transform-origin:top center;
  }
  .env-seal{
    position:absolute; top:58px; left:50%; transform:translateX(-50%);
    width:44px; height:44px; border-radius:50%;
    background:radial-gradient(circle at 35% 30%, var(--gold), var(--gold-deep));
    display:flex; align-items:center; justify-content:center;
    font-family:'Playfair Display', serif; color:var(--white); font-size:1.1rem;
    box-shadow:0 4px 10px rgba(0,0,0,0.2); z-index:3;
  }
  .env-letter{
    position:absolute; top:8px; left:14px; right:14px; height:120px;
    background:var(--white); border:1px solid var(--gold-soft);
    display:flex; align-items:center; justify-content:center;
    font-family:'Cormorant Garamond', serif; font-style:italic; color:var(--gold-deep);
    font-size:0.85rem; opacity:0; z-index:1;
  }
  .gate-text{ margin-top:30px; font-family:'Cormorant Garamond', serif; font-style:italic; font-size:1.15rem; color:var(--gold-deep); }
  .gate-sub{ margin-top:6px; font-size:0.75rem; letter-spacing:0.18em; text-transform:uppercase; color:#8a7f6b; }

  /* ---------- HERO ---------- */
  .hero{ background:radial-gradient(ellipse at top, var(--blush) 0%, transparent 55%), var(--ivory); perspective:800px; }
  .eyebrow{ font-family:'Cormorant Garamond', serif; font-style:italic; font-size:1.05rem; letter-spacing:0.14em; color:var(--gold-deep); margin-bottom:16px; }
  .hero h1{ font-family:'Playfair Display', serif; font-weight:700; font-size:clamp(3rem,15vw,5.5rem); line-height:1; }
  .hero h1 .letter{ display:inline-block; }
  .hero h1 .sub-line{ display:block; font-style:italic; font-weight:600; color:var(--gold); font-size:0.5em; margin-top:14px; }
  .hero-line{ width:0; height:1px; background:var(--gold); margin:26px auto; }
  .hero-sub{ max-width:340px; font-size:1rem; line-height:1.7; color:#5c5344; }
  .scroll-cue{ position:absolute; bottom:34px; font-size:0.72rem; letter-spacing:0.2em; text-transform:uppercase; color:var(--gold-deep); }
  .scroll-cue .line{ display:block; width:1px; height:26px; background:var(--gold); margin:8px auto 0; }

  /* ---------- MESSAGE ---------- */
  .message-section{ background:var(--white); }
  .message-card{ max-width:420px; border:1px solid var(--gold-soft); padding:44px 30px; position:relative; background:var(--ivory); }
  .message-card::before, .message-card::after{ content:''; position:absolute; width:22px; height:22px; border:1px solid var(--gold); }
  .message-card::before{ top:-1px; left:-1px; border-right:none; border-bottom:none; }
  .message-card::after{ bottom:-1px; right:-1px; border-left:none; border-top:none; }
  .message-mark{ font-family:'Playfair Display', serif; font-size:2.4rem; color:var(--gold); line-height:1; margin-bottom:6px; }
  .message-text{ font-family:'Cormorant Garamond', serif; font-size:1.35rem; line-height:1.8; font-style:italic; }
  .message-text .word{ display:inline-block; opacity:0.14; }
  .message-sign{ margin-top:24px; font-size:0.8rem; letter-spacing:0.16em; text-transform:uppercase; color:var(--gold-deep); }

  /* ---------- GIFTS ---------- */
  .gifts-section{ background:radial-gradient(ellipse at bottom, var(--blush) 0%, transparent 60%), var(--ivory); }
  .gifts{ display:flex; gap:22px; flex-wrap:wrap; justify-content:center; max-width:420px; perspective:700px; }
  .gift{ width:112px; height:112px; cursor:pointer; position:relative; }
  .gift-box{
    width:100%; height:100%; border-radius:8px;
    background:linear-gradient(160deg, var(--gold-soft), var(--gold));
    display:flex; align-items:center; justify-content:center;
    box-shadow:0 10px 24px rgba(150,120,40,0.28);
    position:relative; transform-style:preserve-3d;
  }
  .gift-box::before{ content:''; position:absolute; left:47%; top:0; width:6%; height:100%; background:var(--white); opacity:0.85; }
  .gift-box::after{ content:''; position:absolute; top:47%; left:0; height:6%; width:100%; background:var(--white); opacity:0.85; }
  .gift-box span{ font-family:'Playfair Display', serif; color:var(--white); font-size:1.6rem; z-index:1; }
  .gift-label{
    position:absolute; inset:0; display:flex; align-items:center; justify-content:center;
    font-family:'Cormorant Garamond', serif; font-style:italic; font-size:0.92rem; color:var(--gold-deep);
    opacity:0; padding:6px; text-align:center;
  }
  .gifts-hint{ margin-top:30px; font-size:0.85rem; color:#8a7f6b; max-width:300px; line-height:1.6; }

  /* ---------- COLLAGE ---------- */
  .collage-section{ background:var(--white); overflow:hidden; }
  .collage{ display:flex; flex-wrap:wrap; gap:24px; justify-content:center; max-width:420px; }
  .frame{
    width:130px; height:150px; background:var(--ivory); border:6px solid var(--white);
    box-shadow:0 10px 26px rgba(150,120,40,0.22), 0 0 0 1px var(--gold-soft);
    display:flex; align-items:center; justify-content:center;
    font-family:'Cormorant Garamond', serif; font-style:italic; color:var(--gold-deep);
    font-size:0.8rem; text-align:center; padding:8px;
  }
  .frame img{ width:100%; height:100%; object-fit:cover; }
  .collage-hint{ margin-top:28px; font-size:0.85rem; color:#8a7f6b; max-width:320px; line-height:1.6; }
  .collage-hint code{ background:var(--blush); padding:1px 6px; border-radius:4px; font-size:0.8rem; }

  /* ---------- FINALE ---------- */
  .finale-section{ background:radial-gradient(ellipse at top, var(--blush) 0%, transparent 55%), var(--ivory); }
  .celebrate-wrap{ display:inline-block; }
  .celebrate-btn{
    font-family:'Cormorant Garamond', serif; font-style:italic; font-size:1.2rem;
    background:var(--charcoal); color:var(--gold-soft); border:1px solid var(--gold);
    padding:17px 46px; border-radius:2px; cursor:pointer; letter-spacing:0.05em;
    position:relative; overflow:hidden;
  }
  .finale-msg{ margin-top:32px; font-family:'Playfair Display', serif; font-style:italic; font-size:1.4rem; color:var(--gold-deep); opacity:0; max-width:340px; }
  .confetti-piece{ position:fixed; top:-10px; width:8px; height:14px; z-index:50; pointer-events:none; }

  footer{ text-align:center; padding:32px; font-family:'Cormorant Garamond', serif; font-style:italic; color:var(--gold-deep); font-size:0.95rem; background:var(--ivory); }
</style>
</head>
<body>

<div class="progress-bar" id="progressBar"></div>
<div class="grain"></div>
<div class="sparkle-field" id="sparkleField"></div>

<div id="gate">
  <div class="envelope">
    <div class="env-wrap" id="envelope">
      <div class="env-body">
        <div class="env-letter">With love, for Shifa</div>
        <div class="env-flap" id="envFlap"></div>
        <div class="env-seal">S</div>
      </div>
    </div>
    <p class="gate-text">A little something for Shifa</p>
    <p class="gate-sub">tap to open</p>
  </div>
</div>

<section class="hero">
  <div class="eyebrow" id="eyebrow">A little celebration for</div>
  <h1 id="heroTitle"></h1>
  <div class="hero-line" id="heroLine"></div>
  <p class="hero-sub" id="heroSub">Today is your day — made just for you, with all my love.</p>
  <div class="scroll-cue">scroll<span class="line"></span></div>
</section>

<section class="message-section">
  <div class="section-label">from me, to you</div>
  <div class="message-card">
    <div class="message-mark">"</div>
    <p class="message-text" id="messageText">Happy Birthday meri pyari behen ❤️🎂🥹 Pata nahi main kabhi bol pata hu ya nahi, lekin tu mere liye bahot special hai ❤️ Zindagi me chahe kitni bhi ladai ho jaye, kitni bhi nok-jhok ho, tu hamesha meri behen rahegi aur main hamesha tere saath rahunga 🫂❤️ Allah kare teri zindagi me kabhi koi gham na aaye, jo sapne tune dekhe hai wo sab poore ho, har kadam par tujhe kamyabi mile aur tere chehre ki ye smile hamesha aise hi bani rahe 🤲🏻✨ Bas aaj ke din itni si dua hai meri ki Allah tujhe duniya ki har wo khushi de jiski tu haqdar hai ❤️🥹 Happy Birthday once again meri jaan behen 🎂❤️ Khush reh, mast reh aur hamesha aise hi pagal reh 😂🫂❤️</p>
    <p class="message-sign">with love</p>
  </div>
</section>

<section class="gifts-section">
  <div class="section-label">a little something</div>
  <div class="section-title">Your gifts</div>
  <div class="gifts" id="gifts">
    <div class="gift" data-label="A surprise waiting for you"><div class="gift-box"><span>?</span></div><div class="gift-label">A surprise waiting for you</div></div>
    <div class="gift" data-label="All my love, always"><div class="gift-box"><span>?</span></div><div class="gift-label">All my love, always</div></div>
    <div class="gift" data-label="A day just for you"><div class="gift-box"><span>?</span></div><div class="gift-label">A day just for you</div></div>
  </div>
  <p class="gifts-hint">Tap each box to open it. Replace the labels in the code with the real gifts you're giving her.</p>
</section>

<section class="collage-section">
  <div class="section-label">memories</div>
  <div class="section-title">Our favourite moments</div>
  <div class="collage" id="collage">
    <div class="frame">add a photo here</div>
    <div class="frame">add a photo here</div>
    <div class="frame">add a photo here</div>
  </div>
  <p class="collage-hint">Replace each <code>&lt;div class="frame"&gt;</code> with an <code>&lt;img src="..."&gt;</code> of your favourite pictures with Shifa.</p>
</section>

<section class="finale-section">
  <div class="section-label">one last thing</div>
  <div class="section-title">For the birthday girl</div>
  <div class="celebrate-wrap" id="celebrateWrap">
    <button class="celebrate-btn" id="celebrateBtn">Celebrate Shifa ✦</button>
  </div>
  <p class="finale-msg" id="finaleMsg">Happy Birthday, Shifa — here's to you, today and always.</p>
</section>

<footer>Made with love, for the most special sister ✿</footer>

<script>
gsap.registerPlugin(ScrollTrigger);
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isTouch = window.matchMedia('(pointer: coarse)').matches;

/* Ambient sparkles */
const field = document.getElementById('sparkleField');
for(let i=0;i<26;i++){
  const s = document.createElement('div');
  s.className = 'sparkle';
  s.style.left = Math.random()*100+'%';
  s.style.top = Math.random()*100+'%';
  field.appendChild(s);
  gsap.to(s, { opacity: 0.8, scale: 1.3, duration: 1.6 + Math.random()*1.5,
    repeat:-1, yoyo:true, delay: Math.random()*4, ease:'sine.inOut' });
}

/* Scroll progress bar */
gsap.to('#progressBar', { scaleX: 1, ease:'none',
  scrollTrigger:{ trigger: document.body, start:'top top', end:'bottom bottom', scrub:0.3 } });

/* Build hero letters */
function buildLetters(text){
  return text.split('').map(ch => `<span class="letter">${ch === ' ' ? '&nbsp;' : ch}</span>`).join('');
}
document.getElementById('heroTitle').innerHTML =
  buildLetters('Shifa') + '<span class="sub-line">' + buildLetters('Happy Birthday to you') + '</span>';

/* Build message word spans */
const msgEl = document.getElementById('messageText');
msgEl.innerHTML = msgEl.textContent.split(' ').map(w => `<span class="word">${w}</span>`).join(' ');

/* GATE open sequence */
function openGate(){
  const tl = gsap.timeline();
  tl.to('.env-letter', { opacity:1, y:-30, duration:0.6, ease:'power2.out' })
    .to('#envFlap', { rotateX:180, duration:0.5, ease:'power2.inOut' }, '-=0.2')
    .to('.envelope', { scale:1.15, opacity:0, duration:0.6, ease:'power3.in' })
    .to('#gate', { autoAlpha:0, duration:0.5 }, '-=0.3')
    .call(runHeroIntro);
}
document.getElementById('envelope').addEventListener('click', openGate);

function runHeroIntro(){
  const tl = gsap.timeline();
  tl.from('#eyebrow', { opacity:0, y:16, duration:0.7, ease:'power2.out' })
    .from('.hero h1 .letter', { opacity:0, y:40, rotateX:-60, stagger:0.04, duration:0.8, ease:'back.out(1.7)' }, '-=0.3')
    .from('.hero h1 .sub-line .letter', { opacity:0, y:14, stagger:0.015, duration:0.5, ease:'power2.out' }, '-=0.4')
    .to('#heroLine', { width:70, duration:0.8, ease:'power3.out' }, '-=0.2')
    .from('#heroSub', { opacity:0, y:14, duration:0.8, ease:'power2.out' }, '-=0.5')
    .from('.scroll-cue', { opacity:0, duration:0.6 }, '-=0.3');
}

/* Message reveal on scroll */
gsap.timeline({ scrollTrigger:{ trigger:'.message-section', start:'top 65%' } })
  .from('.message-mark', { opacity:0, y:-10, duration:0.5 })
  .to('.message-text .word', { opacity:1, stagger:0.025, duration:0.4, ease:'power1.out' }, '-=0.2')
  .from('.message-sign', { opacity:0, y:8, duration:0.5 }, '-=0.1');

/* Gifts drop-in */
gsap.from('.gift', {
  scrollTrigger:{ trigger:'.gifts-section', start:'top 60%' },
  y:-50, opacity:0, rotate:-8, stagger:0.15, duration:0.9, ease:'bounce.out'
});

/* Collage parallax + reveal */
document.querySelectorAll('#collage .frame').forEach((f, i)=>{
  const rot = i===0 ? -5 : i===1 ? 4 : -2;
  gsap.set(f, { rotate: rot });
  gsap.from(f, {
    scrollTrigger:{ trigger:'.collage-section', start:'top 60%' },
    y: 60, opacity:0, duration:0.8, delay:i*0.12, ease:'power3.out'
  });
  if(!reduceMotion){
    gsap.to(f, {
      y: (i%2===0 ? -18 : -10),
      ease:'none',
      scrollTrigger:{ trigger:'.collage-section', start:'top bottom', end:'bottom top', scrub:0.6 }
    });
  }
});

/* Section labels/titles fade-in generic */
document.querySelectorAll('.gifts-section .section-label, .gifts-section .section-title, .collage-section .section-label, .collage-section .section-title, .finale-section .section-label, .finale-section .section-title').forEach(el=>{
  gsap.from(el, {
    scrollTrigger:{ trigger:el, start:'top 80%' },
    opacity:0, y:16, duration:0.6, ease:'power2.out'
  });
});

/* Gift box open interaction */
const colors = ['#C9A227','#E8D5A8','#F1E4D3','#9C7A1B','#FBF7EE'];
function burstConfetti(x, y, count){
  for(let i=0;i<count;i++){
    const p = document.createElement('div');
    p.className = 'confetti-piece';
    p.style.left = x + 'px';
    p.style.top = y + 'px';
    p.style.background = colors[Math.floor(Math.random()*colors.length)];
    document.body.appendChild(p);
    gsap.to(p, {
      x: (Math.random()*160-80),
      y: window.innerHeight - y + 80,
      rotate: Math.random()*540,
      opacity:0.9,
      duration: 1.6 + Math.random()*1.2,
      ease:'power1.in',
      onComplete: () => p.remove()
    });
  }
}
document.querySelectorAll('.gift').forEach(gift=>{
  gift.addEventListener('click', ()=>{
    if(gift.dataset.open) return;
    gift.dataset.open = '1';
    const box = gift.querySelector('.gift-box');
    const label = gift.querySelector('.gift-label');
    gsap.to(box, { scale:0.3, rotate:20, opacity:0, duration:0.5, ease:'power3.in' });
    gsap.to(label, { opacity:1, duration:0.5, delay:0.15 });
    const rect = gift.getBoundingClientRect();
    burstConfetti(rect.left + rect.width/2, rect.top + window.scrollY, 12);
  });
  if(!isTouch){
    gift.addEventListener('mousemove', (e)=>{
      const r = gift.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width/2) / r.width;
      const y = (e.clientY - r.top - r.height/2) / r.height;
      gsap.to(gift.querySelector('.gift-box'), { rotateY: x*20, rotateX: -y*20, duration:0.3, ease:'power2.out' });
    });
    gift.addEventListener('mouseleave', ()=>{
      gsap.to(gift.querySelector('.gift-box'), { rotateY:0, rotateX:0, duration:0.4 });
    });
  }
});

/* Magnetic celebrate button */
const celebrateWrap = document.getElementById('celebrateWrap');
const celebrateBtn = document.getElementById('celebrateBtn');
if(!isTouch){
  celebrateWrap.addEventListener('mousemove', (e)=>{
    const r = celebrateBtn.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width/2) * 0.3;
    const y = (e.clientY - r.top - r.height/2) * 0.3;
    gsap.to(celebrateBtn, { x, y, duration:0.3, ease:'power2.out' });
  });
  celebrateWrap.addEventListener('mouseleave', ()=>{
    gsap.to(celebrateBtn, { x:0, y:0, duration:0.5, ease:'elastic.out(1,0.4)' });
  });
}
celebrateBtn.addEventListener('click', (e)=>{
  const rect = celebrateBtn.getBoundingClientRect();
  burstConfetti(rect.left + rect.width/2, rect.top + window.scrollY, 50);
  gsap.to('#finaleMsg', { opacity:1, y:0, duration:0.8, ease:'power2.out' });
  gsap.fromTo(celebrateBtn, { scale:1 }, { scale:1.08, duration:0.2, yoyo:true, repeat:1 });
});

/* Reduced motion: skip elaborate stuff, just reveal everything */
if(reduceMotion){
  document.getElementById('gate').style.display = 'none';
  gsap.set('.hero h1 .letter, #eyebrow, #heroSub, .message-text .word, .gift, .frame', { opacity:1, y:0, x:0, rotate:0 });
  document.getElementById('heroLine').style.width = '70px';
}
</script>

</body>
</html>
