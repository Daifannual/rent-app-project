describe("coba barang", () => {
  it("coba cari barang", () => {
    cy.visit("http://localhost:3000/barang");

    cy.get('input[placeholder="Search cards..."]') // menggunakan atribut placeholder
      .type("iPhone"); // mengetik

    cy.wait(2000);

    cy.contains("iPhone 13").should("exist"); //memastikan kartu "iPhone 13" ada
    cy.contains("iPhone 13 Pro").should("exist"); //memastikan kartu "iPhone 13 Pro" ada

    cy.contains("All").should("exist");

    cy.get('input[placeholder="Search cards..."]').clear(); //membersikan input
    cy.wait(1000);
    cy.contains("Handphone").click();
    cy.wait(2000);
    cy.contains("Laptop").click();
    cy.wait(2000);
    cy.contains("Kamera").click();
  });
});
