<?php
get_header();


$category = get_the_category(); 
echo $category[0]->cat_ID;
?>
<main>
<section class="section-blog-header">
  <div class="container">
      <div class="col-md-12 ">

    <div class="row">
      <h1><?php single_cat_title(); ?></h1>
   <p><?php the_field('book_a_demo'); ?></p>
    </div>
    </div>
    

    

    
    
  </div>
</section>
<section class="section-blog-list">
  <div class="container">
    <div class="col-md-12 ">

    <div class="row">
      

      
      <ul class="list-unstyled the-loop">
<?php  $tag_id = get_query_var('tag_id'); 

    // WP_Query arguments
        $args = array(
          'post_type'              => array( 'library' ),
          'post_status'            => array( 'publish' ),
          'posts_per_page'         => '-1',
          'tag_id'          => $tag_id,
        );
        //print_r($args);
        

        // The Query
        $query = new WP_Query( $args );

        // The Loop
       
          while ( $query->have_posts() ) {
            $query->the_post();
           //$site_url=site_url();
            // do something ?>
             <li class="blog-post-item first-reset">
            <div class="blog-intro-wrap">

              <a class="blog-post-link" href="<?php echo str_replace($site_url,'',get_permalink()); ?>">
                <h2><?php the_title(); ?></h2>
              </a>

              <div class="blog-intro">
                <p><?php echo wp_trim_words( get_the_content(), 70, '...' ); ?></p>
              </div>

              
              <div class="meta date">
              
              <?php echo get_the_date("M d, Y"); ?>
              </div>
              
            </div>


                </li>
            <?php 
          } ?>

  </ul>
  </div>
  </div>
  </div>
  </section>

<?php  get_footer(); ?>