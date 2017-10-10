<?php
/**
Template Name: Blank Page|Layout
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link http://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Twenty Sixteen 1.0
 */


?><!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	 <link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_directory_uri(); ?>/static/css/app.css">
	  <!-- <link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_directory_uri(); ?>/static/css/MegaNavbar.css"/>
    <link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_directory_uri(); ?>/static/css/navbar-inverse.css" title="inverse"> -->
    <link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_directory_uri(); ?>/static/css/animation.css" title="inverse">

  <link rel="stylesheet" type="text/css" href="https://cloud.typography.com/7789892/654044/css/fonts.css" />
   <!-- <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" /> 
   <link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_directory_uri(); ?>/css/bootstrap.min.css" />-->
   <!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
   <script src="https://cdnjs.cloudflare.com/ajax/libs/wow/0.1.12/wow.min.js"></script>
  <link rel="shortcut icon" type="image/png" href="<?php echo get_stylesheet_directory_uri(); ?>/static/img/favicon.ico"/>

 
  <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.3/jquery.min.js"></script>
  <!--[if lt IE 9]>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"></script>
  <![endif]-->
  <!-- Optimizely -->
  <script src="https://cdn.optimizely.com/js/7446621304.js"></script>
 
  <script type="text/javascript" src="https://cdn.captora.com/js/track.js"></script>
  <!-- Start of Zendesk Widget script -->
<!--Start of Zendesk Chat Script-->

<!--End of Zendesk Chat Script-->

<!-- End of Zendesk Widget script -->
 <style type="text/css">
   h1{text-align: center;}
 </style>
<?php 	wp_head(); ?>
</head>
<body <?php body_class();?> style="background: #000; background-image: url(/wp-content/uploads/2017/05/stars-bkg.jpg); background-size: cover;">
<?php 
    if ( have_posts() ) {
    while ( have_posts() ) {
    the_post(); 
    //
    the_content();
    //
    } // end while
    } // end if
    ?>

    </body>
    </html>
