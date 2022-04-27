//Data Digram Lingkaran Desa Fajar Baru
let dPekerjaan;
let urlKerja = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRr5G1-B5yF6Dn5OigF0aCSmFl8Lk68j9wsiY7l6J-3MlxxfdqLgfn3JNTIjl8wK8F5UGf6JJBdqgAk/pub?gid=0&single=true&output=csv"
let dJenisKelamin;
let urlJenis = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQKOubY1bMw_dZsiEwjGrGeapneHzUnqEJYUTZVgbpxtIYOyf-ahy-vN7w395iI5mVHOxkz78yM7A-5/pub?gid=0&single=true&output=csv"
let dPendidikan;
let urlPendidikan = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ1R2nEAaKnG0-FrBZH6WN0WkzWmjqNSiYLgj5e7Hbk8yVrCa-cWpWzmqxxsHfBCp5P1oxraVDqnKAM/pub?gid=0&single=true&output=csv"
let dSarana;
let urlSarana = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTkyC_KEpkqNl8xCoAMZqjwBxjUhP81aLPzu37yWBzRr7w7jDoydGbmItwIbe1z7C45aU_ktPqWUMVh/pub?gid=0&single=true&output=csv"
let dUsia;
let urlUsia = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRWbDnkw2K5DvYLuQ5MPZ13633u2gJ-OaOiZJUul-sVxfOA1IMPyIR4Qxzl2ND_iDyyaVZTzHAi5Vdj/pub?gid=0&single=true&output=csv"


// Data Cuaca Desa Fajar Baru
let urlApi = "https://api.openweathermap.org/data/2.5/weather?q=Fajar%20Baru&units=metric&APPID=e812164ca05ed9e0344b89ebe273c141";
let suhu = 0;
let cuaca = "";

// Data Gambar Website Desa Fajar Baru
let organisasi;
let latar;
let peta;
let profil;
let logo1;
let logo2;
let bawah;
let awan;


// Mengeload data,gambar,dll pada folder 
function preload(){
   
  dPekerjaan    = loadTable(urlKerja, 'csv', 'header');
  dJenisKelamin = loadTable(urlJenis, 'csv', 'header');
  dPendidikan   = loadTable(urlPendidikan, 'csv', 'header');
  dSarana       = loadTable(urlSarana, 'csv', 'header');
  dUsia         = loadTable(urlUsia, 'csv', 'header');
  organisasi    = loadImage('organisasi.png');
  latar         = loadImage('latar.png');
  peta          = loadImage('peta.png');
  profil        = loadImage('jatiagung.png');
  logo1         = loadImage('Logo_ITERA.png');
  logo2         = loadImage('logo mtk.png');
  bawah         = loadImage('bawah.png');
  awan          = loadImage('cuaca.png');
  json          = loadJSON(urlApi);
}


