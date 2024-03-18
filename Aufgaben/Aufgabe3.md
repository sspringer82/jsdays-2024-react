# Datensätze löschen

Füge in jede Zeile einen Button mit der Aufschrift "löschen" ein.

Beim Klick auf den Button soll ein Request ans Backend gesendet werden.

```
fetch('/api/books/42', {
  method: 'DELETE'
})
```

Nach erfolgreichem Löschen, soll der Datensatz aus dem State-Array entfernt und damit die Ansicht aktualisiert werden.