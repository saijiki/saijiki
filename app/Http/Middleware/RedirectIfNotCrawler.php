<?php

namespace App\Http\Middleware;

use Closure;

class RedirectIfNotCrawler
{
    /**
     * @var array
     */
    private static $crawlers = [
        'facebookexternalhit/',
        'Twitterbot/',
    ];

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (!\Str::contains($request->header('User-Agent'), self::$crawlers)) {
            return view('spa');
        }

        return $next($request);
    }
}
