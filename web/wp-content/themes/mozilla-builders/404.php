<?php
/**
 * Generic 404 page controller.
 *
 * @package MozillaBuilders
 */

use Timber\Timber;

$context = Timber::context();

// Page title.
$context['wp_title'] = '404 Not Found';

// Render view.
Timber::render( 'pages/404.twig', $context );
