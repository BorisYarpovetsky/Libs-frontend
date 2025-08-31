/* Toggle theme color */
const toggleTeam = document.querySelector('.toggle__theme');
if (toggleTeam) {
    const toggleTeamInput = toggleTeam.querySelector('.toggle__theme-input');
    toggleTeam.addEventListener('click', ()=>{
        if (toggleTeamInput.checked) {
            bodyEl.classList.add('green__theme');
        }
        else {
            bodyEl.classList.remove('green__theme');
        }
    });		
}