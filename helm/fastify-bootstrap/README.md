## Overview
Deploying the sample application to 

## Installing

```
helm install --name demo --namespace demo --values fastify-bootstrap/smca-values.yaml fastify-bootstrap --dry-run --debug
```

```
helm upgrade --install --wait --namespace demo --values fastify-bootstrap/smca-values.yaml demo fastify-bootstrap \
  --dry-run --debug
```