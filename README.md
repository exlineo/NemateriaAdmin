# Nemateria
Nemateria est un écosystème logiciel permettant la gestion et la diffusion de collections numérisées. Il s'appuie et étant la norme Dublin Core pour permettre des usages étendus par l'intégration d'espaces de noms (namespaces) spécifiques au projet et étendables à d'autres usages.  
Le projet est dédié à la gestion et la diffusion de collections numérisées : images, vidéos, audios. Il offre des solutions pour le séquençage de médias (vidéos, audio), la mise en série d'images et la gestion de relations riches (audios, vidéos, images, pdf).
## Processus de gestion des données
La gestion des données est construite en plusieurs étapes :
1 - Données XMP  
Les données sont stockées et éditées dans les médias eux mêmes sur un format [XMP](https://fr.wikipedia.org/wiki/Extensible_Metadata_Platform) grâce à des logiciels spécifiques (ex. [Adobe Bridge](https://www.adobe.com/fr/products/bridge.html), [open source](https://awesomeopensource.com/projects/exif)). Cette solution permet une édition individualisée des données et une portabilité dans les documents. Les métadonnées XMP sont autonomes, accessibles et éditables par tout logiciel à tout moment.  
Les documents comprenant des données XMP doivent être déposés (via FTP) sur un serveur pour être scannés.
2 - L'administration des données  
[NemateriaAdmin](https://github.com/exlineo/NemateriaAdmin) offre une solution en mode SaaS pour scanner les métadonnées, les filtrer en intégrant les namespaces normalisés (Dublin Core), les namespaces du projet (collection, informateurs, participants, relations, séquences, séries) et ceux que vous souhaiterez créer pour vos usages. Les données XMP peuvent être étendues par vos soins et gérées dans Nemateria Admin en configurant des filtres. L'application se connecte à une base de données pour stocker les notices et collections que vous souhaitez valoriser dans vos collections en ligne.
3 - Le stockage et la distrbution des notices et collections  
[NemateriaRest](https://github.com/exlineo/NemateriaRest) est un serveur REST dédié à la gestion et la distribution des données aux applications du projet. Il se connecte à NemateriaAdmin pour permettre leur administration. Il peut fournir vos données pour une valorisation sur vos sites Internet et vos collections numériques.
4 - Le moissonnage pour le partage  
[NemateriaOAI-PMH](https://github.com/exlineo/NemateriaOAI-PMH) permet le moissonnage des données stockées. Le serveur respecte la norme [OAI-PMH](https://openarchives.org/pmh/). Consultez la page du serveur pour avoir des informations sur le requêtage.  
5 - La diffusion en ligne  
La valorisation sur vos sites Internet est fournie via deux modules : un composant pour le CMS Joomla et une version HTML. Ces outils peuvent être installés sur vos site Internet.  
## L'écosystème technique
Nemateria comprend un ensemble d'applications développées dans des technologies contemporaines permettant d'assurer l'évolutivité des données tout en garantissant l'appuie des normes en usage (actuelles et futures).   
- [ExifTool](https://exiftool.org/) permet de scanner les dossiers. Il doit être installé et paramétré sur votre serveur et dans l'application NemateriaAdmin (accès au dossier à scanner) pour fournir les données XMP brutes.
- nous avons choisi de nous appuyer sur le système de gestion de base de données [MongoDB](https://www.mongodb.com/fr) pour sa capacité à gérer des données variables. Les données stockées dans vos médias (XMP) vont être moissonnées et stockées dans une base mongoDB. Un filtre est appliqué lors du moissonnage pour sélectionner les métadonnées que vous souhaitez exploiter. Les métadonnées brutes sont stockées pour une exploitation ultérieure. Toutes peuvent être moissonnées avec le serveur NemateriaOAI-PMH.
- en terme de développements, nous pourrez étendre le projet en utilisant [Angular](https://angular.io/) et [NestJS](https://nestjs.com/). Tous nos projets s'appuient sur [NodeJS](https://nodejs.org/en/).
  
## Open Source
Les technologies utilisées pour les développements s'appuient sur des licences open source permettant leur utilisation.
Tous nos développements sont mis à votre disposition sous licence GPL3. Le code est fourni gratuitement pour tous usages. Il est livré sans garanties. Les auteurs (exlineo) doivent être cités lors de leur utilisation.
## [Nemateria.eu](http://www.nemateria.eu)
Le site Internet offre des informations génériques et des tutoriels pour l'utilisation, le paramétrage et la mise en oeuvre des différents composants du projet.
