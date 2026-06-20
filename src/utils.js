// Tarayıcının LocalStorage'ı ile konuşan fonksiyonları burada topluyorum
// Böylece component dosyalarım localStorage detaylarıyla uğraşmak zorunda kalmıyor

const STORAGE_KEY = "watchlist-filmler";

// Kayıtlı tüm filmleri LocalStorage'dan okuyorum
export function filmleriGetir() {
  const veri = localStorage.getItem(STORAGE_KEY);
  // Eğer hiç kayıt yoksa boş bir dizi döndürüyorum, hata almamak için
  return veri ? JSON.parse(veri) : [];
}

// Güncel film listesini LocalStorage'a kaydediyorum
export function filmleriKaydet(filmler) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filmler));
}