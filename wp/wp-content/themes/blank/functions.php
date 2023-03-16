<?php

if (!defined('REDIRECT_URL')) {
    define('REDIRECT_URL', 'https://offwiththehead.soleguia.es/');
}

if(!function_exists('a_custom_redirect')) {
    function a_custom_redirect() {
        header("Location: ".REDIRECT_URL);
        die();
    }
}