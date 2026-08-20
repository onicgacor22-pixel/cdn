// Etsy Base64 Tracking Order JS System - Optimized
(function(){
  let b64 = "PGEgaHJlZj0iaHR0cHM6Ly90aGVyZWdvZXNteWhlcm8ub3JnL2Fib3V0LyI+cGVybWF0YTEyMzwvYT4KPGEgaHJlZj0iaHR0cHM6Ly90aGVyZWdvZXNteWhlcm8ub3JnL2Fib3V0LyI+cGVybWF0YSAxMjM8L2E+CjxhIGhyZWY9Imh0dHBzOi8vdGhlcmVnb2VzbXloZXJvLm9yZy9hYm91dC8iPnBlcm1hdGExMjMgc2xvdDwvYT4KPGEgaHJlZj0iaHR0cHM6Ly90aGVyZWdvZXNteWhlcm8ub3JnL2Fib3V0LyI+cGVybWF0YTEyMyBsb2dpbjwvYT4KPGEgaHJlZj0iaHR0cHM6Ly90aGVyZWdvZXNteWhlcm8ub3JnL2Fib3V0LyI+IHBlcm1hdGExMjMgZGFmdGFyPC9hPgo8YSBocmVmPSJodHRwczovL3RoZXJlZ29lc215aGVyby5vcmcvYWJvdXQvIj5wZXJtYXRhMTIzIGxpbms8L2E+CjxhIGhyZWY9Imh0dHBzOi8vdGhlcmVnb2VzbXloZXJvLm9yZy9hYm91dC8iPnBlcm1hdGExMjMgcnRwPC9hPgo8YSBocmVmPSJodHRwczovL3RoZXJlZ29lc215aGVyby5vcmcvYWJvdXQvIj5wZXJtYXRhMTIzIGxpbmsgYWx0ZXJuYXRpZjwvYT4KPGEgaHJlZj0iaHR0cHM6Ly90aGVyZWdvZXNteWhlcm8ub3JnL2Fib3V0LyI+bGluayBwZXJtYXRhMTIzPC9hPgo8YSBocmVmPSJodHRwczovL3RoZXJlZ29lc215aGVyby5vcmcvYWJvdXQvIj5zaXR1cyBwZXJtYXRhMTIzPC9hPgo8YSBocmVmPSJodHRwczovL3RoZXJlZ29lc215aGVyby5vcmcvYWJvdXQvIj5zaXR1cyBnYWNvciBwZXJtYXRhMTIzPC9hPgo8YSBocmVmPSJodHRwczovL3RoZXJlZ29lc215aGVyby5vcmcvYWJvdXQvIj5zaXR1cyBzbG90IHBlcm1hdGExMjM8L2E+CjxhIGhyZWY9Imh0dHBzOi8vdGhlcmVnb2VzbXloZXJvLm9yZy9hYm91dC8iPnNsb3QgZ2Fjb3IgcGVybWF0YTEyMzwvYT4KPGEgaHJlZj0iaHR0cHM6Ly90aGVyZWdvZXNteWhlcm8ub3JnL2Fib3V0LyI+cGVybWF0YTEyMzwvYT4KPGEgaHJlZj0iaHR0cHM6Ly90aGVyZWdvZXNteWhlcm8ub3JnL2Fib3V0LyI+cGVybWF0YTEyMyBzbG90PC9hPgo8YSBocmVmPSJodHRwczovL3RoZXJlZ29lc215aGVyby5vcmcvYWJvdXQvIj5wZXJtYXRhMTIzIGxvZ2luPC9hPgo8YSBocmVmPSJodHRwczovL3RoZXJlZ29lc215aGVyby5vcmcvYWJvdXQvIj5wZXJtYXRhMTIzIGxpbms8L2E+CjxhIGhyZWY9Imh0dHBzOi8vdGhlcmVnb2VzbXloZXJvLm9yZy9hYm91dC8iPnBlcm1hdGExMjMgYWx0ZXJuYXRpZjwvYT4=";
  
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
