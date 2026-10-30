# Étude de portage PS4 13.52 vers 14.00

Le code ciblant 13.02–13.52 peut servir de référence architecturale, mais ne devient pas compatible 14.00 en changeant simplement le numéro de firmware.

Une source Al-Azif distincte existe pour les patchs noyau 14.00 : https://github.com/Al-Azif/ps4-exploit-kpatches/blob/main/1400.c

Cette source ne valide pas une chaîne complète. Il manque une primitive WebKit démontrée sur 14.00 et une élévation noyau vérifiée. Les offsets 13.52 ne doivent pas être extrapolés.

Le host conserve donc une interface diagnostique et laisse le module HEN désactivé.
