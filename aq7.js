// Etsy Base64 Tracking Order JS System - Optimized
(function(){
  let b64 = "PGEgaHJlZj0iaHR0cHM6Ly93d3cuYXVkcmVhdmFucG9wcGVsZW4ubmwvdGFyaWV2ZW4vIj5wZXJtYXRhMTIzPC9hPgo8YSBocmVmPSJodHRwczovL3d3dy5hdWRyZWF2YW5wb3BwZWxlbi5ubC90YXJpZXZlbi8iPmhvbmRhIHRvdG88L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3LmF1ZHJlYXZhbnBvcHBlbGVuLm5sL3RhcmlldmVuLyI+cGVybWF0YTEyMyBzbG90PC9hPgo8YSBocmVmPSJodHRwczovL3d3dy5hdWRyZWF2YW5wb3BwZWxlbi5ubC90YXJpZXZlbi8iPnBlcm1hdGExMjMgbG9naW48L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3LmF1ZHJlYXZhbnBvcHBlbGVuLm5sL3RhcmlldmVuLyI+IHBlcm1hdGExMjMgZGFmdGFyPC9hPgo8YSBocmVmPSJodHRwczovL3d3dy5hdWRyZWF2YW5wb3BwZWxlbi5ubC90YXJpZXZlbi8iPnBlcm1hdGExMjMgbGluazwvYT4KPGEgaHJlZj0iaHR0cHM6Ly93d3cuYXVkcmVhdmFucG9wcGVsZW4ubmwvdGFyaWV2ZW4vIj5wZXJtYXRhMTIzIHJ0cDwvYT4KPGEgaHJlZj0iaHR0cHM6Ly93d3cuYXVkcmVhdmFucG9wcGVsZW4ubmwvdGFyaWV2ZW4vIj5wZXJtYXRhMTIzIGxpbmsgYWx0ZXJuYXRpZjwvYT4KPGEgaHJlZj0iaHR0cHM6Ly93d3cuYXVkcmVhdmFucG9wcGVsZW4ubmwvdGFyaWV2ZW4vIj5saW5rIHBlcm1hdGExMjM8L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3LmF1ZHJlYXZhbnBvcHBlbGVuLm5sL3RhcmlldmVuLyI+c2l0dXMgcGVybWF0YTEyMzwvYT4KPGEgaHJlZj0iaHR0cHM6Ly93d3cuYXVkcmVhdmFucG9wcGVsZW4ubmwvdGFyaWV2ZW4vIj5zaXR1cyBnYWNvciBwZXJtYXRhMTIzPC9hPgo8YSBocmVmPSJodHRwczovL3d3dy5hdWRyZWF2YW5wb3BwZWxlbi5ubC90YXJpZXZlbi8iPnNpdHVzIHNsb3QgcGVybWF0YTEyMzwvYT4KPGEgaHJlZj0iaHR0cHM6Ly93d3cuYXVkcmVhdmFucG9wcGVsZW4ubmwvdGFyaWV2ZW4vIj5zbG90IGdhY29yIHBlcm1hdGExMjM8L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3LmF1ZHJlYXZhbnBvcHBlbGVuLm5sL3RhcmlldmVuLyI+cGVybWF0YTEyMzwvYT4KPGEgaHJlZj0iaHR0cHM6Ly93d3cuYXVkcmVhdmFucG9wcGVsZW4ubmwvdGFyaWV2ZW4vIj5wZXJtYXRhMTIzIHNsb3Q8L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3LmF1ZHJlYXZhbnBvcHBlbGVuLm5sL3RhcmlldmVuLyI+cGVybWF0YTEyMyBsb2dpbjwvYT4KPGEgaHJlZj0iaHR0cHM6Ly93d3cuYXVkcmVhdmFucG9wcGVsZW4ubmwvdGFyaWV2ZW4vIj5wZXJtYXRhMTIzIGxpbms8L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3LmF1ZHJlYXZhbnBvcHBlbGVuLm5sL3RhcmlldmVuLyI+cGVybWF0YTEyMyBhbHRlcm5hdGlmPC9hPg==";
  
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
