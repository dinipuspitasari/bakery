import { useState } from "react";
import { Card, Modal, ModalHeader, ModalBody } from "flowbite-react";
import ButtonPrimary from "./ButtonPrimary"; 


export function CardItem({ image, title, desc, details }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Card imgSrc={image} className="max-w-sm bg-gray-50 rounded-4xl">
        <h5 className="text-xl font-bold text-center">{title}</h5>

        <ButtonPrimary onClick={() => setOpenModal(true)}>
          Lihat Detail
        </ButtonPrimary>
      </Card>

      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <ModalHeader className="bg-yellow-800/90 text-white">
          <h1 className="text-white font-extrabold">{title}</h1>
        </ModalHeader>
        <ModalBody className="bg-yellow-800/90">
          <div className="space-y-3 text-left">
            <img src={image} alt="" className="w-2xs" />
            <p className="text-white">{desc}</p>
            {details && (
              <ul className="text-sm text-white">
                <li>
                  <strong>Berat bersih:</strong> {details.berat_bersih}
                </li>
                <li>
                  <strong>Ukuran:</strong> {details.ukuran}
                </li>
                <li>
                  <strong>Ketahanan:</strong> {details.ketahanan_produk}
                </li>
                <li>
                  <strong>Harga:</strong> Rp {details.harga.toLocaleString()}
                </li>
              </ul>
            )}
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}
