/* ── HAMBURGER ── */
const initHamburger = () => {
  const ham = document.getElementById('hamburger');
  const nav = document.getElementById('nav-links');
  
  if (!ham || !nav) return;
  
  ham.addEventListener('click', () => nav.classList.toggle('open'));
  document.querySelectorAll('.nav-links a').forEach(a => 
    a.addEventListener('click', () => nav.classList.remove('open'))
  );
};

/* ── NEURAL CANVAS ── */
const initNeuralCanvas = () => {
  const canvas = document.getElementById('neural-canvas');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  let W, H, nodes = [];

  function resize() {
    W = canvas.width = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }
  
  resize();
  window.addEventListener('resize', () => { 
    resize(); 
    initNodes(); 
  });

  const COUNT = Math.min(55, Math.floor(window.innerWidth / 22));

  function initNodes() {
    nodes = [];
    for (let i = 0; i < COUNT; i++) {
      nodes.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - .5) * .35,
        vy: (Math.random() - .5) * .35,
        r: Math.random() * 2.5 + 1.5
      });
    }
  }
  
  initNodes();

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Draw edges
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const MAX = 140;
        if (dist < MAX) {
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          const alpha = (1 - dist / MAX) * 0.55;
          ctx.strokeStyle = `rgba(79,70,229,${alpha})`;
          ctx.lineWidth = .8;
          ctx.stroke();
        }
      }
    }

    // Draw nodes
    nodes.forEach(n => {
      const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 2.5);
      grad.addColorStop(0, 'rgba(124,58,237,0.9)');
      grad.addColorStop(1, 'rgba(79,70,229,0)');
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r * 2.5, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(124,58,237,0.95)';
      ctx.fill();
    });

    // Move nodes
    nodes.forEach(n => {
      n.x += n.vx; 
      n.y += n.vy;
      if (n.x < 0 || n.x > W) n.vx *= -1;
      if (n.y < 0 || n.y > H) n.vy *= -1;
    });

    requestAnimationFrame(draw);
  }
  
  draw();
};

/* ── SCROLL REVEAL ── */
const initScrollReveal = () => {
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 60);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  
  revealEls.forEach(el => io.observe(el));
};

/* ── SKILL BARS ── */
const initSkillBars = () => {
  const skillIo = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const pct = e.target.dataset.skill;
        const bar = e.target.querySelector('.skill-bar');
        if (bar) bar.style.width = pct + '%';
        skillIo.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  
  document.querySelectorAll('.skill-card[data-skill]').forEach(el => skillIo.observe(el));
};

/* ── FORM HANDLER ── */
const handleSubmit = () => {
  const fname = document.getElementById('fname').value.trim();
  const email = document.getElementById('email').value.trim();
  const msg   = document.getElementById('message').value.trim();
  
  if (!fname || !email || !msg) { 
    alert('Please fill in at least your name, email, and message.'); 
    return; 
  }
  
  document.getElementById('form-feedback').style.display = 'block';
  ['fname','lname','email','subject','message'].forEach(id => { 
    document.getElementById(id).value = ''; 
  });
  
  // Optional: Send form data to a backend service
  // await fetch('/api/contact', { method: 'POST', body: JSON.stringify({fname, email, msg}) });
};

/* ── INITIALIZE ON DOM READY ── */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initHamburger();
    initNeuralCanvas();
    initScrollReveal();
    initSkillBars();
  });
} else {
  initHamburger();
  initNeuralCanvas();
  initScrollReveal();
  initSkillBars();
}
