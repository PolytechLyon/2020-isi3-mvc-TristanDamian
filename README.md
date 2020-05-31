# ISI3 - MVP design pattern - "Game of Life"


> Le rapport est à fournir dans ce document sous chacune des questions. 
> **Ne restez pas bloqués bêtement, demander de l'aide**
> Ne copier pas le code de votre voisin, ça se voit.

Nom/Prénom: DAMIAN Tristan

Lien du codesandbox: https://codesandbox.io/s/aged-cdn-1z3dq?file=/src/gameOfLife/model.js:2240-2242

> Pour générer un codesandbox associé à votre code, [suiver cette doc](https://codesandbox.io/docs/importing#import-from-github)

## Game of Life

Le jeu de la vie est un automate cellulaire qui répond à des règles très simple.
Il est inventé par [John Horton Conway](https://fr.wikipedia.org/wiki/John_Horton_Conway)(1937-2020).

## Avant-propos

1. Expliquer le design pattern MVC à l'aide d'un schéma à insérer directement ici. 
Utiliser un outils comme Dia pour le représenter. Je veux **votre** schéma, pas un de ceux qu'on peut trouver sur le net.
![MVC](images/MVC.png)
2. Expliquer ce pattern à l'aide en complétant ce texte.

Le pattern MVP, vise à découper le modèle , de la vue et du contrôleur afin de rendre le code plus modulaire.
Les responsabilités ne sont alors plus rassemblées dans une même classe.
On peut ainsi changer l'aspect visuel de sont application sans pour autant impacter le code.

3. Expliquer dans quels cas on doit privilégier le pattern MVC.
On le privilégie pour les applications web, pour séparer la vue du côté client, et la logique de l'application (modèle et contrôleur) du côté serveur.

## A faire (obligatoire)

- Render le jeu fonctionel tout en respectant le design pattern MVC.
- Le bouton `start` doit lancer le jeu.
- Le bouton `stop` doit arrêter le jeu en l'état, le `start` relance le jeu.
- le bouton `reset` arrête le jeu et vide remet à la grille à l'état initiale.

### Observer Observable

Afin de mettre à jour la vue à chaque nouvelle génération du jeu, la fonction `updated` doit notifier la view afin qu'elle se mette à jour.
En quoi cela relève du design pattern ObserverObservable.

1. Expliquer votre implémentation:
On ajoute à la classe modèle un attribut callback. Le constructeur prend maintenant en argument le callback. Dans game.js, on appelle le constructeur de model avec la fonction drawGame en argument. L'attribut callback fait donc référence à la fonction drawGame. Dans la fontion update, model lance son callback en se passant lui-même en argument. On exécute donc un drawGame qui redessine la grille.		

L'usage d'une callback permet ici de notifier afin dire à la _View_ de se redessiner.
L'objet _Model_ n'a pas de lien avec la vue pourtant grâce à la callback il peut notifier la Vue.

2. Insérer ici un UML montrant le pattern Observer-Observable liés aux objects de ce TP.
![Observer](images/Observer.png)
## Optionel

> Si vous voulez apprendre d'autres choses

- Faire sorte de pouvoir changer les dimensions de la grille par in `<input/>` HTML.
- Faire en sorte de pouvoir modifier l'état d'une cellule en cliquant dessus.

## :warning: À rendre

- Une URL de codesandox pointant sur votre projet github afin que je puisse voir et tester le code.
- Le rapport complet.
