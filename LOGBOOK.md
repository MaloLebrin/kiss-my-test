# Beginning:

Bonjour,

#### Petite présentation:

Je suis un ancien psychologue en reconversion professionnelle. Mes premières lignes de code étaient une landing page pour ma boîte que je débutais à l'époque. (juillet 2019). J'ai kiffé ce moment ou j'ai découvert le code.
J'ai malheureusement dû mettre ça de côté pour me concentrer sur la boîte. Je me suis vite rendu compte que je préférai retourner coder qu'être psy. c'est à ce moment que j'ai pris la décision d'arrêter la boîte, de mettre de l'argent de coté pour payer une formation, et commencer à coder. En parallèle d'intérim, j'apprenais à coder dans mon coin sur OpenClassroom. Je demandais souvent de l'aide au CTO de Lamacompta.co, si bien qu'il a dit quelque chose comme :
"tu es mignon, mais j'n’ai pas le temps pour t'aider à apprendre, viens bosser pour moi comme ça on se rend tous les deux services". Proposition rêvée dans mon cas. J'ai accepté.
On a travaillé ensemble de juin à octobre. Ce partenariat s'est stoppé si tôt, car j'entamais ma formation au bootcamp LeReacteur à paris avant de rencontrer Anne-Sophie. Voilà vous connaissez l'histoire dans les grandes lignes.

vous trouverez ici mon ressenti, mes interrogations, les difficultés rencontrées, bref les kiffs et les déceptions 😂.

## installation du repo et des dépendances.

Premier questionnement : "est-ce que tu as besoin de lamatomic (librairie de composant construite au cours du développement de la V2 de lamacompta.co)?"
À première vue, je ne pense pas en avoir besoin, l'exercice comporte peu de pages, et d'éléments. Il est possible que je change d'avis en cours de route.
Rassuré 😌 : je ne suis pas obligé de faire du css pure, je peux utiliser SASS.

Je n’avoue pas avoir tout compris la procédure pour rendre le projet. j'ai l'impression qu'il faut créer une branche sur le repo du test, et le stocker sur mon github en remote. Hummm, j'avoue que je veux bien plus de précisions concernant cette procédure. J'ai déjà utilisé gitlab avec lamacompta, mais j'avoue que je me suis contenté de cloner le repo et de bosser dessus avec des branches et tout. Je n'ai pas fait de lien avec github.

### mise en place de l'organisation de travail

Je vais décomposer le projet en views ou pages.
Créer des composants pour chaque élément répétitif.
Chaque page et composants auront leurs propres scss.

Je commence par créer un fichier de couleur (colors.scss), utile si on veut changer toutes les couleurs sur le site. Ealles se trouveront qu'à un seul endroit.

### on débute par les Footer et Header

