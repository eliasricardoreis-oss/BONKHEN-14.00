(function () {
'use strict';
var EXPECTED_SHA256 = '29ec095fbede651e29954de43411599093138791e62105aaee6fdced58edec06';
var selectedFile = null;
var el = function (id) { return document.getElementById(id); };
function log(message) { el('log').textContent += '\\n' + message; }
function set(id, value, cls) {
  var node = el(id); node.textContent = value;
  if (cls) node.className = cls;
}
function formatBytes(bytes) {
  if (bytes < 1024) return bytes + ' octets';
  if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' Ko';
  return (bytes / 1048576).toFixed(2) + ' Mo';
}
function detect() {
  var ua = navigator.userAgent || 'Inconnu';
  var platform = /PlayStation 4|PS4/i.test(ua) ? 'PlayStation 4 (déclarée par UA)' :
    /PlayStation 5|PS5/i.test(ua) ? 'PlayStation 5 (déclarée par UA)' :
    /PlayStation/i.test(ua) ? 'PlayStation (modèle inconnu)' : 'Navigateur non identifié comme PS4';
  set('platform', platform);
  set('ua', ua, 'ua');
  var cryptoOk = !!(window.crypto && window.crypto.subtle && window.crypto.subtle.digest);
  set('crypto', cryptoOk ? 'Disponible' : 'Indisponible (contexte non sécurisé ?)', cryptoOk ? 'good' : 'bad');
  log('[ENV] ' + platform);
  log('[INFO] Le User-Agent ne prouve pas la version du firmware.');
  if (!cryptoOk) log('[WARN] SHA-256 WebCrypto nécessite un contexte sécurisé (HTTPS ou localhost selon navigateur).');
}
el('payload').addEventListener('change', function (event) {
  selectedFile = event.target.files && event.target.files[0] || null;
  set('fileName', selectedFile ? selectedFile.name : 'Non sélectionné');
  set('fileSize', selectedFile ? formatBytes(selectedFile.size) : '—');
  set('hash', '—'); set('integrity', 'En attente', 'neutral');
  el('verify').disabled = !selectedFile;
  if (selectedFile) log('[FILE] Fichier sélectionné localement : ' + selectedFile.name + ' (' + formatBytes(selectedFile.size) + ').');
});
el('verify').addEventListener('click', async function () {
  if (!selectedFile) return;
  if (!window.crypto || !window.crypto.subtle) {
    set('integrity', 'WebCrypto indisponible', 'bad');
    log('[ERROR] Impossible de calculer SHA-256 dans ce contexte.');
    return;
  }
  el('verify').disabled = true;
  set('integrity', 'Calcul en cours…', 'neutral');
  try {
    var buffer = await selectedFile.arrayBuffer();
    var digest = await window.crypto.subtle.digest('SHA-256', buffer);
    var actual = Array.from(new Uint8Array(digest), function (b) { return b.toString(16).padStart(2, '0'); }).join('');
    set('hash', actual, 'hash');
    var valid = actual === EXPECTED_SHA256;
    set('integrity', valid ? 'CORRESPONDANCE' : 'EMPREINTE DIFFÉRENTE', valid ? 'good' : 'bad');
    log(valid ? '[OK] SHA-256 correspond à l’empreinte attendue.' : '[FAIL] SHA-256 différent de l’empreinte attendue.');
    log('[LOCK] Le payload reste un fichier inerte : aucune exécution.');
  } catch (error) {
    set('integrity', 'Erreur de lecture / hash', 'bad');
    log('[ERROR] ' + (error && error.message ? error.message : 'Erreur inconnue'));
  } finally {
    el('verify').disabled = !selectedFile;
  }
});
el('clear').addEventListener('click', function () { el('log').textContent = '[INFO] Journal effacé.'; });
detect();
log('[READY] Sélectionne hen.bin pour vérifier son empreinte.');
})();