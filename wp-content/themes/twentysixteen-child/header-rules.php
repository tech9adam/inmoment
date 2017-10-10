<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

		
		<link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_directory_uri(); ?>/css/webfonts/museosans_100.css" />
		<link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_directory_uri(); ?>/css/webfonts/museosans_500.css" />
		<link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_directory_uri(); ?>/css/webfonts/empathicaRules.css" />
		<title>Official Rules - Landing Page - English</title>
		 <link rel="shortcut icon" type="image/png" href="<?php echo get_stylesheet_directory_uri(); ?>/static/img/favicon.ico"/>
		<script type="text/javascript" xml:space="preserve">
			function changeLanguage()
			{
				var languageCode = document.getElementById("langSelect").value;
				var destinationLang = '/' + languageCode + "/?lang=" + languageCode;
				window.location.href = window.location.protocol + "//" + window.location.host  + destinationLang;
				//alert(window.location.href);

				////////////////////////////////////////////////////alert(window.location.href );

			}
		</script>
			<?php wp_head(); ?>

	</head>
	<body>
		<div class="container" id="container">
			<div id="header">
				<div id="logo"><img src="<?php the_field('blog_page_logo','option'); ?>" border="0" style="height: 20px;margin-top: 5px;margin-left: 10px;width: 97px;" /></div>
			</div>
			
<style type="text/css">

html {
margin: 0 !important;
}
</style>