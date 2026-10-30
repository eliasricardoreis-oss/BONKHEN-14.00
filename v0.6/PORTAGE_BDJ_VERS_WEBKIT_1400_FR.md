# BONKHEN 14.00 — Portage BD-J vers WebKit (v0.6)

## Objectif
Reproduire dans le navigateur WebKit de la PS4 le parcours local de l'application contenue dans `hen.iso`, sans dépendre du lecteur Blu-ray.

**Important :** v0.6 est un dossier de portage et de validation. Ce n'est pas encore un HEN WebKit fonctionnel. Le bouton de lancement doit rester désactivé tant que toute la chaîne 14.00 n'a pas été démontrée sur console.

## Ce que fait l'ISO source
L'analyse de l'ISO indique une application BD-J/UDF :
- `InitXlet` réalise des contrôles préalables, vérifie le SHA-256 de `bonk/hen.bin`, prépare les commandes locales et attend une entrée utilisateur.
- `Boot.exec()` exécute le chemin local préparé par l'application.
- `Boot.run()` est un chemin réseau distinct avec une destination distante codée en dur. Il n'est pas nécessaire au parcours local et ne doit pas être repris dans le portage.
- Des classes telles que `Hx1400.class` utilisent des mécanismes Java/BD-J, notamment `sun.misc.Unsafe` et des appels natifs. Ils ne sont pas disponibles tels quels dans JavaScript/WebKit.

## Matrice de portage

| Élément BD-J | Équivalent WebKit envisagé | État |
|---|---|---|
| Interface AWT / événements Xlet | HTML/CSS et événements DOM | À porter |
| Précontrôles locaux | JavaScript avec résultats visibles | À porter |
| Vérification SHA-256 du payload | Web Crypto API (`crypto.subtle.digest`) | À porter et tester |
| Chargement des ressources | Ressources locales du host | À définir |
| `sun.misc.Unsafe` / appels natifs | Aucun équivalent direct dans WebKit | Bloquant |
| Primitive WebKit 14.00 | Chaîne d'exploitation propre au firmware | Non fournie / non validée |
| Primitive noyau et patches 14.00 | Dépend de la chaîne kernel | Non validée |
| Payload HEN et transport compatible | Chargeur natif adapté à WebKit/PS4 | À intégrer après validation |

## Conditions obligatoires avant activation
1. Identifier précisément les entrées et sorties de chaque étape locale de l'ISO.
2. Extraire et documenter les ressources nécessaires, sans activer le chemin réseau distant.
3. Remplacer l'interface BD-J par une interface WebKit et tester tous les contrôles non privilégiés.
4. Disposer d'une chaîne WebKit puis kernel explicitement compatible firmware 14.00, validée sur matériel réel.
5. Vérifier le format, l'intégrité, la provenance et la compatibilité du payload HEN.
6. Effectuer les essais avec journalisation, procédure de redémarrage à froid et mécanisme d'arrêt sûr.
7. N'activer le bouton HEN qu'après réussite de tous les tests.

## Sécurité et confidentialité
- Ne pas reprendre l'URL distante codée en dur dans `Boot.run()`.
- Ne pas envoyer d'identifiants, tickets, informations système ou commandes à un serveur tiers.
- Ne pas exécuter automatiquement des commandes reçues du réseau.
- Un hash valide prouve uniquement l'intégrité par rapport au hash attendu, pas la compatibilité ni l'innocuité du payload.

## État honnête du projet
Le parcours d'interface et les vérifications locales peuvent être portés. En revanche, le code BD-J privilégié ne se convertit pas automatiquement en JavaScript. À ce stade, aucune chaîne WebKit → kernel 14.00 complète n'est validée dans ce dépôt ; le lancement HEN doit donc rester verrouillé.

## Références
- Patches noyau 14.00 (données de patch, pas un exploit autonome) : https://github.com/Al-Azif/ps4-exploit-kpatches/blob/main/1400.c
- PSFree/Lapse (la documentation amont ne revendique pas une chaîne testée PS4 14.00) : https://github.com/Al-Azif/psfree-lapse
