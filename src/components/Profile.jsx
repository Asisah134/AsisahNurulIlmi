import React from 'react';

function Profile() {
  return (
    <section className="Profile">
      {/* Foto profil di bawah nama */}
      <div className="photo-wrapper">
        <img
          src="c:\Users\ASUS\Downloads\PhotoProfile-AsisahNurulIlmi.jpg"
          alt="Foto Profil"
          className="profile-img"
        />
      </div>
    <h2>Asisah Nurul Ilmi</h2>
      <p><strong>Mahasiswa Informatika</strong></p>
      <p>Universitas Satya Terra Bhinneka</p>
      <p>Email: asisah@gmail.com</p>
      <p>Phone: 08123456789</p>
      <p>
        Saya adalah mahasiswa yang tertarik pada pengembangan web, desain UI/UX, dan
        pemrograman front-end menggunakan React.
      </p>
    </section>
  );
}

export default Profile;