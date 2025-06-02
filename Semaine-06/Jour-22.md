# Objectifs Journaliers

## Lundi 02/06/2025

### Installer Angular et Angular CLI
  - [ ] Installer Node.js (si non présent)
  - [ ] Installer Angular CLI globalement : `npm install -g @angular/cli`
  - [ ] Vérifier l’installation avec `ng version`

### Utiliser Angular CLI
  - [ ] Créer une application avec `ng new mon-app`
  - [ ] Comprendre les options proposées lors de la création (`SCSS`, routing, etc.)
  - [ ] Lancer le serveur de développement avec `ng serve`
  - [ ] Générer un composant avec `ng generate component`
  - [ ] Générer un service avec `ng generate service`
  - [ ] Lister toutes les commandes disponibles avec `ng help`

### Explorer l’architecture d’un projet Angular
  - [ ] Comprendre le rôle des répertoires principaux (`src/`, `app/`, `assets/`, etc.)
  - [ ] Identifier les fichiers clés : `main.ts`, `app.module.ts`, `angular.json`
  - [ ] Découvrir l'architecture SPA (Single Page Application)

### Créer et utiliser des composants
  - [ ] Comprendre le rôle du décorateur `@Component`
  - [ ] Utiliser un composant enfant dans `app.component.html`
  - [ ] Modifier le HTML, CSS et TS d’un composant

### Lier HTML et TypeScript
  - [ ] Interpolation : `{{ message }}`
  - [ ] Property binding : `[src]="imageUrl"`
  - [ ] Event binding : `(click)="increment()"`
  - [ ] Two-way binding (introduction) avec `[(ngModel)]` (à approfondir jour 2)

### Mini-exercice pratique :
  - [ ] Créer un composant `HelloUserComponent` qui affiche un nom et un compteur de clics. Ajouter un champ d’input pour changer le nom (avec `[(ngModel)]`).