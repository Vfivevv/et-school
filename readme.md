## 1. Requirements

- [NodeJS](https://nodejs.org/en) (18.x.x);
- [npm](https://www.npmjs.com/) (>=9.x.x);
- [PostgreSQL](https://www.postgresql.org/) (15.5)

## 2. Database Schema

```mermaid

erDiagram
   users {
    int id PK
    dateTime created_at
    dateTime updated_at
    citext email
    text password_hash
    text password_salt
   }

   user_details {
    int id PK
    dateTime created_at
    dateTime updated_at
    int user_id FK
    varchar first_name
    varchar last_name
    varchar nickname
    enum sex
    int avatar_file_id FK
   }

   users ||--|| user_details : user_id

```

## 3. Architecture

```mermaid

graph TD

   User

   Web["Web"]
   WebApp

   Route53

   NodeJS["NodeJS API"]

   User -->|Connects to| Web
   User -->|Connects to| WebApp
   Web -->|Connects to| Route53
   WebApp -->|Connects to| Route53
   EC2 -->|Uses| NodeJS

```

### 3.1 Global

#### 3.1.1 Technologies

1. [Typescript](https://www.typescriptlang.org/)
2. [npm workspaces](https://docs.npmjs.com/cli/v9/using-npm/workspaces)

### 3.2 Frontend

#### 3.2.1 Technologies

1. [React](https://react.dev/) — a frontend library
2. [Redux](https://redux.js.org/) + [Redux Toolkit](https://redux-toolkit.js.org/) — a state manager

#### 3.2.2 Folder Structure

1. assets - static assets (images, global styles)
2. libs - shared libraries and utilities

   2.1 components - plain react components

   2.2 enums

   2.3 helpers

   2.4 hooks

   2.5 modules - separate features or functionalities

   2.6 types

3. modules - separate app features or functionalities
4. pages - app pages

### 3.3 Backend

#### 3.3.1 Technologies

1. [Fastify](https://fastify.dev/) — a backend framework
2. [Knex](https://knexjs.org/) — a query builder
3. [Objection](https://vincit.github.io/objection.js/) — an ORM

#### 3.3.2 Folder Structure

1. db - database data (migrations, seeds)
2. libs - shared libraries and utilities

   2.1 enums

   2.2 exceptions

   2.3 helpers

   2.4 modules - separate features or functionalities

   2.5 types

3. modules - separate app features or functionalities

### 3.4 Shared Package

#### 3.4.1 Reason

As we are already using js on both frontend and backend it would be useful to share some contracts and code between them.

#### 3.4.2 Technologies

1. [Zod](https://github.com/colinhacks/zod) — a schema validator

## 4. How to Run

### 4.1 Manually

1. Create and fill all .env files. These files are:

- apps/frontend/.env
- apps/backend/.env

You should use .env.example files as a reference.

1. Install dependencies: `npm install`.

2. Install pre-commit hooks: `npx simple-git-hooks`. This hook is used to verify code style on commit.

3. Run database. You can run it by installing postgres on your computer.

4. Apply migrations: `npm run migrate:dev -w apps/backend`

5. Run backend: `npm run start:dev -w apps/backend`

6. Run frontend: `npm run start:dev -w apps/frontend`

## 5. Development Flow

### 5.1 Pull Request Flow

```
<type>: <ticket-title> <project-prefix>-<issue-number>
```

For the full list of types check [Conventional Commits](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional)

Examples:

- `feat: add dashboard screen tm-123`

### 5.2 Branch Flow

```
<issue-number>-<type>-<short-desc>
```

Examples:

- `123-feat-add-dashboard`
- `12-feat-add-user-flow`
- `34-fix-user-flow`

### 5.3 Commit Flow

We use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0) to handle commit messages

```
<type>: <description> <project-prefix>-<issue-number>
```

Examples:

- `feat: add dashboard component tm-45`
- `fix: update dashboard card size tm-212`

<a href="https://iconscout.com/icons/car-door" class="text-underline font-size-sm" target="_blank">Car Door</a> by <a href="https://iconscout.com/contributors/triangle-squad" class="text-underline font-size-sm" target="_blank">Triangle Squad</a>
<a href="https://iconscout.com/icons/climate-change" class="text-underline font-size-sm" target="_blank">Climate Change</a> by <a href="https://iconscout.com/contributors/vectorvalley" class="text-underline font-size-sm" target="_blank">Vector Valley</a>
<a href="https://iconscout.com/icons/trunk" class="text-underline font-size-sm" target="_blank">Trunk</a> by <a href="https://iconscout.com/contributors/yogswpy" class="text-underline font-size-sm">Widyatmoko P.Y</a> on <a href="https://iconscout.com" class="text-underline font-size-sm">IconScout</a>
