# Objectifs Journaliers

## Mardi 03/06/2025

### Directives structurelles
  - [ ] `*ngIf` pour afficher ou masquer un élément selon une condition
  - [ ] `*ngFor` pour afficher une liste d’éléments
  - [ ] `*ngIf...else` avec `<ng-template>`

###Directives d’attribut
  - [ ] `[ngStyle]` pour appliquer des styles dynamiques
  - [ ] `[ngClass]` pour appliquer des classes CSS dynamiques

### Pipes
  - [ ] Utiliser des pipes intégrés : `uppercase`, `date`, `currency`, `json`
  - [ ] Enchaîner plusieurs pipes
  - [ ] Créer un pipe personnalisé (si temps)

### Formulaires avec `FormsModule`
  - [ ] Importer `FormsModule` dans `AppModule`
  - [ ] Lier des champs avec `[(ngModel)]`
  - [ ] Gérer l’envoi du formulaire avec `(ngSubmit)`
  - [ ] Ajouter des validations de base (`required`, `minlength`, etc.)
  - [ ] Afficher les erreurs de validation avec `*ngIf`

### Modules Angular
  - [ ] Créer un module personnalisé avec `ng generate module`
  - [ ] Comprendre `declarations`, `imports`, `exports`
  - [ ] Réorganiser les composants dans différents modules

### Mini-exercice pratique :
  - [ ] Créer un `UserFormComponent` avec un formulaire de création d’utilisateur :
    - [ ] champs : prénom, nom, email
    - [ ] bouton de validation avec affichage des données saisies
    - [ ] affichage d’un message d’erreur si un champ est vide