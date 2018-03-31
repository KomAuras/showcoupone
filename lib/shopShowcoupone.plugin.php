<?php

/*
 *
 * Showcoupone plugin for Webasyst framework.
 *
 * @name Showcoupone
 * @author EasyIT LLC
 * @link http://easy-it.ru/
 * @copyright Copyright (c) 2015, EasyIT LLC
 * @version    1.6.4.1, 2016-03-21
 *
 */

class shopShowcouponePlugin extends shopPlugin
{
    public function frontendCart()
    {
        $this->addJs('js/showcoupone.js');
        //$this->addCss('css/showcoupone.css');
        return "";
    }
}