# Beginning:

Bonjour,
vous trouverez ici mon ressenti, mes interrogations, les difficultés rencontrées, bref les kiff les déceptions 😂.

## intallation du repo et des dépendances.

Premier questionnement : "est ce que tu as besoin de lamatomic (librairie de composant construite au cours du developpement de la V2 de lamacompta.co)?"
a première vue, je ne pense pas en avoir besoin, l'exercice comporte peu de pages, et d'élements. Il est possible que je change d'avis en cours de route.
Rassuré 😌 : je suis pas obligé de faire du css pure, je peux utiliser SASS.

j'avoue pas avoir tout compris la procédure pour rendre le projet. j'ai l'impression qu'il faut créer une branche sur le repo du test, et le stocker sur mon github en remote. Hummm j'avoue que je veux bien plus de précisions concernant cette procédure. J'ai déjà utlisé gitlab avec lamacompta mais j'avoue que je me suis contenter de cloner le repo et de bosser dessus avec des branches et tout. je n'ai pas fais de lien avec github.

### mise en place de l'organisation de travail

Je vais décomposer le projet en views ou pages.
créer des composants pour chaque élements répétififs.
chaque page et composants auront leurs propres scss.

### on débute par les Footer et Header

Afin de struturer chaque page, on commence par le Header et le Footer.
je voulais un design sobre et sombre pour faire ressortir les films et séries.
vous pourrez trouver mon [!github](https://github.com/MaloLebrin/) dans le footer en cliquant sur mon nom.

### Deuxiement débuter les pages

il me fallait agencer grossièrement les pages. j'ai donc ajouté un titre, un peu de style(background, flexbox) afin de structurer le tout.
j'ai regarder si mes liens fonctionnaient dans le header.
ensuite il me fallait commencer à faire des composants que je pourrai réutiliser pour les films les séries.
Less code is better code me disait mon formateur.
j'adore cette idée. C'est un peu comme une quête de toujours mieux sans cesse j'adore.

Inutile de préciser que j'ai commence à kiffé lorsque je dois récupérer les données de l'API. D'ailleurs c'est celle-ci => https://www.themoviedb.org/settings/api
Je pensais ça assez facile l'ayant beaucoup fait en React ([!cf:Github](https://github.com/MaloLebrin/)).
Mais j'avais complèement oublié que je n'ai pas eu le temps de découvrir cela en vue à Lamacompta puisque je suis parti en formation avant que l'api ne soit prete.
Il en est de même pour le Store. Vous imaginez ma désillusions 😂...

Après avoir parcouru la documentation de Vue, je finis par comprendre à peut près comment tout cela fonctionne. En tout cas la logique générale ne me parait pas très différente de React. C'est plus l'utilisation du store en lui même qui me perturbe. Mais ce n'est qu'un défi de plus, qui va pouvoir étancher, le temps de quelques semaines, ma soif d'apprentissage. Cependant, j'ai bien envie de voir comment "il faut faire", histoire d'acquérir de bonne pratique à ce sujet. Donc si jamais vous voulez m'expliquer je suis chaud !

### Une fois les datas récupérées...

il ma fallut quelques heures (environ 2 ou 3) pour réussir à faire quelque chose qui fonctionne. Seulement j'ai le sentiment qu'il a mieux à faire concernant la récupération des données. Je suis donc preneur de conseils.
Généralement une fois cela réalisé, c'est une petite victoire à ajouter au palmarès du projet. Ouais je sais c'est pas grand chose mais tout est bon à prendre 🤗, surtout quand c'est la première fois en vue. Autant en profiter le temps viendra vite où cela deviendra une formalité, en tout cas je l'espère.

Non content d'avoir les datas dans ma console il faut passer les données plus précises (titre, description, image) en props. Rien de bien problématique à ce moment.
J'ai pris le temps de stylisé au mieux le composant movieCard qui me renvoie chaque film ou série. Je voulais qu'on ai envie de regarder le film ou la série en question.

Par la suite je me suis rendu compte que ce composant (movieCard) serait très utile pour afficher non seulement les films mais aussi les séries, j'ai donc refactorisé le code et surout le SCSS qui était plus conséquent pour le mettre dans App.vue, étant donné qu'il serait utilisable dans la plupart des pages. Don't repeat yourself me disait mon formateur !!!
D'habitude, je fais en sorte que le soit contruit presque dans son intégralité avant de refactoriser. Mais un vieille adage dit : "prendre le temps, c'est gagner du temps".
Autant commencer maintenant.

#### page OneElement

Comme une leçon apprise est une leçon de suite appliquée (enfin normalement), je me suis dis que la page OneElement doit être prévu pour les films mais aussi les séries.
Au click, sur une movieCard, on est redirigié vers la page de l'élement en question.
Hummm encore une petite désillusion... Vous avez deviné ? Les params. Certes, j'ai à plusieurs reprises expérimenté cela en React, mais encore une fois jamais en Vue.
Ni une ni deux, je fonce sur la documentation. Bah la j'avoue que j'ai pas tout compris. Des précisions please 🙏🏻 !!!
j'ai utilisé la manière qui me semblait la plus compréhensible dans un premier temps mais aussi la plus judicieuse compte de tenu du site. Autrement dit, entourer les movieCards d'un routerLink qui envoit en params l'id de l'élément. A la redirection on tombe sur la page OneElement qui fait une requete Axios vers les détails de cet élément (Film ou série).

Une fois les données récupérées, yes j'ai kiffé de ouf !!!!
Plus sérieusement, l'idée sur cette page était d'avoir un visuel plus claire que la HomePage sur l'élément en question. En partant de ce principe, l'image doit être très visible, voir un élement premier de la page.

Encore une fois il faut donner envie de voir le film !

À droite de l'image, on retrouve des informations plus détaillées sur le film ou la série. Je me suis bien fais kiffé sur le design aussi. je voulais quelque chose de simple qui joue sur les couleurs ou la taille des éléments. On voit par exemple en premier le titre et la description car les infos plus secondaire sont plus petites.

Ouais je me suis fais un autre kiff sur les tags qui définissent les genres de l'élément. je pense ici qu'il ya encore une fois une meilleure manière de traiter la question. j'ai donné le nom du tag à une class de SCSS dynamquement ce qui m'a permit de lui donner un style. Mais je pense qu'il a plus simple. ça me parait pas très propre, ou en tout cas très perfectible.

#### pagination

Après tout cela je me suis penché sur la pagination de chaque list (homepage, tvshows page).
j'ai utilisé un package pour aller plus vite. Je pourrai le faire from scratch mais l'idée était de gagner du temps.
une fois celle-ci implantée il fallait qu'elle soit réactive et que je puisse aller chercher mes data en fonction de la page ou je me trouve.
j'ai du donc rendre ma requete dynamique, en soit rien de bien compliqué. l'ennui c'est qu'il fallait que j'apppelle ma méthode à plusieurs endroit dans un watch pour que la requete se fasse au changement de page. Dans le mounted pour qu'elle se fasse à la création du composant.

J'ai du desactivé ES6 pour les functions sinon cela marchait pas avec le match et les methods. j'aimerai bien comprendre pourquoi ce n'est pas possible, cela me parait surprenant.
Je suppose que vous avez la solution 😁
Si oui les gars je suis preneur. Learn Learn and learn 💪🏻
