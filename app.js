/**
 * PULSEGRID - CENTRALIZED EMERGENCY ICU & LIFE-SUPPORT NETWORK
 * Real-time state management, Leaflet interactive mapping, Chart.js telemetry,
 * hospital broadcast sync, triage wizard, and 15-minute emergency lock system.
 */

// Initial City Hospital Dataset (10 Hospitals across Metro Area)
const INITIAL_HOSPITALS = [
    {
        id: 'hosp-1',
        name: 'Apex Super-Specialty Medical Center',
        district: 'Central Downtown',
        address: '450 Healthcare Boulevard, Central District',
        phone: '+1 (555) 901-2000',
        emergencyLine: '911-EXT-101',
        lat: 28.6139,
        lng: 77.2090,
        distanceKm: 2.4,
        traumaLevel: 'Level 1 Trauma Center',
        icuBeds: { total: 35, available: 6 },
        picuBeds: { total: 12, available: 3 },
        nicuBeds: { total: 10, available: 2 },
        ventilators: { total: 28, available: 5 },
        bipap: { total: 20, available: 8 },
        ecmo: { total: 4, available: 1 },
        isolationPods: { total: 8, available: 3 },
        dialysisUnits: { total: 10, available: 4 },
        oxygenReserve: { percent: 92, hoursLeft: 48 },
        bloodBank: { O_NEG: 12, A_POS: 25, B_POS: 18, AB_POS: 8 },
        specialists: ['Cardiologist', 'Neurosurgeon', 'Trauma Surgeon', 'Pulmonologist'],
        lastUpdated: 'Just Now'
    },
    {
        id: 'hosp-2',
        name: 'St. Jude Children & General Hospital',
        district: 'North Medical Hub',
        address: '108 Northridge Ave, Medical District',
        phone: '+1 (555) 902-3000',
        emergencyLine: '911-EXT-102',
        lat: 28.6400,
        lng: 77.2200,
        distanceKm: 4.8,
        traumaLevel: 'Level 2 Trauma Center',
        icuBeds: { total: 25, available: 2 },
        picuBeds: { total: 20, available: 7 },
        nicuBeds: { total: 18, available: 6 },
        ventilators: { total: 22, available: 3 },
        bipap: { total: 15, available: 4 },
        ecmo: { total: 2, available: 0 },
        isolationPods: { total: 6, available: 1 },
        dialysisUnits: { total: 6, available: 2 },
        oxygenReserve: { percent: 78, hoursLeft: 36 },
        bloodBank: { O_NEG: 8, A_POS: 15, B_POS: 20, AB_POS: 5 },
        specialists: ['Pediatrician', 'Pulmonologist', 'Cardiologist'],
        lastUpdated: '1 min ago'
    },
    {
        id: 'hosp-3',
        name: 'Metro Emergency Critical Care Institute',
        district: 'Central Downtown',
        address: '88 Plaza Ring Road, City Core',
        phone: '+1 (555) 903-4000',
        emergencyLine: '911-EXT-103',
        lat: 28.6250,
        lng: 77.2150,
        distanceKm: 1.2,
        traumaLevel: 'Level 1 Trauma Center',
        icuBeds: { total: 50, available: 12 },
        picuBeds: { total: 15, available: 4 },
        nicuBeds: { total: 12, available: 3 },
        ventilators: { total: 40, available: 9 },
        bipap: { total: 25, available: 10 },
        ecmo: { total: 6, available: 2 },
        isolationPods: { total: 12, available: 5 },
        dialysisUnits: { total: 14, available: 6 },
        oxygenReserve: { percent: 96, hoursLeft: 72 },
        bloodBank: { O_NEG: 20, A_POS: 30, B_POS: 25, AB_POS: 12 },
        specialists: ['Cardiologist', 'Neurosurgeon', 'Trauma Surgeon', 'Pulmonologist', 'Vasculitis Specialist'],
        lastUpdated: 'Just Now'
    },
    {
        id: 'hosp-4',
        name: 'Southside Memorial Hospital',
        district: 'South Suburbs',
        address: '742 South Avenue, Sector 14',
        phone: '+1 (555) 904-5000',
        emergencyLine: '911-EXT-104',
        lat: 28.5800,
        lng: 77.2300,
        distanceKm: 7.1,
        traumaLevel: 'Level 2 Trauma Center',
        icuBeds: { total: 20, available: 0 },
        picuBeds: { total: 8, available: 1 },
        nicuBeds: { total: 6, available: 0 },
        ventilators: { total: 15, available: 0 },
        bipap: { total: 10, available: 2 },
        ecmo: { total: 1, available: 0 },
        isolationPods: { total: 4, available: 0 },
        dialysisUnits: { total: 5, available: 1 },
        oxygenReserve: { percent: 45, hoursLeft: 18 },
        bloodBank: { O_NEG: 2, A_POS: 8, B_POS: 6, AB_POS: 1 },
        specialists: ['Trauma Surgeon', 'General Physician'],
        lastUpdated: '3 mins ago'
    },
    {
        id: 'hosp-5',
        name: 'Horizon Tech City Trauma & Cardiac Care',
        district: 'East Tech City',
        address: '12 Innovation Way, Tech Corridor',
        phone: '+1 (555) 905-6000',
        emergencyLine: '911-EXT-105',
        lat: 28.6300,
        lng: 77.2700,
        distanceKm: 5.5,
        traumaLevel: 'Level 1 Trauma Center',
        icuBeds: { total: 40, available: 8 },
        picuBeds: { total: 10, available: 2 },
        nicuBeds: { total: 8, available: 4 },
        ventilators: { total: 30, available: 7 },
        bipap: { total: 18, available: 6 },
        ecmo: { total: 5, available: 3 },
        isolationPods: { total: 10, available: 4 },
        dialysisUnits: { total: 12, available: 5 },
        oxygenReserve: { percent: 88, hoursLeft: 54 },
        bloodBank: { O_NEG: 15, A_POS: 22, B_POS: 19, AB_POS: 9 },
        specialists: ['Cardiologist', 'Neurosurgeon', 'Trauma Surgeon'],
        lastUpdated: 'Just Now'
    },
    {
        id: 'hosp-6',
        name: 'Westside Community Hospital',
        district: 'West Outer Hub',
        address: '900 Expressway Loop, Westside',
        phone: '+1 (555) 906-7000',
        emergencyLine: '911-EXT-106',
        lat: 28.6000,
        lng: 77.1700,
        distanceKm: 8.9,
        traumaLevel: 'Level 3 Trauma Center',
        icuBeds: { total: 15, available: 3 },
        picuBeds: { total: 5, available: 1 },
        nicuBeds: { total: 4, available: 1 },
        ventilators: { total: 10, available: 2 },
        bipap: { total: 8, available: 3 },
        ecmo: { total: 0, available: 0 },
        isolationPods: { total: 3, available: 1 },
        dialysisUnits: { total: 4, available: 2 },
        oxygenReserve: { percent: 82, hoursLeft: 40 },
        bloodBank: { O_NEG: 5, A_POS: 10, B_POS: 8, AB_POS: 3 },
        specialists: ['Pulmonologist', 'General Surgeon'],
        lastUpdated: '4 mins ago'
    },
    {
        id: 'hosp-7',
        name: 'Pinnacle Cardiac & Pulmonary Institute',
        district: 'North Medical Hub',
        address: '303 Parkway Circle, North Hub',
        phone: '+1 (555) 907-8000',
        emergencyLine: '911-EXT-107',
        lat: 28.6600,
        lng: 77.2100,
        distanceKm: 6.2,
        traumaLevel: 'Level 1 Trauma Center',
        icuBeds: { total: 30, available: 5 },
        picuBeds: { total: 6, available: 2 },
        nicuBeds: { total: 5, available: 1 },
        ventilators: { total: 25, available: 6 },
        bipap: { total: 20, available: 9 },
        ecmo: { total: 8, available: 4 },
        isolationPods: { total: 6, available: 2 },
        dialysisUnits: { total: 8, available: 3 },
        oxygenReserve: { percent: 94, hoursLeft: 60 },
        bloodBank: { O_NEG: 18, A_POS: 24, B_POS: 15, AB_POS: 10 },
        specialists: ['Cardiologist', 'Pulmonologist', 'Thoracic Surgeon'],
        lastUpdated: 'Just Now'
    },
    {
        id: 'hosp-8',
        name: 'St. Mary Respiratory & Infectious Disease Hospital',
        district: 'South Suburbs',
        address: '150 Riverbed Drive, South Sector',
        phone: '+1 (555) 908-9000',
        emergencyLine: '911-EXT-108',
        lat: 28.5600,
        lng: 77.2400,
        distanceKm: 9.4,
        traumaLevel: 'Level 2 Trauma Center',
        icuBeds: { total: 28, available: 4 },
        picuBeds: { total: 8, available: 2 },
        nicuBeds: { total: 6, available: 1 },
        ventilators: { total: 24, available: 5 },
        bipap: { total: 16, available: 6 },
        ecmo: { total: 2, available: 1 },
        isolationPods: { total: 16, available: 8 },
        dialysisUnits: { total: 6, available: 3 },
        oxygenReserve: { percent: 90, hoursLeft: 50 },
        bloodBank: { O_NEG: 10, A_POS: 18, B_POS: 14, AB_POS: 6 },
        specialists: ['Pulmonologist', 'Infectious Disease Specialist'],
        lastUpdated: '2 mins ago'
    }
];

