//Data Digram Pie
let dataPekerjaan;
let urlKerja = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRr5G1-B5yF6Dn5OigF0aCSmFl8Lk68j9wsiY7l6J-3MlxxfdqLgfn3JNTIjl8wK8F5UGf6JJBdqgAk/pub?gid=0&single=true&output=csv"
let dataJenisKelamin;
let urlJenis = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQKOubY1bMw_dZsiEwjGrGeapneHzUnqEJYUTZVgbpxtIYOyf-ahy-vN7w395iI5mVHOxkz78yM7A-5/pub?gid=0&single=true&output=csv"
let dataPendidikan;
let urlPendidikan = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ1R2nEAaKnG0-FrBZH6WN0WkzWmjqNSiYLgj5e7Hbk8yVrCa-cWpWzmqxxsHfBCp5P1oxraVDqnKAM/pub?gid=0&single=true&output=csv"
let dataSarana;
let urlSarana = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTkyC_KEpkqNl8xCoAMZqjwBxjUhP81aLPzu37yWBzRr7w7jDoydGbmItwIbe1z7C45aU_ktPqWUMVh/pub?gid=0&single=true&output=csv"
let dataUsia;
let urlUsia = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRWbDnkw2K5DvYLuQ5MPZ13633u2gJ-OaOiZJUul-sVxfOA1IMPyIR4Qxzl2ND_iDyyaVZTzHAi5Vdj/pub?gid=0&single=true&output=csv"


let RobotoMonoSemiBold;


function preload(){
   
    RobotoMonoSemiBold = loadFont('RobotoMono-Bold.ttf')
    dataPekerjaan = loadTable(urlKerja, 'csv', 'header');
    dataJenisKelamin = loadTable(urlJenis, 'csv', 'header');
    dataPendidikan = loadTable(urlPendidikan, 'csv', 'header');
    dataSarana = loadTable(urlSarana, 'csv', 'header');
    dataUsia = loadTable(urlUsia, 'csv', 'header');
}


