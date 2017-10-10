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
		

<section class="section-blog-page">
  <div class="container">
    <div class="row">
    
<?php
		// Start the loop.
		while ( have_posts() ) : the_post(); 
		$categories = get_the_category( $post->ID );
		//print_r($categories);
		$firstCategory = $categories[0]->cat_name;
		$category_id = $categories[0]->cat_ID;

		?>

<div class="meta topic">
  
  <a href="<?php echo get_category_link( $category_id ); ?>"><?php echo $firstCategory; ?></a>
  
</div>


<div class="blog-post-link">
  <h2><?php the_title(); ?></h2>
</div>


<div class="meta date">
  
  <?php $tag=get_tags($post->ID);
  //print_r($tag);
 		 $firstTag = $tag[0]->name;
		 $tag_id = $tag[0]->term_id;
		 ?>
  <a href="<?php echo get_tag_link($tag_id); ?>"><?php echo $firstTag; ?></a>
  
  &ndash;
  
 <?php echo get_the_date(); ?>
</div>


<hr>


    <div class="blog-body">
    <div class="rich-text"><p><?php the_content(); ?> 
      

    </p>
    <a  href="<?php the_field('add_link'); ?>" name="<?php echo get_the_title(); ?>" data-id="<?php echo get_the_ID(); ?>" ><?php the_field('add_title_for_link'); ?></a></div>

</div>


<div class="blog-related-posts">
  
</div>

		<?php
			

			// End of the loop.
		endwhile;
		?>

<div class="blog-related-posts">
  
<section class="section-blog-related">
  <div class="container">
    <div class="row">
      <hr>
    </div>
    <div class="row">
      <h2>Keep Learning</h2>
      <p>Here are some related guides and posts that you might enjoy next.</p>
    </div>
    <div class="row">
      <ul class="list-unstyled the-loop">
        <?php 
        // WP_Query arguments
      $args = array(
        'post_type'              => array( 'library' ),
        'post_status'            => array( 'publish' ),
        'posts_per_page'			=> 3,
        'category_name'    			=> $firstCategory,

      );

      // The Query
      $query = new WP_Query( $args );

      // The Loop
      if ( $query->have_posts() ) {
        while ( $query->have_posts() ) {
          $query->the_post();
          // do something ?>
        <li class="blog-post-item">
          


<div class="meta topic">
  Learn <span>»</span>
  <?php
  $categories = get_the_category( $post->ID );
		//print_r($categories);
		$firstCategory = $categories[0]->cat_name;
		$category_id = $categories[0]->cat_ID;

		?>
  <a href="<?php echo get_category_link($category_id); ?>"><?php echo $firstCategory; ?></a>
  
</div>


<a class="blog-post-link" href="<?php the_permalink(); ?>">
  <h2><?php the_title(); ?></h2>
</a>


<div class="meta date">
  <?php $tag=get_tags($post->ID);
  //print_r($tag);
 		 $firstTag = $tag[0]->name;
		 $tag_id = $tag[0]->term_id;
		 ?>
  
  <a href="<?php echo get_tag_link($tag_id); ?>"><?php echo $firstTag; ?></a>
  
  &ndash;
  
  <?php echo get_the_date(); ?>
</div>


        </li>
        <?php
        }
      } ?>
        
        
      </ul>
    </div>
  </div>
</section>

</div>

    <!-- 
        
     -->
    </div>
  </div>
</section>
	
<style type="text/css">
  .template-blog-page .modal{
    background: none;
  }
  .error{color: red;}
  .modal-dialog{width: 327px;}
</style>


<?php get_footer(); ?>
