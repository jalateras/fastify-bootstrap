## Fastify API Server
Bootstrapping an API Server using [fastify](https://github.com/fastify/fastify)

* [pino](https://github.com/pinojs/pino) for logging
* [convict](https://github.com/mozilla/node-convict) for configuration
* [fastify-swagger](https://github.com/fastify/fastify-swagger) to document the API
* [prometheus](https://github.com/siimon/prom-client) for monitoring
* [yargs](https://github.com/yargs/yargs) for command line processing
* [npm](https://www.npmjs.com/) as the build tool .... for now

## Tasks
To run the lint task, which is based on the [Airbnb Style](https://github.com/doasync/eslint-config-airbnb-standard)

```bash
$npm run-script lint
```

To build a docker image

```bash
$npm run-script docker:build
```

To run up the server in a docker container

```bash
$npm run-script docker-run
```

To start the server in local mode

```bash
$npm start
```

### Kubernetes

The is a very simple Helm chart to deploy the service to a Kubernetes cluster

```bash
helm upgrade --install --namespace demo fastify-bootstrap helm/fastify-bootstrap --debug
```

We can set the certificate once we have the `certmanager` configured using the following. This will automatically
create the specified certificates for the domain names in the certificate. It will create the TLS certs and store
them in a kuberenetes secrets, which can be references by the ingress component.

```bash
kubectl apply -f helm/fastify-bootstrap/certificate.yaml
```

Here is another document on using the cert managet

* https://blog.n1analytics.com/free-automated-tls-certificates-on-k8s/




