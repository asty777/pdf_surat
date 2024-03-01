import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

import logo from '../assets/logoWayKanan1.png'
import watermark from '../assets/logoWayKanan2.png'


const PdfGenerator = () => {
  const generatePDF = () => {
    const pdfDoc = new jsPDF();

    const centerX = pdfDoc.internal.pageSize.getWidth() / 2;
    const centerY = pdfDoc.internal.pageSize.getHeight() / 2;
  
    const watermarkWidth = 100; 
    const watermarkHeight = 100; 
    const watermarkX = centerX - watermarkWidth / 2;
    const watermarkY = centerY - watermarkHeight / 2;
  
    pdfDoc.addImage(watermark, 'PNG', watermarkX, watermarkY + 20, watermarkWidth, watermarkHeight);

    const textOptions = { fontWeight: 'bold', fontSize: 20, align: 'left' };

    
    const imageX = 20;
    const imageY = 20; 
    const imageWidth = 25; 
    const imageHeight = 30; 
    pdfDoc.addImage(logo, 'PNG', imageX, imageY, imageWidth, imageHeight);

   
    const textXAfterImage = imageX + imageWidth + 10; 
    const textYAfterImage = imageY + imageHeight / 2 - 10; 

    pdfDoc.setFont('helvetica', 'bold');
    pdfDoc.setFontSize(18);
    pdfDoc.text('PEMERINTAH KABUPATEN KANAN', textXAfterImage + 10, textYAfterImage, textOptions);

    pdfDoc.text('DINAS PERKEBUNAN', textXAfterImage + 23, textYAfterImage + 8, textOptions);

    pdfDoc.setFontSize(12);
    pdfDoc.text('Jalan Jalaludin Sutan Alamsyah Nmor 15 Komplek Perkantoran ', textXAfterImage , textYAfterImage + 15, textOptions);
    pdfDoc.text('PEMDA KM.2 Blambangan Umpu - 34711', textXAfterImage + 23, textYAfterImage + 20, textOptions);
    pdfDoc.text('Telepon/Fax (0723) 461203', textXAfterImage + 28, textYAfterImage + 25, textOptions);

    pdfDoc.setDrawColor(0);
    pdfDoc.setLineWidth(0.9); 

    const lineY = pdfDoc.internal.pageSize.getHeight() - 243; 
    pdfDoc.line(20, lineY, pdfDoc.internal.pageSize.getWidth() - 20, lineY);

    

    pdfDoc.setFontSize(13);
    pdfDoc.setFont('helvetica', 'normal')
    pdfDoc.text('SURAT TANDA DAFTAR USAHA BUDIDAYA TANAMAN PERKEBUNAN (STD-B)', 20, 63);
    
    pdfDoc.setDrawColor(0);
    pdfDoc.setLineWidth(0.4); 

    const lY = pdfDoc.internal.pageSize.getHeight() - 232; 
    pdfDoc.line(20, lY, pdfDoc.internal.pageSize.getWidth() - 20, lY);

    

    pdfDoc.setFont('helvetica', 'normal')

    const dataWilayah = [
        { label: 'KABUPATEN', value: 'KAB. WAY KANAN' },
        { label: 'KECAMATAN', value: 'Negara Batin' },
        { label: 'Nomor', value: '65dd753e12690359cbc59add/01/STDB/IV.05-WK/2024' },
      ];
  
      let cY = 72;
  
      dataWilayah.forEach(item => {
        pdfDoc.setFontSize(11);
        pdfDoc.setFont('helvetica', 'normal');
        pdfDoc.text(`${item.label}`, 20, cY);
        pdfDoc.text(`:  ${item.value}`, 50, cY);
        cY += 6;
      })

    const dataPemilik = [
      { label: 'Nama', value: 'Nur Rohim' },
      { label: 'Tempat / Tanggal Lahir', value: 'Karta Jaya, 30 Juli 1987' },
      { label: 'Nomor KTP', value: '1808113007870002' },
      { label: 'Alamat', value: 'Karta Jaya, Negara Batin KAB, WAY KANAN, LAMPUNG' },
    ];

    let currentY = 100;
    let itemNumber = 1; 

    dataPemilik.forEach(item => {
      pdfDoc.setFontSize(11);
      pdfDoc.setFont('helvetica', 'bold');
      pdfDoc.text('A. KETERANGAN PEMILIK', 15, 95);
      pdfDoc.setFont('helvetica', 'normal');
      pdfDoc.text(`${itemNumber}. ${item.label}`, 20, currentY);
      pdfDoc.text(`:  ${item.value}`, 80, currentY);
      currentY += 6;
      itemNumber++; 
    });

    const dataKebun = [
        { label: 'Lokasi Titik Koordinat kebun', value: 'Negara Batin / Latitude -4.3567483 Longitude 104.929467' },
        { label: 'Status Kepemilikan Lahan', value: 'SHM' },
        { label: 'Nomor', value: '0' },
        { label: 'Luas Areal', value: '2 Ha' },
        { label: 'Jenis Tanaman', value: 'Sawit' },
        { label: 'Produksi per hektar per tahun', value: '0' },
        { label: 'Asal Benih', value: 'ppks' },
        { label: 'JUmlah Pohon', value: '280' },
        { label: 'Pola Tanaman', value: 'Tumpang Sari' },
        { label: 'Jenis Pupuk', value: 'NPK' },
        { label: 'Mitra Pengolahan', value: 'Pengepul' },
        { label: 'Jenis Tanah', value: 'Podsolik merah kuning berpasir' },
        { label: 'Tahun Tanaman', value: '2022' },
        { label: 'Usaha Lain dilahan Kebun', value: '' },
      ];
  
      let curY = 133;
  
      dataKebun.forEach(item => {
        pdfDoc.setFontSize(11);
        pdfDoc.setFont('helvetica', 'bold');
        pdfDoc.text('B. DATA KEBUN', 15, 128);
        pdfDoc.setFont('helvetica', 'normal');
        pdfDoc.text(`-  ${item.label}`, 20, curY);
        pdfDoc.text(`:  ${item.value}`, 80, curY);
        curY += 6;
        ; 
      });

      pdfDoc.text('Catatan : ', 15, 218);
      pdfDoc.text('STD-B ini tidak berlaku apabila terjadi perubahan informasi tersebut diatas ', 15, 223);

      pdfDoc.text('Blambangan Umpu, 28 Febuari 2024', 120, 233);
      pdfDoc.setFont('helvetica', 'bold');
      pdfDoc.text('A.n. Bupati', 123, 238);
      pdfDoc.text('Kepala Dinas Perkebunan', 123, 243);
      pdfDoc.text('Kabupaten Way Kanan', 123, 248);

      pdfDoc.text('ROFIKI, S.T.P., MM.', 123, 260);
      pdfDoc.text('Pembina Tk.I', 123, 265);
      pdfDoc.text('NIP. 19760622 2007001 1 005', 123, 270);

      pdfDoc.setFont('helvetica', 'normal')
      pdfDoc.text('Tembusan disampakan kepada Yth :', 20, 280);
      pdfDoc.text('1. Bupati Way Kanan', 25, 285);
      pdfDoc.text('2. Arsip', 25, 290);

      pdfDoc.setLineWidth(1)

      const pageWidth = pdfDoc.internal.pageSize.getWidth();
      const pageHeight = pdfDoc.internal.pageSize.getHeight();
  
      pdfDoc.rect(2, 2, pageWidth - 4, pageHeight - 4);

      pdfDoc.setLineWidth(0.5);



    pdfDoc.save('Surat_Pernyataan.pdf');
  };

  return (
    <div>
      <h1>Download Surat</h1>
      <button onClick={generatePDF}>Download PDF</button>
    </div>
  );
};

export default PdfGenerator;



