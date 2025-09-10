# Test-v2-public

This repository contains a simple greetings package.

## Usage

Run the command-line interface to print a greeting:

```
python -m greetings Alice
```

## Development

Run the test suite:

```
python -m unittest
```

## Text → n8n Builder

The `text2n8n` directory contains a minimal example service that
converts natural‑language requests into n8n workflows using a local LLM
via [Ollama](https://github.com/ollama/ollama).

```bash
cd text2n8n
npm install
npm start
```

Ensure that both Ollama and n8n are running locally before starting the
service.
