<?php

return array(
    'name' => 'Show coupone',
    'description' => 'Show coupone in cart',
    'vendor' => 1010465,
    'version' => '1.0',
    'img' => 'img/icon.png',
    'shop_settings' => false,
    'frontend' => true,
    'handlers' => array(
        'frontend_cart' => 'frontendCart',
    )
);