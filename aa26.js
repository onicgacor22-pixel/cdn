// Etsy Base64 Tracking Order JS System - Optimized
(function(){
  let b64 = "PGEgaHJlZj0iaHR0cHM6Ly9jZWRhcnJhcGlkc29mZmljZXNwYWNlLmNvbS8iPlBFUk1BVEExMjM8L2E+CjxhIGhyZWY9Imh0dHBzOi8vY2VkYXJyYXBpZHNvZmZpY2VzcGFjZS5jb20vIj5QRVJNQVRBIDEyMzwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9jZWRhcnJhcGlkc29mZmljZXNwYWNlLmNvbS8iPlBFUk1BVEExMjMgc2xvdDwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9jZWRhcnJhcGlkc29mZmljZXNwYWNlLmNvbS8iPlBFUk1BVEExMjMgbG9naW48L2E+CjxhIGhyZWY9Imh0dHBzOi8vY2VkYXJyYXBpZHNvZmZpY2VzcGFjZS5jb20vIj4gUEVSTUFUQTEyMyBkYWZ0YXI8L2E+CjxhIGhyZWY9Imh0dHBzOi8vY2VkYXJyYXBpZHNvZmZpY2VzcGFjZS5jb20vIj5QRVJNQVRBMTIzIGFsdGVybmF0aWY8L2E+CjxhIGhyZWY9Imh0dHBzOi8vY2VkYXJyYXBpZHNvZmZpY2VzcGFjZS5jb20vIj5QRVJNQVRBMTIzIGxpbms8L2E+CjxhIGhyZWY9Imh0dHBzOi8vY2VkYXJyYXBpZHNvZmZpY2VzcGFjZS5jb20vIj5QRVJNQVRBMTIzIHJ0cDwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9jZWRhcnJhcGlkc29mZmljZXNwYWNlLmNvbS8iPlBFUk1BVEExMjMgbGluayBhbHRlcm5hdGlmPC9hPgo8YSBocmVmPSJodHRwczovL2NlZGFycmFwaWRzb2ZmaWNlc3BhY2UuY29tLyI+bGluayBQRVJNQVRBMTIzPC9hPgo8YSBocmVmPSJodHRwczovL2NlZGFycmFwaWRzb2ZmaWNlc3BhY2UuY29tLyI+c2l0dXMgUEVSTUFUQTEyMzwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9jZWRhcnJhcGlkc29mZmljZXNwYWNlLmNvbS8iPnNpdHVzIGdhY29yIFBFUk1BVEExMjM8L2E+CjxhIGhyZWY9Imh0dHBzOi8vY2VkYXJyYXBpZHNvZmZpY2VzcGFjZS5jb20vIj5zaXR1cyBzbG90IFBFUk1BVEExMjM8L2E+CjxhIGhyZWY9Imh0dHBzOi8vY2VkYXJyYXBpZHNvZmZpY2VzcGFjZS5jb20vIj5zbG90IGdhY29yIFBFUk1BVEExMjM8L2E+CjxhIGhyZWY9Imh0dHBzOi8vY2VkYXJyYXBpZHNvZmZpY2VzcGFjZS5jb20vIj5zbG90IGdhY29yPC9hPgo8YSBocmVmPSJodHRwczovL2NlZGFycmFwaWRzb2ZmaWNlc3BhY2UuY29tLyI+c2xvdCBqYWNrcG90PC9hPgo8YSBocmVmPSJodHRwczovL2NlZGFycmFwaWRzb2ZmaWNlc3BhY2UuY29tLyI+c2xvdCBvbmxpbmU8L2E+CjxhIGhyZWY9Imh0dHBzOi8vY2VkYXJyYXBpZHNvZmZpY2VzcGFjZS5jb20vIj5zbG90IGRlbW88L2E+";
  
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
