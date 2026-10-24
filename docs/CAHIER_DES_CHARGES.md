# CAHIER DES CHARGES — SAVORA

## Site web de restauration multipage

**Version :** 2.0
**Nom de marque :** SAVORA
**Slogan :** Toutes les saveurs, une seule adresse.
**Technologies :** HTML5, CSS3 et JavaScript natif
**Transmission des commandes et réservations :** WhatsApp
**Backend :** Non prévu pour la première version

---

# 1. RÉSUMÉ DU PROJET

SAVORA est un site web de restauration destiné à présenter une offre culinaire variée et à faciliter les interactions entre les clients et le restaurant.

Le site permettra aux visiteurs de découvrir les plats, de rechercher des produits, de consulter les prix, de gérer un panier, de préparer une commande et de formuler une demande de réservation.

La transmission des commandes et des demandes de réservation se fera par WhatsApp. Le site préparera un message contenant les informations nécessaires, puis ouvrira WhatsApp pour permettre au client de vérifier et d'envoyer ce message.

**L'ouverture de WhatsApp ne signifie pas que la commande a été envoyée.** Le client doit confirmer l'envoi dans WhatsApp. Le restaurant devra ensuite accepter la commande ou confirmer la réservation.

La première version sera développée sans backend et sans base de données. Le panier sera conservé localement dans le navigateur grâce à `localStorage`.

# 2. CONTEXTE ET JUSTIFICATION

Le projet répond au besoin de disposer d'une présence en ligne moderne pour présenter les produits d'un restaurant et simplifier les échanges avec ses clients.

SAVORA proposera une interface permettant aux visiteurs de :

- découvrir les plats et leurs prix ;
- rechercher des produits ;
- préparer un panier ;
- transmettre une commande via WhatsApp ;
- envoyer une demande de réservation via WhatsApp ;
- consulter les informations de présentation et de contact.

L'objectif est de créer une première version réellement utilisable, tout en conservant une architecture simple qui pourra évoluer ultérieurement.

# 3. IDENTITÉ DE LA MARQUE

## 3.1. Nom et slogan

Nom : **SAVORA**

Slogan : **Toutes les saveurs, une seule adresse.**

Le logo validé devra être utilisé dans l'en-tête et, lorsque cela convient, dans le pied de page.

## 3.2. Palette de couleurs

Le changement de nom ne doit pas modifier l'identité visuelle du site existant.

- Bordeaux principal : `#7b1b2e`
- Bordeaux foncé : `#5e1522`
- Vert sauge : `#9cb270`
- Blanc : `#ffffff`
- Bleu nuit : `#1a1a2e`

Le bordeaux sera utilisé pour les éléments de marque et les actions principales. Le vert sauge servira d'accent. Le blanc et le bleu nuit conserveront leurs rôles actuels.

## 3.3. Conservation de l'existant

Avant toute modification, le développeur devra examiner les fichiers HTML, CSS, JavaScript et les ressources visuelles déjà présents.

Il devra conserver autant que possible :

- la structure générale de la page d'accueil ;
- les sections existantes ;
- les images pertinentes ;
- la galerie et ses animations ;
- le menu hamburger ;
- les liens et effets de navigation utiles ;
- le pied de page ;
- les styles et la palette existants.

Le travail doit être une amélioration du site existant, pas une refonte complète non demandée.

# 4. OBJECTIFS DU PROJET

## 4.1. Objectif général

Développer un site web multipage professionnel, responsive et fonctionnel pour SAVORA, avec transmission des commandes et des demandes de réservation par WhatsApp.

## 4.2. Objectifs spécifiques

Le site devra permettre de :

1. Présenter la marque SAVORA.
2. Afficher un menu de plats avec images, descriptions et prix.
3. Rechercher et filtrer les plats.
4. Ajouter, modifier et supprimer des articles du panier.
5. Calculer automatiquement le montant total.
6. Préparer un message de commande structuré pour WhatsApp.
7. Préparer un message de demande de réservation pour WhatsApp.
8. Afficher les informations utiles sur le restaurant.
9. Proposer une page de contact.
10. fonctionner correctement sur ordinateur, tablette et téléphone.
11. Conserver le panier après un rechargement de page.
12. Faciliter l'ajout futur d'un backend sans l'implémenter dans cette version.

