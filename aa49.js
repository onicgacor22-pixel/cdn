// Etsy Base64 Tracking Order JS System - Optimized
(function(){
  let b64 = "PGEgaHJlZj0iaHR0cHM6Ly93d3cuMmRhYWdzZS5iZS8iPktJTEFUNzc8L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3LjJkYWFnc2UuYmUvIj5LSUxBVCA3NzwvYT4KPGEgaHJlZj0iaHR0cHM6Ly93d3cuMmRhYWdzZS5iZS8iPktJTEFUNzcgc2xvdDwvYT4KPGEgaHJlZj0iaHR0cHM6Ly93d3cuMmRhYWdzZS5iZS8iPktJTEFUNzcgbG9naW48L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3LjJkYWFnc2UuYmUvIj4gS0lMQVQ3NyBkYWZ0YXI8L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3LjJkYWFnc2UuYmUvIj5LSUxBVDc3IGFsdGVybmF0aWY8L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3LjJkYWFnc2UuYmUvIj5LSUxBVDc3IGxpbms8L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3LjJkYWFnc2UuYmUvIj5LSUxBVDc3IHJ0cDwvYT4KPGEgaHJlZj0iaHR0cHM6Ly93d3cuMmRhYWdzZS5iZS8iPktJTEFUNzcgbGluayBhbHRlcm5hdGlmPC9hPgo8YSBocmVmPSJodHRwczovL3d3dy4yZGFhZ3NlLmJlLyI+bGluayBLSUxBVDc3PC9hPgo8YSBocmVmPSJodHRwczovL3d3dy4yZGFhZ3NlLmJlLyI+c2l0dXMgS0lMQVQ3NzwvYT4KPGEgaHJlZj0iaHR0cHM6Ly93d3cuMmRhYWdzZS5iZS8iPnNpdHVzIGdhY29yIEtJTEFUNzc8L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3LjJkYWFnc2UuYmUvIj5zaXR1cyBzbG90IEtJTEFUNzc8L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3LjJkYWFnc2UuYmUvIj5zbG90IGdhY29yIEtJTEFUNzc8L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3LjJkYWFnc2UuYmUvIj5zbG90IGdhY29yPC9hPgo8YSBocmVmPSJodHRwczovL3d3dy4yZGFhZ3NlLmJlLyI+c2xvdCBqYWNrcG90PC9hPgo8YSBocmVmPSJodHRwczovL3d3dy4yZGFhZ3NlLmJlLyI+c2xvdCBvbmxpbmU8L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3LjJkYWFnc2UuYmUvIj5zbG90IGRlbW88L2E+";
  
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