// STATE MANAGEMENT
class PulseGridApp {
    constructor() {
        this.hospitals = this.loadHospitals();
        this.logs = this.loadLogs();
        this.broadcastChannel = new BroadcastChannel('pulsegrid_channel');
        this.activeFilterChip = 'all';
        this.leafletMap = null;
        this.mapMarkers = {};
        this.chartTrend = null;
        this.chartEquipment = null;

        this.init();
    }

    init() {
        this.bindEvents();
        this.renderAll();
        this.setupBroadcastChannel();
        this.startLiveSimulationEngine();
    }

    loadHospitals() {
        const saved = localStorage.getItem('pulsegrid_hospitals');
        if (saved) {
            try { return JSON.parse(saved); } catch (e) { console.error(e); }
        }
        return JSON.parse(JSON.stringify(INITIAL_HOSPITALS));
    }

    saveHospitals() {
        localStorage.setItem('pulsegrid_hospitals', JSON.stringify(this.hospitals));
        this.broadcastChannel.postMessage({ type: 'HOSPITALS_UPDATED', hospitals: this.hospitals });
    }

    loadLogs() {
        const saved = localStorage.getItem('pulsegrid_logs');
        if (saved) {
            try { return JSON.parse(saved); } catch (e) { console.error(e); }
        }
        return [
            { time: '16:15:20', hospital: 'Apex Super-Specialty', event: 'Capacity Update', details: '+1 Adult ICU Bed Available (Bed #12 released)', status: 'Success' },
            { time: '16:12:05', hospital: 'St. Jude Children Hospital', event: 'Equipment Telemetry', details: 'Ventilator #04 assigned to ER Intake', status: 'Warning' },
            { time: '16:05:40', hospital: 'Metro Emergency Institute', event: 'O2 Tank Refill', details: 'Liquid Oxygen Reservoir filled to 96%', status: 'Success' }
        ];
    }

    saveLogs() {
        localStorage.setItem('pulsegrid_logs', JSON.stringify(this.logs));
    }

