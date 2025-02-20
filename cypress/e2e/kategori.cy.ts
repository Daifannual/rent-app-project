describe("coba kategori", () => {
  it("coba pilih kategori", () => {
    cy.visit("http://localhost:3000/admin/kategori"); // Gunakan URL lengkap

    cy.contains("Handphone").should("be.visible").click();
    cy.url().should("include", "/admin/kategori/handphone");

    cy.wait(1500);
    cy.get('input[placeholder="Cari handphone..."]') // menggunakan atribut placeholder
      .type("Nothing"); // mengetik

    // Kembali kategori
    cy.go("back"); //

    cy.wait(1500);
    cy.url().should("include", "/admin/kategori");

    cy.wait(1500);
    cy.contains("Laptop").click();
    cy.wait(1500);
    cy.url().should("include", "/admin/kategori/laptop");
    cy.wait(1000);
    cy.get('input[placeholder="Cari laptop..."]') // menggunakan atribut placeholder
      .type("MacBook");

    cy.wait(1000);

    cy.go("back"); //

    cy.url().should("include", "/admin/kategori");

    cy.wait(1500);
    cy.contains("Kamera").click();
    cy.wait(1500);
    cy.url().should("include", "/admin/kategori/kamera");
    cy.wait(1000);
    cy.get('input[placeholder="Cari kamera..."]') // menggunakan placeholder
      .type("Nikon D850");

    cy.wait(1000);
    cy.go("back");
    cy.contains("Tambah").should("be.visible").click();
    cy.wait(1000);
    cy.get("input#nama-kategori") // id
      .type("Radio"); //kategori baru
    cy.wait(1000);

    cy.contains("Simpan").click();
    cy.wait(1000);

    // kembalikategori
    cy.url().should("include", "/admin/kategori");
    cy.contains("Radio").should("be.visible"); // Verifikasi bahwa kategori baru muncul
  });
});

