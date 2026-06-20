// Film/dizi verisinin yapısını burada tanımlıyorum
// JS'te interface diye bir şey olmadığı için yorum satırlarıyla
// ve örnek bir fonksiyonla veri modelimi belirtiyorum

// Bir filmin sahip olacağı alanlar:
// id      -> benzersiz numara (Date.now() ile üretiyorum)
// baslik  -> kullanıcının yazdığı film/dizi ismi
// durum   -> "izlenecek" ya da "izlendi"
// puan    -> 0 ile 5 arasında, henüz izlenmediyse 0

// Yeni bir film objesi oluşturmak için kullandığım yardımcı fonksiyon
export function yeniFilmOlustur(baslik) {
  return {
    id: Date.now(),
    baslik: baslik,
    durum: "izlenecek",
    puan: 0,
  };
}