<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Display the homepage.
     */
    public function index()
    {
        return Inertia::render('Home');
    }

    /**
     * Display the practice areas page.
     */
    public function practiceAreas()
    {
        return Inertia::render('PracticeAreas');
    }

    /**
     * Display the about page.
     */
    public function about()
    {
        return Inertia::render('About');
    }

    /**
     * Display the attorneys page.
     */
    public function attorneys()
    {
        return Inertia::render('Attorneys');
    }

    /**
     * Display the process page.
     */
    public function process()
    {
        return Inertia::render('Process');
    }

    /**
     * Display the testimonials page.
     */
    public function testimonials()
    {
        return Inertia::render('Testimonials');
    }

    /**
     * Display the contact page.
     */
    public function contact()
    {
        return Inertia::render('Contact');
    }

    /**
     * Handle the contact form submission.
     */
    public function contactSubmit(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:50',
            'practice_area' => 'nullable|string|max:255',
            'message' => 'required|string|max:5000',
        ]);

        // In a real application, you would send an email or store the contact request
        // For now, we'll just return a success response

        return back()->with('success', 'Thank you for your message. We will get back to you within 24 hours.');
    }
}