# 5. UTILISATEURS CIBLES

- Visiteurs souhaitant découvrir le restaurant.
- Clients consultant le menu.
- Clients préparant une commande à emporter ou à livrer.
- Personnes souhaitant demander une réservation.
- Internautes recherchant les informations de contact du restaurant.

# 6. PÉRIMÈTRE FONCTIONNEL

## 6.1. Inclus dans la première version

- Accueil.
- Menu interactif.
- Panier avec persistance locale.
- Préparation de commande et transmission par WhatsApp.
- Formulaire de demande de réservation et transmission par WhatsApp.
- Page À propos.
- Page Contact.
- Navigation commune.
- Mise en page responsive.
- Validation des champs.
- Gestion des erreurs.
- Documentation et tests.

## 6.2. Hors périmètre

Les éléments suivants ne seront pas développés maintenant :

- Backend.
- Base de données.
- Espace administrateur.
- Comptes clients.
- Paiement en ligne.
- Confirmation automatique des commandes.
- Confirmation automatique des réservations.
- Gestion réelle des stocks.
- Suivi de livraison.
- Notifications automatiques par SMS ou e-mail.
- Historique centralisé des commandes.

Ces fonctionnalités seront envisagées dans une évolution future.

# 7. ARCHITECTURE DU SITE

Le site comprendra sept pages principales :

| Page        | Fichier            | Fonction                                                   |
| ----------- | ------------------ | ---------------------------------------------------------- |
| Accueil     | `index.html`       | Présentation de SAVORA                                     |
| Menu        | `menu.html`        | Consultation et recherche des plats                        |
| Panier      | `panier.html`      | Gestion des articles sélectionnés                          |
| Commande    | `commande.html`    | Vérification des informations et transmission par WhatsApp |
| Réservation | `reservation.html` | Préparation d'une demande de réservation                   |
| À propos    | `apropos.html`     | Présentation du restaurant                                 |
| Contact     | `contact.html`     | Informations de contact et moyens de communication         |

Toutes les pages devront partager une identité visuelle cohérente.

# 8. SPÉCIFICATIONS FONCTIONNELLES

## 8.1. Page d'accueil

La page d'accueil devra conserver la structure existante et intégrer le nom et le logo SAVORA.

Elle comportera notamment :

- un en-tête avec le logo, la navigation et l'accès au panier ;
- une section principale avec image, texte de présentation et boutons d'action ;
- une section de présentation du restaurant ;
- une section de plats mis en avant ;
- la galerie existante si elle est pertinente ;
- un accès au menu ;
- un accès à la réservation ;
- le pied de page existant adapté au nom SAVORA.

Les textes et images déjà disponibles devront être réutilisés lorsqu'ils conviennent. Aucune information officielle non fournie ne devra être inventée.

## 8.2. Page Menu

Le menu sera organisé en catégories :

- Burgers ;
- Pizzas ;
- Poulet ;
- Accompagnements ;
- Boissons ;
- Desserts.

Chaque produit devra disposer d'un identifiant stable, d'un nom, d'une description, d'une catégorie, d'un prix numérique et d'un chemin d'image.

Chaque carte affichera les informations utiles et un bouton permettant d'ajouter le produit au panier.

Fonctionnalités :

- recherche par nom ;
- filtrage par catégorie ;
- affichage de tous les produits ;
- ajout au panier ;
- actualisation de l'indicateur du panier.

Les données seront regroupées dans un fichier JavaScript dédié, par exemple `js/products.js`.

## 8.3. Page Panier

Le panier devra permettre :

- d'afficher les articles sélectionnés ;
- d'augmenter ou diminuer les quantités ;
- de supprimer un article ;
- de vider le panier ;
- de calculer les sous-totaux ;
- de calculer le montant total ;
- de poursuivre vers la commande.

Calculs :

`Sous-total d'un article = prix unitaire × quantité`

