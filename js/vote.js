document.addEventListener('DOMContentLoaded', () => {
    const voteForm = document.getElementById('voteForm');
    const candidateSelect = document.getElementById('candidateSelect');
    const resultsList = document.getElementById('resultsList');

    const votes = JSON.parse(localStorage.getItem('votes')) || [];
    const candidates = JSON.parse(localStorage.getItem('candidates')) || [];
    const positions = JSON.parse(localStorage.getItem('positions')) || [];

    const saveVotes = () => localStorage.setItem('votes', JSON.stringify(votes));

    const renderCandidates = () => {
        candidateSelect.innerHTML = '<option value="" disabled selected>Select Candidate</option>';
        candidates.forEach(candidate => {
            const option = document.createElement('option');
            option.value = candidate.id;
            option.textContent = candidate.name;
            candidateSelect.appendChild(option);
        });
    };

    const renderResults = () => {
        resultsList.innerHTML = '';
        const results = candidates.map(candidate => {
            const voteCount = votes.filter(vote => vote.candidateId === candidate.id).length;
            return { name: candidate.name, votes: voteCount };
        }).sort((a, b) => b.votes - a.votes);
        results.forEach(result => {
            const listItem = document.createElement('li');
            listItem.textContent = `${result.name}: ${result.votes} votes`;
            resultsList.appendChild(listItem);
        });
    };

    if (voteForm) {
        voteForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const candidateId = parseInt(candidateSelect.value);
            votes.push({ candidateId });
            saveVotes();
            alert('Vote cast successfully');
        });
    }

    if (candidateSelect) {
        renderCandidates();
    }

    if (resultsList) {
        renderResults();
    }
});
