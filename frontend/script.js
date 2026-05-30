/* ============================
   PARTICLES
============================= */
(function spawnParticles() {
  const container = document.getElementById('particles');
  const COUNT = 18;
  for (let i = 0; i < COUNT; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + 'vw';
    p.style.animationDuration = (12 + Math.random() * 20) + 's';
    p.style.animationDelay = (Math.random() * 20) + 's';
    p.style.width = p.style.height = (1 + Math.random() * 2) + 'px';
    p.style.opacity = (0.2 + Math.random() * 0.5);
    container.appendChild(p);
  }
})();

/* ============================
   LATENCY COUNTER (mock)
============================= */
(function animateLatency() {
  const el = document.getElementById('stat-latency');
  setInterval(() => {
    const ms = 18 + Math.floor(Math.random() * 12);
    el.textContent = ms + 'ms';
  }, 3000);
})();

/* ============================
   TERMINAL LOGGER
============================= */
const terminal = {
  body: document.getElementById('terminalBody'),

  log(type, msg) {
    const now = new Date();
    const time = [now.getHours(), now.getMinutes(), now.getSeconds()]
      .map(n => String(n).padStart(2, '0')).join(':');

    const labels = {
      info:    { cls: 'log-info',    tag: '[INFO]   ' },
      success: { cls: 'log-success', tag: '[OK]     ' },
      error:   { cls: 'log-error',   tag: '[ERROR]  ' },
      warn:    { cls: 'log-warn',    tag: '[WARN]   ' },
    };
    const { cls, tag } = labels[type] || labels.info;

    const line = document.createElement('div');
    line.className = 'log-line';
    line.innerHTML = `
      <span class="log-time">${time}</span>
      <span class="${cls}">${tag}</span>
      <span class="log-msg">${msg}</span>`;
    this.body.appendChild(line);
    this.body.scrollTop = this.body.scrollHeight;
  }
};

/* ============================
   STATUS HELPER
============================= */
function setStatus(state, text) {
  const dot  = document.getElementById('api-status').querySelector('.status-dot');
  const span = document.getElementById('api-status').querySelector('.status-text');
  dot.className  = 'status-dot ' + state;
  span.textContent = text;
}

/* ============================
   MAIN FETCH
============================= */
async function getData() {
  const btn     = document.getElementById('fetchBtn');
  const result  = document.getElementById('result');
  const respBox = document.getElementById('responseBox');
  const timeEl  = document.getElementById('responseTime');
  const copyBtn = document.getElementById('copyBtn');

  // Reset state
  btn.classList.add('loading');
  btn.querySelector('.btn-text').textContent = 'Fetching…';
  btn.querySelector('.btn-icon').textContent = '◌';
  result.className = 'response-content';
  result.textContent = '// Connecting to backend…';
  timeEl.textContent = '';
  copyBtn.style.display = 'none';
  setStatus('loading', 'Requesting…');

  terminal.log('info', 'GET http://localhost:5000/api — initiated');

  const start = performance.now();

  try {
    const response = await fetch('http://localhost:5000/api');

    if (!response.ok) {
      throw new Error(`HTTP ${response.status} — ${response.statusText}`);
    }

    const data = await response.text();
    const elapsed = Math.round(performance.now() - start);

    // Try to pretty-print JSON
    let display;
    try {
      const parsed = JSON.parse(data);
      display = JSON.stringify(parsed, null, 2);
    } catch {
      display = data;
    }

    result.textContent = display;
    result.className = 'response-content success';
    timeEl.textContent = elapsed + 'ms';
    copyBtn.style.display = 'inline';
    setStatus('success', '200 OK');

    terminal.log('success', `Response received — ${elapsed}ms — ${data.length} bytes`);

    // Update latency stat
    document.getElementById('stat-latency').textContent = elapsed + 'ms';

  } catch (err) {
    const elapsed = Math.round(performance.now() - start);
    result.textContent = `// Error: ${err.message}\n// Make sure the backend is running on localhost:5000`;
    result.className = 'response-content error';
    timeEl.textContent = elapsed + 'ms';
    setStatus('error', 'Failed');
    terminal.log('error', `Request failed — ${err.message}`);
    terminal.log('warn', 'Is the backend container running? docker ps');
  } finally {
    btn.classList.remove('loading');
    btn.querySelector('.btn-text').textContent = 'Execute Request';
    btn.querySelector('.btn-icon').textContent = '▶';
  }
}

/* ============================
   COPY RESULT
============================= */
function copyResult() {
  const text = document.getElementById('result').textContent;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById('copyBtn');
    btn.textContent = '✓ Copied';
    setTimeout(() => { btn.textContent = '⧉ Copy'; }, 2000);
  });
}

/* ============================
   CLEAR LOG
============================= */
function clearLog() {
  document.getElementById('terminalBody').innerHTML = '';
  terminal.log('info', 'Terminal cleared');
}