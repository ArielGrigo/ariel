// script.js
var panier = [];

function ajouterAuPanier(Image,description,prix) {
    var produit  = {
        image: "C:\Users\GRINGO\Documents\My Web Sites\Web Perso\P web \image1.jpg",
        description: "Cet chien a vécu la 1ère guerre mondiale",
        prix: "19,99 €"
    };
        
    panier.push(produit);
    afficherPanier();
};
        
function viderPanier() {
    panier = [];
    afficherPanier();
}
function ModifierPanier() {
    var action = 
prompt("Voulez-vous ajouter ou retirer un élément du panier? (ajouter/retirer)");
 if( action === "ajouter") {
    var description = 
    prompt("Entrez la description du produit:");
    var prix = 
    prompt("Entrez le prix du produit:");
    ajouterAuPanier(image,description,prix);
 } else if (action === "retirer") {
    var index = 
    prompt("Entrez l'indice de l'élément à retirer :");
    retirerDuPanier(index);
 } else{
    alert("Action invalide");
 }
 }
function retirerDuPanier(index)
{
    panier.splice(index, 1);
    afficherPanier();
}

function afficherPanier() {
    var panierElement = document.getElementById("panier");
    panierElement.innerHTML = "";

    for (var i = 0; i < panier.length; i++) {
        var produit = panier[i];

        var li = document.createElement("li");
        li.innerHTML = `
            <img src="${produit.image}" alt="Produit">
            <span>${produit.description}</span>
            <span>${produit.prix}</span>
        `;

        panierElement.appendChild(li);
    }
}