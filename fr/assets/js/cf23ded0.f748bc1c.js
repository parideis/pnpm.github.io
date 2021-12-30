"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1375],{4155:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/2021/12/29/yearly-update","metadata":{"permalink":"/fr/blog/2021/12/29/yearly-update","editUrl":"https://crowdin.com/project/pnpm/fr","source":"@site/i18n/fr/docusaurus-plugin-content-blog/2021-12-29-yearly-update.md","title":"The year 2021 for pnpm","description":"It is the end of the year and it was a good year for pnpm, so let\'s see how it went.","date":"2021-12-29T00:00:00.000Z","formattedDate":"29 d\xe9cembre 2021","tags":[],"readingTime":2.51,"truncated":false,"authors":[{"name":"Zoltan Kochan","url":"http://twitter.com/zoltankochan","imageURL":"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],"nextItem":{"title":"Options de configuration des node_modules avec pnpm","permalink":"/fr/blog/2020/10/17/node-modules-configuration-options-with-pnpm"}},"content":"It is the end of the year and it was a good year for pnpm, so let\'s see how it went.\\n\\n## Usage\\n\\n### Download Stats\\n\\nMy goal this year was to beat Bower by the number of downloads. We were able to achieve this goal [in November](https://npm-stat.com/charts.html?package=pnpm&package=bower&from=2021-01-01&to=2021-12-29):\\n\\n![](/img/blog/pnpm-vs-bower-stats.png)\\n\\npnpm was downloaded about [3 times more](https://npm-stat.com/charts.html?package=pnpm&from=2016-12-01&to=2021-12-29) in 2021 than in 2020:\\n\\n![](/img/blog/download-stats-2021.png)\\n\\n:::note\\n\\nThese stats don\'t even measure all the different ways that pnpm may be installed! They only measure the downloads of the [pnpm npm package](https://www.npmjs.com/package/pnpm). This year we also added compiled binary versions of pnpm, which are shipped differently.\\n\\n:::\\n\\n### Docs visits\\n\\nWe collect some unpersonalized stats from our docs using Google Analytics. In 2021, sometimes we had more than 2,000 unique visitors a week.\\n\\n![](/img/blog/ga-unique-visits-2021.png)\\n\\nMost of our users are from the United States and China.\\n\\n![](/img/blog/countries-2021.png)\\n\\n### GitHub stars\\n\\nOur [main GitHub repository](https://github.com/pnpm/pnpm) received +5,000 stars this year.\\n\\n![](/img/blog/stars-2021.png)\\n\\n### New users\\n\\nOur biggest new user this year is [Bytedance](https://github.com/pnpm/pnpm.github.io/pull/89) (the company behind TikTok).\\n\\nAlso, many great open-source projects started to use pnpm. Some switched to pnpm because of its great support of monorepos:\\n\\n* [Vue](https://github.com/vuejs/vue-next)\\n* [Vite](https://github.com/vitejs/vite)\\n* and [others](https://github.com/vitejs/vite).\\n\\nSome switched because they like how efficient, fast, and beautiful pnpm is:\\n\\n* [Autoprefixer](https://twitter.com/Autoprefixer/status/1476226146488692736)\\n* [PostCSS](https://twitter.com/PostCSS/status/1470438664006258701)\\n* [Browserslist](https://twitter.com/Browserslist/status/1468264308308156419)\\n\\n## Feature Highlights\\n\\n### New lockfile format (since [v6.0.0](https://github.com/pnpm/pnpm/releases/tag/v6.0.0))\\n\\nOne of the first and most important changes this year was the new `pnpm-lock.yaml` format. This was a breaking change, so we had to release v6. But it was a success. The old lockfile was causing Git conflicts frequently. Since the new format was introduced, we did not receive any complaints about Git conflicts.\\n\\n### Managing Node.js versions (since [v6.12.0](https://github.com/pnpm/pnpm/releases/tag/v6.12.0))\\n\\nWe shipped a new command (`pnpm env`) that allows to manage Node.js versions. So you may use pnpm instead of Node.js version managers like nvm or Volta.\\n\\nAlso, pnpm is shipped as a standalone executable, so you can run it even with no Node.js preinstalled on the system.\\n\\n### Injecting local dependencies (since [v6.20.0](https://github.com/pnpm/pnpm/releases/tag/v6.20.0))\\n\\nYou may \\"inject\\" a local dependency. By default, local dependencies are symlinked to `node_modules` but with this new feature you may instruct pnpm to hard link the files of the package instead.\\n\\n### Improved reporting of peer dependency issues (since [v6.24.0](https://github.com/pnpm/pnpm/releases/tag/v6.24.0))\\n\\nPeer dependency issues used to be printed as plain text and it was hard to understand them. They are now all grouped and printed in a nice hierarchy structure.\\n\\n## The Competition\\n\\n### Yarn\\n\\nYarn added a pnpm linker in [v3.1](https://dev.to/arcanis/yarn-31-corepack-esm-pnpm-optional-packages--3hak#new-install-mode-raw-pnpm-endraw-). So Yarn can create a similar node-modules directory structure to the one that pnpm creates.\\n\\nAlso, the Yarn team plans to implement a content-addressable storage to be more disk space efficient.\\n\\n### npm\\n\\nThe npm team decided to also adopt the symlinked node-modules directory structure that pnpm uses (related [RFC](https://github.com/npm/rfcs/blob/main/accepted/0042-isolated-mode.md)).\\n\\n### Others\\n\\n[Bun](https://twitter.com/jarredsumner/status/1473416431291174912/photo/1) written in Zig and [Volt](https://github.com/voltpkg/volt) written in Rust both claim to be faster than npm/Yarn/pnpm. I did not benchmark these new package managers yet.\\n\\n## Future Plans\\n\\nFaster, better, best."},{"id":"/2020/10/17/node-modules-configuration-options-with-pnpm","metadata":{"permalink":"/fr/blog/2020/10/17/node-modules-configuration-options-with-pnpm","editUrl":"https://crowdin.com/project/pnpm/fr","source":"@site/i18n/fr/docusaurus-plugin-content-blog/2020-10-17-node-modules-configuration-options-with-pnpm.md","title":"Options de configuration des node_modules avec pnpm","description":"Il existe de nombreuses fa\xe7ons de cr\xe9er un dossier nodemodules. Votre objectif doit \xeatre de cr\xe9er le plus strict, mais si ce n\'est pas possible, il y a aussi des options pour faire un nodemodules en vrac.","date":"2020-10-17T00:00:00.000Z","formattedDate":"17 octobre 2020","tags":[],"readingTime":1.925,"truncated":true,"authors":[{"name":"Zoltan Kochan","url":"http://twitter.com/zoltankochan","imageURL":"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],"prevItem":{"title":"The year 2021 for pnpm","permalink":"/fr/blog/2021/12/29/yearly-update"},"nextItem":{"title":"Flat node_modules n\'est pas le seul moyen","permalink":"/fr/blog/2020/05/27/flat-node-modules-is-not-the-only-way"}},"content":"Il existe de nombreuses fa\xe7ons de cr\xe9er un dossier node_modules. Votre objectif doit \xeatre de cr\xe9er le plus strict, mais si ce n\'est pas possible, il y a aussi des options pour faire un node_modules en vrac.\\n\\n\x3c!--truncate--\x3e\\n\\n## Configuration par d\xe9faut\\n\\nPar d\xe9faut, pnpm v5 cr\xe9era un node_modules semi-strict. Semi-strict signifie que votre application ne pourra require que des packages ajout\xe9s en tant que d\xe9pendances au `package.json` (\xe0 quelques exceptions pr\xe8s). Cependant, vos d\xe9pendances pourront acc\xe9der \xe0 tous les packages.\\n\\nLa configuration par d\xe9faut ressemble \xe0 ceci:\\n\\n```ini\\n; Tous les packages sont hiss\xe9s vers node_modules/.pnpm/node_modules\\nhoist-pattern[]=*\\n\\n; Tous les types sont hiss\xe9s \xe0 la racine afin de rendre TypeScript heureux\\npublic-hoist-pattern[]=*types*\\n\\n; Tous les packages li\xe9s \xe0 ESLint sont \xe9galement hiss\xe9s \xe0 la racine\\npublic-hoist-pattern[]=*eslint*\\n```\\n\\n## Plug\'n\'Play. La configuration la plus stricte\\n\\npnpm prend en charge [Yarn\'s Plug\'n\'Play](https://yarnpkg.com/features/pnp) depuis la version 5.9. Avec PnP, votre application et les d\xe9pendances de votre application n\'auront acc\xe8s qu\'\xe0 leurs d\xe9pendances d\xe9clar\xe9es. C\'est encore plus strict que de d\xe9finir `hoist=false` car \xe0 l\'int\xe9rieur d\'un monod\xe9p\xf4t, votre application ne pourra m\xeame pas acc\xe9der aux d\xe9pendances du projet racine.\\n\\nPour utiliser Plug\'n\'Play, d\xe9finissez ces param\xe8tres:\\n\\n```ini\\nnode-linker=pnp\\nsymlink=false\\n```\\n\\n## Un r\xe9pertoire de node_modules strict et traditionnel\\n\\nSi vous n\'\xeates pas encore pr\xeat \xe0 utiliser PnP, vous pouvez toujours \xeatre strict et autoriser uniquement les packages \xe0 acc\xe9der \xe0 leurs propres d\xe9pendances en d\xe9finissant la configuration de hoist sur false:\\n\\n```ini\\nhoist=false\\n```\\n\\nCependant, si certaines de vos d\xe9pendances tentent d\'acc\xe9der \xe0 des packages qui ne figurent pas dans leurs d\xe9pendances, vous avez deux options:\\n\\n1. Cr\xe9ez un `pnpmfile.js` et utilisez un [crochet](/pnpmfile) pour ajouter la d\xe9pendance manquante au manifeste du package.\\n\\n2. Ajoutez un pattern au param\xe8tre `hoist-pattern`. Par exemple, si le module non trouv\xe9 est `babel-core`, ajoutez le param\xe8tre suivant \xe0 `.npmrc`:\\n\\n    ```ini\\n    hoist-pattern[]=babel-core\\n    ```\\n\\n## Le pire des cas - hisser \xe0 la racine\\n\\nCertains outils peuvent ne pas fonctionner m\xeame avec la configuration par d\xe9faut de pnpm, qui h\xe9berge tout \xe0 la racine du magasin virtuel et quelques packages \xe0 la racine. Dans ce cas, vous pouvez hisser tout ou un sous-ensemble de d\xe9pendances \xe0 la racine du r\xe9pertoire des modules.\\n\\nTout placer \xe0 la racine de node_modules:\\n\\n```ini\\nshamefully-hoist=true\\n```\\n\\nNe hisser que les packages qui correspondent \xe0 un mod\xe8le:\\n\\n```ini\\npublic-hoist-pattern[]=babel-*\\n```"},{"id":"/2020/05/27/flat-node-modules-is-not-the-only-way","metadata":{"permalink":"/fr/blog/2020/05/27/flat-node-modules-is-not-the-only-way","editUrl":"https://crowdin.com/project/pnpm/fr","source":"@site/i18n/fr/docusaurus-plugin-content-blog/2020-05-27-flat-node-modules-is-not-the-only-way.md","title":"Flat node_modules n\'est pas le seul moyen","description":"Les nouveaux utilisateurs de pnpm me posent souvent des questions sur la structure bizarre du dossier node_modules que pnpm cr\xe9\xe9. Pourquoi n\'est-il pas plat ? O\xf9 sont toutes les sous-d\xe9pendances ?","date":"2020-05-27T00:00:00.000Z","formattedDate":"27 mai 2020","tags":[],"readingTime":2.895,"truncated":true,"authors":[{"name":"Zoltan Kochan","url":"http://twitter.com/zoltankochan","imageURL":"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],"prevItem":{"title":"Options de configuration des node_modules avec pnpm","permalink":"/fr/blog/2020/10/17/node-modules-configuration-options-with-pnpm"}},"content":"Les nouveaux utilisateurs de pnpm me posent souvent des questions sur la structure bizarre du dossier `node_modules` que pnpm cr\xe9\xe9. Pourquoi n\'est-il pas plat ? O\xf9 sont toutes les sous-d\xe9pendances ?\\n\\n\x3c!--truncate--\x3e\\n\\n> Je vais supposer que les lecteurs de cet article sont d\xe9j\xe0 familiers avec les `node_modules` plats cr\xe9\xe9s par npm et Yarn. Si vous ne comprenez pas pourquoi npm 3 a d\xfb commencer \xe0 utiliser `node_modules` en v3, vous pouvez trouver un peu de pr\xe9histoire dans [Pourquoi devrait-on utiliser pnpm ?](https://www.kochan.io/nodejs/why-should-we-use-pnpm.html).\\n\\nAlors pourquoi les `node_modules` de pnpm sont inhabituels ? Cr\xe9ons deux r\xe9pertoires et \xe9xecutons `npm add express` dans l\'un d\'eux et `pnpm add express` dans l\'autre. Voil\xe0 ce que vous obtenez dans le `node_modules` du premier r\xe9pertoire:\\n\\n```text\\n.bin\\naccepts\\narray-flatten\\nbody-parser\\nbytes\\ncontent-disposition\\ncookie-signature\\ncookie\\ndebug\\ndepd\\ndestroy\\nee-first\\nencodeurl\\nescape-html\\netag\\nexpress\\n```\\n\\nVous pouvez voir tout le r\xe9pertoire [ici](https://github.com/zkochan/comparing-node-modules/tree/master/npm-example/node_modules).\\n\\nEt voici ce que vous obtenez dans les `node_modules` cr\xe9\xe9s par pnpm:\\n\\n```text\\n.pnpm\\n.modules.yaml\\nexpress\\n```\\n\\nVous pouvez v\xe9rifier [ici](https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules).\\n\\nAlors, o\xf9 sont toues les d\xe9pendances ? Il y a qu\'un seul dossier dans les `node_modules` appel\xe9 `.pnpm` et il y a un lien symbolique appel\xe9 `express`. Et bien, nous n\'avons install\xe9 que `express`, c\'est donc le seul package auquel votre application doit avoir acc\xe8s\\n\\n> En savoir plus sur pourquoi la rigueur de pnpm est une bonne chose [ici](https://medium.com/pnpm/pnpms-strictness-helps-to-avoid-silly-bugs-9a15fb306308)\\n\\nVoyons ce qu\'il y a \xe0 l\'int\xe9rieur d\'`express`:\\n\\n```text\\n\u25be node_modules\\n  \u25b8 .pnpm\\n  \u25be express\\n    \u25b8 lib\\n      History.md\\n      index.js\\n      LICENSE\\n      package.json\\n      Readme.md\\n    .modules.yaml\\n```\\n\\n`express` n\'a pas de `node_modules` ? O\xf9 sont toutes les d\xe9pendances d\'`express` ?\\n\\nL\'astuce est qu\'`express` n\'est qu\'un lien symbolique. Lorsque Node.js r\xe9sout les d\xe9pendances, il utilise leurs emplacements r\xe9els, il ne conserve donc pas les liens symboliques. Mais o\xf9 est l\'emplacement r\xe9el d\'`express`, vous vous demandez ?\\n\\nIci: [node_modules/.pnpm/express@4.17.1/node_modules/express](https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules/.pnpm/express@4.17.1/node_modules/express).\\n\\nOK, alors maintenant nous connaissons l\'utilit\xe9 du dossier `.pnpm/`. `.pnpm/` stocke tous les packages dans une structure de dossiers plats, de sorte que chaque package peut \xeatre trouv\xe9 dans un dossier nomm\xe9 par ce mod\xe8le:\\n\\n```text\\n.pnpm/<name>@<version>/node_modules/<name>\\n```\\n\\nOn appelle \xe7a le dossier du stockage virtuel.\\n\\nCette structure plate \xe9vite les probl\xe8mes de long chemin caus\xe9s par les `node_modules` cr\xe9\xe9s par npm v2 mais maintient les packages isol\xe9s, contrairement aux `node_modules` plats cr\xe9\xe9s par npm v 3, 4, 5, 6 ou bien Yarn v1.\\n\\nRegardons maintenant le r\xe9el emplacement d\'`express`:\\n\\n```text\\n  \u25be express\\n    \u25b8 lib\\n      History.md\\n      index.js\\n      LICENSE\\n      package.json\\n      Readme.md\\n```\\n\\nEst-ce une arnaque ? Il manque encore `node_modules` ! La deuxi\xe8me astuce de la structure des `node_modules` de pnpm est que les d\xe9pendances des packages se trouvent au m\xeame niveau de r\xe9pertoire que l\'emplacement r\xe9el du package d\xe9pendant. Donc les d\xe9pendances d\'`express` ne sont pas dans `.pnpm/express@4.17.1/node_modules/express/node_modules/` mais dans [.pnpm/express@4.17.1/node_modules/](https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules/.pnpm/express@4.17.1/node_modules):\\n\\n```text\\n\u25be node_modules\\n  \u25be .pnpm\\n    \u25b8 accepts@1.3.5\\n    \u25b8 array-flatten@1.1.1\\n    ...\\n    \u25be express@4.16.3\\n      \u25be node_modules\\n        \u25b8 accepts\\n        \u25b8 array-flatten\\n        \u25b8 body-parser\\n        \u25b8 content-disposition\\n        ...\\n        \u25b8 etag\\n        \u25be express\\n          \u25b8 lib\\n            History.md\\n            index.js\\n            LICENSE\\n            package.json\\n            Readme.md\\n```\\n\\nToutes les d\xe9pendances d\'`express` sont des liens symboliques vers des dossiers appropri\xe9s dans `node_modules/.pnpm/`. Placer les d\xe9pendances d\'`express` un niveau sup\xe9rieur permet d\'\xe9viter les liens symboliques circulaires.\\n\\nDonc, comme vous pouvez le voir, m\xeame si la structure `node_modules` pnpm semble inhabituelle au premier abord:\\n\\n1. il est compl\xe8tement compatible avec Node.js\\n2. les packages sont bien regroup\xe9s avec leurs d\xe9pendances\\n\\nLa structure est un peu [plus complexe](/how-peers-are-resolved) pour les packages avec des d\xe9pendances paires mais l\'id\xe9e est la m\xeame: utiliser des liens symboliques pour cr\xe9er une imbrication avec une structure de dossier plate."}]}')}}]);