<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <title><?php wp_title(); ?></title>
    <?php wp_head(); ?>
</head>
<body>
<!---------Navbar------>
<nav class="navbar navbar-light bg-bark" style="background-color:background: rgb(45,42,38);
background: linear-gradient(0deg, rgba(45,42,38,1) 0%, rgba(33,33,32,1) 100%);">
<!---------logo------>
<a href="http://localhost/projet1000/wordpress/"><img src="<?php echo get_bloginfo('template_directory') ?>/imag/logo.jpeg" alt="" width="100px" height="70px"></a>
<!---------Search------>
<?= get_search_form() ?>
<!---------icons------>
<div class="d-md-flex bd-highlight">    
<div class="dropdown">
<button class="btn btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30px" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
<path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
</svg>
</button>
<div class="dropdown-menu " aria-labelledby="dropdownMenuButton">
<a class="dropdown-item" href="http://localhost/projet1000/wordpress/inscription/">Inscription</a>
<a class="dropdown-item" href="http://localhost/projet1000/wordpress/connexion/">connexion</a>
<a class="dropdown-item" href="http://localhost/projet1000/wordpress/contact/">contact</a>
</div>
</div>
<a id="cart" href="http://localhost/projet1000/wordpress/cart/"><svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" fill="currentColor"  viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
<path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
</svg></a>
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