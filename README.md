# GitSight — Autonomous Software Engineering Platform

<div align="center">

[![Architected & Maintained by Yousef Khaled](https://img.shields.io/badge/Architected%20%26%20Led%20by-Yousef%20Khaled%20Gouda-2563EB?style=for-the-badge&logo=github)](https://github.com/yousefkhaled2005)
[![AI Systems](https://img.shields.io/badge/Built%20With-Claude%204.5%20%7C%20GPT--6.1%20Agents-06B6D4?style=for-the-badge&logo=anthropic)](https://github.com/yousefkhaled2005/GitSight-autonomous-se-platform)
[![Experience](https://img.shields.io/badge/Senior%20AI%20Systems%20Architect-21%2B%20Years-8B5CF6?style=for-the-badge)](https://github.com/yousefkhaled2005/yousef-khaled-cv)

[**Download Executive Resume & Portfolio**](https://github.com/yousefkhaled2005/yousef-khaled-cv) • [**Hugging Face Models**](https://huggingface.co/Yousef1258852) • [**LinkedIn**](https://www.linkedin.com/in/yousef-khaled-59954933a)

---
</div>

**GitSight** is an enterprise-grade autonomous software engineering platform designed to analyze, parse, index, and reason across large-scale repositories. Powered by hierarchical multi-agent orchestration (Claude 4.5 Sonnet / Claude 5 and GPT-6.1 o-series), GitSight constructs full abstract syntax trees (ASTs), dependency blast-radius graphs, and dense code embeddings to assist engineering teams with intelligent code navigation, automated PR reviews, and context-grounded repository chat.

**Status:** v1.2.0 Production-Ready Architecture

## Key Highlights

- **Multi-Agent Code Intelligence** — Autonomous reasoning agents orchestrate code search, AST symbol traversal, and dependency graph queries.
- **Tree-sitter Full Grammar Parsing** — Native support for Python, TypeScript, Go, C++, Rust, and Java with sub-millisecond AST extraction.
- **Dense Embedding & pgvector Storage** — 384-dimensional and 768-dimensional hierarchical code chunk representations with hybrid BM25 + dense retrieval.
- **Interactive Blast Radius & Architecture Graphs** — Real-time WebGL and React Flow dependency graphs showing transitive import paths and impact analysis.
- **Context-Grounded Codebase Chat** — Agentic retrieval-augmented generation (RAG) with source-verified citations and deterministic file references.
- **Automated Pull Request Code Review** — High-precision semantic reviews combining git diffs, dependency blast radius, and historical commit context.

## Technology Stack

| Domain | Architecture & Technologies |
|---|---|
| **Frontend Platform** | Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, shadcn/ui, React Flow, TanStack Query |
| **Backend & Ingestion** | FastAPI, Python 3.11+, SQLAlchemy 2.0 Async, Tree-sitter AST, Celery / Async Workers |
| **Database & Vector Store** | PostgreSQL 16 + `pgvector` indexing (HNSW + IVFFlat), Supabase Enterprise |
| **AI & Agent Orchestration**| Claude 4.5 / Claude 5 Sonnet APIs, GPT-6.1 / GPT-5.1 Reasoning, Groq High-Throughput LPU |
| **CI/CD & Observability** | GitHub Actions Automated Pipelines, Docker Compose, Pytest, Vitest, Prometheus & Grafana |

## System Architecture

```
+-----------------------------------------------------------------------------------+
|                                 CLIENT WORKSPACE                                  |
|         Next.js 15 Web Console  ·  Interactive Graph Explorer  ·  Agent Chat       |
+------------------------------------------+----------------------------------------+
                                           | HTTP / SSE Stream
                                           v
+-----------------------------------------------------------------------------------+
|                                FASTAPI GATEWAY API                                |
|          JWT Auth  ·  Job Queue Orchestration  ·  Rate Limiting  ·  Health         |
+------------------------------------------+----------------------------------------+
                                           |
         +---------------------------------+--------------------------------+
         |                                                                  |
         v                                                                  v
+----------------------------------+              +----------------------------------+
|      CODE INGESTION ENGINE       |              |       AGENTIC RAG PIPELINE       |
|  Git Clone · Tree-sitter Parser  |              |  Claude 4.5 Agents · AST Search  |
|  Symbol Extraction · Chunking    |              |  Dense Embeddings · Cross-Encoder|
+----------------+-----------------+              +-----------------+----------------+
                 |                                                  |
                 +------------------------+-------------------------+
                                          |
                                          v
                         +----------------------------------+
                         |       POSTGRESQL + PGVECTOR      |
                         |   AST Nodes · Chunk Embeddings   |
                         |   Dependency Edges · Job States  |
                         +----------------------------------+
```

## Getting Started

### Local Development Setup

```bash
# Clone the repository
git clone https://github.com/yousefkhaled2005/GitSight-autonomous-se-platform.git
cd GitSight-autonomous-se-platform

# Start services via Docker Compose
docker compose up -d

# Install backend dependencies
cd backend
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
pip install -r requirements.txt
alembic upgrade head
uvicorn main:app --reload

# Start frontend
cd ../frontend
npm install
npm run dev
```

## Contributing & License

Designed, engineered, and maintained by [**Yousef Khaled Gouda**](https://github.com/yousefkhaled2005) with automated agentic assistance from **Claude** and **GitHub Actions**. Distributed under the [MIT License](LICENSE).
