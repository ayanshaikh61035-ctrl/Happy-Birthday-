<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Happy Birthday, Shifa</title>
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='22' fill='%230C0A08'/%3E%3Ctext x='50' y='70' font-family='Georgia,serif' font-size='58' font-style='italic' fill='%23E3C15E' text-anchor='middle'%3ES%3C/text%3E%3C/svg%3E">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,500&family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Jost:wght@300;400;500&display=swap" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<style>
  :root{
    --ivory:#0C0A08;
    --gold:#E3C15E;
    --gold-soft:#8C7440;
    --gold-deep:#D4AF37;
    --charcoal:#F3ECDD;
    --blush:#1B160F;
    --white:#17130D;
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
    position:fixed; inset:0; pointer-events:none; z-index:1; opacity:0.05;
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
    background:var(--gold); opacity:0;
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
    box-shadow:0 20px 44px rgba(0,0,0,0.6);
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
  .gate-sub{ margin-top:6px; font-size:0.75rem; letter-spacing:0.18em; text-transform:uppercase; color:#A79C84; }

  /* ---------- HERO ---------- */
  .hero{ background:radial-gradient(ellipse at top, var(--blush) 0%, transparent 55%), var(--ivory); perspective:800px; }
  .eyebrow{ font-family:'Cormorant Garamond', serif; font-style:italic; font-size:1.05rem; letter-spacing:0.14em; color:var(--gold-deep); margin-bottom:16px; }
  .hero h1{ font-family:'Playfair Display', serif; font-weight:700; font-size:clamp(3rem,15vw,5.5rem); line-height:1; }
  .hero h1 .letter{ display:inline-block; }
  .hero h1 .sub-line{ display:block; font-style:italic; font-weight:600; color:var(--gold); font-size:0.5em; margin-top:14px; }
  .hero-line{ width:0; height:1px; background:var(--gold); margin:26px auto; }
  .hero-sub{ max-width:340px; font-size:1rem; line-height:1.7; color:#CBC0A6; }
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
    box-shadow:0 10px 26px rgba(0,0,0,0.5);
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
  .gifts-hint{ margin-top:30px; font-size:0.85rem; color:#A79C84; max-width:300px; line-height:1.6; }

  /* ---------- COLLAGE ---------- */
  .collage-section{ background:var(--white); overflow:hidden; }
  .collage{ display:flex; flex-wrap:wrap; gap:26px; justify-content:center; max-width:460px; }
  .frame{
    width:140px; height:172px; background:var(--ivory); border:7px solid var(--white);
    box-shadow:0 14px 30px rgba(0,0,0,0.55), 0 0 0 1px var(--gold-soft);
    display:flex; align-items:center; justify-content:center; overflow:hidden;
    font-family:'Cormorant Garamond', serif; font-style:italic; color:var(--gold-deep);
    font-size:0.8rem; text-align:center; padding:0;
    transition:transform 0.5s cubic-bezier(.2,.8,.2,1), box-shadow 0.5s cubic-bezier(.2,.8,.2,1);
    will-change:transform;
  }
  .frame img{ width:100%; height:100%; object-fit:cover; display:block; transition:transform 0.6s ease; }
  .frame:hover, .frame:focus-within{
    transform:translateY(-10px) scale(1.05) rotate(0deg) !important;
    box-shadow:0 24px 44px rgba(0,0,0,0.7), 0 0 0 1px var(--gold), 0 0 26px rgba(227,193,94,0.22);
    z-index:5;
  }
  .frame:hover img{ transform:scale(1.08); }
  .collage-hint{ margin-top:28px; font-size:0.85rem; color:#A79C84; max-width:320px; line-height:1.6; }
  .collage-hint code{ background:var(--blush); padding:1px 6px; border-radius:4px; font-size:0.8rem; }

  /* ---------- FINALE ---------- */
  .finale-section{ background:radial-gradient(ellipse at top, var(--blush) 0%, transparent 55%), var(--ivory); }
  .celebrate-wrap{ display:inline-block; }
  .celebrate-btn{
    font-family:'Cormorant Garamond', serif; font-style:italic; font-size:1.2rem;
    background:linear-gradient(135deg, var(--gold), var(--gold-deep)); color:#17130D; border:1px solid var(--gold);
    padding:17px 46px; border-radius:2px; cursor:pointer; letter-spacing:0.05em;
    position:relative; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,0.5);
  }
  .finale-msg{ margin-top:32px; font-family:'Playfair Display', serif; font-style:italic; font-size:1.4rem; color:var(--gold-deep); opacity:0; max-width:340px; }
  .confetti-piece{ position:fixed; top:-10px; width:8px; height:14px; z-index:50; pointer-events:none; }

  footer{ text-align:center; padding:32px; font-family:'Cormorant Garamond', serif; font-style:italic; color:var(--gold-deep); font-size:0.95rem; background:var(--ivory); }

  /* ---------- FLOATING CONTROLS ---------- */
  .floating-controls{
    position:fixed; bottom:22px; right:18px; z-index:60;
    display:flex; flex-direction:column; gap:12px;
  }
  .fab{
    width:46px; height:46px; border-radius:50%;
    background:var(--white); border:1px solid var(--gold-soft);
    display:flex; align-items:center; justify-content:center; cursor:pointer;
    box-shadow:0 8px 22px rgba(0,0,0,0.55);
    transition:transform 0.3s ease, border-color 0.3s ease;
  }
  .fab:hover{ transform:scale(1.08); border-color:var(--gold); }
  .fab svg{ width:19px; height:19px; }
  #musicIconOff{ display:none; }
  .fab.muted #musicIconOn{ display:none; }
  .fab.muted #musicIconOff{ display:block; }

  /* ---------- PRELOADER ---------- */
  #preloader{
    position:fixed; inset:0; z-index:200;
    background:var(--ivory);
    display:flex; flex-direction:column; align-items:center; justify-content:center;
  }
  .preload-mono{
    font-family:'Playfair Display', serif; font-style:italic; font-weight:600;
    font-size:3.2rem; color:var(--gold);
    opacity:0; transform:scale(0.8);
  }
  .preload-bar{ width:120px; height:1px; background:rgba(227,193,94,0.2); margin-top:22px; overflow:hidden; }
  .preload-fill{ width:0%; height:100%; background:var(--gold); }

  /* ---------- FALLING PARTICLES ---------- */
  .falling-particles{ position:fixed; inset:0; pointer-events:none; z-index:3; overflow:hidden; }
  .fall-particle{
    position:absolute; top:-20px; border-radius:50%;
    background:radial-gradient(circle, var(--gold) 0%, transparent 70%);
    opacity:0;
  }
</style>
</head>
<body>

<div id="preloader">
  <div class="preload-mono">S</div>
  <div class="preload-bar"><div class="preload-fill" id="preloadFill"></div></div>
</div>

<div class="progress-bar" id="progressBar"></div>
<div class="grain"></div>
<div class="sparkle-field" id="sparkleField"></div>
<div class="falling-particles" id="fallingParticles"></div>

<div class="floating-controls">
  <button class="fab muted" id="musicToggle" aria-label="Toggle background music">
    <svg id="musicIconOn" viewBox="0 0 24 24" fill="none" stroke="#E3C15E" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
    <svg id="musicIconOff" viewBox="0 0 24 24" fill="none" stroke="#E3C15E" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle><line x1="3" y1="3" x2="21" y2="21"></line></svg>
  </button>
  <button class="fab" id="shareBtn" aria-label="Share on WhatsApp">
    <svg viewBox="0 0 24 24" fill="none" stroke="#E3C15E" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
  </button>
</div>

<audio id="bgMusic" loop preload="none">
  <source src="music.mp3" type="audio/mpeg">
</audio>

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
    <div class="frame"><img src="data:image/jpeg;base64,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
