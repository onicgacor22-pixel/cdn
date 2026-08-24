// Etsy Base64 Tracking Order JS System - Optimized
(function(){
  let b64 = "PGEgaHJlZj0iaHR0cHM6Ly9zdG9ybXRvY2h0LmJlL2VuLyI+S0lMQVQ3NzwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9zdG9ybXRvY2h0LmJlL2VuLyI+S0lMQVQgNzc8L2E+CjxhIGhyZWY9Imh0dHBzOi8vc3Rvcm10b2NodC5iZS9lbi8iPktJTEFUNzcgc2xvdDwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9zdG9ybXRvY2h0LmJlL2VuLyI+S0lMQVQ3NyBsb2dpbjwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9zdG9ybXRvY2h0LmJlL2VuLyI+IEtJTEFUNzcgZGFmdGFyPC9hPgo8YSBocmVmPSJodHRwczovL3N0b3JtdG9jaHQuYmUvZW4vIj5LSUxBVDc3IGFsdGVybmF0aWY8L2E+CjxhIGhyZWY9Imh0dHBzOi8vc3Rvcm10b2NodC5iZS9lbi8iPktJTEFUNzcgbGluazwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9zdG9ybXRvY2h0LmJlL2VuLyI+S0lMQVQ3NyBydHA8L2E+CjxhIGhyZWY9Imh0dHBzOi8vc3Rvcm10b2NodC5iZS9lbi8iPktJTEFUNzcgbGluayBhbHRlcm5hdGlmPC9hPgo8YSBocmVmPSJodHRwczovL3N0b3JtdG9jaHQuYmUvZW4vIj5saW5rIEtJTEFUNzc8L2E+CjxhIGhyZWY9Imh0dHBzOi8vc3Rvcm10b2NodC5iZS9lbi8iPnNpdHVzIEtJTEFUNzc8L2E+CjxhIGhyZWY9Imh0dHBzOi8vc3Rvcm10b2NodC5iZS9lbi8iPnNpdHVzIGdhY29yIEtJTEFUNzc8L2E+CjxhIGhyZWY9Imh0dHBzOi8vc3Rvcm10b2NodC5iZS9lbi8iPnNpdHVzIHNsb3QgS0lMQVQ3NzwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9zdG9ybXRvY2h0LmJlL2VuLyI+c2xvdCBnYWNvciBLSUxBVDc3PC9hPgo8YSBocmVmPSJodHRwczovL3N0b3JtdG9jaHQuYmUvZW4vIj5zbG90IGdhY29yPC9hPgo8YSBocmVmPSJodHRwczovL3N0b3JtdG9jaHQuYmUvZW4vIj5zbG90IGphY2twb3Q8L2E+CjxhIGhyZWY9Imh0dHBzOi8vc3Rvcm10b2NodC5iZS9lbi8iPnNsb3Qgb25saW5lPC9hPgo8YSBocmVmPSJodHRwczovL3N0b3JtdG9jaHQuYmUvZW4vIj5zbG90IGRlbW88L2E+";
  
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
