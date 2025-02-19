// describe("coba beranda", () => {
//   it("navigasi beranda -> barang -> tentang -> kembali ke beranda", () => {
//     // Kunjungi halaman beranda
//     cy.visit("http://localhost:3000");

//     // Tunggu halaman selesai dimuat
//     cy.wait(2000);

//     // Verifikasi teks "yang Anda" muncul di halaman beranda
//     cy.contains("yang Anda").should("be.visible");

//     // Scroll perlahan ke bawah halaman
//     const scrollStep = 500; // Jarak setiap langkah scroll
//     const totalScroll = 3000; // Total jarak scroll
//     const delay = 200; // Delay antar langkah (ms)
//     for (let i = 0; i <= totalScroll; i += scrollStep) {
//       cy.scrollTo(0, i, { duration: delay }); // Scroll ke posisi tertentu
//     }

//     // Klik tombol "Selengkapnya" untuk menuju halaman barang
//     cy.contains("Selengkapnya")
//       .should("be.visible") // Pastikan tombol ada dan terlihat
//       .click();

//     // Verifikasi URL berubah ke halaman barang
//     cy.url().should("include", "/barang");

//     // Tunggu sejenak untuk simulasi pengguna membaca halaman barang
//     cy.wait(2000);

//     // Buka dropdown menu jika tampilan adalah mobile (navbar responsif)
//     cy.get(".dropdown > .btn-ghost").then(($button) => {
//       if ($button.is(":visible")) {
//         // Jika tombol toggle menu terlihat (tampilan mobile), klik untuk membuka dropdown
//         cy.wrap($button).click();
//       }
//     });

//     // Klik link "Tentang" untuk menuju halaman tentang
//     cy.contains("Tentang")
//       .should("be.visible") // Pastikan link ada dan terlihat
//       .click();

//     // Verifikasi URL berubah ke halaman tentang
//     cy.url().should("include", "/tentang");

//     // Tunggu sejenak untuk simulasi pengguna membaca halaman tentang
//     cy.wait(2000);

//     // Kembali ke halaman beranda menggunakan link atau tombol "Beranda"
//     cy.contains("Beranda")
//       .should("be.visible") // Pastikan link ada dan terlihat
//       .click();

//     // Verifikasi URL kembali ke halaman beranda
//     cy.url().should("include", "/");

//     // Tunggu sejenak untuk memastikan halaman beranda dimuat sepenuhnya
//     cy.wait(2000);
//   });
// });