import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter, SiteHeader } from "../../components/site-chrome";

export const metadata: Metadata = { title: "Profil Desa Ngringo" };

const missions = [
  "Meningkatkan Penyelenggaraan Pemerintah Desa Yang Efektif, Efisien dan Transparan.",
  "Meningkatkan Pembangunan Fisik Secara Merata dan Berkeadilan.",
  "Meningkatkan Pemberdayaan Potensi Desa dan UMKM Serta BUMDesa.",
  "Meningkatkan Pembinaan Kelembagaan Kemasyarakatan Desa.",
  "Meningkatkan Kualitas Pembangunan Sosial Budaya, Seni dan Ekonomi Masyarakat.",
  "Meningkatkan Partisipasi Masyarakat Dalam Penyelenggaraan Pemerintah Desa, Pemberdayaan, Pembinaan dan Pembangunan Desa.",
];

const demographics = [
  ["01", "Jumlah Dusun", "8", "Dusun", "1. Jurug\n2. Karangrejo\n3. Palur\n4. Plosokerep\n5. Benowo\n6. Gunungwijil\n7. Banaran\n8. Silamat"],
  ["02", "Rukun Warga (RW)", "29", "RW", "Tersebar aktif di seluruh dusun"],
  ["03", "Rukun Tetangga (RT)", "178", "RT", "Unit koordinasi warga paling hulu"],
  ["04", "Jumlah Penduduk Total", "24.407", "Jiwa", "Data mutasi terintegrasi semester II 2024"],
  ["05", "Penduduk Laki-laki", "12.026 ", "Jiwa", "49,55% dari total populasi desa"],
  ["06", "Penduduk Perempuan", "12.381", "Jiwa", "50,45% (+355 jiwa di atas jumlah laki-laki)"],
  ["07", "Kepadatan Penduduk", "5.807", "jiwa/km\u00B2", "Persebaran hunian asri & fasilitas umum"],
];

const staff = [
  ["EKO MARWANTO, S.Sos.", "SEKRETARIS DESA", "Koordinator Administrasi Desa"],
  ["WAHID MUSTOFA", "KAUR TATA USAHA & UMUM", "Surat, Aset & Arsip Desa"],
  ["BUDI SANTOSO", "KAUR KEUANGAN", "Bendahara & Pengelolaan APBDes"],
  ["NGATMIN", "KAUR PERENCANAAN", "RPJMDes & RKPDes"],
  ["MOH NOER FATONI", "KASI PEMERINTAHAN", "Pembinaan ketertiban, batas desa & data kependudukan"],
  ["SUWARTO", "KASI KESEJAHTERAAN", "Pembangunan infrastruktur, bansos & pembinaan warga"],
  ["DIDIK NUGROHO", "KASI PELAYANAN", "Layanan surat menyurat, nikah, perizinan & keagamaan"],
];



