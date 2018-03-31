<?php

class shopShowcouponePlugin extends shopPlugin
{
    public function frontendCart()
    {
        //$this->addJs('js/showcoupone.js');
        //$this->addCss('css/showcoupone.css');
        return "";
    }

    public function frontendProduct()
    {
        $this->addJs('js/showcoupone.js');
        $this->addCss('css/showcoupone.css');
        return array(
            'menu' => '',
            'cart' => '',
            'block' => '',
            'block_aux' => '
            <div id="show-cop">
                <div class="line1">покупая этот товар вы получаете скидку</div>
                <div class="line2">
                    <div class="line21">5</div>
                    <div class="line22">%</div>
                </div>
                <div class="line3">Также вы получате купон для следующей покупки на сумму <span class="line31"></span> рублей</div>
            </div>',
        );
    }
}


