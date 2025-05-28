# Objectifs Journaliers

## Mardi 27/05/2025

### POO (Programmation Orientée Objet) :

- [ ] Comprendre ce qu'est l'héritage :
  - [ ] À quoi sert l'héritage ?
  - [ ] Comment écrit-on de l'héritage ?
  - [ ] Dans quel cas utilise t-on l'héritage ?
  - [ ] Comprendre les relations parents -> enfants et enfants -> parents.
- [ ] Comprendre ce qu'est une interface ?
  - [ ] Comprendre l'interet des interfaces.
  - [ ] Quelle différence avec une classe abstraite ?
- [ ] Comprendre le principe de relations entre les objets (UML) :
  - [ ] Qu'est ce que l'association ?
  - [ ] Qu'est ce que l'aggrégation ?
  - [ ] Qu'est ce que la composition ?
- [ ] Comprendre ce qu'est le polymorphisme :
  - [ ] À quoi sert le polymorphisme ?
  - [ ] Comprendre l'utilité du polymorphisme.
- [ ] Rattrapages des dailys manquants de la semaine

### 1. Classes : Le Plan de l'Objet

* **Définition :** Un modèle ou un moule pour créer des objets.
* **Syntaxe (JS/TS) :**
    ```javascript
    class NomDeLaClasse {
      constructor(param1, param2) {
        this.prop1 = param1; // Initialisation des propriétés
      }

      methode() {
        // Logique de la méthode
        console.log(this.prop1); // 'this' référence l'instance actuelle
      }
    }
    ```
* **Instance :** Un objet créé à partir d'une classe (ex: `const monObjet = new NomDeLaClasse();`).

---

### 2. Héritage : La Relation "Est un type de"

* **Concept :** Permet à une classe (`Enfant`/`Sous-classe`) de réutiliser et d'étendre les propriétés et méthodes d'une autre classe (`Parent`/`Super-classe`).
* **Utilité :** Réutilisation de code, modélisation de hiérarchies (ex: `Chien` est un type d'`Animal`), maintenance facilitée.
* **Syntaxe (JS/TS) :**
    ```javascript
    class Parent { /* ... */ }

    class Enfant extends Parent {
      constructor(paramsParent, paramsEnfant) {
        super(paramsParent); // Appel OBLIGATOIRE au constructeur du parent
        this.propEnfant = paramsEnfant;
      }
      // Peut ajouter de nouvelles méthodes ou redéfinir (override) celles du parent
    }
    ```
* **Relation Parent ↔ Enfant :**
    * **Enfant peut accéder aux membres du Parent.**
    * **Parent ne connaît pas les spécificités des Enfants.**
    * Un objet `Enfant` **est un type de** `Parent`.

---

### 3. Interfaces (en TypeScript) : Le Contrat

* **Concept :** Définit un **contrat** ou une "forme" (un ensemble de propriétés et/ou de signatures de méthodes) qu'une classe ou un objet doit respecter. Elle ne contient aucune implémentation.
* **Utilité :** Standardisation du comportement, facilitation de la collaboration, typage fort, permet le polymorphisme.
* **Syntaxe (TS) :**
    ```typescript
    interface NomInterface {
      propriete: Type;
      methode(param: Type): RetourType;
    }

    class MaClasse implements NomInterface {
      propriete: Type; // Doit implémenter la propriété
      constructor(prop: Type) { this.propriete = prop; }
      methode(param: Type): RetourType {
        // Doit implémenter la méthode
        return /* ... */;
      }
    }
    ```
* **Différence avec une Classe Abstraite :**
    * **Interface :** "Ce que tu dois faire" (contrat pur). Peut être implémentée multiple fois.
    * **Classe Abstraite :** "Ce que tu es et ce que tu peux faire, et ce que tu dois finir de faire" (base avec potentiellement des implémentations partielles). Une seule peut être étendue.

---

### 4. Relations entre Objets (UML) : Comment ils Interagissent

* **Association :**
    * **Signification :** Relation la plus générale. Les objets sont **liés** et peuvent interagir.
    * **Dépendance de vie :** Aucune (les objets peuvent exister indépendamment).
    * **Exemple :** Un `Client` a une `Adresse`.
    ```typescript
    class Adresse { /* ... */ }
    class Client {
      adresse: Adresse; // Association
      constructor(adr: Adresse) { this.adresse = adr; }
    }
    ```

* **Agrégation :**
    * **Signification :** Relation "fait partie de" **faible**. L'objet "partie" peut exister indépendamment de l'objet "tout".
    * **Dépendance de vie :** Faible (la destruction du "tout" ne détruit pas la "partie").
    * **Exemple :** Une `Équipe` agrège des `Joueurs`. Un `Joueur` peut exister sans `Équipe`.
    ```typescript
    class Joueur { /* ... */ }
    class Equipe {
      joueurs: Joueur[]; // Agrégation (les joueurs sont passés/ajoutés)
      constructor() { this.joueurs = []; }
      ajouterJoueur(j: Joueur) { this.joueurs.push(j); }
    }
    ```

* **Composition :**
    * **Signification :** Relation "fait partie de" **forte**. L'objet "partie" ne peut **pas exister** sans l'objet "tout". Le cycle de vie est lié.
    * **Dépendance de vie :** Forte (la destruction du "tout" entraîne la destruction de la "partie").
    * **Exemple :** Une `Voiture` est composée d'un `Moteur`. Un `Moteur` est créé par et dépend de sa `Voiture`.
    ```typescript
    class Moteur { /* ... */ }
    class Voiture {
      moteur: Moteur; // Composition (le moteur est créé DANS le constructeur de Voiture)
      constructor() {
        this.moteur = new Moteur(); // Création de la partie par le tout
      }
    }
    ```

---

### 5. Polymorphisme : La Capacité à Prendre Plusieurs Formes

* **Concept :** La capacité d'objets de classes différentes (mais liées par héritage ou interface) à être traités de manière uniforme, en appelant une méthode commune qui s'exécute différemment selon le type réel de l'objet.
* **Utilité :** Simplifie le code, améliore la flexibilité et l'extensibilité, permet d'écrire des fonctions génériques.
* **Comment ça marche :** Souvent par la **redéfinition de méthode (method overriding)** où les classes enfants implémentent à leur manière une méthode définie dans la classe parente (ou l'interface).
* **Exemple :** Une fonction qui prend un tableau d'`Animal` et appelle `animal.faireDuBruit()`. Le bruit sera différent pour un `Chien` ou un `Chat`, mais la fonction n'a pas besoin de savoir le type exact.
    ```typescript
    class Animal {
      faireDuBruit(): string { return "Bruit générique"; }
    }
    class Chien extends Animal {
      faireDuBruit(): string { return "Wouaf !"; }
    }
    class Chat extends Animal {
      faireDuBruit(): string { return "Miaou !"; }
    }

    function entendreAnimaux(animaux: Animal[]) {
      for (const animal of animaux) {
        console.log(animal.faireDuBruit()); // Appel polymorphique
      }
    }
    const ferme = [new Chien(), new Chat()];
    entendreAnimaux(ferme); // Affiche "Wouaf !" puis "Miaou !"
    ```

---
