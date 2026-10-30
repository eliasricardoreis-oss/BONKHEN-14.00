# BONKHEN 14.00 — WebKit Host (diagnostic)

Build documentaire v0.4. Ce dossier contient l'interface HTML/CSS/JavaScript et les rapports d'analyse du portage.

## Limites
Ce projet est un host de diagnostic, pas un exploit WebKit fonctionnel. Le disque source est une application BD-J : les classes Java/BD-J, `Boot.exec`, `sun.misc.Unsafe` et `nativeCall` ne sont pas exécutables directement dans JavaScript/WebKit. Aucun mécanisme WebKit/Kernel 14.00 n'a été validé.

Le bouton HEN reste désactivé. Aucun payload n'est lancé et aucune connexion distante n'est effectuée. Les ressources binaires originales ne sont pas incluses dans ce sous-dossier GitHub ; l'archive complète reste disponible séparément.

## Source 14.00
Al-Azif publie un fichier dédié `1400.c` dans `ps4-exploit-kpatches` :
https://github.com/Al-Azif/ps4-exploit-kpatches/blob/main/1400.c

Ce fichier contient des données de patch noyau 14.00 ; il ne fournit pas à lui seul la primitive d'exploitation nécessaire à une chaîne HEN complète.

## Lancement local
Servir le dossier depuis un serveur HTTP, puis ouvrir son URL dans le navigateur. Exemple : `python3 -m http.server 8000`.
