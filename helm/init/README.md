# Helm for Package Management

When we initialize helm we need to assign it a service account, which means we need to deploy the [service
account and permissions](service-account.yaml)


```bash
$ kubectl apply -f init/service-account.yaml
$ helm init --service-account=helm --wait
```
