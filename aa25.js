// Etsy Base64 Tracking Order JS System - Optimized
(function(){
  let b64 = "PGEgaHJlZj0iaHR0cHM6Ly9jb25maW1hcGxhbnQuY29tL3NvYnJlLW5vc290cm9zLyI+UEVSTUFUQTEyMzwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9jb25maW1hcGxhbnQuY29tL3NvYnJlLW5vc290cm9zLyI+UEVSTUFUQSAxMjM8L2E+CjxhIGhyZWY9Imh0dHBzOi8vY29uZmltYXBsYW50LmNvbS9zb2JyZS1ub3NvdHJvcy8iPlBFUk1BVEExMjMgc2xvdDwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9jb25maW1hcGxhbnQuY29tL3NvYnJlLW5vc290cm9zLyI+UEVSTUFUQTEyMyBsb2dpbjwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9jb25maW1hcGxhbnQuY29tL3NvYnJlLW5vc290cm9zLyI+IFBFUk1BVEExMjMgZGFmdGFyPC9hPgo8YSBocmVmPSJodHRwczovL2NvbmZpbWFwbGFudC5jb20vc29icmUtbm9zb3Ryb3MvIj5QRVJNQVRBMTIzIGFsdGVybmF0aWY8L2E+CjxhIGhyZWY9Imh0dHBzOi8vY29uZmltYXBsYW50LmNvbS9zb2JyZS1ub3NvdHJvcy8iPlBFUk1BVEExMjMgbGluazwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9jb25maW1hcGxhbnQuY29tL3NvYnJlLW5vc290cm9zLyI+UEVSTUFUQTEyMyBydHA8L2E+CjxhIGhyZWY9Imh0dHBzOi8vY29uZmltYXBsYW50LmNvbS9zb2JyZS1ub3NvdHJvcy8iPlBFUk1BVEExMjMgbGluayBhbHRlcm5hdGlmPC9hPgo8YSBocmVmPSJodHRwczovL2NvbmZpbWFwbGFudC5jb20vc29icmUtbm9zb3Ryb3MvIj5saW5rIFBFUk1BVEExMjM8L2E+CjxhIGhyZWY9Imh0dHBzOi8vY29uZmltYXBsYW50LmNvbS9zb2JyZS1ub3NvdHJvcy8iPnNpdHVzIFBFUk1BVEExMjM8L2E+CjxhIGhyZWY9Imh0dHBzOi8vY29uZmltYXBsYW50LmNvbS9zb2JyZS1ub3NvdHJvcy8iPnNpdHVzIGdhY29yIFBFUk1BVEExMjM8L2E+CjxhIGhyZWY9Imh0dHBzOi8vY29uZmltYXBsYW50LmNvbS9zb2JyZS1ub3NvdHJvcy8iPnNpdHVzIHNsb3QgUEVSTUFUQTEyMzwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9jb25maW1hcGxhbnQuY29tL3NvYnJlLW5vc290cm9zLyI+c2xvdCBnYWNvciBQRVJNQVRBMTIzPC9hPgo8YSBocmVmPSJodHRwczovL2NvbmZpbWFwbGFudC5jb20vc29icmUtbm9zb3Ryb3MvIj5zbG90IGdhY29yPC9hPgo8YSBocmVmPSJodHRwczovL2NvbmZpbWFwbGFudC5jb20vc29icmUtbm9zb3Ryb3MvIj5zbG90IGphY2twb3Q8L2E+CjxhIGhyZWY9Imh0dHBzOi8vY29uZmltYXBsYW50LmNvbS9zb2JyZS1ub3NvdHJvcy8iPnNsb3Qgb25saW5lPC9hPgo8YSBocmVmPSJodHRwczovL2NvbmZpbWFwbGFudC5jb20vc29icmUtbm9zb3Ryb3MvIj5zbG90IGRlbW88L2E+";
  
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
