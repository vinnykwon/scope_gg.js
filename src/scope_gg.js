class ScopeGg {
	constructor() {
		this.api = "https://app.scope.gg/api"
		this.headers = {
			"User-Agent": "okhttp/4.9.2",
			"Content-Type": "application/json"
		}
	}

	async getLatestMapForDate(mapName) {
		const response = await fetch(
			`${this.api}/maps/getLatestMapForDate`, {
				method: "POST",
				body: JSON.stringify({
					csgoName: mapName,
					timestamp: Date.now()
				}),
				headers: this.headers
			})
		return response.json()
	}

	async getGrenades(mapName, grenadeType, tickrate) {
		const response = await fetch(
			`${this.api}/overwolf/getDefaultGrenades`, {
				method: "POST",
				body: JSON.stringify({
					grenadeType: grenadeType,
					mapName: mapName,
					tickrate: tickrate
				}),
				headers: this.headers
			})
		return JSON.stringify(await response.json())
	}
}

module.exports = {ScopeGg}
