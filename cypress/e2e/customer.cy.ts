describe('coba customer', () => {
    it('coba pilih customer dan search', () => {
      cy.visit('http://localhost:3000/admin/customer'); // Gunakan URL lengkap
      cy.get('input[placeholder="Cari nama ..."]') // menggunakan atribut placeholder
      .type("Teguh Sugiarto"); // mengetik
      cy.wait(2000);
      cy.contains("Tambah Customer").click();
      cy.wait(2000);
      cy.url().should("include", "/admin/customer/tambah");
      cy.get("Input#nama").type("Asus");
      cy.get("Input#alamat").type("Menawarkan beragam pilihan laptop, mulai dari laptop gaming bertenaga hingga ultrabook tipis dan ringan.");
      cy.get("Input#email").type("200.000");
      cy.contains("Simpan").click();
      cy.wait(2000);
      cy.url().should("include", "/admin/customer");
    });
  });