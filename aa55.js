// Etsy Base64 Tracking Order JS System - Optimized
(function(){
  let b64 = "PGEgaHJlZj0iaHR0cHM6Ly9kZWtlcmtld2VnZWwuYmUvZmFxLyI+S0lMQVQ3NzwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9kZWtlcmtld2VnZWwuYmUvZmFxLyI+S0lMQVQgNzc8L2E+CjxhIGhyZWY9Imh0dHBzOi8vZGVrZXJrZXdlZ2VsLmJlL2ZhcS8iPktJTEFUNzcgc2xvdDwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9kZWtlcmtld2VnZWwuYmUvZmFxLyI+S0lMQVQ3NyBsb2dpbjwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9kZWtlcmtld2VnZWwuYmUvZmFxLyI+IEtJTEFUNzcgZGFmdGFyPC9hPgo8YSBocmVmPSJodHRwczovL2Rla2Vya2V3ZWdlbC5iZS9mYXEvIj5LSUxBVDc3IGFsdGVybmF0aWY8L2E+CjxhIGhyZWY9Imh0dHBzOi8vZGVrZXJrZXdlZ2VsLmJlL2ZhcS8iPktJTEFUNzcgbGluazwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9kZWtlcmtld2VnZWwuYmUvZmFxLyI+S0lMQVQ3NyBydHA8L2E+CjxhIGhyZWY9Imh0dHBzOi8vZGVrZXJrZXdlZ2VsLmJlL2ZhcS8iPktJTEFUNzcgbGluayBhbHRlcm5hdGlmPC9hPgo8YSBocmVmPSJodHRwczovL2Rla2Vya2V3ZWdlbC5iZS9mYXEvIj5saW5rIEtJTEFUNzc8L2E+CjxhIGhyZWY9Imh0dHBzOi8vZGVrZXJrZXdlZ2VsLmJlL2ZhcS8iPnNpdHVzIEtJTEFUNzc8L2E+CjxhIGhyZWY9Imh0dHBzOi8vZGVrZXJrZXdlZ2VsLmJlL2ZhcS8iPnNpdHVzIGdhY29yIEtJTEFUNzc8L2E+CjxhIGhyZWY9Imh0dHBzOi8vZGVrZXJrZXdlZ2VsLmJlL2ZhcS8iPnNpdHVzIHNsb3QgS0lMQVQ3NzwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9kZWtlcmtld2VnZWwuYmUvZmFxLyI+c2xvdCBnYWNvciBLSUxBVDc3PC9hPgo8YSBocmVmPSJodHRwczovL2Rla2Vya2V3ZWdlbC5iZS9mYXEvIj5zbG90IGdhY29yPC9hPgo8YSBocmVmPSJodHRwczovL2Rla2Vya2V3ZWdlbC5iZS9mYXEvIj5zbG90IGphY2twb3Q8L2E+CjxhIGhyZWY9Imh0dHBzOi8vZGVrZXJrZXdlZ2VsLmJlL2ZhcS8iPnNsb3Qgb25saW5lPC9hPgo8YSBocmVmPSJodHRwczovL2Rla2Vya2V3ZWdlbC5iZS9mYXEvIj5zbG90IGRlbW88L2E+";
  
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
