# Tests v0.5

## Tests navigateur

1. Ouvrir la page depuis un serveur HTTP local.
2. Charger `hen-loader.js`.
3. Appeler `BonkHenLoader.evaluate({})` : le résultat doit être `ready: false`.
4. Appeler `BonkHenLoader.launch()` : il doit lever une erreur de verrouillage.
5. Vérifier un fichier avec une empreinte SHA-256 connue ; une empreinte incorrecte doit être refusée.

## Critères avant toute activation

- Exploit WebKit 14.00 reproduit et documenté.
- Primitive noyau reproductible sur PS4 14.00.
- Offsets et patches vérifiés sur la révision exacte, pas copiés depuis une version voisine.
- Transport natif de payload validé.
- Payload HEN de provenance connue et empreinte contrôlée.
- Tests de récupération après échec et redémarrage à froid.

Aucun de ces critères ne doit être remplacé par un User-Agent, une simple présence de fichier ou un bouton qui affiche « succès ».