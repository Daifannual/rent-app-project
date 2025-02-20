describe("coba barang", () => {
  it("coba pilih barang", () => {
    cy.visit("http://localhost:3000/admin/barang"); // Gunakan URL lengkap
    cy.get('input[placeholder="Cari nama alat..."]') // menggunakan atribut placeholder
      .type("Ladder"); // mengetik
    cy.wait(500);
    cy.contains("Tambah Alat").click();
    cy.wait(2000);
    cy.url().should("include", "/admin/barang/tambah");
    cy.get("Input#nama-Barang").type("Asus");
    cy.get("Input#deskripsi-Barang").type("Menawarkan beragam pilihan laptop, mulai dari laptop gaming bertenaga hingga ultrabook tipis dan ringan.");
    cy.get("Input#harga-per-hari").type("200.000");
    cy.get("Input#stok-Barang").type("12");
    cy.contains("Simpan").click();
    cy.wait(1000);
    cy.contains("Kembali").click();
    cy.go("back");
    cy.wait(2000);
    cy.url().should("include", "/admin/barang");
  });
});
