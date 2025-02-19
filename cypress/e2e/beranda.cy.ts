describe('coba beranda', () => {
    it("coba cari beranda", () => {
        cy.visit('http://localhost:3000'); // Gunakan URL lengkap
        cy.contains("yang Anda");
        
    });
});