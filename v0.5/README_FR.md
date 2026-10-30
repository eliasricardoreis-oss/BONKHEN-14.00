# BONKHEN 14.00 — préparation de l’intégration HEN (v0.5)

Cette version prépare proprement l’intégration, mais **n’exécute pas de HEN**.

## État technique vérifié

- Le projet BD-J d’origine n’est pas un exploit WebKit.
- Le fichier officiel Al-Azif `ps4-exploit-kpatches/1400.c` contient des patches noyau pour 14.00. Il suppose déjà une primitive d’exécution/écriture noyau ; ce n’est pas un exploit autonome.
- Le dépôt officiel `psfree-lapse` annonce actuellement PS4 PSFree/Lapse testés sur 7.00–9.60. Il ne fournit pas une chaîne testée pour 14.00.
- Un navigateur WebKit ne peut pas ouvrir arbitrairement un socket TCP brut vers le port 9020. Un transport natif côté exploit/loader est nécessaire pour envoyer un payload PS4.

Sources :
- https://github.com/Al-Azif/ps4-exploit-kpatches/blob/main/1400.c
- https://github.com/Al-Azif/psfree-lapse

## Architecture prévue

1. Détection et identification du firmware par une source fiable (pas par User-Agent).
2. Vérification d’intégrité du payload local (SHA-256).
3. Présence d’un exploit WebKit 14.00 validé.
4. Présence d’une primitive kernel 14.00 validée.
5. Application des patches noyau adaptés à la révision exacte.
6. Transport natif validé vers le payload loader.
7. Envoi du payload HEN uniquement après validation de toutes les étapes.

Les étapes 3 à 6 ne sont pas disponibles dans ce dépôt. Le chargeur refuse donc de simuler un succès ou de transmettre des données à un endpoint arbitraire.

## Fichiers

- `hen-loader.js` : contrôles de prérequis et vérification SHA-256.
- `integration-status.json` : état des composants et critères de validation.

## Pour continuer

Il faut une chaîne 14.00 publiquement vérifiée ou des sources/binaries HEN compatibles, avec leur provenance et leur hash. Ne pas utiliser des offsets provisoires non vérifiés.