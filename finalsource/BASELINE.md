# Empty three-layer source baseline

`finalsource` is the researcher-designated clean starting point for every new
pipeline, replicate, or model condition. It is runnable platform scaffolding,
not use-case-generated source.

## Layer contract

Both applications use three layers:

```text
presentation -> business -> data
```

- `presentation` owns HTTP/UI input and output.
- `business` owns use cases, business models, and rules.
- `data` owns persistence and remote I/O.

Presentation must not access database or HTTP adapters directly. Data must not
import presentation. Add an interface only when it hides meaningful behavior;
empty layers remain explicit `.gitkeep` extension points rather than pass-through
classes.

## Baseline contents

- Frontend: React/Vite/TypeScript/Tailwind bootstrap, a root router, placeholder
  home/not-found pages, a generic HTTP client, and normalized response contracts.
- Backend: NestJS bootstrap, `/api` prefix, validation, CORS, normalized response
  handling, development Swagger, a health endpoint, and TypeORM/MySQL wiring.
- Database: one no-op `EmptyBaseline` migration and no application tables. The
  runtime retains TypeORM's migration metadata table only.

Feature pages, authentication, domain entities, repositories, and business use
cases are intentionally absent. Approved use cases extend the three layers and
register their modules through the existing composition roots.

## Runtime boundary

`compose.yaml` uses the isolated project name `100ms-ui-kit`, runs MySQL 8.4,
executes reviewed migrations once, and serves the compiled applications. MySQL
is internal to the Compose network. Application schema synchronization and
automatic migration execution remain disabled.
