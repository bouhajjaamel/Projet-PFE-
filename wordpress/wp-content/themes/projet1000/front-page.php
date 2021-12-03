<?php get_header(); ?>
<?php the_content(); ?>
<?php
    $query = new WP_Query(['posts_per_page' => 1]);
    if($query->have_posts()) : while($query->have_posts()) : $query->the_post();
?>
    
<?php endwhile; endif; ?>

<?php
    query_posts('offset=1');
    get_template_part('loop');
?>
<div class="container">
    <div class="row">
        <div class="col-md-8">
            <?php
                query_posts('offset=1');
                get_template_part('loop');
            ?>
        </div>
        <div class="col-md-4">
            <?php dynamic_sidebar('main-sidebar'); ?>
        </div>
    </div>
</div>
<?php get_footer(); ?>