# Law Firm Website

A responsive law firm website built with Laravel, Inertia.js, and React. It includes pages for the firm, attorneys, practice areas, client process, testimonials, and contact information.

## Technology stack

- **Backend:** PHP 8.2+, Laravel 12
- **Frontend:** React 19, Inertia.js 3, JavaScript (ES modules)
- **Styling and assets:** Tailwind CSS 4, Vite 8, Laravel Vite Plugin
- **Routing:** Laravel routes with Ziggy available for JavaScript route helpers
- **Database:** SQLite by default; Laravel configuration also includes MySQL, MariaDB, PostgreSQL, and SQL Server connections
- **Development and quality tools:** Composer, npm, Laravel Pint, PHPUnit 11, Laravel Pail

Dependency version ranges are defined in [composer.json](composer.json) and [package.json](package.json).

## Features

- Home, About, Attorneys, Practice Areas, Process, Testimonials, and Contact pages
- Inertia-powered navigation between Laravel routes and React pages
- Responsive interface styled with Tailwind CSS
- Contact form validation for name, email, phone, practice area, and message

**Contact form behavior:** submissions are validated and return a success message, but are not currently emailed or saved to the database. Configure delivery or persistence before using the form to collect real inquiries.

## Requirements

- PHP 8.2 or later with the required Laravel PHP extensions
- Composer
- Node.js and npm
- SQLite for the default local setup, or a supported database server

## Local development

1. Clone the repository and enter its directory:

   ```sh
   git clone https://github.com/Taonanya/Laravel-new-Law-Firm.git
   cd Laravel-new-Law-Firm
   ```

2. Install dependencies:

   ```sh
   composer install
   npm install
   ```

3. Create the environment file and application key:

   ```sh
   cp .env.example .env
   php artisan key:generate
   ```

   On Windows PowerShell, use `Copy-Item .env.example .env` instead of `cp` if needed.

4. Configure the database. The example environment uses SQLite. Create its file if it does not exist:

   ```sh
   # macOS / Linux
   touch database/database.sqlite
   ```

   In PowerShell:

   ```powershell
   New-Item -ItemType File -Force database/database.sqlite
   ```

   Keep `DB_CONNECTION=sqlite` in `.env` for SQLite. To use MySQL or another configured database, set `DB_CONNECTION` and the matching `DB_HOST`, `DB_PORT`, `DB_DATABASE`, `DB_USERNAME`, and `DB_PASSWORD` values.

5. Run the migrations and start the development processes:

   ```sh
   php artisan migrate
   composer dev
   ```

   The `composer dev` script starts the Laravel server, queue listener, log viewer, and Vite development server. Visit [http://localhost:8000](http://localhost:8000). You can also run `php artisan serve` and `npm run dev` in separate terminals.

## Database

The default connection is SQLite, configured in `.env.example`. Migrations in `database/migrations` create Laravel's standard users, password reset tokens, sessions, cache, and queue tables. The website's page content is currently provided by the frontend; there are no migrations for attorneys, testimonials, or contact inquiries.

For local database setup and schema changes:

```sh
php artisan migrate
```

Use `php artisan migrate:fresh` only when you intend to drop all existing tables and recreate them.

## Production deployment

This is a standard Laravel application and can be deployed to a PHP hosting service, VPS, or container platform that supports Laravel. No hosting provider or automated deployment pipeline is configured in this repository.

1. Provision PHP 8.2+, Composer, Node.js/npm for the asset build, and a database. Configure the web server document root to the application's `public/` directory.
2. Set production environment variables on the host. At minimum, configure `APP_ENV=production`, `APP_DEBUG=false`, `APP_URL`, a strong persistent `APP_KEY`, database credentials, and suitable session/cache/queue settings. Do not commit the production `.env` file or credentials.
3. Install dependencies and build frontend assets:

   ```sh
   composer install --no-dev --optimize-autoloader
   npm ci
   npm run build
   ```

4. Run database migrations and cache configuration for production:

   ```sh
   php artisan migrate --force
   php artisan optimize
   ```

5. Ensure Laravel's `storage` and `bootstrap/cache` directories are writable by the web server. Run `php artisan storage:link` if the application uses public-disk uploads.
6. Configure the host to serve Laravel's public entry point over HTTPS. Set up a process manager for queue workers only if the application uses queued jobs. The current contact form does not enqueue or send mail.

The repository defaults to database-backed sessions, cache, and queues. If these are enabled in production, run the migrations and keep the relevant database tables available. Alternatively, configure supported production stores through the corresponding environment variables.

## Useful commands

| Command | Purpose |
| --- | --- |
| `composer dev` | Start Laravel, queue listener, Pail, and Vite for development |
| `composer setup` | Install dependencies, create local environment/key, migrate, and build assets |
| `npm run dev` | Run the Vite development server |
| `npm run build` | Build production frontend assets into `public/build` |
| `php artisan migrate` | Apply database migrations |
| `composer test` | Run the Laravel test suite |
| `vendor/bin/pint` | Format PHP code with Laravel Pint |

## Project layout

- `app/Http/Controllers` — Laravel controllers, including page routes and contact validation
- `routes/web.php` — Web routes
- `resources/js/Pages` — Inertia React page components
- `resources/js/Components` — Shared React components
- `resources/css` — Tailwind stylesheet entry point
- `database/migrations` — Database schema migrations
- `public/` — Web server document root and built assets

## License

The Composer project is marked MIT licensed. See [composer.json](composer.json).
