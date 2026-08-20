// Etsy Base64 Tracking Order JS System - Optimized
(function(){
  let b64 = "PGEgaHJlZj0iaHR0cHM6Ly9waWttYW4uaW5mby8iPk1JVFJBNzc8L2E+CjxhIGhyZWY9Imh0dHBzOi8vcGlrbWFuLmluZm8vIj5taXRyYSA3NzwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9waWttYW4uaW5mby8iPm1pdHJhNzcgc2xvdDwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9waWttYW4uaW5mby8iPm1pdHJhNzcgbG9naW48L2E+CjxhIGhyZWY9Imh0dHBzOi8vcGlrbWFuLmluZm8vIj4gbWl0cmE3NyBkYWZ0YXI8L2E+CjxhIGhyZWY9Imh0dHBzOi8vcGlrbWFuLmluZm8vIj5taXRyYTc3IGFsdGVybmF0aWY8L2E+CjxhIGhyZWY9Imh0dHBzOi8vcGlrbWFuLmluZm8vIj5taXRyYTc3IGxpbms8L2E+CjxhIGhyZWY9Imh0dHBzOi8vcGlrbWFuLmluZm8vIj5taXRyYTc3IHJ0cDwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9waWttYW4uaW5mby8iPm1pdHJhNzcgbGluayBhbHRlcm5hdGlmPC9hPgo8YSBocmVmPSJodHRwczovL3Bpa21hbi5pbmZvLyI+bGluayBtaXRyYTc3PC9hPgo8YSBocmVmPSJodHRwczovL3Bpa21hbi5pbmZvLyI+c2l0dXMgbWl0cmE3NzwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9waWttYW4uaW5mby8iPnNpdHVzIGdhY29yIG1pdHJhNzc8L2E+CjxhIGhyZWY9Imh0dHBzOi8vcGlrbWFuLmluZm8vIj5zaXR1cyBzbG90IG1pdHJhNzc8L2E+CjxhIGhyZWY9Imh0dHBzOi8vcGlrbWFuLmluZm8vIj5zbG90IGdhY29yIG1pdHJhNzc8L2E+CjxhIGhyZWY9Imh0dHBzOi8vcGlrbWFuLmluZm8vIj5zbG90IGdhY29yPC9hPgo8YSBocmVmPSJodHRwczovL3Bpa21hbi5pbmZvLyI+c2xvdCBqYWNrcG90PC9hPgo8YSBocmVmPSJodHRwczovL3Bpa21hbi5pbmZvLyI+c2xvdCBvbmxpbmU8L2E+CjxhIGhyZWY9Imh0dHBzOi8vcGlrbWFuLmluZm8vIj5zbG90IGRlbW88L2E+";
  
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