    addLog(hospitalName, eventName, details, status = 'Success') {
        const now = new Date();
        const timeStr = now.toTimeString().split(' ')[0];
        const logEntry = { time: timeStr, hospital: hospitalName, event: eventName, details: details, status: status };
        this.logs.unshift(logEntry);
        if (this.logs.length > 50) this.logs.pop();
        this.saveLogs();
        this.renderLogs();
    }

    setupBroadcastChannel() {
        this.broadcastChannel.onmessage = (event) => {
            if (event.data && event.data.type === 'HOSPITALS_UPDATED') {
                this.hospitals = event.data.hospitals;
                this.renderAll();
            }
        };
    }

    // EVENT BINDINGS
    bindEvents() {
        // Nav tab switching
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const targetTab = btn.getAttribute('data-tab');
                this.switchTab(targetTab);
            });
        });

        // Search & Filters
        document.getElementById('btnApplySearch')?.addEventListener('click', () => this.renderHospitalGrid());
        document.getElementById('selectDistrict')?.addEventListener('change', () => this.renderHospitalGrid());
        document.getElementById('selectBedType')?.addEventListener('change', () => this.renderHospitalGrid());
        document.getElementById('selectBloodGroup')?.addEventListener('change', () => this.renderHospitalGrid());
        document.getElementById('selectSort')?.addEventListener('change', () => this.renderHospitalGrid());

        // Quick Chips
        document.querySelectorAll('.chip').forEach(chip => {
            chip.addEventListener('click', () => {
                document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
                this.activeFilterChip = chip.getAttribute('data-filter');
                this.renderHospitalGrid();
            });
        });

        // Banner Close
        document.getElementById('btnCloseBanner')?.addEventListener('click', () => {
            const banner = document.getElementById('alertBanner');
            if (banner) banner.style.display = 'none';
        });

        // SOS Button
        document.getElementById('btnSOS')?.addEventListener('click', () => this.triggerSOSModal());
        document.getElementById('btnCloseSOSModal')?.addEventListener('click', () => {
            document.getElementById('sosModal').classList.remove('active');
        });

        // Simulate Surge Button
        document.getElementById('btnSimulateSurge')?.addEventListener('click', () => this.triggerSimulatedSurge());

        // Hospital Portal Selection
        document.getElementById('selectHospitalPortal')?.addEventListener('change', (e) => {
            this.renderPortalControlBody(e.target.value);
        });

        // Triage Wizard Steps
        document.querySelectorAll('.btn-next-step').forEach(btn => {
            btn.addEventListener('click', () => {
                const nextStep = btn.getAttribute('data-next');
                this.switchTriageStep(nextStep);
            });
        });

        document.querySelectorAll('.btn-prev-step').forEach(btn => {
            btn.addEventListener('click', () => {
                const prevStep = btn.getAttribute('data-prev');
                this.switchTriageStep(prevStep);
            });
        });

        // Modal Close
        document.getElementById('btnCloseModal')?.addEventListener('click', () => {
            document.getElementById('bookingModal').classList.remove('active');
        });

        // Clear Log
        document.getElementById('btnClearLog')?.addEventListener('click', () => {
            this.logs = [];
            this.saveLogs();
            this.renderLogs();
        });
    }

    switchTab(tabId) {
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));

        const targetNavBtn = document.querySelector(`.nav-btn[data-tab="${tabId}"]`);
        const targetPane = document.getElementById(`pane-${tabId}`);

        if (targetNavBtn) targetNavBtn.classList.add('active');
        if (targetPane) targetPane.classList.add('active');

        if (tabId === 'map-view') {
            setTimeout(() => this.initOrUpdateMap(), 100);
        } else if (tabId === 'command-center') {
            setTimeout(() => this.initOrUpdateCharts(), 100);
        }
    }

    renderAll() {
        this.updateHeaderStats();
        this.renderHospitalGrid();
        this.populatePortalSelect();
        this.renderLogs();
        this.updateCommandStats();
    }

    updateHeaderStats() {
        let totalBeds = 0;
        let totalVents = 0;

        this.hospitals.forEach(h => {
            totalBeds += h.icuBeds.available;
            totalVents += h.ventilators.available;
        });

        const bedCountElem = document.getElementById('totalAvailableBedsCount');
        const ventCountElem = document.getElementById('totalVentsCount');

        if (bedCountElem) bedCountElem.textContent = totalBeds;
        if (ventCountElem) ventCountElem.textContent = totalVents;

        const pill = document.getElementById('liveStatusPill');
        const beacon = pill?.querySelector('.pulse-beacon');
        if (beacon) {
            beacon.className = 'pulse-beacon ' + (totalBeds > 20 ? 'green' : totalBeds > 5 ? 'amber' : 'red');
        }
    }

    // FILTER & SORT HOSPITALS
    getFilteredHospitals() {
        const district = document.getElementById('selectDistrict')?.value || 'all';
        const bedType = document.getElementById('selectBedType')?.value || 'all';
        const bloodGroup = document.getElementById('selectBloodGroup')?.value || 'all';
        const sortBy = document.getElementById('selectSort')?.value || 'distance';

        let list = [...this.hospitals];

        // Filter by district
        if (district !== 'all') {
            list = list.filter(h => h.district === district);
        }

        // Filter by equipment / bed type
        if (bedType !== 'all') {
            if (bedType === 'adult_icu') list = list.filter(h => h.icuBeds.available > 0);
            if (bedType === 'picu') list = list.filter(h => h.picuBeds.available > 0);
            if (bedType === 'nicu') list = list.filter(h => h.nicuBeds.available > 0);
            if (bedType === 'ecmo') list = list.filter(h => h.ecmo.available > 0);
            if (bedType === 'isolation') list = list.filter(h => h.isolationPods.available > 0);
            if (bedType === 'dialysis') list = list.filter(h => h.dialysisUnits.available > 0);
        }

        // Filter by blood group
        if (bloodGroup !== 'all') {
            list = list.filter(h => h.bloodBank[bloodGroup] > 0);
        }

        // Filter by quick chip
        if (this.activeFilterChip === 'vent_available') {
            list = list.filter(h => h.ventilators.available >= 2);
        } else if (this.activeFilterChip === 'ecmo_ready') {
            list = list.filter(h => h.ecmo.available > 0);
        } else if (this.activeFilterChip === 'high_o2') {
            list = list.filter(h => h.oxygenReserve.percent >= 80);
        } else if (this.activeFilterChip === 'trauma_ready') {
            list = list.filter(h => h.traumaLevel.includes('Level 1'));
        }

        // Sorting
        if (sortBy === 'distance') {
            list.sort((a, b) => a.distanceKm - b.distanceKm);
        } else if (sortBy === 'icu_desc') {
            list.sort((a, b) => b.icuBeds.available - a.icuBeds.available);
        } else if (sortBy === 'vent_desc') {
            list.sort((a, b) => b.ventilators.available - a.ventilators.available);
        }

        return list;
    }

    // RENDER HOSPITAL CARDS GRID
    renderHospitalGrid() {
        const grid = document.getElementById('hospitalGrid');
        if (!grid) return;

        const filtered = this.getFilteredHospitals();
        document.getElementById('resultsCount').textContent = filtered.length;

        if (filtered.length === 0) {
            grid.innerHTML = `
                <div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 60px; background: var(--bg-card); border-radius: 14px;">
                    <i class="fa-solid fa-hospital-triangle-exclamation" style="font-size: 3rem; color: var(--warning); margin-bottom: 16px;"></i>
                    <h3>No Matching Emergency Resources Found</h3>
                    <p style="color: var(--text-muted); margin-top: 8px;">Try widening your search filters or zone selection.</p>
                </div>
            `;
            return;
        }

        grid.innerHTML = filtered.map(h => {
            const statusClass = h.icuBeds.available >= 5 ? 'high' : h.icuBeds.available > 0 ? 'medium' : 'critical';
            const statusLabel = h.icuBeds.available >= 5 ? 'High Capacity' : h.icuBeds.available > 0 ? 'Limited Capacity' : 'CRITICAL OVERLOAD';
            const etaMinutes = Math.round(h.distanceKm * 2.5);

            return `
                <div class="hospital-card">
                    <div>
                        <div class="card-top-bar">
                            <div class="hospital-title-box">
                                <div class="hospital-icon"><i class="fa-solid fa-hospital"></i></div>
                                <div class="hospital-name-info">
                                    <h3>${h.name}</h3>
                                    <div class="hospital-location"><i class="fa-solid fa-location-dot"></i> ${h.district} • ${h.distanceKm} km</div>
                                </div>
                            </div>
                            <span class="status-badge ${statusClass}">${statusLabel}</span>
                        </div>

                        <!-- Resource Metrics Grid -->
                        <div class="resource-metrics-grid">
                            <div class="metric-item">
                                <span class="metric-label">Adult ICU Beds</span>
                                <span class="metric-value ${h.icuBeds.available > 0 ? 'available' : 'zero'}">${h.icuBeds.available}/${h.icuBeds.total}</span>
                            </div>
                            <div class="metric-item">
                                <span class="metric-label">Invasive Vents</span>
                                <span class="metric-value ${h.ventilators.available > 0 ? 'available' : 'zero'}">${h.ventilators.available}/${h.ventilators.total}</span>
                            </div>
                            <div class="metric-item">
                                <span class="metric-label">O2 Reserve</span>
                                <span class="metric-value ${h.oxygenReserve.percent > 70 ? 'available' : 'limited'}">${h.oxygenReserve.percent}%</span>
                            </div>
                        </div>

                        <!-- Equipment Badges -->
                        <div class="equipment-tags">
                            <span class="eq-tag"><i class="fa-solid fa-shield-halved"></i> ${h.traumaLevel}</span>
                            ${h.ecmo.available > 0 ? `<span class="eq-tag" style="border-color: var(--primary); color: var(--primary);"><i class="fa-solid fa-heart-circle-bolt"></i> ECMO Ready (${h.ecmo.available})</span>` : ''}
                            ${h.picuBeds.available > 0 ? `<span class="eq-tag"><i class="fa-solid fa-baby"></i> PICU (${h.picuBeds.available})</span>` : ''}
                            ${h.isolationPods.available > 0 ? `<span class="eq-tag"><i class="fa-solid fa-virus-slash"></i> Isolation (${h.isolationPods.available})</span>` : ''}
                        </div>
                    </div>

                    <!-- Footer Action Bar -->
                    <div class="card-footer">
                        <div class="eta-info">
                            <i class="fa-solid fa-truck-medical"></i> Ambulance ETA: <strong>~${etaMinutes} mins</strong>
                        </div>
                        <button class="btn btn-primary btn-sm" onclick="app.openBookingModal('${h.id}')" ${h.icuBeds.available === 0 ? 'disabled' : ''}>
                            <i class="fa-solid fa-lock"></i> ${h.icuBeds.available > 0 ? 'Hold 15-Min Lock' : 'Full Capacity'}
                        </button>
                    </div>
                </div>
            `;
        }).join('');
    }

    // LEAFLET MAP INITIALIZATION & UPDATE
    initOrUpdateMap() {
        const container = document.getElementById('leafletMap');
        if (!container) return;

        if (!this.leafletMap) {
            // Initialize Leaflet Map centered on Metro area
            this.leafletMap = L.map('leafletMap').setView([28.6139, 77.2090], 12);

            // Use CartoDB Dark Matter tiles
            L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
                attribution: '&copy; OpenStreetMap & CartoDB',
                subdomains: 'abcd',
                maxZoom: 19
            }).addTo(this.leafletMap);
        }

        // Render markers & sidebar list
        const sidebarList = document.getElementById('mapHospitalList');
        if (sidebarList) sidebarList.innerHTML = '';

        this.hospitals.forEach(h => {
            const statusColor = h.icuBeds.available >= 5 ? '#10b981' : h.icuBeds.available > 0 ? '#f59e0b' : '#ef4444';
            
            // Custom Marker Icon SVG
            const customIcon = L.divIcon({
                className: 'custom-map-pin',
                html: `<div style="background-color: ${statusColor}; width: 22px; height: 22px; border-radius: 50%; border: 3px solid #ffffff; box-shadow: 0 0 14px ${statusColor};"></div>`,
                iconSize: [22, 22],
                iconAnchor: [11, 11]
            });

            if (this.mapMarkers[h.id]) {
                this.leafletMap.removeLayer(this.mapMarkers[h.id]);
            }

            const marker = L.marker([h.lat, h.lng], { icon: customIcon }).addTo(this.leafletMap);
            marker.bindPopup(`
                <div style="font-family: 'Plus Jakarta Sans', sans-serif; padding: 4px; color: #0f172a;">
                    <h4 style="font-size: 1rem; font-weight: 800; margin-bottom: 4px;">${h.name}</h4>
                    <p style="font-size: 0.8rem; color: #475569; margin-bottom: 8px;"><i class="fa-solid fa-location-dot"></i> ${h.district}</p>
                    <div style="background: #f1f5f9; padding: 8px; border-radius: 6px; font-size: 0.85rem; margin-bottom: 10px;">
                        <div><strong>ICU Beds:</strong> ${h.icuBeds.available}/${h.icuBeds.total}</div>
                        <div><strong>Ventilators:</strong> ${h.ventilators.available}/${h.ventilators.total}</div>
                        <div><strong>ECMO:</strong> ${h.ecmo.available} Available</div>
                    </div>
                    <button style="width: 100%; background: #06b6d4; color: white; border: none; padding: 6px 12px; border-radius: 6px; font-weight: 700; cursor: pointer;" onclick="app.openBookingModal('${h.id}')">
                        <i class="fa-solid fa-lock"></i> Hold Resource Lock
                    </button>
                </div>
            `);

            this.mapMarkers[h.id] = marker;

            // Mini sidebar item
            if (sidebarList) {
                const item = document.createElement('div');
                item.className = 'mini-hospital-card';
                item.innerHTML = `
                    <div class="mini-hospital-title">${h.name}</div>
                    <div class="mini-hospital-stats">
                        <span>ICU: <strong style="color: ${statusColor}">${h.icuBeds.available}/${h.icuBeds.total}</strong></span>
                        <span>Vents: <strong>${h.ventilators.available}/${h.ventilators.total}</strong></span>
                        <span>${h.distanceKm} km</span>
                    </div>
                `;
                item.addEventListener('click', () => {
                    this.leafletMap.flyTo([h.lat, h.lng], 14);
                    marker.openPopup();
                });
                sidebarList.appendChild(item);
            }
        });
    }

    // TRIAGE WIZARD STEPS
    switchTriageStep(stepNum) {
        document.querySelectorAll('.wizard-step').forEach(s => s.classList.remove('active'));
        const targetStep = document.getElementById(`step-${stepNum}`);
        if (targetStep) targetStep.classList.add('active');

        if (stepNum === '3') {
            this.evaluateTriageMatch();
        }
    }

    evaluateTriageMatch() {
        const condition = document.querySelector('input[name="condition"]:checked')?.value || 'respiratory_failure';
        const ventNeeded = document.getElementById('chkVent')?.checked;
        const ecmoNeeded = document.getElementById('chkECMO')?.checked;
        const dialysisNeeded = document.getElementById('chkDialysis')?.checked;

        // Filter suitable hospital
        let matches = [...this.hospitals];

        if (condition === 'pediatric_crisis') {
            matches = matches.filter(h => h.picuBeds.available > 0 || h.nicuBeds.available > 0);
        } else if (condition === 'polytrauma') {
            matches = matches.filter(h => h.traumaLevel.includes('Level 1'));
        }

        if (ecmoNeeded) {
            matches = matches.filter(h => h.ecmo.available > 0);
        }

        if (ventNeeded) {
            matches = matches.filter(h => h.ventilators.available > 0);
        }

        matches.sort((a, b) => a.distanceKm - b.distanceKm);

        const resultBox = document.getElementById('triageResultBox');
        if (!resultBox) return;

        if (matches.length > 0) {
            const best = matches[0];
            const eta = Math.round(best.distanceKm * 2.5);

            resultBox.innerHTML = `
                <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid var(--success); border-radius: 12px; padding: 24px; margin-bottom: 20px;">
                    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px; color: var(--success);">
                        <i class="fa-solid fa-circle-check" style="font-size: 1.8rem;"></i>
                        <h3 style="font-size: 1.3rem; font-weight: 800;">Optimal Emergency Medical Center Matched!</h3>
                    </div>
                    <h2 style="font-size: 1.6rem; color: #ffffff; margin-bottom: 8px;">${best.name}</h2>
                    <p style="color: var(--text-muted); margin-bottom: 16px;"><i class="fa-solid fa-location-dot"></i> ${best.address} (${best.distanceKm} km away • Ambulance ETA ~${eta} mins)</p>
                    
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; background: rgba(15, 23, 42, 0.8); padding: 16px; border-radius: 10px; margin-bottom: 20px;">
                        <div><span style="font-size: 0.78rem; color: var(--text-muted);">Available ICU Beds</span><br><strong style="font-size: 1.2rem; color: var(--success);">${best.icuBeds.available} Beds</strong></div>
                        <div><span style="font-size: 0.78rem; color: var(--text-muted);">Available Ventilators</span><br><strong style="font-size: 1.2rem; color: var(--primary);">${best.ventilators.available} Units</strong></div>
                        <div><span style="font-size: 0.78rem; color: var(--text-muted);">ECMO Units</span><br><strong style="font-size: 1.2rem; color: #c084fc;">${best.ecmo.available} Units</strong></div>
                    </div>

                    <button class="btn btn-primary" style="width: 100%; padding: 14px; font-size: 1rem;" onclick="app.openBookingModal('${best.id}')">
                        <i class="fa-solid fa-lock"></i> Lock ICU Bed & Dispatch Ambulance Now
                    </button>
                </div>
            `;
        } else {
            resultBox.innerHTML = `
                <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid var(--danger); border-radius: 12px; padding: 24px; text-align: center;">
                    <i class="fa-solid fa-triangle-exclamation" style="font-size: 2.5rem; color: var(--danger); margin-bottom: 12px;"></i>
                    <h3 style="font-size: 1.2rem; color: #ffffff;">No exact match found with all specialized criteria available.</h3>
                    <p style="color: var(--text-muted); margin-top: 8px; margin-bottom: 16px;">We recommend triggering SOS 1-Tap auto-dispatch to expand to adjacent municipal zones.</p>
                    <button class="btn btn-sos" onclick="app.triggerSOSModal()"><i class="fa-solid fa-bolt"></i> Trigger SOS 1-TAP Dispatch</button>
                </div>
            `;
        }
    }

    // HOSPITAL PORTAL MANAGEMENT
    populatePortalSelect() {
        const select = document.getElementById('selectHospitalPortal');
        if (!select) return;

        select.innerHTML = this.hospitals.map(h => `<option value="${h.id}">${h.name} (${h.district})</option>`).join('');
        this.renderPortalControlBody(this.hospitals[0]?.id);
    }

    renderPortalControlBody(hospitalId) {
        const body = document.getElementById('portalControlBody');
        if (!body) return;

        const h = this.hospitals.find(item => item.id === hospitalId);
        if (!h) return;

        body.innerHTML = `
            <div class="portal-controls-grid">

                <!-- Adult ICU Control -->
                <div class="control-box">
                    <div class="control-box-header">
                        <h4><i class="fa-solid fa-bed-pulse"></i> Adult ICU Beds</h4>
                        <span class="text-muted">Total: ${h.icuBeds.total}</span>
                    </div>
                    <div class="counter-control">
                        <button class="btn-counter" onclick="app.updateHospitalResource('${h.id}', 'icuBeds', -1)">-</button>
                        <span class="counter-value ${h.icuBeds.available > 0 ? 'text-success' : 'text-danger'}">${h.icuBeds.available}</span>
                        <button class="btn-counter" onclick="app.updateHospitalResource('${h.id}', 'icuBeds', 1)">+</button>
                    </div>
                </div>

                <!-- Invasive Ventilators Control -->
                <div class="control-box">
                    <div class="control-box-header">
                        <h4><i class="fa-solid fa-wind"></i> Invasive Ventilators</h4>
                        <span class="text-muted">Total: ${h.ventilators.total}</span>
                    </div>
                    <div class="counter-control">
                        <button class="btn-counter" onclick="app.updateHospitalResource('${h.id}', 'ventilators', -1)">-</button>
                        <span class="counter-value ${h.ventilators.available > 0 ? 'text-success' : 'text-danger'}">${h.ventilators.available}</span>
                        <button class="btn-counter" onclick="app.updateHospitalResource('${h.id}', 'ventilators', 1)">+</button>
                    </div>
                </div>

                <!-- ECMO Control -->
                <div class="control-box">
                    <div class="control-box-header">
                        <h4><i class="fa-solid fa-heart-circle-bolt"></i> ECMO Units</h4>
                        <span class="text-muted">Total: ${h.ecmo.total}</span>
                    </div>
                    <div class="counter-control">
                        <button class="btn-counter" onclick="app.updateHospitalResource('${h.id}', 'ecmo', -1)">-</button>
                        <span class="counter-value">${h.ecmo.available}</span>
                        <button class="btn-counter" onclick="app.updateHospitalResource('${h.id}', 'ecmo', 1)">+</button>
                    </div>
                </div>

                <!-- Oxygen Storage Level -->
                <div class="control-box">
                    <div class="control-box-header">
                        <h4><i class="fa-solid fa-bottle-droplet"></i> Liquid O2 Storage (%)</h4>
                        <span class="text-muted">${h.oxygenReserve.hoursLeft} hours remaining</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 12px; margin-top: 10px;">
                        <input type="range" min="10" max="100" value="${h.oxygenReserve.percent}" style="width: 100%;" onchange="app.updateOxygenLevel('${h.id}', this.value)">
                        <span style="font-family: var(--font-mono); font-size: 1.2rem; font-weight: 800;">${h.oxygenReserve.percent}%</span>
                    </div>
                </div>

            </div>

            <!-- Inter-hospital Dispatch Request Banner -->
            <div style="background: rgba(30, 41, 59, 0.6); padding: 20px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.08); display: flex; align-items: center; justify-content: space-between; gap: 16px;">
                <div>
                    <h4 style="font-size: 1.05rem; font-weight: 700;"><i class="fa-solid fa-tower-cell"></i> Broadcast Urgent Inter-Hospital Transfer Request</h4>
                    <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 2px;">Broadcast an emergency resource request to nearby hospitals if your ER hits max capacity.</p>
                </div>
                <button class="btn btn-secondary" onclick="app.broadcastInterHospitalRequest('${h.id}')">
                    <i class="fa-solid fa-bullhorn"></i> Broadcast Request
                </button>
            </div>
        `;
    }

    updateHospitalResource(hospitalId, resourceKey, delta) {
        const h = this.hospitals.find(item => item.id === hospitalId);
        if (!h) return;

        const current = h[resourceKey].available;
        const total = h[resourceKey].total;
        const next = current + delta;

        if (next >= 0 && next <= total) {
            h[resourceKey].available = next;
            h.lastUpdated = 'Just Now';
            this.saveHospitals();
            this.addLog(h.name, 'Resource Broadcast', `Manual update: ${resourceKey} set to ${next}/${total}`);
            this.renderAll();
            this.renderPortalControlBody(hospitalId);
        }
    }

    updateOxygenLevel(hospitalId, val) {
        const h = this.hospitals.find(item => item.id === hospitalId);
        if (!h) return;
        const numeric = parseInt(val);
        h.oxygenReserve.percent = numeric;
        h.oxygenReserve.hoursLeft = Math.round(numeric * 0.7);
        this.saveHospitals();
        this.addLog(h.name, 'O2 Telemetry', `Oxygen reservoir level updated to ${numeric}%`);
        this.renderAll();
    }

    broadcastInterHospitalRequest(hospitalId) {
        const h = this.hospitals.find(item => item.id === hospitalId);
        if (!h) return;
        this.addLog(h.name, 'EMERGENCY BROADCAST', 'Urgent inter-hospital transfer request sent across city medical grid!', 'Warning');
        alert(`Emergency Broadcast Sent! Notification dispatched to all connected hospitals in ${h.district}.`);
    }

    // COMMAND CENTER & TELEMETRY ANALYTICS
    updateCommandStats() {
        const totalHospElem = document.getElementById('statTotalHospitals');
        const availIcuElem = document.getElementById('statAvailableICU');
        const availVentElem = document.getElementById('statAvailableVents');
        const criticalAlertsElem = document.getElementById('statCriticalAlerts');

        let totalBeds = 0;
        let totalVents = 0;
        let criticalCount = 0;

        this.hospitals.forEach(h => {
            totalBeds += h.icuBeds.available;
            totalVents += h.ventilators.available;
            if (h.icuBeds.available === 0 || h.oxygenReserve.percent < 50) {
                criticalCount++;
            }
        });

        if (totalHospElem) totalHospElem.textContent = this.hospitals.length;
        if (availIcuElem) availIcuElem.textContent = totalBeds;
        if (availVentElem) availVentElem.textContent = totalVents;
        if (criticalAlertsElem) criticalAlertsElem.textContent = criticalCount;
    }

    initOrUpdateCharts() {
        const ctxTrend = document.getElementById('chartOccupancyTrend')?.getContext('2d');
        const ctxEquip = document.getElementById('chartEquipmentDistribution')?.getContext('2d');

        if (ctxTrend) {
            if (this.chartTrend) this.chartTrend.destroy();
            this.chartTrend = new Chart(ctxTrend, {
                type: 'line',
                data: {
                    labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', 'Current'],
                    datasets: [
                        {
                            label: 'Available Adult ICU Beds',
                            data: [42, 38, 30, 25, 34, 40, this.hospitals.reduce((acc, h) => acc + h.icuBeds.available, 0)],
                            borderColor: '#06b6d4',
                            backgroundColor: 'rgba(6, 182, 212, 0.1)',
                            fill: true,
                            tension: 0.4
                        },
                        {
                            label: 'Available Invasive Vents',
                            data: [30, 28, 22, 19, 26, 32, this.hospitals.reduce((acc, h) => acc + h.ventilators.available, 0)],
                            borderColor: '#10b981',
                            backgroundColor: 'rgba(16, 185, 129, 0.05)',
                            fill: true,
                            tension: 0.4
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { labels: { color: '#94a3b8' } } },
                    scales: {
                        x: { ticks: { color: '#64748b' }, grid: { color: 'rgba(255,255,255,0.05)' } },
                        y: { ticks: { color: '#64748b' }, grid: { color: 'rgba(255,255,255,0.05)' } }
                    }
                }
            });
        }

        if (ctxEquip) {
            if (this.chartEquipment) this.chartEquipment.destroy();
            
            let totalICU = this.hospitals.reduce((acc, h) => acc + h.icuBeds.available, 0);
            let totalVent = this.hospitals.reduce((acc, h) => acc + h.ventilators.available, 0);
            let totalECMO = this.hospitals.reduce((acc, h) => acc + h.ecmo.available, 0);
            let totalIsolation = this.hospitals.reduce((acc, h) => acc + h.isolationPods.available, 0);

            this.chartEquipment = new Chart(ctxEquip, {
                type: 'doughnut',
                data: {
                    labels: ['Adult ICU Beds', 'Ventilators', 'ECMO Units', 'Isolation Pods'],
                    datasets: [{
                        data: [totalICU, totalVent, totalECMO, totalIsolation],
                        backgroundColor: ['#06b6d4', '#10b981', '#c084fc', '#f59e0b'],
                        borderWidth: 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { position: 'bottom', labels: { color: '#94a3b8' } } }
                }
            });
        }
    }

    renderLogs() {
        const tbody = document.getElementById('networkLogTableBody');
        if (!tbody) return;

        tbody.innerHTML = this.logs.map(log => `
            <tr>
                <td style="font-family: var(--font-mono); color: var(--text-muted);">${log.time}</td>
                <td><strong>${log.hospital}</strong></td>
                <td><span class="eq-tag">${log.event}</span></td>
                <td>${log.details}</td>
                <td><span class="status-badge ${log.status === 'Warning' ? 'medium' : 'high'}">${log.status}</span></td>
            </tr>
        `).join('');
    }

    // 15-MINUTE EMERGENCY RESOURCE LOCK & QR PASS
    openBookingModal(hospitalId) {
        const modal = document.getElementById('bookingModal');
        const modalBody = document.getElementById('modalBody');
        if (!modal || !modalBody) return;

        const h = this.hospitals.find(item => item.id === hospitalId);
        if (!h) return;

        const passId = 'PASS-' + Math.floor(100000 + Math.random() * 900000);

        modalBody.innerHTML = `
            <div class="booking-pass-card">
                <div style="color: var(--primary); font-size: 0.8rem; font-weight: 700; letter-spacing: 1px;">DIGITAL EMERGENCY RESERVATION LOCK</div>
                <h2 style="font-size: 1.4rem; color: #ffffff; margin: 6px 0;">${h.name}</h2>
                <p style="color: var(--text-muted); font-size: 0.85rem;"><i class="fa-solid fa-location-dot"></i> ${h.address}</p>

                <div class="qr-code-box" id="qrcode"></div>

                <div style="font-size: 0.82rem; color: var(--text-muted);">RESOURCE RESERVED PASS TOKEN:</div>
                <div style="font-family: var(--font-mono); font-size: 1.2rem; font-weight: 800; color: var(--primary);">${passId}</div>

                <div style="margin-top: 16px;">
                    <div style="font-size: 0.8rem; color: var(--text-muted);">TIME REMAINING FOR AMBULANCE INTAKE:</div>
                    <div class="timer-box" id="lockTimer">14:59</div>
                </div>
            </div>

            <div style="display: flex; flex-direction: column; gap: 10px;">
                <button class="btn btn-primary" onclick="app.confirmBooking('${h.id}', '${passId}')">
                    <i class="fa-solid fa-check"></i> Confirm Bed Lock & Dispatch Ambulance
                </button>
                <button class="btn btn-secondary" onclick="document.getElementById('bookingModal').classList.remove('active')">
                    Cancel Lock
                </button>
            </div>
        `;

        modal.classList.add('active');

        // Generate QR Code
        setTimeout(() => {
            const qrElem = document.getElementById('qrcode');
            if (qrElem) {
                qrElem.innerHTML = '';
                new QRCode(qrElem, {
                    text: `PULSEGRID:${passId}:${h.id}`,
                    width: 128,
                    height: 128,
                    colorDark : "#070c18",
                    colorLight : "#ffffff",
                    correctLevel : QRCode.CorrectLevel.H
                });
            }
            this.startLockCountdown();
        }, 100);
    }

    startLockCountdown() {
        let secondsLeft = 15 * 60;
        const timerElem = document.getElementById('lockTimer');
        if (!timerElem) return;

        clearInterval(this.lockInterval);
        this.lockInterval = setInterval(() => {
            secondsLeft--;
            if (secondsLeft <= 0) {
                clearInterval(this.lockInterval);
                timerElem.textContent = 'EXPIRED';
                return;
            }
            const mins = Math.floor(secondsLeft / 60);
            const secs = secondsLeft % 60;
            timerElem.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }, 1000);
    }

    confirmBooking(hospitalId, passId) {
        const h = this.hospitals.find(item => item.id === hospitalId);
        if (h && h.icuBeds.available > 0) {
            h.icuBeds.available--;
            this.saveHospitals();
            this.addLog(h.name, 'EMERGENCY LOCK', `Pass #${passId} issued: 1 Adult ICU Bed reserved for incoming ambulance`, 'Success');
            this.renderAll();
        }
        document.getElementById('bookingModal').classList.remove('active');
        alert(`Success! Emergency Reservation Pass ${passId} active. Hospital ER team has been notified for immediate intake.`);
    }

    // SOS FAST DISPATCH
    triggerSOSModal() {
        const modal = document.getElementById('sosModal');
        if (!modal) return;
        modal.classList.add('active');

        setTimeout(() => {
            // Find nearest hospital with available bed
            const available = [...this.hospitals].filter(h => h.icuBeds.available > 0).sort((a, b) => a.distanceKm - b.distanceKm);
            if (available.length > 0) {
                const nearest = available[0];
                modal.classList.remove('active');
                this.openBookingModal(nearest.id);
            } else {
                alert('All city hospitals are currently at full capacity. Transferring request to Regional Emergency Command Center...');
                modal.classList.remove('active');
            }
        }, 2000);
    }

    // SIMULATED EMERGENCY SURGE EVENT
    triggerSimulatedSurge() {
        const randomHosp = this.hospitals[Math.floor(Math.random() * this.hospitals.length)];
        if (randomHosp.icuBeds.available > 0) {
            randomHosp.icuBeds.available = Math.max(0, randomHosp.icuBeds.available - 2);
            randomHosp.ventilators.available = Math.max(0, randomHosp.ventilators.available - 1);
            this.saveHospitals();
            this.addLog(randomHosp.name, 'INCIDENT SURGE', 'Multi-vehicle crash on Hwy 101: Emergency mass-casualty intake triggered', 'Warning');
            this.renderAll();
            alert(`[SIMULATION EVENT TRIGGERED] Mass-casualty incident logged at ${randomHosp.name}. Live telemetry updated!`);
        }
    }

    // REAL-TIME AUTO SIMULATION ENGINE
    startLiveSimulationEngine() {
        setInterval(() => {
            const randomIndex = Math.floor(Math.random() * this.hospitals.length);
            const h = this.hospitals[randomIndex];
            
            // Random small fluctuation (+1 or -1)
            const changeType = Math.random() > 0.5 ? 'bed_released' : 'bed_admitted';
            if (changeType === 'bed_released' && h.icuBeds.available < h.icuBeds.total) {
                h.icuBeds.available++;
                this.saveHospitals();
                this.addLog(h.name, 'Live Telemetry', `Patient discharged from ICU. Available beds: ${h.icuBeds.available}/${h.icuBeds.total}`);
                this.renderAll();
            } else if (changeType === 'bed_admitted' && h.icuBeds.available > 0) {
                h.icuBeds.available--;
                this.saveHospitals();
                this.addLog(h.name, 'Live Telemetry', `Emergency ER intake: ICU bed allocated. Remaining: ${h.icuBeds.available}/${h.icuBeds.total}`);
                this.renderAll();
            }
        }, 14000);
    }
}

// Global App Instance
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new PulseGridApp();
});
