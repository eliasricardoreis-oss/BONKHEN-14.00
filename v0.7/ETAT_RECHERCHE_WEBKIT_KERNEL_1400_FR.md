# BONKHEN 14.00 — État de la recherche WebKit / kernel (v0.7)

Date de vérification : 30 octobre 2026.

## Conclusion opérationnelle
Aucune chaîne publique complète WebKit → sortie du sandbox → kernel → HEN pour PS4 firmware 14.00 n'a été confirmée par les sources consultées.

Un dépôt de recherche consacré au firmware 14.00 rapporte des résultats avancés dans le processus WebKit (lecture/écriture mémoire du processus et exécution native par réutilisation de code). Mais son propre état des lieux indique explicitement :
- sortie du sandbox WebKit : **non démontrée** ;
- lecture/écriture ou exécution mémoire noyau : **non démontrée** ;
- jailbreak complet : **non démontré**.

Source primaire de ces déclarations :
https://github.com/siongadev/PS4-14.00-Jailbreak-Research
Rapport détaillé :
https://github.com/siongadev/PS4-14.00-Jailbreak-Research/blob/main/docs/PROGRESS.md

## Ce que cela signifie pour BONKHEN
Le travail WebKit en espace utilisateur peut nourrir un host de diagnostic et une interface de recherche. Il ne fournit pas à lui seul l'accès noyau nécessaire à HEN.

Les offsets de patch noyau 14.00, même lorsqu'ils sont documentés, ne remplacent pas une vulnérabilité noyau exploitable et reproductible.

## État des briques

| Brique | État vérifié |
|---|---|
| Interface WebKit BONKHEN | Présente dans le dépôt |
| Précontrôles / vérification locale du payload | Portage à poursuivre |
| Recherche WebKit 14.00 en espace utilisateur | Travaux publics signalés ; à auditer et reproduire |
| Sortie du sandbox | Non démontrée dans le rapport cité |
| Primitive noyau 14.00 | Non démontrée dans le rapport cité |
| Patches noyau 14.00 | Références disponibles, mais pas de chaîne d'accès noyau |
| HEN 14.00 exécutable depuis le navigateur | Non disponible / non validé |

## Décision de développement
Ne pas intégrer de code d'exploitation provenant de dépôts tiers non vérifiés et ne pas activer le bouton HEN sur la seule base de gadgets, offsets ou appels natifs WebKit.

Continuer avec :
1. le portage de l'interface et des contrôles locaux de l'ISO ;
2. un banc de tests non privilégiés pour vérifier le comportement du navigateur ;
3. la traçabilité des preuves sur console réelle ;
4. l'intégration ultérieure d'une chaîne kernel 14.00 seulement si elle est publiée, auditable et reproductible.

## Références de compatibilité
- Tableau d'exploitation PS4 : https://consolemods.org/wiki/PS4%3AExploit_Chart
- État de recherche 14.00 : https://github.com/siongadev/PS4-14.00-Jailbreak-Research
- Patches noyau 14.00 (données de patch, pas un exploit autonome) : https://github.com/Al-Azif/ps4-exploit-kpatches/blob/main/1400.c
