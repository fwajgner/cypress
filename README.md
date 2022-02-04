# cypress-template

Domyślna integracja z vscode, w przypadku innego edytora należy uruchomić komendę `yarn sdks nazwa_edytora`, [link do obsługiwanych edytorów](https://yarnpkg.com/getting-started/editor-sdks)

W przypadku wprowadzania zmian do repozytorium należy przedtem jednorazowo uruchomić husky w sklonowanym repo, za pomocą `yarn husky install`. Dzięki temu przed każdym commitem husky uruchomi skrypt z folderu .husky -> auto formatowanie kodu (prettier) oraz sprawdzenie reguł lintera (ESLint).

Na dystrybucjach Linuxa trzeba uruchomić dodatkowo `chmod +x .husky/pre-commit`, aby nadać uprawniena do wykonywania skryptowi lub `yarn dlx husky-init --yarn2 && yarn` wtedy cały husky zainicjuje się w projekcie od nowa (zawartość skryptu pre-commit zostanie utracona).

# Uruchomienie

1. `yarn install --immutable`
2. `yarn cy`
