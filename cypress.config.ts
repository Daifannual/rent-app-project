import { defineConfig } from "cypress";

export default defineConfig({
	e2e: {
		baseUrl: 'http://localhost:5173/',
		specPattern: [
            'cypress/unit/**/*.cy.{js,jsx,ts,tsx}',
            'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'
        ],
		setupNodeEvents(on, config) {
			
		},
	},
});