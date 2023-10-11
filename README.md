# webapp

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Kubernetes (EKS)

### Pre-requisities
- [Have AWS CLI installed](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)

### Adding K8S to your ~/.kube/config
``` bash
aws eks update-kubeconfig --region ap-southeast-1 --name prod-insightic-southeast-1
aws eks update-kubeconfig --region ap-southeast-1 --name staging-insightic-southeast-1
```

### Verify contexts
``` bash
kubectl config get-contexts
```

### Display current context
``` bash
kubectl config current-context
```


### Switch context
``` bash
# should be in this format 
# arn:aws:eks:region-code:1234567890:cluster/cluster-name
kubectl config use-context <ARN-of-context-name>
```

### View logs
``` bash
kubectl get pods -n insightic-<env> | grep webapp
```

### View other details
``` bash
kubectl get services -n insightic-<env> | grep webapp

kubectl get ingress -n insightic-<env> | grep webapp
```