`Total du panier = somme des sous-totaux`

Les montants seront affichés en FCFA.

Le panier sera conservé dans `localStorage` sous la clé :

`savora_cart`

Le code devra utiliser exactement `savora_cart`, sans les espaces illustratifs autour du nom ci-dessus.

Les données locales devront être contrôlées lors de leur lecture. Si elles sont absentes ou invalides, le site devra gérer la situation sans planter.

## 8.4. Page Commande

Cette page permettra au client de vérifier son panier et de préparer une commande.

### Informations demandées

- Nom complet.
- Numéro de téléphone.
- Mode de réception : livraison ou retrait.
- Adresse de livraison, obligatoire si la livraison est choisie.
- Instructions ou commentaire facultatif.

### Récapitulatif

La page devra afficher :

- les noms des produits ;
- les quantités ;
- les prix unitaires ;
- les sous-totaux ;
- le total du panier ;
- le mode de réception ;
- les coordonnées renseignées.

### Transmission par WhatsApp

Lorsque le client valide le formulaire :

1. Vérifier que le panier contient au moins un article.
2. Vérifier les champs obligatoires.
3. Vérifier la présence de l'adresse si la livraison est sélectionnée.
4. Construire un message lisible et organisé.
5. Inclure les produits, les quantités, le montant total, le nom du client, son téléphone et le mode de réception.
6. Inclure l'adresse de livraison si nécessaire.
7. Encoder le message correctement pour une URL.
8. Ouvrir une conversation WhatsApp vers le numéro officiel configuré pour SAVORA.

Le lien pourra utiliser le format général :

`https://wa.me/NUMERO_OFFICIEL?text=MESSAGE_ENCODE`

Le numéro devra être fourni par le propriétaire du restaurant et enregistré dans une constante clairement identifiable. Aucun numéro ne devra être inventé.

Le code utilisera une méthode d'encodage adaptée, telle que `encodeURIComponent()`.

### Règle essentielle

Le site ne devra pas afficher un message prétendant que la commande a été envoyée au restaurant simplement parce que WhatsApp s'est ouvert.

Un texte informatif devra expliquer au client qu'il doit vérifier le message puis appuyer sur « Envoyer » dans WhatsApp.

La réception, l'acceptation, le paiement et la préparation de la commande ne sont pas garantis par le site.

## 8.5. Page Réservation

Cette page permettra de préparer une demande de réservation.

### Informations demandées

- Nom complet.
- Numéro de téléphone.
- Adresse e-mail facultative.
- Date souhaitée.
- Heure souhaitée.
- Nombre de personnes.
- Commentaire facultatif.

### Validation

- Le nom est obligatoire.
- Le téléphone est obligatoire.
- La date est obligatoire et ne doit pas être dans le passé.
- L'heure est obligatoire.
- Le nombre de personnes doit être un entier positif.
- L'adresse e-mail doit être valide lorsqu'elle est renseignée.

### Transmission par WhatsApp

Après validation, le site devra construire un message contenant :

- le nom du client ;
- son numéro de téléphone ;
- la date et l'heure souhaitées ;
- le nombre de personnes ;
- l'adresse e-mail, si fournie ;
- le commentaire, si fourni.

Le message sera encodé puis utilisé pour ouvrir WhatsApp vers le numéro officiel configuré.

Le client devra vérifier et envoyer lui-même la demande.

### Règle essentielle

Le site ne devra pas annoncer que la réservation est confirmée.

Le message affiché devra préciser que :

- WhatsApp s'ouvre avec une demande préparée ;
- le client doit envoyer le message ;
- le restaurant doit confirmer la disponibilité et accepter la réservation.

Aucun calendrier de disponibilité réelle n'existe dans cette première version.

## 8.6. Page À propos

Cette page présentera :

- l'identité de SAVORA ;
- son univers culinaire ;
- sa philosophie de service ;
- des images adaptées ;
- un accès au menu ;
- un accès au contact.

Ne pas inventer de date de création, de récompense, d'adresse ou d'autres informations factuelles qui n'ont pas été communiquées.

## 8.7. Page Contact