function setup() {
    createCanvas(1290,1000);
 
    
  }
  
  
  
  function draw() {
    background('white');
    noStroke()
    textSize(30)
        textFont(RobotoMonoSemiBold)
        fill('black')
        text("DASBOARD DESA FAJAR BARU",500,25)


 

  //Input sudut setiap data
    anglespek = dataPekerjaan.getColumn('x')
    pieChartpek(200, anglespek);
    anglesjen = dataJenisKelamin.getColumn('x')
    pieChartjen(200, anglesjen);
    anglespen = dataPendidikan.getColumn('x')
    pieChartpen(200, anglespen);
    angleslul = dataSarana.getColumn('x')
    pieChartlul(200, angleslul);
    anglesus = dataUsia.getColumn('x')
    pieChartus(200, anglesus);
  
  }

    function pieChartpek(diameterpek, dataPekerjaan) {
        let lastAnglepek = 0;
        var piecolorpek = ['#FA8072','#F4A460 ','#2E8B57 ','#A0522D ','#4682B4 ', '#87CEEB','#6A5ACD']
        for (var i = 0; i < dataPekerjaan.length; i++) {
          fill(piecolorpek[i])
          arc(
            710,200,
            diameterpek,
            diameterpek,
            lastAnglepek,
            lastAnglepek + radians(anglespek[i])
          );
          lastAnglepek += radians(anglespek[i]);
        }
        //Data Pekerjaan
        fill('white')
        //rect(545,2953,350,450)
        textSize(18)
        textFont(RobotoMonoSemiBold)
        fill('black')
        text("Data Pekerjaan",630,70)
        
        textSize(12)
        textFont(RobotoMonoSemiBold)
        text("Karyawan                    = 963",600,330)
        text("Wiraswasta                  = 368",600,350)
        text("Petani                      = 527",600,370)
        text("Peternak                    = 80",600,390)
        text("Buruh Tani                  = 869",600,410)
        text("Pengrajin                   = 50",600,430)
        text("Lainnya                     = 379",600,450)
        

        //Warna
        fill(piecolorpek[0]) ;
        ellipse(780,325,10,10);
        fill(piecolorpek[1]) ;
        ellipse(780,345,10,10);
         fill(piecolorpek[2]) ;
        ellipse(780,365,10,10);
         fill(piecolorpek[3]) ;
        ellipse(780,385,10,10);
         fill(piecolorpek[4]) ;
        ellipse(780,405,10,10);
         fill(piecolorpek[5]) ;
        ellipse(780,425,10,10);
         fill(piecolorpek[5]) ;
        ellipse(780,445,10,10);
         fill(piecolorpek[6]) ;
        
      }
      
      function pieChartjen(diameterjen, dataJenisKelamin) {
        let lastAnglejen = 0;
        var piecolorjen = ['#94D2BD ','#EE9B00']
        for (var i = 0; i < dataJenisKelamin.length; i++) {
          fill(piecolorjen[i])
          arc(
            260,200,
            diameterjen,
            diameterjen,
            lastAnglejen,
            lastAnglejen + radians(anglesjen[i])
          );
          lastAnglejen += radians(anglesjen[i]);
        }
        //Data Jenis Kelamin
        fill('white')
        //rect(545,2953,350,450)
        textSize(18)
        textFont(RobotoMonoSemiBold)
        fill('black')
        text("Data Jenis Kelamin",160,70)
        
        textSize(12)
        textFont(RobotoMonoSemiBold)
        text("Pria                = 3890",170,330)
        text("Wanita              = 4054",170,350)
        

        //penanda warna
        fill(piecolorjen[0]) ;
        ellipse(300,325,10);
        fill(piecolorjen[1]) ;
        ellipse(300,345,10);
         
    }

    function pieChartpen(diameterpen, dataPendidikan) {
      let lastAnglepen = 0;
      var piecolorpen = ['#D8BFD8','#005F73 ','#0A9396 ','#94D2BD ','#E9D8A6 ', '#EE9B00','#CA6702']
      for (var i = 0; i < dataPendidikan.length; i++) {
        fill(piecolorpen[i])
        arc(
          1190,200,
          diameterpen,
          diameterpen,
          lastAnglepen,
          lastAnglepen + radians(anglespen[i])
        );
        lastAnglepen += radians(anglespen[i]);
      }
      //Data Pendidikan
      fill('white')
      //rect(545,2953,350,450)
      textSize(18)
      textFont(RobotoMonoSemiBold)
      fill('black')
      text("Data Pendidikan",1100,70)
      
      textSize(12)
      textFont(RobotoMonoSemiBold)
      text("TK                         = 190",1050,330)
      text("SD                         = 1237",1050,350)
      text("SMP                        = 1052",1050,370)
      text("SMA/SMU                    = 974",1050,390)
      text("Akademi/D1-D3              = 203",1050,410)
      text("Sarjana                    = 92",1050,430)
      text("PascaSarjana               = 18",1050,450)
      

      //penanda warna
      fill(piecolorpen[0]) ;
      ellipse(1225,325,10,10);
      fill(piecolorpen[1]) ;
      ellipse(1225,345,10,10);
       fill(piecolorpen[2]) ;
      ellipse(1225,365,10,10);
       fill(piecolorpen[3]) ;
      ellipse(1225,385,10,10);
       fill(piecolorpen[4]) ;
      ellipse(1225,405,10,10);
       fill(piecolorpen[5]) ;
      ellipse(1225,425,10,10);
       fill(piecolorpen[6]) ;
      ellipse(1225,445,10,10);
   
    }

    //chart sarana prasarana
    function pieChartlul(diameterlul, dataSarana) {
      let lastAnglelul = 0;
      var piecolorlul = ['#D8BFD8','#005F73 ','#0A9396 ','#94D2BD ']
      for (var i = 0; i < dataSarana.length; i++) {
        fill(piecolorlul[i])
        arc(
          480,700,
          diameterlul,
          diameterlul,
          lastAnglelul,
          lastAnglelul + radians(angleslul[i])
        );
        lastAnglelul += radians(angleslul[i]);
      }
      //Data Sarana
      fill('white')
      //rect(545,2953,350,450)
      textSize(18)
      textFont(RobotoMonoSemiBold)
      fill('black')
      text("Sarana Prasarana",400,580)
      
      textSize(12)
      textFont(RobotoMonoSemiBold)
      text("Prasarana Kesehatan        = 6",380,850)
      text("Prasarana Pendidikan       = 12",380,870)
      text("Prasarana Ibadah           = 26",380,890)
      text("Prasarana Umum             = 5",380,910)
      
      

      //penanda warna
      fill(piecolorlul[0]) ;
      ellipse(555,845,10,10);
      fill(piecolorlul[1]) ;
      ellipse(555,865,10,10);
       fill(piecolorlul[2]) ;
      ellipse(555,885,10,10);
       fill(piecolorlul[3]) ;
      ellipse(555,905,10,10);
     
   
    }

    //Chart Usia
    function pieChartus(diameterus, dataUsia) {
      let lastAngleus = 0;
      var piecolorus = ['#D8BFD8','#005F73 ','#0A9396 ']
      for (var i = 0; i < dataUsia.length; i++) {
        fill(piecolorus[i])
        arc(
          880,700,
          diameterus,
          diameterus,
          lastAngleus,
          lastAngleus + radians(anglesus[i])
        );
        lastAngleus += radians(anglesus[i]);
      }
      //Data Usia
      fill('white')
      //rect(545,2953,350,450)
      textSize(18)
      textFont(RobotoMonoSemiBold)
      fill('black')
      text("Data Usia",830,580)
      
      textSize(12)
      textFont(RobotoMonoSemiBold)
      text("0-15 Tahun               = 267",780,850)
      text("15-65 Tahun              = 1373",780,870)
      text("65 + Tahun               = 1689",780,890)
      
      
      //penanda warna
      fill(piecolorus[0]) ;
      ellipse(950,845,10,10);
      fill(piecolorus[1]) ;
      ellipse(950,865,10,10);
       fill(piecolorus[2]) ;
      ellipse(950,885,10,10);
    
    }