Afin de structurer chaque page, on commence par le Header et le Footer.
Je voulais un design sobre et sombre pour faire ressortir les films et séries.
Vous pourrez trouver mon [!github](https://github.com/MaloLebrin/) dans le footer en cliquant sur mon nom.

### Deuxiement débuter les pages

Il me fallait agencer grossièrement les pages. J'ai donc ajouté un titre, un peu de style(background, flexbox) afin de structurer le tout.
J'ai regardé si mes liens fonctionnaient dans le header.
Ensuite il me fallait commencer à faire des composants que je pourrai réutiliser pour les films les séries.
Less code is better code me disait mon formateur.
j'adore cette idée. C'est un peu comme une quête de toujours mieux sans cesse magnifique.

Inutile de préciser que j'ai commencé à kiffer lorsque je dois récupérer les données de l'API. D'ailleurs c'est celle-ci => https://www.themoviedb.org/settings/api
Je pensais ça assez facile l'ayant beaucoup fait en React ([!cf:Github](https://github.com/MaloLebrin/)).
Mais j'avais complément oublié que je n'ai pas eu le temps de découvrir cela en vue à Lamacompta puisque je suis parti en formation avant que l'api ne soit prête.
Il en est de même pour le Store. Vous imaginez ma désillusion. 😂...

Après avoir parcouru la documentation de Vue, je finis par comprendre à peu près comment tout cela fonctionne. En tout cas la logique générale ne me paraît pas très différente de React. C'est plus l'utilisation du store en lui même qui me perturbe. Mais ce n'est qu'un défi de plus, qui va pouvoir étancher, le temps de quelques semaines, ma soif d'apprentissage. Cependant, j'ai bien envie de voir comment "il faut faire", histoire d'acquérir de bonne pratique à ce sujet. Donc si jamais vous voulez m'expliquer je suis chaud !

### Une fois les datas récupérées...

Il m’a fallu quelques heures (environ 2 ou 3) pour réussir à faire quelque chose qui fonctionne. Seulement j'ai le sentiment qu'il a mieux à faire concernant la récupération des données. Je suis donc preneur de conseils.
Généralement une fois cela réalisé, c'est une petite victoire à ajouter au palmarès du projet. Ouais je sais c'est pas grand-chose, mais tout est bon à prendre 🤗, surtout quand c'est la première fois en vue. Autant en profiter le temps viendra vite où cela deviendra une formalité, en tout cas je l'espère.

Non content d'avoir les datas dans ma console il faut passer les données plus précises (titre, description, image) en props. Rien de bien problématique à ce moment.
J'ai pris le temps de styliser au mieux le composant movieCard qui me renvoie chaque film ou série. Je voulais qu'on ai envie de regarder le film ou la série en question.

Par la suite je me suis rendu compte que ce composant (movieCard) serait très utile pour afficher non seulement les films, mais aussi les séries, j'ai donc refactorisé le code et surtout le SCSS qui était plus conséquent, étant donné qu'il serait utilisable dans la plupart des pages. Don't repeat yourself me disait mon formateur !!!
D'habitude, je fais en sorte que le soit construit presque dans son intégralité avant de refactoriser. Mais un vieil adage dit : "prendre le temps, c'est gagner du temps".
Autant commencer maintenant.

### Page OneElement

Comme une leçon apprise est une leçon de suite appliquée (enfin normalement), je me suis dit que la page OneElement doit être prévue pour les films, mais aussi les séries.
Au click, sur une movieCard, on est redirigé vers la page de l'élément en question.
Hummm encore une petite désillusion... Vous avez deviné ? Les params. Certes, j'ai à plusieurs reprises expérimenté cela en React, mais encore une fois jamais en Vue.
Ni une ni deux, je fonce sur la documentation. Bah là j'avoue que je n’ai pas tout compris. Des précisions please 🙏🏻 !!!
J'ai utilisé la manière qui me semblait la plus compréhensible dans un premier temps, mais aussi la plus judicieuse compte de tenu du site. Autrement dit, entourer les movieCards d'un routerLink qui envoie en params l'id de l'élément. À la redirection on tombe sur la page OneElement qui fait une requête Axios vers les détails de cet élément (Film ou série).

Dans cette page, j'ai fait le choix de laisser ma requête dans la page puisque les données et la requête ne se feront qu'ici. De plus, la requête permet d'obtenir les détails du film ou de la série, elle est donc bien différente de celles qui permettent de récupérer les listes. Au début je pensais récupérer les informations sur le film ou la série en question dans le store. Mais comme les requêtes sont différentes, les informations le sont aussi c'est pourquoi j'ai décider de la laisser dans la page OneMovie or OneTvShow.

Une fois les données récupérées, yes j'ai kiffé de ouf !!!!
Plus sérieusement, l'idée sur cette page était d'avoir un visuel plus claire que la HomePage sur l'élément en question. En partant de ce principe, l'image doit être très visible, voir un élément premier de la page.

Encore une fois il faut donner envie de voir le film !

À droite de l'image, on retrouve des informations plus détaillées sur le film ou la série. Je me suis bien fait kiffer sur le design aussi. Je voulais quelque chose de simple qui joue sur les couleurs ou la taille des éléments. On voit par exemple en premier le titre et la description, car les infos plus secondaires sont plus petites.

Ouais je me suis fait un autre kiff sur les tags qui définissent les genres de l'élément. Je pense ici qu'il ya encore une fois une meilleure manière de traiter la question. J'ai donné le nom du tag à une class de SCSS dynamiquement ce qui m'a permis de lui donner un style. Mais je pense qu'il a plus simple. Ça ne me paraît pas très propre, ou en tout cas très perfectible.

### Pagination

Après tout cela je me suis penché sur la pagination de chaque list (homepage, tvshows page).
J'ai juste ajouté un bouton show more qui va incrémenter la currentPage. J'aurais pu faire une pagination plus complexe. Mais l'idée était de ne pas trop perdre de temps dessus. Cette solution m’a semblée la plus simple.

Une fois celle-ci implantée il fallait qu'elle soit réactive et que je puisse aller chercher mes data en fonction de la page ou je me trouve.
J'ai du donc rendre ma requête dynamique, en soit rien de bien compliqué. L'ennui c'est qu'il fallait que j'appelle ma méthode à plusieurs endroits dans un watch pour que la requête se fasse au changement de page. Dans le mounted pour qu'elle se fasse à la création du composant.

J'ai du désactivé ES6 pour des fonctions sinon cela ne marchait pas avec le match et les methods. J'aimerai bien comprendre pourquoi ce n'est pas possible, cela me paraît surprenant.
Je suppose que vous avez la solution 😁
Si oui les gars je suis preneur. Learn Learn and learn 💪🏻.

### Réorganisation du store

En parcourant les documentations, je me suis rendu compte que personne ne faisait de requête dans les mutations. La question est pourquoi ? A priori, ce n'est pas une bonne pratique. La documentation vue elle-même recommande de les placer dans les actions. Trop bien un nouveau truc d'appris dans cet exo. Pas si compliqué que ça sur cette étape. À vous de me dire ce que vous pensez du résultat. 😇

J'ai essayé de factoriser les fonctions permettant d'ajouter des items en favori. l'idée est qu'on doit premièrement savoir si l'item est un film ou une série. Et ensuite, l'ajouter au favori s'il n'existe pas déjà dedans ! Cette fonction me semble assez conséquente, mais elle fait le job je trouve. À vous de me dire si dans ce cas il fallait en faire deux étant donné qu'on ne traite pas forcément les mêmes infos, ou si au contraire j'ai bien fait de penser comme ça pour optimiser le code vu que cela ne représente qu'une fonctionnalité.

### Mais où en est-on ?

Un bref résumé s'impose ! à l'heure actuelle, il existe deux pages une (home) qui affiche les films, une (tvshows) qui affiche les séries.
Ensuite deux autres pages qui affichent le détail de la série ou du film sélectionné. (respectivement OneTvShow & OneMovie). Je réfléchis à les fusionner pour alléger le nombre de pages. Mais en même temps j'ai peur que le fichier soit trop conséquent. Je vais tester l'idée.

On a ensuite une page qui stocke les favoris. (MyFavorites). Il me reste à implémenter le système de local storage. Je ne me suis pas encore penché dessus. En React encore une fois 😁 ce n’est pas compliqué non plus. Je l'ai déjà utilisé pour des données utilisateur (token, mail, username, etc.). Cette fois je crie pas victoire trop vite je teste et je vous tiens au courant. Finalement, pas si compliqué que ça. Après je ne suis pas sûr du tout de l'avoir utilisé à bon escient. Je vous laisse me dire si on peut mieux faire.

Ensuite il me restera une grosse session refactoring. Comme toujours passage obligatoire pour tout projet web.

### Refacto

Concernant le refactoring, j'ai mutualisé pas mal de scss, ce qui fait que certaines pages en sont presque dépourvues. J'ai pris la décision de ne pas faire une page commune pour obtenir le détail d'une série et le détail d'un film. Je trouvais l'opération complexe et peu utile étant donné que les infos traitées ensuite ne sont pas toujours les mêmes. À vous de me dire !
En revanche pour ces éléments communs au sein de ces deux pages j'ai bien fait un composant.

### Conclusion

Je te tiens à vous remercier pour ce boulot, j'ai appris tellement de choses. Merci beaucoup, vraiment!
Je tiens à préciser pour finir que je postule pour un poste certe, si dans le cas ou vous n'êtes pas satisfait de mon niveau j'aimerai vous proposer un stage. Car oui, ma formation délivre des conventions. Et comme vous avez pu le constater dans ce Logbook j'aime bien apprendre, et les challenges.
Le mot de la fin : I'm Groot

![Bye bye](https://media.giphy.com/media/3o7budMRwZvNGJ3pyE/giphy.gif)