La page affichera uniquement les coordonnées officielles disponibles.

Elle pourra comporter un formulaire avec :

- nom ;
- e-mail ;
- sujet ;
- message.

Pour cette première version, le formulaire ne devra pas prétendre transmettre réellement un e-mail en l'absence de service d'envoi configuré.

Le site pourra proposer un bouton WhatsApp si le numéro officiel est configuré.

Les informations non fournies ne devront pas être inventées.

# 9. EXIGENCES TECHNIQUES

## 9.1. Technologies

Technologies autorisées :

- HTML5 ;
- CSS3 ;
- JavaScript natif ;
- `localStorage` ;
- liens WhatsApp officiels de type `wa.me`.

Aucun backend ni aucune base de données ne sont prévus dans cette version.

## 9.2. Technologies non prévues

Ne pas introduire :

- React ;
- Vue ;
- Angular ;
- TypeScript ;
- Tailwind CSS ;
- Bootstrap ;
- Node.js comme backend ;
- une API serveur ;
- une base de données ;
- un système de compilation.

## 9.3. Organisation du code

Le code devra rester simple à comprendre et à maintenir.

Il devra notamment séparer :

- les données des produits ;
- la logique du menu ;
- la logique du panier ;
- la préparation de la commande ;
- la préparation de la réservation ;
- les fonctions communes de transmission WhatsApp.

Une fonction commune de création des liens WhatsApp devra être privilégiée afin d'éviter de dupliquer la logique d'encodage.

## 9.4. Configuration WhatsApp

Le projet devra comporter un emplacement unique et documenté pour configurer le numéro WhatsApp officiel de SAVORA.

Exemple de principe :

`const SAVORA_WHATSAPP_NUMBER = "NUMERO_A_CONFIGURER";`

Cette valeur est un espace réservé, pas un numéro réel. Le site devra clairement signaler que la configuration est incomplète tant que le numéro officiel n'a pas été renseigné.

Ne pas utiliser un numéro personnel ou inventé.

# 10. DESIGN ET ERGONOMIE

Le design existant doit être conservé.

Les améliorations devront se limiter aux ajustements nécessaires pour intégrer le nom SAVORA, le logo et les nouvelles pages tout en respectant les styles déjà utilisés.

Exigences :

- palette existante conservée ;
- en-tête et pied de page cohérents ;
- navigation simple ;
- cartes de plats harmonisées ;
- boutons clairement identifiables ;
- menu mobile fonctionnel ;
- absence de débordement horizontal ;
- formulaires faciles à utiliser ;
- textes d'erreur compréhensibles ;
- affichage adapté aux ordinateurs, tablettes et téléphones.

L'accessibilité devra être prise en compte : champs associés à des libellés, textes alternatifs pertinents, contraste suffisant et navigation au clavier.

# 11. EXIGENCES NON FONCTIONNELLES

## Performance

- Limiter les scripts inutiles.
- Réutiliser les ressources disponibles.
- Éviter les animations excessives.
- Maintenir une navigation fluide.

## Maintenabilité

- Employer des noms de variables et fonctions explicites.
- Éviter les duplications inutiles.
- Documenter les paramètres à configurer.
- Garder une organisation claire des fichiers.

## Fiabilité

- Gérer les paniers vides.
- Vérifier les données de `localStorage`.
- Contrôler les quantités et les prix.
- Valider les formulaires.
- Ne pas ouvrir WhatsApp avec un message incomplet si des informations obligatoires manquent.

## Sécurité

- Ne pas injecter directement des données utilisateur non contrôlées dans le HTML.
- Ne pas stocker de données bancaires.
- Ne pas présenter `localStorage` comme un stockage sécurisé.
- Ne pas considérer le montant calculé côté navigateur comme une preuve de paiement ou une donnée vérifiée par le restaurant.

# 12. SCÉNARIOS D'UTILISATION

## Scénario A — Commander un repas

