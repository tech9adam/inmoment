<?php
/**
 * The template for displaying all single posts and attachments
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Twenty Sixteen 1.0
 */

get_header(); ?>

		
    <main>
		<?php
		// Start the loop.
		while ( have_posts() ) : the_post(); ?>

    
<section class="section-blog-page">
  <div class="container">
    <div class="row">
    



<div class="blog-post-link">
  <h2><?php the_title(); ?></h2>
</div>


<div class="meta date">
  
 <?php echo get_the_date(); ?>
</div>


<hr>

<div class="blog-body">
 
  <p><?php the_content(); ?></p>

</div>

<div class="blog-related-posts">
  
</div>

    <!-- 
        
     -->
    </div>
  </div>
</section>

<?php
			

			// End of the loop.
		endwhile;
		?>

	

	



<?php get_footer(); ?>
