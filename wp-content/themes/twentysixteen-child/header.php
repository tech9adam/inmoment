<?php
/**
 * The template for displaying the header
 *
 * Displays all of the head element and everything up until the "site-content" div.
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Twenty Sixteen 1.0
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?> >
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="canonical" href="https://www.inmoment.com<?php echo $_SERVER['REQUEST_URI']; ?>">

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

  <!-- <script type="text/javascript" src="https://cdn.captora.com/js/track.js"></script> -->
  <!-- Start of Zendesk Widget script -->
<!--Start of Zendesk Chat Script-->

<!--End of Zendesk Chat Script-->

<!-- End of Zendesk Widget script -->

<style type="text/css">
	.modal-content{width: 320px}
	.img-bg-banner{z-index: -1;}
</style>
<script type="text/javascript">
	//var ajaxurl = '<?php echo admin_url('admin-ajax.php'); ?>';
	var ajaxurl='/wp-admin/admin-ajax.php';
	//alert(ajaxurl);
</script>
	 <?php
	remove_action('wp_head', 'rel_canonical');
	wp_head(); ?>
</head>

<body <?php //body_class(); template-default cx-elevated-emea?>
<?php echo(is_front_page()?'class="template-home"':''); ?><?php echo(is_singular('privacy_policy')?'class="template-privacy"':''); ?><?php echo(is_page(14)?'class="template-about"':''); ?><?php echo(is_page(16)?'class="template-solution"':''); ?><?php echo(is_page(250)?'class="template-default location-based-insights"':''); ?><?php echo(is_page(248)?'class="template-default active-listening"':''); ?><?php echo(is_page(268)?'class="template-default voice-of-employee"':''); ?><?php echo(is_page(277)?'class="template-default resolve"':''); ?><?php echo(is_page(287)?'class="template-default explore"':''); ?>
<?php echo(is_page(24)?'class="template-demo"':''); ?> <?php echo(is_single()?'class="template-blog-page"':'') ?>
<?php echo(is_page(215)?'class="template-contact template-blog"':''); ?><?php echo(is_page(239)?'class="template-default cx-elevated"':''); ?><?php echo(is_page(365)?'class="template-default cx-elevated-emea"':''); ?><?php echo(is_page(array(18,32,198))?'class="template-blog"':''); ?>
<?php echo(is_page(294)?'class="template-privacy"':''); ?> <?php echo(is_page(240)?'class="template-security"':''); ?><?php echo(is_page(2111)?'class="template-support"':''); ?><?php echo(is_tag()?'class="template-blog-page"':''); ?><?php echo(is_category()?'class="template-blog-page"':''); ?><?php echo(is_page(2122)?'class="template-closed"':''); ?><?php echo(is_page(2113)?'class="template-product"':''); ?><?php echo(is_page(2123)?'class="template-professional"':''); ?><?php echo(is_page(2115)?'class="template-employee"':''); ?><?php echo(is_page(2114)?'class="template-analytics"':''); ?><?php echo(is_page(2109)?'class="template-discover"':''); ?>>

<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TK4SBT"
	height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
	<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer','GTM-TK4SBT');</script>
  <header>
  <?php //header("Access-Control-Allow-Origin: http://inmoment.wpengine.com/"); ?>
    <div class="container">
		<div class="col-md-12" style="z-index:99;">

			 <ul class="micro-nav">

				<!-- <li><i class="phone" data-icon="h"></i><?php the_field('phone','option'); ?></li> -->
				<li><a href="/contact">Contact Us</a></li>
				<li data-hj-masked><a href="<?php the_field('login_link','option'); ?>">Login</a></li>
				<!-- <li><a href="">Eng<i class="dropdown" data-icon="d"></i></a></li> -->
			 </ul>

		</div>
		<div class="clear"></div>
		<div class="col-md-12 fwidthmenu " style="z-index:1;">

			<div class="col-md-3 col-sm-4 col-xs-12">
				<div class="row">
					<?php //twentysixteen_the_custom_logo(); ?>

					  <a class="logo" href="<?php echo '/'; ?>">
					  <?php if (is_singular('privacy_policy')){ ?>
					  <img src="<?php the_field('home_page_logo','option'); ?>" alt="logo">
					  <?php }
					  elseif (is_tag() || is_category() || is_single()|| is_page(array('blog','press','library','contact') )) { ?>
					   <img src="<?php the_field('blog_page_logo','option'); ?>" alt="logo">
					 <?php  }

					  else{ ?>
					   <img src="<?php the_field('home_page_logo','option'); ?>" alt="logo">

					  <?php } ?></a>
				</div>
			  </div>
			 <!--  <div class="col-md-9 col-sm-8 col-xs-12 fwidthmenu">
				<div class="row">
				<?php // ?>
				<div class="collapse navbar-collapse" id=MegaNavbarID>
<ul class="nav navbar-nav navbar-left">
<li class="dropdown-full no-shadow no-border-radius">
<a data-toggle=dropdown href="javascript:void(0);" class=dropdown-toggle><i class="fa fa-file-image-o"></i>&nbsp;<span class="hidden-sm hidden-md reverse">Galery</span><span class=caret></span></a>
<div class="dropdown-menu row">
<ul class=row>
<li class="col-xs-6 col-sm-3 col-md-3 col-lg-3">
<a href="javascript:void(0);">
<div class="embed-responsive embed-responsive-16by9" style="margin: -5px -15px 10px -15px;">
<img class=embed-responsive-item src="images/city.jpg" alt=meganavbar>
</div>
City item<span class=desc>Item description</span>
</a>
</li>
<li class="col-xs-6 col-sm-3 col-md-3 col-lg-3">
<a href="javascript:void(0);">
<div class="embed-responsive embed-responsive-16by9" style="margin: -5px -15px 10px -15px;">
<img class=embed-responsive-item src="images/cars.jpg" alt=megamenu>
</div>
Cars item<span class=desc>Item description</span>
</a>
</li>
<li class="col-xs-6 col-sm-3 col-md-3 col-lg-3">
<a href="javascript:void(0);">
<div class="embed-responsive embed-responsive-16by9" style="margin: -5px -15px 10px -15px;">
<img class=embed-responsive-item src="images/nature.jpg" alt="bootstrap megamenu">
</div>
Nature item<span class=desc>Item description</span>
</a>
</li>
<li class="col-xs-6 col-sm-3 col-md-3 col-lg-3">
<a href="javascript:void(0);">
<div class="embed-responsive embed-responsive-16by9" style="margin: -5px -15px 10px -15px;">
<img class=embed-responsive-item src="images/animals.jpg" alt="bootstrap mega menu">
</div>
Animals item<span class=desc>Item description</span>
</a>
</li>
</ul> <br>
<ul class=row>
<li class="col-xs-6 col-sm-3 col-md-3 col-lg-3">
<div class="embed-responsive embed-responsive-16by9">
<a href="javascript:void(0);"><img class=embed-responsive-item src="images/animals.jpg" alt="bootstrap navbar"></a>
</div>
<a href="javascript:void(0);">Animals item<span class=desc>Item description</span></a>
</li>
<li class="col-xs-6 col-sm-3 col-md-3 col-lg-3">
<div class="embed-responsive embed-responsive-16by9">
<a href="javascript:void(0);"><img class=embed-responsive-item src="images/nature.jpg" alt="bootstrap navigation"></a>
</div>
<a href="javascript:void(0);">Nature item<span class=desc>Item description</span></a>
</li>
<li class="col-xs-6 col-sm-3 col-md-3 col-lg-3">
<div class="embed-responsive embed-responsive-16by9">
<a href="javascript:void(0);"><img class=embed-responsive-item src="images/cars.jpg" alt="bootstrap navigation with submenu"></a>
</div>
<a href="javascript:void(0);">Cars item<span class=desc>Item description</span></a>
</li>
<li class="col-xs-6 col-sm-3 col-md-3 col-lg-3">
<div class="embed-responsive embed-responsive-16by9">
<a href="javascript:void(0);"><img class=embed-responsive-item src="images/city.jpg" alt="mega menu navigation"></a>
</div>
<a href="javascript:void(0);">City item<span class=desc>Item description</span></a>
</li>
</ul>
</div> -->
				      <nav>
				      <?php wp_nav_menu( array( 'theme_location' => 'primary' ) ); ?>
       <!--  <a class="" href="../solution/index.html">Solution</a>
        <a class="active" href="index.html">About</a>
        <a class="" href="../blog/index.html">Blog</a>
        <a class="" href="../library/index.html">Library</a>
        <a class="btn btn-small btn-pill btn-stroke" href="../solution/demo/index.html">Book a Demo</a>
        <a class="aside-trigger" href="#">Menu<span></span></a> -->
      </nav>
				</div>
			  </div>

		</div>
    </div>

  </header>
