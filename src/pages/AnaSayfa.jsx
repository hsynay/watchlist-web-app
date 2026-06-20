// Uygulamanın tüm mantığını burada topluyorum
// Ekleme, listeleme, güncelleme, silme işlemlerinin hepsi bu sayfada yönetiliyor

import { useState, useEffect, useRef } from "react";
import FilmFormu from "../components/FilmFormu";
import FilmListesi from "../components/FilmListesi";
import { yeniFilmOlustur } from "../interfaces/film";
import { filmleriGetir, filmleriKaydet } from "../utils";

function AnaSayfa() {
  const [filmler, setFilmler] = useState([]);
  const [filtre, setFiltre] = useState("hepsi"); // hangi sekmenin aktif olduğunu tutuyorum
  const ilkYukleme = useRef(true); // ilk render'ı takip etmek için kullanıyorum

  // Sayfa ilk açıldığında LocalStorage'dan eski verileri çekiyorum
  useEffect(() => {
    setFilmler(filmleriGetir());
  }, []);

  // filmler dizisi her değiştiğinde LocalStorage'a yazıyorum
  // ama ilk render'da (henüz veri okunmadan) yazmasını engelliyorum
  useEffect(() => {
    if (ilkYukleme.current) {
      ilkYukleme.current = false;
      return;
    }
    filmleriKaydet(filmler);
  }, [filmler]);

  // EKLEME işlemi
  function filmEkle(baslik) {
    const yeniFilm = yeniFilmOlustur(baslik);
    setFilmler([...filmler, yeniFilm]);
  }

  // GÜNCELLEME işlemi - izlenecek/izlendi durumunu değiştiriyorum
  function durumDegistir(id) {
    setFilmler(
      filmler.map((film) =>
        film.id === id
          ? {
              ...film,
              durum: film.durum === "izlendi" ? "izlenecek" : "izlendi",
            }
          : film
      )
    );
  }

  // GÜNCELLEME işlemi - puan veriyorum
  function puanVer(id, puan) {
    setFilmler(
      filmler.map((film) => (film.id === id ? { ...film, puan } : film))
    );
  }

  // SİLME işlemi
  function filmSil(id) {
    setFilmler(filmler.filter((film) => film.id !== id));
  }

  // Aktif filtreye göre ekranda hangi filmlerin görüneceğini belirliyorum
  const gosterilecekFilmler = filmler.filter((film) => {
    if (filtre === "hepsi") return true;
    return film.durum === filtre;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          🎬 Film & Dizi İzleme Listem
        </h1>

        <FilmFormu filmEkle={filmEkle} />

        {/* Listeyi izlenecek/izlendi durumuna göre süzmek için sekmeler koydum */}
        <div className="flex gap-2 mb-4 justify-center">
          <button
            onClick={() => setFiltre("hepsi")}
            className={`px-4 py-1 rounded-full text-sm font-medium ${
              filtre === "hepsi" ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            Tümü
          </button>
          <button
            onClick={() => setFiltre("izlenecek")}
            className={`px-4 py-1 rounded-full text-sm font-medium ${
              filtre === "izlenecek" ? "bg-yellow-500 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            İzlenecek
          </button>
          <button
            onClick={() => setFiltre("izlendi")}
            className={`px-4 py-1 rounded-full text-sm font-medium ${
              filtre === "izlendi" ? "bg-green-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            İzlendi
          </button>
        </div>

        <FilmListesi
          filmler={gosterilecekFilmler}
          durumDegistir={durumDegistir}
          puanVer={puanVer}
          filmSil={filmSil}
        />
      </div>
    </div>
  );
}

export default AnaSayfa;