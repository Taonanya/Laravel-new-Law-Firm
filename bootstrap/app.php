<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Inertia\Inertia;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware): void {
        $middleware->web(append: [
            \Inertia\Middleware::class,
        ]);
        
        $middleware->validateCsrfTokens(except: [
            // Add any routes that should be excluded from CSRF validation
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        Inertia::share([
            'errors' => function () {
                return request()->session()->get('errors')
                    ? request()->session()->get('errors')->getBag('default')->getMessages()
                    : (object) [];
            },
        ]);
    })->create();
