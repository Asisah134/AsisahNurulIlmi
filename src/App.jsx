import React from 'react';
import './App.css';
import FotoProfil from './assets/PhotoProfile-AsisahNurulIlmi.jpg';
function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Portofolio Asisah Nurul Ilmi</h1>
        <nav>
          <a href="#tentang">Tentang</a>
          <a href="#hobi">Hobi</a>
          <a href="#profil">Profil</a>
          <a href="#kontak">Kontak</a>
        </nav>
      </header>

      <main>
        <section id="home" className="centered-section">
          <img 
              src={FotoProfil} 
              alt="Foto Asisah" 
              className="foto-profil" 
          />
          <h2>Asisah Nurul Ilmi</h2>
          <p>Mahasiswa Informatika - Universitas Satya Terra Bhinneka</p>
        </section>

        <section id="tentang">
          <h3>Tentang Saya</h3>
          <p>
            Saya adalah mahasiswa jurusan Informatika yang memiliki minat dalam pengembangan web dan UI/UX design. 
            Saya menyukai tantangan baru, suka belajar, dan terus berusaha meningkatkan keterampilan saya di dunia teknologi.
            Saya tidak terlalu mengerti untuk paham semuanya tapi yang penting mau berusaha dulu kan. 
          </p>
        </section>

        <section id="hobi">
          <h3>Hobi</h3>
          <ul>
            <li>Mendesain antarmuka (UI/UX)</li>
            <li>Membaca buku</li>
            <li>Memasak</li>
            <li>Rebahan</li>
          </ul>
        </section>

        <section id="profil">
          <h3>Profil Singkat</h3>
          <p>
            Nama: Asisah Nurul Ilmi<br />
            Universitas: Satya Terra Bhinneka<br />
            Jurusan: Informatika<br />
            Semester: 2<br />
            Lokasi: Indonesia
          </p>
        </section>

        <section id="kontak">
          <h3>Kontak</h3>
          <p>
            Email: asisah.ilmi@email.com<br />
            Instagram: @asisah.ilmi<br />
            
          </p>
        </section>
      </main>

      <footer>
        &copy; 2025 Asisah Nurul Ilmi. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
