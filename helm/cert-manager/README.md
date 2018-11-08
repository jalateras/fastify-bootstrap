## Overview
Ther certificate manager is responsible for serving aTLS certificates to any services
that have an ingress component


## Install
Install the certificate manager

```
helm install --name cert-manager --namespace kube-system stable/cert-manager
```

Create the cluster wide certifcate issuer

```
kubectl apply -f cert-manager/prod-cluster-issuer.yaml
kubectl apply -f cert-manager/staging-cluster-issuer.yaml
```