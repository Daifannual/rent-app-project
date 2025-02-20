describe("coba beranda", () => {
  it("coba cari beranda", () => {
    cy.visit("http://localhost:3000");

    cy.wait(2000);

    cy.contains("yang Anda").should("be.visible");

    // Scroll
    const scrollStep = 500; // Jarak setiap langkah scroll
    const totalScroll = 3000; // Total jarak scroll
    const delay = 200; // Delay antar langkah (ms)

    for (let i = 0; i <= totalScroll; i += scrollStep) {
      cy.scrollTo(0, i, { duration: delay }); // Scroll ke posisi tertentu
    }

    cy.contains("Selengkapnya").should("be.visible").click();

    cy.url().should("include", "/barang");
  });
});
