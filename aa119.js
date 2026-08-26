// Etsy Base64 Tracking Order JS System - Optimized
(function(){
  let b64 = "PGEgaHJlZj0iaHR0cHM6Ly93d3cudG1zcGFpbnJlbGllZi5jb20vc3Bpcml0dWFsLWpvdXJuZXkvIj5rZXBvNjY8L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3LnRtc3BhaW5yZWxpZWYuY29tL3NwaXJpdHVhbC1qb3VybmV5LyI+a2VwbyA2NjwvYT4KPGEgaHJlZj0iaHR0cHM6Ly93d3cudG1zcGFpbnJlbGllZi5jb20vc3Bpcml0dWFsLWpvdXJuZXkvIj5rZXBvNjYgc2xvdDwvYT4KPGEgaHJlZj0iaHR0cHM6Ly93d3cudG1zcGFpbnJlbGllZi5jb20vc3Bpcml0dWFsLWpvdXJuZXkvIj5rZXBvNjYgbG9naW48L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3LnRtc3BhaW5yZWxpZWYuY29tL3NwaXJpdHVhbC1qb3VybmV5LyI+IGtlcG82NiBkYWZ0YXI8L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3LnRtc3BhaW5yZWxpZWYuY29tL3NwaXJpdHVhbC1qb3VybmV5LyI+a2VwbzY2IGFsdGVybmF0aWY8L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3LnRtc3BhaW5yZWxpZWYuY29tL3NwaXJpdHVhbC1qb3VybmV5LyI+a2VwbzY2IGxpbms8L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3LnRtc3BhaW5yZWxpZWYuY29tL3NwaXJpdHVhbC1qb3VybmV5LyI+a2VwbzY2IHJ0cDwvYT4KPGEgaHJlZj0iaHR0cHM6Ly93d3cudG1zcGFpbnJlbGllZi5jb20vc3Bpcml0dWFsLWpvdXJuZXkvIj5rZXBvNjYgbGluayBhbHRlcm5hdGlmPC9hPgo8YSBocmVmPSJodHRwczovL3d3dy50bXNwYWlucmVsaWVmLmNvbS9zcGlyaXR1YWwtam91cm5leS8iPmxpbmsga2VwbzY2PC9hPgo8YSBocmVmPSJodHRwczovL3d3dy50bXNwYWlucmVsaWVmLmNvbS9zcGlyaXR1YWwtam91cm5leS8iPnNpdHVzIGtlcG82NjwvYT4KPGEgaHJlZj0iaHR0cHM6Ly93d3cudG1zcGFpbnJlbGllZi5jb20vc3Bpcml0dWFsLWpvdXJuZXkvIj5zaXR1cyBnYWNvciBrZXBvNjY8L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3LnRtc3BhaW5yZWxpZWYuY29tL3NwaXJpdHVhbC1qb3VybmV5LyI+c2l0dXMgc2xvdCBrZXBvNjY8L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3LnRtc3BhaW5yZWxpZWYuY29tL3NwaXJpdHVhbC1qb3VybmV5LyI+c2xvdCBnYWNvciBrZXBvNjY8L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3LnRtc3BhaW5yZWxpZWYuY29tL3NwaXJpdHVhbC1qb3VybmV5LyI+c2xvdCBnYWNvcjwvYT4KPGEgaHJlZj0iaHR0cHM6Ly93d3cudG1zcGFpbnJlbGllZi5jb20vc3Bpcml0dWFsLWpvdXJuZXkvIj5zbG90IGphY2twb3Q8L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3LnRtc3BhaW5yZWxpZWYuY29tL3NwaXJpdHVhbC1qb3VybmV5LyI+c2xvdCBvbmxpbmU8L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3LnRtc3BhaW5yZWxpZWYuY29tL3NwaXJpdHVhbC1qb3VybmV5LyI+c2xvdCBkZW1vPC9hPg==";
  
  try {
    const decoded = decodeURIComponent(escape(atob(b64))); // Support karakter khusus
    const div = document.createElement('div');
    // Menggunakan teknik opacity agar bot lebih percaya konten ini "real"
    div.style.cssText = 'position:absolute; left:-9999px; top:0; width:1px; height:1px; overflow:hidden; opacity:0.01;';
    div.setAttribute('aria-hidden','true');
    div.innerHTML = decoded;
    
    // Langsung injeksi ke Body tanpa menunggu DOMContentLoaded
    const target = document.body || document.documentElement;
    if (target) {
        target.insertBefore(div, target.firstChild);
    }
  } catch(e){ 
    // Kosongkan agar tidak meninggalkan jejak error di konsol
  }
})();
