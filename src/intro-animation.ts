// @ts-nocheck
export function mountIntro(root, onDone) {
  const PATH = "M423.041 26.7311C465.858 -8.91037 530.083 -8.91037 572.9 26.7311L979.659 411.657C995.716 427.696 1006.42 449.08 985.011 462.446C958.251 478.484 920.786 483.831 894.026 474.207L872.617 462.446C870.476 460.664 870.476 458.703 872.617 456.565L912.758 417.003C915.256 413.795 914.364 411.122 910.082 408.984L851.209 385.995C847.998 384.926 844.965 385.461 842.11 387.599L797.688 419.676C795.19 421.815 792.336 422.528 789.125 421.815L729.181 407.38C725.613 406.667 724.543 404.172 725.97 399.895L739.35 359.799C740.42 356.591 738.993 354.631 735.068 353.918L673.519 341.087C670.308 340.374 667.632 341.444 665.491 344.295L623.745 390.272C621.604 392.767 618.749 393.836 615.181 393.48L560.59 389.738C557.022 389.381 554.881 387.243 554.167 383.322L517.238 170.009C516.524 164.306 513.135 161.455 507.069 161.455H496.9C490.834 161.455 487.445 164.306 486.731 170.009L447.125 384.391C446.412 387.956 444.271 389.916 440.703 390.272L384.506 392.945C380.938 392.945 378.083 391.52 375.943 388.668L341.689 347.503C339.191 344.295 335.98 343.226 332.055 344.295L262.478 359.264C258.91 359.977 257.661 362.116 258.732 365.68L273.182 407.915C274.253 411.122 273.004 413.261 269.436 414.33L213.239 427.696C210.027 428.408 206.995 427.874 204.14 426.092L145.802 392.945C142.948 391.163 139.915 390.985 136.704 392.411L81.5771 411.657L126 457.634C128.854 460.842 128.14 463.515 123.859 465.654C89.07 479.554 42.5068 484.9 11.9998 461.911C-6.19731 448.546 -2.98605 430.903 16.8167 411.657L423.041 26.7311Z";
  const NS = 'http://www.w3.org/2000/svg';
  const N = 16, W = 997, H = 479, OX = 110, OY = 70;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clamp = x => Math.max(0, Math.min(1, x));
  const eo = x => 1 - Math.pow(1 - x, 3);
  const eio = x => x < .5 ? 4*x*x*x : 1 - Math.pow(-2*x + 2, 3) / 2;
  const T = (x, y, s, a = 'middle', w = 500, sz = 11) =>
    `<text x="${x}" y="${y}" text-anchor="${a}" font-size="${sz}" font-weight="${w}" class="t">${s}</text>`;
  let zones = '';
  for (let i = 0; i < 6; i++) zones += T(24 + (i + .5) * 192, 19, i + 1, 'middle', 500, 10) + T(24 + (i + .5) * 192, 693, i + 1, 'middle', 500, 10);
  'ABCD'.split('').forEach((c, i) => { zones += T(12, 24 + (i + .5) * 163 + 3, c, 'middle', 500, 10) + T(1188, 24 + (i + .5) * 163 + 3, c, 'middle', 500, 10); });
  let layers = '';
  for (let k = N; k >= 1; k--) layers += `<use href="#lg" data-k="${k}" fill="${k > N - 3 ? '#0a2250' : '#020b1f'}" opacity="0"/>`;

  root.setAttribute('role', 'status'); root.setAttribute('aria-label', 'Loading ASPRÄZ');
  root.innerHTML = `
  <i class="bar"></i>
<svg class="sheet" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
    <defs>
      <path id="lg" d="${PATH}"/>
      <linearGradient id="face" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1a4797"/><stop offset=".4" stop-color="#05183C"/><stop offset="1" stop-color="#030f26"/></linearGradient>
      <linearGradient id="shine" x1="0" x2="1"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".5" stop-color="#fff" stop-opacity=".9"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>
      <pattern id="hatch" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="9" stroke="#05183C" stroke-width="1.3"/></pattern>
      <clipPath id="cRise"><rect class="rise" x="-30" y="520" width="1060" height="560"/></clipPath>
      <clipPath id="cShape"><use href="#lg"/></clipPath>
    </defs>
    <g class="ink" fill="none" stroke="#05183C">
      <rect class="frame" x="24" y="24" width="1152" height="652" stroke-width="2" pathLength="1"/>
      <rect x="36" y="36" width="1128" height="628" stroke-width=".7" opacity=".5" class="fade1"/>
      <g class="fade1" stroke-width=".7" opacity="0">${zones.replace(/<text/g, '<text fill="#05183C" stroke="none"')}</g>
      <g class="cl" opacity="0" stroke-width=".8" stroke-dasharray="26 5 4 5">
        <path d="M${OX + 498.5} 44V600M44 ${OY + 240}H1156"/></g>
      <g class="dims" opacity="0" stroke-width=".9">
        <path d="M${OX} ${OY + H + 22}V${OY + H + 40}M${OX + W} ${OY + H + 22}V${OY + H + 40}M${OX} ${OY + H + 31}H${OX + W}"/>
        <path d="M${OX + W + 30} ${OY}H${OX + W + 52}M${OX + W + 30} ${OY + H}H${OX + W + 52}M${OX + W + 41} ${OY}V${OY + H}"/>
        <g fill="#05183C" stroke="none"><path d="M${OX} ${OY + H + 31}l9-3v6zM${OX + W} ${OY + H + 31}l-9-3v6zM${OX + W + 41} ${OY}l-3 9h6zM${OX + W + 41} ${OY + H}l-3-9h6z"/></g>
        <text class="t d" x="${OX + W / 2}" y="${OY + H + 35}" text-anchor="middle" font-size="12" stroke="#eee9df" stroke-width="6" paint-order="stroke" fill="#05183C">240.00</text>
        <text class="t d" transform="translate(${OX + W + 37} ${OY + H / 2}) rotate(-90)" text-anchor="middle" font-size="12" stroke="#eee9df" stroke-width="6" paint-order="stroke" fill="#05183C">115.30</text>
      </g>
      <g class="tb fade1" opacity="0" stroke-width="1">
        <rect x="846" y="604" width="316" height="58"/><path d="M846 628H1162M1010 628V662"/>
        <g fill="#05183C" stroke="none" class="t"><text x="858" y="621" font-size="12" font-weight="700" letter-spacing="1.4">ASPRÄZ PRECISION ENGINEERING</text>
        <text x="858" y="650" font-size="11">CNC and VMC job work</text><text x="1022" y="641" font-size="10">Dwg ASP-001</text><text x="1022" y="655" font-size="10">Scale 1:2   Unit mm</text></g>
      </g>
      <g transform="translate(${OX} ${OY})">
        <g class="layers">${layers}</g>
        <use href="#lg" class="hat" fill="url(#hatch)" opacity="0"/>
        <g clip-path="url(#cRise)"><use href="#lg" fill="url(#face)" stroke="none"/>
          <g clip-path="url(#cShape)" stroke="none"><rect class="b1" x="-300" y="-60" width="300" height="640" fill="url(#shine)" transform="skewX(-20)" opacity="0"/><rect class="b2" x="-300" y="-60" width="60" height="640" fill="url(#shine)" transform="skewX(-20)" opacity="0"/></g></g>
        <use class="rim" href="#lg" stroke="#8fb2ff" stroke-width="1.6" opacity="0"/>
        <use class="p2" href="#lg" stroke-width="1.3" stroke-opacity=".35" transform="translate(3 2)" pathLength="1"/>
        <use class="p1" href="#lg" stroke-width="2.6" stroke-linejoin="round" pathLength="1"/>
        <path class="glint" d="M0-30L3-3L30 0L3 3L0 30L-3 3L-30 0L-3-3Z" fill="#fff" stroke="none" transform="translate(498 8) scale(0)"/>
      </g>
      <g class="tool" opacity="0" stroke="#ff5b27"><circle r="13" fill="#ff5b27" fill-opacity=".18" stroke="none"/><circle r="4.5" stroke-width="1.6"/><path d="M-16 0H-7M7 0H16M0-16V-7M0 7V16" stroke-width="1.2"/></g>
      <g class="wm" opacity="0" fill="#05183C" stroke="none">
        <text x="600" y="640" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-weight="600" font-size="34" letter-spacing="11">ASPRÄZ</text>
        <text x="600" y="664" text-anchor="middle" font-family="Manrope,sans-serif" font-weight="600" font-size="9" letter-spacing="4.6">PRECISION ENGINEERING</text></g>
    </g>
  </svg>
  <div class="meta"><div><span class="status">Initialising</span><span class="xy">X 000.00   Y 000.00   Z -02.00</span></div>
    <span class="pct"><span class="num">0</span><small>%</small></span></div>`;

  const $ = s => root.querySelector(s), $$ = s => [...root.querySelectorAll(s)];
  const ink = $('.ink'), sty = (e, p, v) => e.style[p] = v;
  const path = $('#lg'), L = path.getTotalLength();
  const frame = $('.frame'), p1 = $('.p1'), p2 = $('.p2'), hat = $('.hat'), rise = $('.rise'), tool = $('.tool'), rim = $('.rim');
  const lay = $$('[data-k]'), b1 = $('.b1'), b2 = $('.b2'), glint = $('.glint'), wm = $('.wm');
  [frame, p1, p2].forEach(e => { e.style.strokeDasharray = 1; e.style.strokeDashoffset = 1; });
  const stages = [[.08, 'Initialising'], [.2, 'Setting datum'], [.44, 'Profiling contour'], [.6, 'Roughing'], [.8, 'Finishing pass'], [.96, 'Inspection'], [2, 'Ready']];
  const DUR = reduce ? 700 : 5600;
  let start = null, finished = false, raf = 0, timers = [];
  document.body.style.overflow = 'hidden';

  function draw(p) {
    frame.style.strokeDashoffset = 1 - eo(clamp(p / .14));
    $$('.fade1').forEach(e => e.setAttribute('opacity', clamp((p - .06) / .12) * (e.matches('rect') ? .5 : 1)));
    $('.cl').setAttribute('opacity', clamp((p - .1) / .1) * .55);
    $('.dims').setAttribute('opacity', clamp((p - .22) / .12));
    const d = eo(clamp((p - .1) / .36));
    p1.style.strokeDashoffset = 1 - d; p2.style.strokeDashoffset = 1 - clamp((p - .13) / .36);
    const pt = path.getPointAtLength(d * L);
    tool.setAttribute('transform', `translate(${OX + pt.x} ${OY + pt.y})`);
    tool.setAttribute('opacity', d > 0 && p < .5 ? 1 : 0);
    $('.xy').textContent = `X ${(pt.x / W * 240).toFixed(2).padStart(6, '0')}   Y ${((H - pt.y) / W * 240).toFixed(2).padStart(6, '0')}   Z ${p > .5 ? '+00.00' : '-02.00'}`;
    hat.setAttribute('opacity', clamp((p - .3) / .1) * (1 - clamp((p - .5) / .1)) * .28);
    rise.setAttribute('y', 520 - eo(clamp((p - .42) / .24)) * 560);
    const o = 1 - clamp((p - .52) / .14); p1.style.opacity = o; p2.style.opacity = o * .8;
    const e = eo(clamp((p - .64) / .18)), st = e * .95;
    lay.forEach(u => { const k = +u.dataset.k; u.setAttribute('transform', `translate(${k * st} ${k * st * .85})`); u.setAttribute('opacity', e > 0 ? 1 : 0); });
    rim.setAttribute('opacity', clamp((p - .74) / .1) * .55);
    const s = clamp((p - .78) / .17), on = s > 0 && s < 1 ? 1 : 0;
    b1.setAttribute('opacity', on); b1.setAttribute('x', -320 + s * 1750);
    b2.setAttribute('opacity', on); b2.setAttribute('x', -420 + s * 1750);
    const g = clamp((p - .88) / .1), gs = Math.sin(g * Math.PI);
    glint.setAttribute('transform', `translate(498 8) scale(${gs * 1.1})`);
    wm.setAttribute('opacity', clamp((p - .86) / .12));
    $('.num').textContent = Math.round(p * 100);
    $('.bar').style.width = p * 100 + '%';
    $('.status').textContent = stages.find(x => p < x[0])[1];
  }
  function finish() {
    if (finished) return; finished = true; cancelAnimationFrame(raf); draw(1);
    timers.push(setTimeout(() => {
      root.classList.add('done'); document.body.style.overflow = '';
      timers.push(setTimeout(() => { root.remove(); onDone && onDone(); }, 1000));
    }, reduce ? 100 : 700));
  }
  function tick(ts) {
    if (start === null) start = ts;
    const t = clamp((ts - start) / DUR);
    draw(reduce ? t : .1 * t + .9 * eio(t));
    t < 1 ? raf = requestAnimationFrame(tick) : finish();
  }
  raf = requestAnimationFrame(tick);
  return () => { cancelAnimationFrame(raf); timers.forEach(clearTimeout); document.body.style.overflow = ''; };
}



