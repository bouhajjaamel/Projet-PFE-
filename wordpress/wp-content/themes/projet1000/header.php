<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">
    <title><?php wp_title(); ?></title>
    <?php wp_head(); ?>
</head>
<body>

<nav class="navbar navbar-light bg-dark" style="background-color:background: rgb(190,139,53);
background: linear-gradient(0deg, rgba(190,139,53,1) 0%, rgba(191,153,67,1) 100%);
<a href=""><img src="<?php echo get_bloginfo('template_directory') ?>/imag/logo.jpeg" alt="" width="120px" height="90px"></a>

<?= get_search_form() ?>

<div class="d-md-flex bd-highlight ">    
<div class="icon">

<a href="http://localhost/projet1000/wordpress/contact/"  > <i class="bi bi-person-lines-fill" width="30px" height="30px"></i></a>

<a href="http://localhost/projet1000/wordpress/cart/"><i class="bi bi-cart-fill" width="30px" height="30px"> </i></a>

</h6><a href="http://localhost/projet1000/wordpress/connexion/"><i class="bi bi-toggles" width="30px" height="30px"></i></a>


<a href="http://localhost/projet1000/wordpress/inscription/"><i class="bi bi-pen-fill" width="30px" height="30px"></i></a>

</div>
        
</div>
</select>
  </div>
</nav>
</nav>
<!-- Menu header -->
<nav class="navbar navbar-expand-md navbar-light" role="navigation">
<div class="container">
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#header-menu" aria-controls="#header-menu" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
            <?php
                wp_nav_menu(array(
                    'theme_location'    => 'header_menu',
                    'depth'             => 2,
                    'container'         => 'div',
                    'container_class'   => 'collapse navbar-collapse',
                    'container_id'      => 'header-menu',
                    'menu_class'        => 'nav navbar-nav',
                    'fallback_cb'       => 'WP_Bootstrap_Navwalker::fallback',
                    'walker'            => new WP_Bootstrap_Navwalker(),
                ));
            ?>
        </div>
    </nav>