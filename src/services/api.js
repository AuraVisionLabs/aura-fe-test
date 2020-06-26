const API_BASE = 'http://localhost:3002';

const flightData = {
    fetchAll: () => fetch(`${API_BASE}/`)
}

export {
    flightData
}