1. Le client ouvre le menu.
2. Il ajoute des plats au panier.
3. Il vérifie les quantités et le total.
4. Il remplit ses coordonnées.
5. Il choisit la livraison ou le retrait.
6. Il valide le formulaire.
7. Le site prépare le message de commande.
8. WhatsApp s'ouvre.
9. Le client vérifie le message et l'envoie.
10. Le restaurant examine la demande et répond au client.

**Résultat attendu :** le client peut transmettre une commande par WhatsApp sans que le site prétende l'avoir envoyée avant son action.

## Scénario B — Demander une réservation

1. Le client ouvre la page Réservation.
2. Il renseigne ses coordonnées.
3. Il choisit une date, une heure et un nombre de personnes.
4. Le site valide les informations.
5. Le site prépare le message.
6. WhatsApp s'ouvre.
7. Le client envoie la demande.
8. Le restaurant vérifie les disponibilités et confirme ou refuse la demande.

**Résultat attendu :** la demande est préparée correctement et le client est informé que la réservation n'est pas confirmée automatiquement.

# 13. PLAN DE TESTS

## Navigation

- [ ] Les sept pages existent.
- [ ] Les liens internes fonctionnent.
- [ ] Le menu hamburger fonctionne.
- [ ] Les couleurs et la structure existantes sont conservées.

## Menu et panier

- [ ] La recherche fonctionne.
- [ ] Le filtrage fonctionne.
- [ ] L'ajout et la suppression des articles fonctionnent.
- [ ] Les quantités sont correctement calculées.
- [ ] Le total est exact.
- [ ] Le panier persiste après rechargement.

## Commandes

- [ ] Le panier vide est refusé.
- [ ] Les champs obligatoires sont validés.
- [ ] L'adresse est exigée pour la livraison.
- [ ] Le message WhatsApp contient les informations correctes.
- [ ] Les caractères accentués et retours à la ligne sont correctement encodés.
- [ ] Le numéro officiel est configurable.
- [ ] Le site n'affirme pas que la commande est envoyée avant l'action du client.

## Réservations

- [ ] Les champs obligatoires sont validés.
- [ ] Les dates passées sont refusées.
- [ ] Le message contient la date, l'heure et le nombre de personnes.
- [ ] Le numéro WhatsApp est correctement utilisé.
- [ ] Le site ne prétend pas que la réservation est confirmée.

## Qualité générale

- [ ] Les pages sont responsive.
- [ ] Les images pertinentes sont conservées.
- [ ] Les erreurs JavaScript sont corrigées.
- [ ] Les limitations sont documentées.
- [ ] Les tests annoncés comme réussis ont réellement été exécutés.

# 14. ÉVOLUTIONS FUTURES

Le projet pourra ensuite évoluer vers :

- un backend ;
- une base de données ;
- un espace administrateur ;
- un suivi des commandes ;
- une gestion des disponibilités de réservation ;
- une confirmation de commande ;
- un historique client ;
- des notifications ;
- des paiements sécurisés ;
- une gestion des stocks.

Ces éléments sont hors périmètre de la première version.

# 15. LIVRABLES

Les livrables attendus :

1. Sept pages HTML fonctionnelles.
2. Fichiers CSS partagés et responsive.
3. Scripts JavaScript organisés.
4. Logo et ressources visuelles pertinentes.
5. Menu interactif.
6. Panier fonctionnel côté navigateur.
7. Transmission des commandes par WhatsApp.
8. Transmission des demandes de réservation par WhatsApp.
9. Page À propos et page Contact.
10. Fichier `README.md`.
11. Cahier des charges dans `docs/CAHIER_DES_CHARGES.md`.
12. Compte rendu des tests effectués et des problèmes restants.

# 16. CONCLUSION

SAVORA sera une première version fonctionnelle d'un site de restauration moderne qui conserve l'identité visuelle existante et facilite la transmission des commandes et des demandes de réservation par WhatsApp.

Le site préparera les informations et ouvrira WhatsApp ; le client restera responsable de l'envoi du message, et le restaurant de la confirmation.

Cette approche évite de développer immédiatement un backend tout en permettant de faire évoluer le projet progressivement.

**Nom du projet : SAVORA.**
**Slogan : Toutes les saveurs, une seule adresse.**
