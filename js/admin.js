document.addEventListener('DOMContentLoaded', () => {
    const addAdminForm = document.getElementById('addAdminForm');
    const addCandidateForm = document.getElementById('addCandidateForm');
    const addPositionForm = document.getElementById('addPositionForm');
    const candidatePosition = document.getElementById('candidatePosition');

    const admins = JSON.parse(localStorage.getItem('admins')) || [];
    const candidates = JSON.parse(localStorage.getItem('candidates')) || [];
    const positions = JSON.parse(localStorage.getItem('positions')) || [];

    const saveAdmins = () => localStorage.setItem('admins', JSON.stringify(admins));
    const saveCandidates = () => localStorage.setItem('candidates', JSON.stringify(candidates));
    const savePositions = () => localStorage.setItem('positions', JSON.stringify(positions));

    const renderPositions = () => {
        candidatePosition.innerHTML = '<option value="" disabled selected>Select Position</option>';
        positions.forEach(position => {
            const option = document.createElement('option');
            option.value = position.id;
            option.textContent = position.name;
            candidatePosition.appendChild(option);
        });
    };

    if (addAdminForm) {
        addAdminForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('adminUsername').value;
            const password = document.getElementById('adminPassword').value;
            admins.push({ username, password });
            saveAdmins();
            alert('Admin added successfully');
        });
    }

    if (addCandidateForm) {
        addCandidateForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('candidateName').value;
            const position = document.getElementById('candidatePosition').value;
            candidates.push({ id: candidates.length + 1, name, position });
            saveCandidates();
            alert('Candidate added successfully');
        });
    }

    if (addPositionForm) {
        addPositionForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('positionName').value;
            positions.push({ id: positions.length + 1, name });
            savePositions();
            renderPositions();
            alert('Position added successful
