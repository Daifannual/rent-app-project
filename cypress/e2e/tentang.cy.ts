describe("coba tentang", () => {
  it("coba cari tentang", () => {
    cy.visit("http://localhost:3000/tentang");

    cy.wait(2000);

    //be visible supaya memastikan muncul dilayar
    cy.contains("Misi kami").should("be.visible");

    // scroll
    const scrollStep = 500; // Jarak setiap langkah scroll
    const totalScroll = 3000; // Total jarak scroll
    const delay = 200; // Delay antar langkah (ms)

    for (let i = 0; i <= totalScroll; i += scrollStep) {
      cy.scrollTo(0, i, { duration: delay }); // Scroll ke posisi tertentu
    }

    //klik
    cy.contains("Apa yang membuat kami berbeda")
      .should("be.visible") // memastikan elemen ada
      .click();

    cy.wait(2000);

    cy.contains("Jelajahi Barang").should("be.visible").click();

    cy.url().should("include", "/");
  });
});