export default function ProfilPage() {
  return <main className="figmaProfile">
    <SiteHeader page="profile" />

    <section className="historyHero"><Image src="/figma/profile-history.png" alt="Pemandangan Desa Ngringo" fill priority sizes="100vw" /><div className="historyShade" /><div className="historyCard"><h1>Sejarah Desa Ngringo</h1><p>Cikal bakal terbentuknya Desa Ngringo ini dimulai di suatu dusun yang bernama Dusun Ngringo. Kata Ngringo sendiri berasal dari kata Tri dan Ngo. Tri berasal dari tiga orang sesepuh atau nenek moyang yang membangun Desa Ngringo sedangkan Ngo berasal dari kata ngobrol atau berbincang. Jadi, Ngringo ini maknanya adalah tiga orang sesepuh yang ngobrol untuk membangun suatu desa bernama Desa Ngringo.
Salah satu tokoh besar yang menjadi cikal bakal terbentuknya Desa Ngringo ini berasal dari Dusun Ngringo yang bernama Eyang Jegang Wonolapan yang merupakan keturunan Syekh atau Walisongo. Selain itu, dua tokoh besar lain yang juga menjadi sesepuh di Desa Ngringo ini berasal dari Dusun Karangrejo dan Dusun Plosokerep. Tiga orang sesepuh ini lah yang juga melatarbelakangi adanya tradisi bersih desa di Dusun Ngringo, Dusun Karangrejo dan Dusun Plosokerep.</p></div></section>

    <section className="vmSection"><header className="profileSectionHeading"><h2>Visi</h2></header><div className="winePanel quote">&ldquo;Terwujudnya Desa Ngringo yang Cerdas, Maju, Bermatabat, dan Sejahtera.&rdquo;</div><header className="profileSectionHeading"><h2>Misi</h2></header><div className="winePanel missionPanel"><ol>{missions.map((mission) => <li key={mission}>{mission}</li>)}</ol></div></section>

    <section className="profileBlock"><header className="profileSectionHeading"><h2 className="ribbonTitle">Peta Administrasi Desa Ngringo</h2></header><div className="mapFrame"><Image src="/figma/administrative-map.png" alt="Peta administrasi Desa Ngringo" width={1755} height={1240} /></div></section>

    <section className="profileBlock orgBlock"><header className="profileSectionHeading"><h2 className="ribbonTitle">Struktur Organisasi</h2></header><div className="orgCanvas" role="region" aria-label="Diagram struktur organisasi Desa Ngringo" tabIndex={0}><Image src="/strutur-organisasi.png" alt="Bagan struktur organisasi Desa Ngringo" width={876} height={626} /><p className="orgScrollHint">Geser diagram ke samping untuk melihat seluruh struktur.</p></div></section>

    <section id="demografi" className="demography"><div className="demographyInner"><header className="profileSectionHeading"><h2>Wilayah & Demografi Kependudukan</h2><p>Ringkasan wilayah administratif dan gambaran penduduk Desa Ngringo.</p></header><h3>Distribusi Berdasarkan Jenis Kelamin</h3><div className="genderCards"><article><p>Penduduk Laki-Laki</p><strong>12.026 <small>Jiwa</small></strong><div><span>Persentase Penduduk</span><b>49,27%</b></div><i><em /></i></article><article><p>Penduduk Perempuan</p><strong>12.381 <small>Jiwa</small></strong><div><span>Persentase Penduduk</span><b>50,73%</b></div><i><em /></i></article></div><h3 className="matrixTitle">Matriks Indikator Kependudukan</h3><div className="tableWrap" role="region" aria-label="Matriks indikator kependudukan, geser ke samping untuk melihat semua kolom" tabIndex={0}><table><thead><tr><th>No</th><th>Indikator Administratif / Demografi</th><th>Nilai Parameter</th><th>Satuan</th><th>Keterangan</th></tr></thead><tbody>{demographics.map((row) => <tr className={row[0] === "04" ? "populationTotal" : undefined} key={row[0]}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}</tbody></table></div></div></section>

    <section id="layanan" className="healthSection">
      <div className="healthSectionHeading"><h2>LAYANAN PUBLIK &amp; KESEHATAN</h2><p>Ringkasan fasilitas dan program kesehatan serta data sosial Desa Ngringo tahun 2024.</p></div><div className="healthHeading"><h2>Kesehatan dan Kesejahteraan Masyarakat</h2></div>
      <div className="healthInner">
        <div className="healthKpis">
          <article><div className="healthKpiLabel"><span>FASILITAS KESEHATAN</span></div><div className="healthKpiValue"><b>12</b><small>Unit</small></div><p>Rumah sakit, klinik, puskesmas, pustu, PKD, dan apotek</p></article>
          <article><div className="healthKpiLabel"><span>POSYANDU &amp; POSBINDU</span></div><div className="healthKpiValue"><b>52</b><small>Pos</small></div><p>28 balita, 18 lansia, 3 remaja, dan 3 Posbindu PTM</p></article>
          <article><div className="healthKpiLabel"><span>KADER KESEHATAN</span></div><div className="healthKpiValue"><b>287</b><small>Orang</small></div><p>272 kader Posyandu dan 15 kader Posbindu PTM</p></article>
          <article><div className="healthKpiLabel"><span>PASANGAN USIA SUBUR</span></div><div className="healthKpiValue"><b>3.669</b><small>PUS</small></div><p>Data program keluarga berencana tahun 2024</p></article>
          <article><div className="healthKpiLabel"><span>AKSEPTOR KB</span></div><div className="healthKpiValue"><b>1.947</b><small>Orang</small></div><p>Akseptor KB tercatat pada data tahun 2024</p></article>
        </div>
        <div className="healthCards">
          <article className="posyanduCard">
            <header><div><h3>Fasilitas Kesehatan</h3><p>Jenis sarana pelayanan kesehatan yang tercatat di wilayah Ngringo.</p></div><span className="healthTag">Total 12 Unit</span></header>
            <div className="posyanduGrid">
              <div><small>RUMAH SAKIT</small><strong>1 Unit</strong></div>
              <div><small>KLINIK PRATAMA</small><strong>1 Unit</strong></div>
              <div><small>PUSKESMAS NONRAWAT INAP</small><strong>1 Unit</strong></div>
              <div><small>PUSKESMAS PEMBANTU</small><strong>2 Unit</strong></div>
              <div><small>POLIKLINIK KESEHATAN DESA</small><strong>1 PKD</strong></div>
              <div><small>APOTEK</small><strong>6 Unit</strong></div>
            </div>
            <div className="staffSummary"><strong>Jumlah fasilitas dijumlahkan dari sarana yang tercatat pada data 2024.</strong></div>
          </article>
          <article className="kbCard">
            <header><div><h3>Posyandu & Keluarga Berencana</h3><p>Layanan kesehatan berbasis masyarakat dan data program KB tahun 2024.</p></div><span className="healthTag goldTag">1.947 Akseptor KB</span></header>
            <div className="posyanduGrid">
              <div><small>POSYANDU BALITA</small><strong>28 Posyandu</strong></div>
              <div><small>POSYANDU LANSIA</small><strong>18 Posyandu</strong></div>
              <div><small>POSYANDU REMAJA</small><strong>3 Posyandu</strong></div>
              <div><small>POSBINDU PTM</small><strong>3 Posbindu</strong></div>
            </div>
            <div className="staffSummary"><strong>Tenaga kader:</strong><span>272 kader Posyandu</span><span>15 kader Posbindu PTM</span></div>
            <div className="kbOverview"><div><small>PASANGAN USIA SUBUR (PUS)</small><strong>3.669</strong></div><div><small>AKSEPTOR KB</small><strong>1.947</strong></div></div>
            <small className="kbSource">Sumber: Data kesehatan dan KB Desa Ngringo 2024</small>
          </article>
          <article className="kbCard">
            <header><div><h3>Kondisi Sosial</h3><p>Data penyandang disabilitas yang tercatat di Ngringo pada tahun 2024.</p></div></header>
            <div className="posyanduGrid">
              <div><small>TUNA RUNGU</small><strong>13 Orang</strong></div>
              <div><small>TUNA GRAHITA</small><strong>8 Orang</strong></div>
              <div><small>TUNA DAKSA</small><strong>1 Orang</strong></div>
              <div><small>TUNA LARAS</small><strong>1 Orang</strong></div>
            </div>
            <p>Jumlah tuna netra dan cacat ganda tidak tercatat pada tabel sumber.</p>
            <small className="kbSource">Sumber: Data sosial Desa Ngringo 2024</small>
          </article>
        </div>
      </div>
    </section>
    <SiteFooter />
  </main>;
}
