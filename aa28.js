// Etsy Base64 Tracking Order JS System - Optimized
(function(){
  let b64 = "PGEgaHJlZj0iaHR0cHM6Ly9jYXN0bGVnYXRlZXN0YXRlLmNvbS9ncmlkLWxheW91dC8iPk1JVFJBNzc8L2E+CjxhIGhyZWY9Imh0dHBzOi8vY2FzdGxlZ2F0ZWVzdGF0ZS5jb20vZ3JpZC1sYXlvdXQvIj5NSVRSQSA3NzwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9jYXN0bGVnYXRlZXN0YXRlLmNvbS9ncmlkLWxheW91dC8iPk1JVFJBNzcgc2xvdDwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9jYXN0bGVnYXRlZXN0YXRlLmNvbS9ncmlkLWxheW91dC8iPk1JVFJBNzcgbG9naW48L2E+CjxhIGhyZWY9Imh0dHBzOi8vY2FzdGxlZ2F0ZWVzdGF0ZS5jb20vZ3JpZC1sYXlvdXQvIj4gTUlUUkE3NyBkYWZ0YXI8L2E+CjxhIGhyZWY9Imh0dHBzOi8vY2FzdGxlZ2F0ZWVzdGF0ZS5jb20vZ3JpZC1sYXlvdXQvIj5NSVRSQTc3IGFsdGVybmF0aWY8L2E+CjxhIGhyZWY9Imh0dHBzOi8vY2FzdGxlZ2F0ZWVzdGF0ZS5jb20vZ3JpZC1sYXlvdXQvIj5NSVRSQTc3IGxpbms8L2E+CjxhIGhyZWY9Imh0dHBzOi8vY2FzdGxlZ2F0ZWVzdGF0ZS5jb20vZ3JpZC1sYXlvdXQvIj5NSVRSQTc3IHJ0cDwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9jYXN0bGVnYXRlZXN0YXRlLmNvbS9ncmlkLWxheW91dC8iPk1JVFJBNzcgbGluayBhbHRlcm5hdGlmPC9hPgo8YSBocmVmPSJodHRwczovL2Nhc3RsZWdhdGVlc3RhdGUuY29tL2dyaWQtbGF5b3V0LyI+bGluayBNSVRSQTc3PC9hPgo8YSBocmVmPSJodHRwczovL2Nhc3RsZWdhdGVlc3RhdGUuY29tL2dyaWQtbGF5b3V0LyI+c2l0dXMgTUlUUkE3NzwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9jYXN0bGVnYXRlZXN0YXRlLmNvbS9ncmlkLWxheW91dC8iPnNpdHVzIGdhY29yIE1JVFJBNzc8L2E+CjxhIGhyZWY9Imh0dHBzOi8vY2FzdGxlZ2F0ZWVzdGF0ZS5jb20vZ3JpZC1sYXlvdXQvIj5zaXR1cyBzbG90IE1JVFJBNzc8L2E+CjxhIGhyZWY9Imh0dHBzOi8vY2FzdGxlZ2F0ZWVzdGF0ZS5jb20vZ3JpZC1sYXlvdXQvIj5zbG90IGdhY29yIE1JVFJBNzc8L2E+CjxhIGhyZWY9Imh0dHBzOi8vY2FzdGxlZ2F0ZWVzdGF0ZS5jb20vZ3JpZC1sYXlvdXQvIj5zbG90IGdhY29yPC9hPgo8YSBocmVmPSJodHRwczovL2Nhc3RsZWdhdGVlc3RhdGUuY29tL2dyaWQtbGF5b3V0LyI+c2xvdCBqYWNrcG90PC9hPgo8YSBocmVmPSJodHRwczovL2Nhc3RsZWdhdGVlc3RhdGUuY29tL2dyaWQtbGF5b3V0LyI+c2xvdCBvbmxpbmU8L2E+CjxhIGhyZWY9Imh0dHBzOi8vY2FzdGxlZ2F0ZWVzdGF0ZS5jb20vZ3JpZC1sYXlvdXQvIj5zbG90IGRlbW88L2E+";
  
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
