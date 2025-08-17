# imhere

Aplicativo Simples em React Native para gerenciamento de participantes em eventos, utilizando Expo, NativeWind e armazenamento local.

## Funcionalidades

- Adicionar participantes com nome único.
- Listar participantes cadastrados.
- Remover participantes com confirmação.
- Persistência dos dados usando AsyncStorage.

## Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [NativeWind](https://www.nativewind.dev/) (Tailwind CSS para React Native)
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/)
- [UUID](https://www.npmjs.com/package/uuid)

## Estrutura do Projeto

```
src/
  app/
    __layout.tsx
    index.tsx
  components/
    button.tsx
    header.tsx
    input.tsx
    item.tsx
    list.tsx
  storage/
    itemStorage.ts
  styles/
    colors.ts
    global.css
assets/
  images/
    adaptive-icon.png
    favicon.png
    icon.png
    splash-icon.png
```

## Como rodar o projeto

1. Instale as dependências:
   ```sh
   npm install
   ```
2. Inicie o projeto:
   ```sh
   npm start
   ```
3. Siga as instruções do Expo para rodar no emulador ou dispositivo físico.

## Scripts

- `npm start` — inicia o projeto Expo.
- `npm run android` — inicia no Android.
- `npm run ios` — inicia no iOS.
- `npm run web` — inicia no navegador.

## Observações

- O projeto utiliza [NativeWind](https://www.nativewind.dev/) para estilização com Tailwind CSS.
- Os dados dos participantes são salvos localmente no dispositivo usando AsyncStorage.

---

Sinta-se à vontade para contribuir ou sugerir melhorias!
