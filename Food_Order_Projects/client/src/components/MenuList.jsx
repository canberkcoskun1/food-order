import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

function MenuList({ menu }) {
  /*Modal için UseStateler*/
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [ozellik, setOzellik] = useState("medium");
  const [miktar, setMiktar] = useState(1);

  // Miktar kısmına adetHandler eklenecek.
  const adetHandler = (e) => {
    setMiktar(e.target.value);
  };

  return (
    <div>
      <div
        className="card m-auto my-3 shadow-lg p-3 bg-body-tertiary rounded"
        style={{ width: "20rem" }}
      >
        {/* Resmin üstüne tıklayınca detay gözüksün. */}
        <img
          src={menu.img}
          alt=""
          className="card-img-top img-fluid"
          onClick={handleShow}
        />
        <div className="card-body">
          <h5 className="card-title">{menu.ad}</h5>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h5>Özellik</h5>
            {/* onChange eventi eklendi */}
            <select
              name=""
              id=""
              className="form-select mb-3"
              onChange={(e) => setOzellik(e.target.value)}
            >
              {/*setOzellik mapleme işlemi  yapıldı. */}
              {menu.ozellik.map((size, index) => (
                <option key={index} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-6">
            <h5>Miktar</h5>
            {/* Miktara onChange eventi eklenip yukarıda tanımlandı. Burada kaç adet seçeceğimiz isteniyor bu yüzden bir mapleme işlemi ve onun içinde array oluşturmamız gerekiyor. */}
            <select
              name=""
              id=""
              className="form-select mb-3"
              onChange={adetHandler}
            >
              {/* Miktarı mapleme yapıyoruz. Spread operator kullanılacak 11'e kadar yazılacak 11 dahil olmuyor.
               0-11 arası foreach döngüsü döndürüyor.*/}
              {[...Array(10).keys()].map((x) => (
                <option value={x + 1}>{x + 1}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-md-12 mt-3">
          {/* 0'index dememizin sebebi array döndüğü için. useStatede özelliğe göre seçtik. setlediğimiz özelliği yazarsak değeri verecektir. Her birinin fiyatı farklı. setlemiş olduğumuz özelliği çağırıyoruz. [ozellik]-> Hangi string ifade varsa onun value'sini verir */}
          <h6 className="text-danger">
            Fiyat: {menu.fiyat[0][ozellik] * miktar}
          </h6>
        </div>
        <div className="div">
          <a href="#" className="btn btn-outline-danger w-100">
            SEPETE EKLE
          </a>
        </div>
      </div>

      {/* Modal Başlangıcı */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{menu.ad}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img src={menu.img} style={{ height: "250px" }} />
          <h4>Kategori: {menu.kategori}</h4>
          <p>{menu.desc}</p>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-warning w-100" onClick={handleClose}>
            KAPAT
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default MenuList;
