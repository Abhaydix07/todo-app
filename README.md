# Todo App

This is a simple Todo application built with Laravel 9.x. It allows users to create, read, update, and delete todo items.

## Prerequisites

-   PHP >= 8.2
-   Composer 2.4.1 (preferred)
-   MySQL

## Installation

1. Clone the repository: `bash git clone https://github.com/your-username/todo-app.git`
2. Navigate to the project directory: `bash cd todo-app`
3. Install the dependencies using Composer: `bash composer install` or `bash composer update`
4. Copy the `.env.example` file and rename it to `.env`: `bash cp .env.example .env`
5. Open the `.env` file and configure the database connection settings:

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=todo
DB_USERNAME=root
DB_PASSWORD=

Replace the values with your actual database credentials. 6. Generate the application key: `bash php artisan key:generate` 7. Run the database migrations: `bash php artisan migrate` 8. Start the development server: `bash php artisan serve`

The application should now be accessible at `http://localhost:8000`.
