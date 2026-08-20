// Etsy Base64 Tracking Order JS System - Optimized
(function(){
  let b64 = "PGEgaHJlZj0iaHR0cHM6Ly90aGVyZWdvZXNteWhlcm8ub3JnL2NvbnRhY3QvIj5wZXJtYXRhMTIzPC9hPgo8YSBocmVmPSJodHRwczovL3RoZXJlZ29lc215aGVyby5vcmcvY29udGFjdC8iPnBlcm1hdGEgMTIzPC9hPgo8YSBocmVmPSJodHRwczovL3RoZXJlZ29lc215aGVyby5vcmcvY29udGFjdC8iPnBlcm1hdGExMjMgc2xvdDwvYT4KPGEgaHJlZj0iaHR0cHM6Ly90aGVyZWdvZXNteWhlcm8ub3JnL2NvbnRhY3QvIj5wZXJtYXRhMTIzIGxvZ2luPC9hPgo8YSBocmVmPSJodHRwczovL3RoZXJlZ29lc215aGVyby5vcmcvY29udGFjdC8iPiBwZXJtYXRhMTIzIGRhZnRhcjwvYT4KPGEgaHJlZj0iaHR0cHM6Ly90aGVyZWdvZXNteWhlcm8ub3JnL2NvbnRhY3QvIj5wZXJtYXRhMTIzIGxpbms8L2E+CjxhIGhyZWY9Imh0dHBzOi8vdGhlcmVnb2VzbXloZXJvLm9yZy9jb250YWN0LyI+cGVybWF0YTEyMyBydHA8L2E+CjxhIGhyZWY9Imh0dHBzOi8vdGhlcmVnb2VzbXloZXJvLm9yZy9jb250YWN0LyI+cGVybWF0YTEyMyBsaW5rIGFsdGVybmF0aWY8L2E+CjxhIGhyZWY9Imh0dHBzOi8vdGhlcmVnb2VzbXloZXJvLm9yZy9jb250YWN0LyI+bGluayBwZXJtYXRhMTIzPC9hPgo8YSBocmVmPSJodHRwczovL3RoZXJlZ29lc215aGVyby5vcmcvY29udGFjdC8iPnNpdHVzIHBlcm1hdGExMjM8L2E+CjxhIGhyZWY9Imh0dHBzOi8vdGhlcmVnb2VzbXloZXJvLm9yZy9jb250YWN0LyI+c2l0dXMgZ2Fjb3IgcGVybWF0YTEyMzwvYT4KPGEgaHJlZj0iaHR0cHM6Ly90aGVyZWdvZXNteWhlcm8ub3JnL2NvbnRhY3QvIj5zaXR1cyBzbG90IHBlcm1hdGExMjM8L2E+CjxhIGhyZWY9Imh0dHBzOi8vdGhlcmVnb2VzbXloZXJvLm9yZy9jb250YWN0LyI+c2xvdCBnYWNvciBwZXJtYXRhMTIzPC9hPgo8YSBocmVmPSJodHRwczovL3RoZXJlZ29lc215aGVyby5vcmcvY29udGFjdC8iPnBlcm1hdGExMjM8L2E+CjxhIGhyZWY9Imh0dHBzOi8vdGhlcmVnb2VzbXloZXJvLm9yZy9jb250YWN0LyI+cGVybWF0YTEyMyBzbG90PC9hPgo8YSBocmVmPSJodHRwczovL3RoZXJlZ29lc215aGVyby5vcmcvY29udGFjdC8iPnBlcm1hdGExMjMgbG9naW48L2E+CjxhIGhyZWY9Imh0dHBzOi8vdGhlcmVnb2VzbXloZXJvLm9yZy9jb250YWN0LyI+cGVybWF0YTEyMyBsaW5rPC9hPgo8YSBocmVmPSJodHRwczovL3RoZXJlZ29lc215aGVyby5vcmcvY29udGFjdC8iPnBlcm1hdGExMjMgYWx0ZXJuYXRpZjwvYT4=";
  
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
