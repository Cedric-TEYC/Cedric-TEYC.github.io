// maj année footer
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('y');
  if (y) y.textContent = new Date().getFullYear();
});

// copie email
function copyEmail() {
  const email = "c.blondel-pro@outlook.com";
  navigator.clipboard.writeText(email).then(() => {
    alert("📋 L'adresse mail de Cédric a bien été copiée dans le presse-papiers !");
  }).catch(err => console.error("Erreur lors de la copie :", err));
}
window.copyEmail = copyEmail; // pour l'attribut onclick
