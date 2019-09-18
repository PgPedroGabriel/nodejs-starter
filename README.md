# Projeto base para iniciar uma aplicação node padronizada

Arquitetura de projetos nodejs padronizada.

Utilizando:

- Yarn
- Sucrase (lógica de import de arquivos ao invés do common js)
- Nodemon (autorealod on save)
- ESLINT (Padrão de código da airbnb)
- Prettier (separação de linhas automáticas)

Instalar o projeto:

Você precisa ter instalado o yarn na sua máquina.

Rodar os comandos na pasta root do projeto

```
$ yarn
```


```
$ yarn sucrase-node src/server.js
```

ou

```
$ yarn dev
```

# VSCODE

Instalar os plugins:

- ESLint

Adicionar no seu settings.json do vscode:
```
"editor.tabSize": 2,
"editor.renderLineHighlight": "gutter",
"emmet.syntaxProfiles": {
    "javascript": "jsx"
},
"emmet.includeLanguages": {
    "javascript": "javascriptreact"
},
"javascript.updateImportsOnFileMove.enabled": "never",
"breadcrumbs.enabled": true,
"editor.parameterHints.enabled": false,
"editor.rulers": [80, 120],
"eslint.autoFixOnSave": true,
"editor.formatOnSave": false,
"eslint.validate": [
    {
        "language": "javascript",
        "autoFix": true
    },
    {
        "language": "javascriptreact",
        "autoFix": true
    }
]
```

- instalar Plugin prettier
- Instalar Plugin DRACULA
- Instalar Plugin EditorConfig
- Instalar plugin Color highlight
- Instalar plugin vscode-icons
