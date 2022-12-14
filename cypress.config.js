const { defineConfig } = require('cypress');

module.exports = defineConfig({
	// @Ely: CYPRESS DASHBOARD PARA VER NUESTRAS EJECUCIONES EN LA WEB:
	projectId: 'vhdqpk',
	// 1280×720 is considered to be the most suitable screen resolution for the desktop website version:
	viewportWidth: 1280,
	viewportHeight: 720,
	// Whether Cypress will watch and restart tests on test file changes:
	watchForFileChanges: false,
	// En Caso de hacer testing en SUT con seguridad web:
	chromeWebSecurity: false,
	// Number of times to retry a failed test. If a number is set, tests will retry in both runMode and openMode:
	retries: 0,
	// Whether Cypress will record a video of the test run when running on headless:
	video: false,
	// E2E Testing runner
	e2e: {
		// Enables cross-origin and improved session support, including the cy.origin and cy.session commands:
		experimentalSessionAndOrigin: false, // Para poder ver el Test Run de pruebas API, ésto debe estar en FALSE.
		// Use Cypress plugins:
		setupNodeEvents(on, config) {
			return require('./cypress/plugins/index.js')(on, config)			
		},		
		// Glob pattern to determine what test files to load:
		specPattern: ['**/*.feature', 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'],
		
	}
})
