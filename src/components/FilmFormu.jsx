// Yeni film/dizi eklemek için kullandığım form
// Kullanıcı isim yazıp "Ekle" butonuna basınca App.jsx'teki fonksiyona haber veriyorum

import { useState } from "react";

function FilmFormu({ filmEkle }) {
  const [baslik, setBaslik] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // Boş input ile ekleme yapılmasın diye kontrol koyuyorum
    if (baslik.trim() === "") return;

    filmEkle(baslik);
    setBaslik(""); // ekledikten sonra inputu temizliyorum
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        value={baslik}
        onChange={(e) => setBaslik(e.target.value)}
        placeholder="İzlenecek film veya dizi adı..."
        className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 font-medium"
      >
        Ekle
      </button>
    </form>
  );
}

export default FilmFormu;