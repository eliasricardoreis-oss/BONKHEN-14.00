# BONKHEN 14.00 — Host WebKit v0.9

## Fichiers
- `index.html` : interface en français.
- `style.css` : mise en page adaptée à l'écran PS4 et mobile.
- `app.js` : détection indicative de l'environnement et vérification SHA-256 locale de `hen.bin`.

## Utilisation
1. Extraire `hen.bin` depuis l'ISO original par un moyen local de confiance.
2. Héberger le dossier `v0.9` sur un serveur HTTP(S) local ou ouvrir la page depuis un contexte compatible.
3. Dans la page, sélectionner `hen.bin`, puis lancer **Vérifier l'empreinte**.
4. Comparer le résultat affiché à l'empreinte attendue.

Empreinte SHA-256 attendue :
`29ec095fbede651e29954de43411599093138791e62105aaee6fdced58edec06`

## Limites
- Le fichier est lu localement par le navigateur et n'est ni envoyé ni exécuté.
- La vérification SHA-256 utilise Web Crypto. Selon le navigateur, cette API exige un contexte sécurisé (HTTPS ou localhost). Un serveur HTTP sur une adresse IP du réseau local peut ne pas être considéré comme sécurisé.
- Le User-Agent ne permet pas d'authentifier la version réelle du firmware.
- Le bouton de lancement HEN n'existe volontairement pas dans cette version : aucune chaîne WebKit → kernel 14.00 ni aucun transport natif complet n'a été validé.
- Une empreinte conforme prouve seulement que le fichier correspond à la valeur de référence ; elle ne prouve pas son innocuité, son authenticité cryptographique ou sa compatibilité.

## Réseau et confidentialité
Le code de cette version ne fait aucun appel réseau. Le fichier sélectionné reste dans le navigateur. Ne pas ajouter de serveur de commandes distant ni exécuter de code arbitraire reçu par HTTP.

## Projet
Dépôt principal : https://github.com/moozzsx/BONKHEN-14.00
