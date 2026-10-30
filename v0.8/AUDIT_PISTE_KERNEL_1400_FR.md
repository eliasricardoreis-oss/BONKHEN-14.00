# BONKHEN 14.00 — Audit de la piste kernel (v0.8)

Date : 30 octobre 2026

## Résultat de la recherche

La piste publique la plus directement liée au firmware 14.00 est :
https://github.com/siongadev/PS4-14.00-Jailbreak-Research

Son état des lieux publié le 24 octobre 2026 annonce des résultats en espace utilisateur WebKit, mais indique explicitement que les jalons suivants ne sont pas atteints :
- sortie du sandbox navigateur ;
- lecture/écriture mémoire noyau ;
- exécution de code noyau ;
- jailbreak complet.

Rapports à consulter :
- Progression : https://github.com/siongadev/PS4-14.00-Jailbreak-Research/blob/main/docs/PROGRESS.md
- Limites du sandbox : https://github.com/siongadev/PS4-14.00-Jailbreak-Research/blob/main/docs/SANDBOX_BOUNDARY_14.md
- Critères de recherche kernel : https://github.com/siongadev/PS4-14.00-Jailbreak-Research/blob/main/docs/RESEARCH_GATES.md

Ces déclarations sont celles du dépôt de recherche ; elles ne constituent pas une validation indépendante par BONKHEN. Les résultats doivent être audités, reproduits et attribués au binaire exact avant toute intégration.

## Décision

**Ne pas intégrer leurs sondes d'exploitation, gadgets, offsets ou appels natifs dans le host BONKHEN à ce stade.** Les observations WebKit en espace utilisateur ne démontrent pas une primitive noyau. Les offsets de patch noyau publiés séparément ne créent pas cette primitive.

## Travail réalisé dans BONKHEN

- v0.4 : host WebKit de diagnostic.
- v0.5 : garde d'intégrité et prérequis de lancement.
- v0.6 : plan de portage de l'application BD-J de l'ISO vers le navigateur.
- v0.7 : état de la recherche WebKit/kernel 14.00.
- v0.8 : audit de la piste kernel et critères d'intégration.

## Conditions minimales avant de déclarer une avancée kernel

1. Source publique et provenance identifiables, avec licence et version exactes.
2. Compatibilité explicitement établie avec le firmware PS4 14.00 et le binaire réellement chargé.
3. Résultat reproductible sur console réelle, avec contrôles négatifs et journaux conservés.
4. Preuve distincte d'un simple appel système ou d'une exécution dans le processus navigateur.
5. Nettoyage et procédure de récupération documentés.
6. Audit de sécurité du payload HEN et de son mode de chargement.

## Prochaine étape concrète

Continuer le portage non privilégié de l'ISO : interface, navigation, précontrôles et vérification SHA-256 du payload local. Laisser le lancement HEN verrouillé tant qu'une chaîne complète, compatible et vérifiée n'existe pas.

## Références complémentaires

- Patches noyau 14.00 : https://github.com/Al-Azif/ps4-exploit-kpatches/blob/main/1400.c
  - Référence de données de patch ; ce n'est pas un exploit kernel autonome.
- Recherche PS4 14.00 : https://github.com/siongadev/PS4-14.00-Jailbreak-Research