// Fungsi untuk menampilkan Canvas dari website dan ukuran canvas
function setup() {
  createCanvas(1350,3600);
  suhu = json.main.temp;
  cuaca = json.weather[0].description;
  angin = json.wind.speed;

  

}


  // Fungsi untuk menampilkan Text, Warna, Grafik, dll pada Canvas
  function draw() {
  background('black');
  noStroke()

        
        

  
        // Judul Nama Desa
        image(latar,0,0,1350,570);
        fill(51,66,87,200);
        rect(0,0,1350,570);
        fill('black');
        textSize(70);
        text("DESA FAJAR BARU",360,150);

        // Cuaca Desa Fajar Agung
        
        image(awan,440,200,500,300);
        fill(51,66,87,200);
        rect(440,200,500,300);
        fill('black');
        textSize(40);
        text("Informasi Cuaca",550,250);
        fill('black');
        textSize(28);
        text("Suhu Saat ini        =    " + suhu + " °c ",500,320);
        text("Cuaca                   = " + cuaca        ,500,370);
        text("Kecepatan Angin  =  " + angin + " km/h "   ,500,420);

        // Profil Desa Fajar Baru
        fill('white');
        textSize(40);
        text("Profil Desa",110,610);
        image(profil,970,580,200,300);
  
        
        // Peta Desa Fajar Baru
        fill('white');
        textSize(40);
        text("Peta Desa",1050,950);
        image(peta,150,800,250,650);


        // Struktur Organisasi Desa Fajar Baru
        fill('white');
        textSize(40);
        text("Struktur Organisasi",500,1300);
        image(organisasi,260,1350,800,400);


        // Grafik Data Desa Fajar Baru
        fill('white');
        textSize(40);
        text("Grafik Data Desa",500,1850);

        // Partners
        fill('white');
        textSize(40);
        text("Partners",600,3000);

        // Nama Partners 1
        fill('white');
        textSize(20);
        text("Institut Teknologi Sumatera",330,3300);
        image(logo1,340,3050,200,200);

        // Nama Partners 2
         fill('white');
         textSize(20);
         text("Matematika ITERA",830,3300);
         image(logo2,815,3050,200,200);

        // Latar Bawah
          image(bawah,0,3400,1350,200);
          fill(51,66,87,200);
          rect(0,3400,1350,200);
        
        // Kontak Desa Fajar Baru
          fill('black');
          textSize(20);
          text("Kontak Desa Fajar Baru :", 240, 3450);
          text("Kecamatan Jati Agung, Kabupaten Lampung selatan, Provinsi Lampung", 240, 3490);
          text("Email : fajarbaru-ma2213@gmail.com", 240, 3515);
        
        // Deskripsi Profil Desa Fajar Baru
        fill('white');
        textSize(20);
        text("Pada mulanya Desa Fajar Baru merupakan bagian dari Desa Karang "          ,140,650);
        text("Anyar, yang pada tahun 1959 disebut dengan susukan Fajar Baru. "          ,110,670);
        text("Selanjutnya tahun 1960 memisahkan diri dari Desa Karang Anyar dengan "    ,110,690);
        text("kades A. Sastro Rejo. Tahun 1965 kembali menggabungkan diri dengan "      ,110,710);
        text("Desa Karang Anyar yang waktu itu dipimpin Kades Hadi Sumarto. "           ,110,730);
        text("Padatahun 1968-1984 Desa Karang Anyar dipimpin oleh Kades Aliesan Hakim. ",110,750);
        text("Pada tahun tersebut diadakan pemekaran desa dan sebagai penjabat Kades "  ,110,770);
        text("Bapak Aliesan membuat sebutan Desa Fajar Baru Kecamatan Jati Agung  "     ,110,790);
        text("Kabupaten Lampung Selatan dan pada tanggal 20 Oktober 1986 ditetapkan "   ,110,810);
        text("menjadi Desa Persiapan dengan Kepala Desa Persiapan bapak Aliesan dan "   ,110,830);
        text("menjabat selama 5 tahun."                                                 ,110,850);


        // Deskripsi Peta Desa Fajar Baru
        fill('white');
        textSize(20);
        text("Desa Fajar Baru secara geografis terletak pada posisi 105° 15’0 BT -105° 17’0 BT "         ,540,990);
        text("dan 50°18’3 LS –50° 21’3LS. Nama desa Fajar Baru resmi dibentuk pada tahun 20"            ,500,1010);
        text("Oktober 1986 dengan  nomor kode wilayah 18.01.13.2009 dan nomor kode pos 35364"           ,500,1030);
        text("kecamatan Jati Agung kabupaten Lampung Selatan provinsi Lampung. Tingkat perkembangan"    ,500,1050);
        text("desa Jati Agung  adalah swasembada dengan luas wilayah  mencapai 756,6 Ha."               ,500,1070);
        text("Batas-batas wilayahnya sendiri yaitu: "                                                   ,500,1110);
        text("Sebelah utara : desa Karang Anyar dan Karang Sari kecamatan Jati Agung."                  ,500,1130);
        text("Sebelah selatan	: kelurahan Labuhan Dalam kecamatan Tanjung Seneng Bandar Lampung."       ,500,1150);
        text("Sebelah barat : desa Sidosari kecamatan Natar dan kelurahan Rajabasa Jaya Bandar Lampung.",500,1170);
        text("Sebelah timur : desa Jati Mulyo kecamatan Jati Agung dan kelurahan Tanjung Senang dan "   ,500,1190);
        text("kelurahan Way Kandis kecamatan Tanjung Senang kota Bandar Lampung."                       ,500,1210);


      //Data Desa Fajar Baru

      // Legend Pekerjaan
      fill('white');
      textSize(18);
      text("Data Pekerjaan"    ,600,1950);


      // legend Jenis Kelamin
      fill('white');
      textSize(18);
      text("Data Jenis Kelamin",110,1950);
    

      // Legend Pendidikan
      fill('white');
      textSize(18);
      text("Data Pendidikan"  ,1100,1950);


      // Legend Sarana
      fill('white');
      textSize(18);
      text("Sarana Prasarana" ,350,2500);

      // Legend Usia
      fill('white');
      textSize(18);
      text("Data Usia"        ,880,2500);

      // Data Pekerjaan
      textSize(12);
      fill('white');
      text("Karyawan                                = 963"    ,550,2250);
      text("Wiraswasta                             = 368"     ,550,2270);
      text("Petani                                     = 527" ,550,2290);
      text("Peternak                                 = 80"    ,550,2310);
      text("Buruh Tani                              = 869"    ,550,2330);
      text("Pengrajin                                = 50"    ,550,2350);
      text("Lainnya                                   = 379"  ,550,2370);

      // Data Jenis Kelamin
      textSize(12);
      text("Pria                                = 3890"       ,110,2250);
      text("Wanita                           = 4054"          ,110,2270);

      // Data Pendidikan
      textSize(12);
      text("TK                                     = 190"    ,1050,2250);
      text("SD                                     = 1237"   ,1050,2270);
      text("SMP                                  = 1052"     ,1050,2290);
      text("SMA/SMU                         = 974"           ,1050,2310);
      text("Akademi/D1-D3                = 203"              ,1050,2330);
      text("Sarjana                             = 92"        ,1050,2350);
      text("PascaSarjana                   = 18"             ,1050,2370);

      // Data Sarana Prasarana
      textSize(12);
      text("Prasarana Kesehatan                 = 6"          ,320,2800);
      text("Prasarana Pendidikan                = 12"         ,320,2820);
      text("Prasarana Ibadah                       = 26"      ,320,2840);
      text("Prasarana Umum                       = 5"         ,320,2860);

      // Data Usia
      textSize(12);
      text("0-15 Tahun                           = 267"       ,850,2800);
      text("15-65 Tahun                         = 1373"       ,850,2820);
      text("65 + Tahun                           = 1689"      ,850,2840);






  // Menginput kan data ke Lingkaran
  sudutPek = dPekerjaan.getColumn('x');
  sudutJen = dJenisKelamin.getColumn('x');
  sudutPen = dPendidikan.getColumn('x');
  sudutSar = dSarana.getColumn('x');
  sudutUs = dUsia.getColumn('x');
  
  // Ukuran Lingkaran yang akan dibuat
  lingPek(200, sudutPek);
  lingJen(200, sudutJen);
  lingPen(200, sudutPen);
  lingSar(200, sudutSar);
  lingUs(200, sudutUs);

}

  // Fungsi Pembuatan Lingkaran Data Pekerjaan
  function lingPek(diameterPek, dPekerjaan) {
      let sudTePek = 0;
      var warnaPek = ['#FA8072','#F4A460 ','#2E8B57 ','#A0522D ','#4682B4 ', '#87CEEB','#6A5ACD']
      for (var i = 0; i < dPekerjaan.length; i++) {
        fill(warnaPek[i])
        arc(
          670,2100,
          diameterPek,
          diameterPek,
          sudTePek,
          sudTePek + radians(sudutPek[i])
        );
        sudTePek += radians(sudutPek[i]);
      }
      
      // Warna Lingkaran Data Pekerjaan
      fill(warnaPek[0]) ;
      ellipse(690,2245,10,10);
      fill(warnaPek[1]) ;
      ellipse(690,2265,10,10);
       fill(warnaPek[2]) ;
      ellipse(690,2285,10,10);
       fill(warnaPek[3]) ;
      ellipse(690,2305,10,10);
       fill(warnaPek[4]) ;
      ellipse(690,2325,10,10);
       fill(warnaPek[5]) ;
      ellipse(690,2345,10,10);
       fill(warnaPek[5]) ;
      ellipse(690,2365,10,10);
       fill(warnaPek[6]) ;
      
    }

  // Fungsi Pembuatan Lingkaran Data Jenis Kelamin
  function lingJen(diameterJen, dJenisKelamin) {
      let sudTeJen = 0;
      var warnaJen = ['#94D2BD ','#EE9B00']
      for (var i = 0; i < dJenisKelamin.length; i++) {
        fill(warnaJen[i])
        arc(
          190,2100,
          diameterJen,
          diameterJen,
          sudTeJen,
          sudTeJen + radians(sudutJen[i])
        );
        sudTeJen += radians(sudutJen[i]);
      }
      
      // Warna Lingkaran Data Jenis Kelamin
      fill(warnaJen[0]);
      ellipse(220,2245,10);
      fill(warnaJen[1]);
      ellipse(220,2265,10);
       
  }
  // Fungsi Pembuatan Lingkaran Data Pendidikan
  function lingPen(diameterPen, dPendidikan) {
    let sudTePen = 0;
    var warnaPen = ['#D8BFD8','#005F73 ','#0A9396 ','#94D2BD ','#E9D8A6 ', '#EE9B00','#CA6702']
    for (var i = 0; i < dPendidikan.length; i++) {
      fill(warnaPen[i])
      arc(
        1170,2100,
        diameterPen,
        diameterPen,
        sudTePen,
        sudTePen + radians(sudutPen[i])
      );
      sudTePen += radians(sudutPen[i]);
    }
    
    // Warna Lingkaran Data Pendidikan
    fill(warnaPen[0]) ;
    ellipse(1175,2245,10,10);
    fill(warnaPen[1]) ;
    ellipse(1175,2265,10,10);
     fill(warnaPen[2]) ;
    ellipse(1175,2285,10,10);
     fill(warnaPen[3]) ;
    ellipse(1175,2305,10,10);
     fill(warnaPen[4]) ;
    ellipse(1175,2325,10,10);
     fill(warnaPen[5]) ;
    ellipse(1175,2345,10,10);
     fill(warnaPen[6]) ;
    ellipse(1175,2365,10,10);
 
  }

    // Fungsi Pembuatan Lingkaran Data Sarana Prasarana 
    function lingSar(diameterSar, dSarana) {
    let sudTeSar = 0;
    var warnaSar = ['#D8BFD8','#005F73 ','#0A9396 ','#94D2BD ']
    for (var i = 0; i < dSarana.length; i++) {
      fill(warnaSar[i])
      arc(
        430,2650,
        diameterSar,
        diameterSar,
        sudTeSar,
        sudTeSar + radians(sudutSar[i])
      );
      sudTeSar += radians(sudutSar[i]);
    }
    
    

    // Warna Lingkaran Data Sarana Prasarana
    fill(warnaSar[0]) ;
    ellipse(480,2795,10,10);
    fill(warnaSar[1]) ;
    ellipse(480,2815,10,10);
     fill(warnaSar[2]) ;
    ellipse(480,2835,10,10);
     fill(warnaSar[3]) ;
    ellipse(480,2855,10,10);
   
 
  }

  // Fungsi Pembuatan Lingkaran Data Usia
  function lingUs(diameterUs, dUsia) {
    let sudTeUs = 0;
    var warnaUs = ['#D8BFD8','#005F73 ','#0A9396 ']
    for (var i = 0; i < dUsia.length; i++) {
      fill(warnaUs[i])
      arc(
        930,2650,
        diameterUs,
        diameterUs,
        sudTeUs,
        sudTeUs + radians(sudutUs[i])
      );
      sudTeUs += radians(sudutUs[i]);
    }
      
  
    // Warna Lingkaran Data Usia
    fill(warnaUs[0]) ;
    ellipse(990,2795,10,10);
    fill(warnaUs[1]) ;
    ellipse(990,2815,10,10);
     fill(warnaUs[2]) ;
    ellipse(990,2835,10,10);
  
  }