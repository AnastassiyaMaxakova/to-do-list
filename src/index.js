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
