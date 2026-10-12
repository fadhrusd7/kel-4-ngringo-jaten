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

    <section id="demografi" className="demography"><div className="demographyInner"><header className="profileSectionHeading"><h2>Wilayah & Demografi Kependudukan</h2><p>Ringkasan wilayah administratif dan gambaran penduduk Desa Ngringo.</p></header><h3>Distribusi Berdasarkan Jenis Kelamin</h3><div className="genderCards"><article><p>Penduduk Laki-Laki</p><strong>5.188 <small>Jiwa</small></strong><div><span>Persentase Penduduk</span><b>12.026</b></div><i><em /></i></article><article><p>Penduduk Perempuan</p><strong>12.381 <small>Jiwa</small></strong><div><span>Persentase Penduduk</span><b>50,73%</b></div><i><em /></i></article></div><h3 className="matrixTitle">Matriks Indikator Kependudukan</h3><div className="tableWrap" role="region" aria-label="Matriks indikator kependudukan, geser ke samping untuk melihat semua kolom" tabIndex={0}><table><thead><tr><th>No</th><th>Indikator Administratif / Demografi</th><th>Nilai Parameter</th><th>Satuan</th><th>Keterangan</th></tr></thead><tbody>{demographics.map((row) => <tr className={row[0] === "04" ? "populationTotal" : undefined} key={row[0]}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}</tbody></table></div></div></section>

    <section id="layanan" className="healthSection">
      <div className="healthSectionHeading"><h2>LAYANAN PUBLIK &amp; KESEHATAN</h2><p>Informasi fasilitas dan program kesehatan bagi warga Desa Ngringo.</p></div><div className="healthHeading"><h2>Kesehatan dan Kesejahteraan Masyarakat</h2></div>
      <div className="healthInner">
        <div className="healthKpis">
          <article><div className="healthKpiLabel"><span>FASILITAS PKD</span></div><div className="healthKpiValue"><b>1</b><small>Unit</small></div><p>Poliklinik Kesehatan Desa Ngringo aktif beroperasi</p></article>
          <article><div className="healthKpiLabel"><span>APOTEK DESA</span></div><div className="healthKpiValue"><b>2</b><small>Unit</small></div><p>Distribusi farmasi & obat-obatan berizin</p></article>
          <article><div className="healthKpiLabel"><span>POSYANDU AKTIF</span></div><div className="healthKpiValue"><b>22</b><small>Pos</small></div><p>Tersebar di seluruh kebayanan dan RW</p></article>
          <article><div className="healthKpiLabel"><span>KADER KESEHATAN</span></div><div className="healthKpiValue"><b>79</b><small>Orang</small></div><p>61 Posyandu + 18 Posbindu PTM</p></article>
          <article><div className="healthKpiLabel"><span>CAKUPAN KB AKTIF</span></div><div className="healthKpiValue gold"><b>66,13%</b></div><p>1.113 dari 1.683 Pasangan Usia Subur</p></article>
        </div>
        <div className="healthCards">
          <article className="posyanduCard">
            <header><div><h3>Layanan Posyandu & Skrining Komunitas</h3><p>22 Pos Terpadu & 79 Kader Terlatih</p></div><span className="healthTag">Total 22 Pos</span></header>
            <div className="posyanduGrid">
              <div><small>POSYANDU BALITA</small><strong>7 Pos</strong><p>Pemantauan gizi & imunisasi</p></div>
              <div><small>POSYANDU LANSIA</small><strong>7 Pos</strong><p>Cek tensi, gula & senam lansia</p></div>
              <div><small>POSYANDU REMAJA</small><strong>4 Pos</strong><p>Konseling gizi & reproduksi</p></div>
              <div><small>POSBINDU PTM</small><strong>4 Pos</strong><p>Skrining penyakit tidak menular</p></div>
            </div>
            <div className="staffSummary"><strong>Distribusi Tenaga Kader Desa Ngringo:</strong><span>61 Kader Posyandu</span><span>18 Kader Posbindu PTM</span></div>
          </article>
          <article className="kbCard">
            <header><div><h3>Program Keluarga Berencana</h3><p>Keluarga Berkualitas & Sejahtera</p></div><span className="healthTag goldTag">66,13% Capaian</span></header>
            <div className="kbOverview"><div><small>PASANGAN USIA SUBUR (PUS)</small><strong>1.683</strong></div><div><small>AKSEPTOR KB AKTIF</small><strong>1.113</strong></div></div>
            <div className="kbProgress"><span style={{ width: "66.13%" }} /></div>
            <div className="kbProgressLabels"><span>0 Aseptor</span><strong>66,13% Pasangan Terdaftar</strong><span>Target 100%</span></div>
            <div className="kbMethod"><strong>Metode Pelayanan Kontrasepsi:</strong><p>Pelayanan suntik, pil KB, IUD, implan, dan MOW difasilitasi melalui kemitraan bidan desa, PKD, serta rujukan Puskesmas Jaten I secara teratur tiap pekan.</p></div>
            <small className="kbSource">Sumber: Data KB BKKBN & Register Kader Desa Ngringo 2024</small>
          </article>
        </div>
      </div>
    </section>
    <SiteFooter />
  </main>;
}
