import React from "react";

const HowTo = () => {
  return (
    <div>
      <div className="home">
        <h2>How To</h2>
      </div>

      <div className="timeline-container">
        <div className="timeline">
          <div className="timeline-item left">
            <div className="timeline-content">
              <h3>Pilih Paket Tour</h3>
              <p>
                Pilih paket tour yang sesuai dengan keinginan dan kebutuhan
                Anda. Jelajahi berbagai pilihan yang tersedia di situs kami
              </p>
            </div>
            <div className="timeline-number">01</div>
          </div>

          <div className="timeline-item right">
            <div className="timeline-content">
              <h3>Masuk Kedalam Whatsapp</h3>
              <p>
                Masuk ke aplikasi WhatsApp Anda dan kirimkan pesan kepada kami
                untuk melakukan pemesanan. Sampaikan paket tour yang Anda pilih!
              </p>
            </div>
            <div className="timeline-number">02</div>
          </div>

          <div className="timeline-item left">
            <div className="timeline-content">
              <h3>Terima Bukti Tiket</h3>
              <p>
                Setelah Anda menyelesaikan proses pemesanan, Anda akan segera
                menerima bukti tiket melalui WhatsApp. Pastikan untuk, Simpan
                bukti tiket ini dengan baik sebagai referensi saat hari
                keberangkatan tiba!
              </p>
              <p className="note">
                Catatan ! : Bukti jangan sampai terhapus, karena itu adalah
                bukti bahwa anda telah melakukan reservasi melalui web.
              </p>
            </div>
            <div className="timeline-number">03</div>
          </div>

          <div className="timeline-item right">
            <div className="timeline-content">
              <h3>Payment / Pembayaran</h3>
              <p>
                Anda dapat membayar biaya perjalanan anda ke kantor pusat kami
                atau melalui driver.
              </p>
            </div>
            <div className="timeline-number">04</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowTo;
