import './style.css';

const modal = document.querySelector("#modal");
const openModals = document.querySelectorAll("#addTaskBtn");
const closeModal = document.querySelector("#closeBtn");
openModals.forEach(openModal => openModal.addEventListener("click", () => {
    modal.showModal();
    
}));

closeModal.addEventListener("click", () => {
    document.getElementById("formTask").reset();
    modal.close();
});


const addProject = document.querySelector("#addProjectBtn");
const addProjectContainer = document.getElementById('nav-project-add')
addProject.addEventListener('click', () => {
    addProjectContainer.classList.remove("hidden");
});


const closeProject = document.querySelector("#closeProjectBtn");
closeProject.addEventListener('click', () => {
    addProjectContainer.classList.add('hidden');
});