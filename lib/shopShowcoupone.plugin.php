<?php

class shopShowcouponePlugin extends shopPlugin
{
    public function frontendCart()
    {
        //$this->addJs('js/showcoupone.js');
        //$this->addCss('css/showcoupone.css');
        return "";
    }

    public function backendOrder()
    {
        //$this->addCss('css/showcoupone.css');
		//wa()->getResponse()->addCss('plugins/showcoupone/css/showcoupone.css', 'showcoupone');
		$id_order = isset($_GET['id']) ? (int)$_GET['id'] : 0;
		if ($id_order)
		{
			/*
			$order_model = new shopOrderModel();
			$order = $order_model->getById($id_order);
			*/
			$order_items_model = new shopOrderItemsModel();
			$items = $order_items_model->getItems($id_order);
			/*
			echo "<pre>";
			print_r($items);
			echo "</pre>";
			*/
			$total = 0;
			foreach( $items as $item ){
				$coupone_summ = 0;
                if ($item['price'] < 3000)
                    $coupone_summ = 100 * $item['quantity'];
                if ($item['price'] >= 3000 & $item['price'] < 6000)
                    $coupone_summ = 200 * $item['quantity'];
                if ($item['price'] >= 6000 & $item['price'] < 10000)
                    $coupone_summ = 500 * $item['quantity'];
                if ($item['price'] >= 10000 & $item['price'] < 13000)
                    $coupone_summ = 700 * $item['quantity'];
                if ($item['price'] >= 13000 & $item['price'] < 16000)
                    $coupone_summ = 900 * $item['quantity'];
                if ($item['price'] >= 16000 & $item['price'] < 20000)
                    $coupone_summ = 1000 * $item['quantity'];
                if ($item['price'] >= 20000 & $item['price'] < 25000)
                    $coupone_summ = 1500 * $item['quantity'];
                if ($item['price'] >= 25000 & $item['price'] < 30000)
                    $coupone_summ = 2000 * $item['quantity'];
                if ($item['price'] >= 13000)
                    $coupone_summ = 3000 * $item['quantity'];
                $total = $total + $coupone_summ;
			}
		}
    	return array(
        	'title_suffix'  => "",
	        'action_button' => "",
    	    'action_link'   => "",
        	'info_section'  => "<div style=\"background-color: #C44578;padding: 10px;color: white;font-size: 18px;\">Выдать клиенту купон на сумму: <span>{$total}</span> <span class=\"ruble\">Р</span></div>",
	    );
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


