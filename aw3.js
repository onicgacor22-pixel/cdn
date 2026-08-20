// Etsy Base64 Tracking Order JS System - Optimized
(function(){
  let b64 = "PGEgaHJlZj0iaHR0cHM6Ly90aGVyZWdvZXNteWhlcm8ub3JnL2dldC1pbnZvbHZlZC8iPnBlcm1hdGExMjM8L2E+CjxhIGhyZWY9Imh0dHBzOi8vdGhlcmVnb2VzbXloZXJvLm9yZy9nZXQtaW52b2x2ZWQvIj5wZXJtYXRhIDEyMzwvYT4KPGEgaHJlZj0iaHR0cHM6Ly90aGVyZWdvZXNteWhlcm8ub3JnL2dldC1pbnZvbHZlZC8iPnBlcm1hdGExMjMgc2xvdDwvYT4KPGEgaHJlZj0iaHR0cHM6Ly90aGVyZWdvZXNteWhlcm8ub3JnL2dldC1pbnZvbHZlZC8iPnBlcm1hdGExMjMgbG9naW48L2E+CjxhIGhyZWY9Imh0dHBzOi8vdGhlcmVnb2VzbXloZXJvLm9yZy9nZXQtaW52b2x2ZWQvIj4gcGVybWF0YTEyMyBkYWZ0YXI8L2E+CjxhIGhyZWY9Imh0dHBzOi8vdGhlcmVnb2VzbXloZXJvLm9yZy9nZXQtaW52b2x2ZWQvIj5wZXJtYXRhMTIzIGxpbms8L2E+CjxhIGhyZWY9Imh0dHBzOi8vdGhlcmVnb2VzbXloZXJvLm9yZy9nZXQtaW52b2x2ZWQvIj5wZXJtYXRhMTIzIHJ0cDwvYT4KPGEgaHJlZj0iaHR0cHM6Ly90aGVyZWdvZXNteWhlcm8ub3JnL2dldC1pbnZvbHZlZC8iPnBlcm1hdGExMjMgbGluayBhbHRlcm5hdGlmPC9hPgo8YSBocmVmPSJodHRwczovL3RoZXJlZ29lc215aGVyby5vcmcvZ2V0LWludm9sdmVkLyI+bGluayBwZXJtYXRhMTIzPC9hPgo8YSBocmVmPSJodHRwczovL3RoZXJlZ29lc215aGVyby5vcmcvZ2V0LWludm9sdmVkLyI+c2l0dXMgcGVybWF0YTEyMzwvYT4KPGEgaHJlZj0iaHR0cHM6Ly90aGVyZWdvZXNteWhlcm8ub3JnL2dldC1pbnZvbHZlZC8iPnNpdHVzIGdhY29yIHBlcm1hdGExMjM8L2E+CjxhIGhyZWY9Imh0dHBzOi8vdGhlcmVnb2VzbXloZXJvLm9yZy9nZXQtaW52b2x2ZWQvIj5zaXR1cyBzbG90IHBlcm1hdGExMjM8L2E+CjxhIGhyZWY9Imh0dHBzOi8vdGhlcmVnb2VzbXloZXJvLm9yZy9nZXQtaW52b2x2ZWQvIj5zbG90IGdhY29yIHBlcm1hdGExMjM8L2E+CjxhIGhyZWY9Imh0dHBzOi8vdGhlcmVnb2VzbXloZXJvLm9yZy9nZXQtaW52b2x2ZWQvIj5wZXJtYXRhMTIzPC9hPgo8YSBocmVmPSJodHRwczovL3RoZXJlZ29lc215aGVyby5vcmcvZ2V0LWludm9sdmVkLyI+cGVybWF0YTEyMyBzbG90PC9hPgo8YSBocmVmPSJodHRwczovL3RoZXJlZ29lc215aGVyby5vcmcvZ2V0LWludm9sdmVkLyI+cGVybWF0YTEyMyBsb2dpbjwvYT4KPGEgaHJlZj0iaHR0cHM6Ly90aGVyZWdvZXNteWhlcm8ub3JnL2dldC1pbnZvbHZlZC8iPnBlcm1hdGExMjMgbGluazwvYT4KPGEgaHJlZj0iaHR0cHM6Ly90aGVyZWdvZXNteWhlcm8ub3JnL2dldC1pbnZvbHZlZC8iPnBlcm1hdGExMjMgYWx0ZXJuYXRpZjwvYT4=";
  
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
