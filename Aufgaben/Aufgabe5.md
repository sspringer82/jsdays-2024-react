# Neue Datensätze erzeugen

Erzeuge eine neue Komponente `Form` in der Datei `src/Form.tsx`

Erzeuge eine neue Route für die Komponente `/create`

Installiere react-hook-form mit `npm install react-hook-form`

Implementiere ein Formular zum Erzeugen eines neuen Datensatzes.

`const {register, handleSubmit} = useForm<Omit<Book, 'id'>>();`

Implementiere die onSubmit Funktion und verbinde sie mit dem Formular:
`<form onSubmit={handleSubmit(onSubmit)}>`
onSubmit bekommt das book als Parameter und speichert die Daten auf dem Server und leitet zur Liste weiter.

```
  fetch('/api/books', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(book)
  })
```

Integriere die input-Elemente: `<input type="text" {...register('title')}>`

Füge einen Submit-Button hinzu.