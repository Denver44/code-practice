# BookMyShow — LLD Practice

Hands-on companion code for the BookMyShow low-level design blog series.

## How to use this

1. Read the blog post for a module (e.g. "seat layout representation").
2. Open `starter/` and implement that module yourself — the project setup, config, and a working `/health` route are already wired up so you can focus on the actual LLD problem, not boilerplate.
3. Compare your work against `final/`, which has the complete reference implementation for every module.

`starter/` and `final/` are two independent projects, each with its own `package.json` — install and run them separately.

## Stack

- **TypeScript** + **Express** — plain `express.Router()` per resource, no framework magic on top.
- **Mongoose** + **MongoDB** — schemas/models and data access.
- **Zod** — schema validation for request bodies (`src/middleware/validate.ts`).
- **No DI container.** Dependencies (repository → service → controller) are wired by hand with plain constructors. This is intentional: an LLD interview is testing whether *you* can design and wire class relationships correctly — a container would do that work for you and hide the exact skill this course is for.

Why not something closer to Spring Boot (decorators, DI container, etc.)? Because the goal here is LLD practice transferable to your actual stack and interviews — a MongoDB/JavaScript/TypeScript shop, not a Java one. Bolting Spring-flavored decorator libraries onto Express doesn't reflect how real Express codebases are written, and it can actually hide the class-design work an LLD round is meant to evaluate. Plain classes, plain constructors, plain routers — closer to what you'll actually be asked to write.

## Layers

```text
src/
  controllers/   # HTTP layer — request/response only, delegates to services
  services/      # business logic
  repositories/  # data access, wraps Mongoose models
  entities/      # Mongoose schemas + models
  dto/           # request/response shapes, validated with zod
  middleware/    # cross-cutting concerns (validation, etc.)
  config/        # env, database connection
```

Each layer's classes are composed manually — e.g. a controller's router file constructs its service with `new`, passing in a repository instance — rather than relying on a DI framework to resolve them.

## Setup (for either starter/ or final/)

1. `cd starter` (or `cd final`)
2. Copy `.env.example` to `.env` and adjust if needed.
3. Have a local MongoDB instance running (or point `MONGO_URI` at one).
4. Install dependencies and run:

```bash
npm install
npm run dev
```

5. Verify the server is up: `GET http://localhost:4000/health` → `{ "status": "ok" }`

## Modules

Each module corresponds to a step in the blog series:

1. Design (overview, requirements, class diagram) — no code
2. Schema design — Mongoose entities derived from the class diagram
3. Seat layout representation — virtual-matrix seat placement
4. Concurrent seat booking — atomic soft-locking with MongoDB
5. Full booking flow — payment, cancellation, refund status

`starter/` currently has only the base setup (config, server bootstrap, `/health` check) — each module's entities, services, and controllers get added as we work through the blog. `final/` mirrors the same growth, fully implemented.
