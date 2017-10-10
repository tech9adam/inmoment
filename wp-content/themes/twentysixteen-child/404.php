<?php
/**
 * The template for displaying the 404 error page
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
	<link href="https://fonts.googleapis.com/css?family=Montserrat:400,800" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_directory_uri(); ?>/static/css/app.css">
  <link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_directory_uri(); ?>/static/css/animation.css" title="inverse">

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

	<?php
  	remove_action('wp_head', 'rel_canonical');
  	wp_head();
  ?>
</head>

<body class="error_404_page">

<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TK4SBT"
	height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
	<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer','GTM-TK4SBT');</script>


  <!-- PAGE CONTENT -->
  <div class="container">
    <a class="logo" href="/">
      <!-- <img src="<?php the_field('home_page_logo','option'); ?>" alt="logo"> -->
      <svg width="180px" height="24.6px" viewBox="0 0 180 24.6">
        <path style="fill:#77BC43;" d="M1.5,6.4C0.8,6.4,0.2,7,0.2,7.7v14.6c0,0.7,0.6,1.3,1.3,1.3c0.7,0,1.2-0.6,1.2-1.3V7.7
        	C2.7,7,2.2,6.4,1.5,6.4z M1.5,0C0.6,0,0,0.5,0,1.3v0.4c0,0.8,0.6,1.3,1.5,1.3C2.3,3.1,3,2.5,3,1.8V1.3C3,0.5,2.3,0,1.5,0z M19.5,6.2
        	c-2.9,0-4.6,1.5-5.7,3.3V7.7c0-0.7-0.6-1.3-1.3-1.3c-0.7,0-1.2,0.6-1.2,1.3v14.6c0,0.7,0.6,1.3,1.3,1.3c0.7,0,1.2-0.6,1.2-1.3v-8.5
        	c0-3.1,2.1-5.3,5-5.3c3,0,4.6,1.9,4.6,5.1v8.7c0,0.7,0.6,1.3,1.3,1.3c0.7,0,1.2-0.6,1.2-1.3v-9.3C25.9,9,23.6,6.2,19.5,6.2z
        	 M53.8,6.2c-2.9,0-4.7,1.5-5.9,3.3c-0.9-1.9-2.7-3.3-5.4-3.3c-2.8,0-4.3,1.5-5.4,3.2V7.7c0-0.7-0.6-1.3-1.3-1.3
        	c-0.7,0-1.2,0.6-1.2,1.3v14.6c0,0.7,0.6,1.3,1.3,1.3c0.7,0,1.2-0.6,1.2-1.3v-8.5c0-3.1,2-5.3,4.7-5.3c2.7,0,4.3,1.8,4.3,5v8.8
        	c0,0.7,0.6,1.3,1.2,1.3c0.7,0,1.3-0.6,1.3-1.3v-8.6c0-3.3,2.1-5.2,4.6-5.2c2.7,0,4.3,1.8,4.3,5.1v8.7c0,0.7,0.6,1.3,1.3,1.3
        	c0.7,0,1.2-0.6,1.2-1.3V13C60,8.8,57.7,6.2,53.8,6.2z M113.6,6.2c-2.9,0-4.7,1.5-5.9,3.3c-0.9-1.9-2.7-3.3-5.4-3.3
        	c-2.8,0-4.3,1.5-5.4,3.2V7.7c0-0.7-0.6-1.3-1.3-1.3c-0.7,0-1.2,0.6-1.2,1.3v14.6c0,0.7,0.6,1.3,1.3,1.3c0.7,0,1.2-0.6,1.2-1.3v-8.5
        	c0-3.1,2-5.3,4.7-5.3c2.7,0,4.3,1.8,4.3,5v8.8c0,0.7,0.6,1.3,1.2,1.3c0.7,0,1.3-0.6,1.3-1.3v-8.6c0-3.3,2.1-5.2,4.6-5.2
        	c2.7,0,4.3,1.8,4.3,5.1v8.7c0,0.7,0.6,1.3,1.3,1.3c0.7,0,1.2-0.6,1.2-1.3V13C119.8,8.8,117.4,6.2,113.6,6.2z M134.7,6.2
        	c-4.6,0-8,3.9-8,8.7V15c0,5.2,3.8,8.7,8.4,8.7c2.9,0,4.7-1,6.3-2.5c0.3-0.2,0.4-0.5,0.4-0.8c0-0.6-0.5-1.1-1.1-1.1
        	c-0.3,0-0.5,0.1-0.7,0.3c-1.2,1.1-2.8,1.9-4.8,1.9c-3,0-5.5-2-5.9-5.7h12.1c0.6,0,1.2-0.5,1.2-1.2C142.5,10.3,139.6,6.2,134.7,6.2z
        	 M129.2,14c0.3-3.3,2.5-5.7,5.4-5.7c3.3,0,5.1,2.7,5.4,5.7H129.2z M157.7,6.2c-2.9,0-4.6,1.5-5.7,3.3V7.7c0-0.7-0.6-1.3-1.3-1.3
        	c-0.7,0-1.2,0.6-1.2,1.3v14.6c0,0.7,0.6,1.3,1.3,1.3c0.7,0,1.2-0.6,1.2-1.3v-8.5c0-3.1,2.1-5.3,5-5.3c3,0,4.6,1.9,4.6,5.1v8.7
        	c0,0.7,0.6,1.3,1.3,1.3c0.7,0,1.2-0.6,1.2-1.3v-9.3C164.1,9,161.7,6.2,157.7,6.2z M178.9,21.1c-0.2,0-0.6,0.2-1.5,0.2
        	c-1.7,0-2.8-0.7-2.8-2.8V8.8h4.3c0.6,0,1.1-0.5,1.1-1.1c0-0.6-0.5-1.1-1.1-1.1h-4.3v-4c0-0.7-0.6-1.3-1.3-1.3
        	c-0.7,0-1.2,0.6-1.2,1.3v4h-1.4c-0.6,0-1.1,0.5-1.1,1.1c0,0.6,0.5,1.1,1.1,1.1h1.4v10.1c0,3.4,2,4.7,4.7,4.7c1,0,1.8-0.2,2.5-0.5
        	c0.4-0.2,0.7-0.5,0.7-1C179.9,21.6,179.4,21.1,178.9,21.1z M73.3,21.2c-2.2-1.4-3.5-3.7-3.5-6.3c0-1.3,0.3-2.5,0.9-3.6
        	c0.3-0.6,0.1-1.3-0.5-1.6c-0.6-0.3-1.3-0.1-1.6,0.5c-0.8,1.4-1.2,3.1-1.2,4.7c0,3.4,1.7,6.5,4.7,8.3c0.2,0.1,0.4,0.2,0.6,0.2
        	c0.4,0,0.8-0.2,1-0.6C74,22.3,73.8,21.5,73.3,21.2z M85.7,13.7c-0.6,0-1.2,0.5-1.2,1.2l0,0.2c-0.1,4-3.3,7.2-7.2,7.3
        	c-0.6,0-1.1,0.6-1.1,1.2c0,0.6,0.5,1.1,1.2,1.1c0,0,0,0,0,0c5.2-0.1,9.4-4.3,9.5-9.5l0-0.2C86.9,14.2,86.4,13.7,85.7,13.7z
        	 M73.6,8.4c1.1-0.6,2.3-0.9,3.6-0.9c2.6,0,5,1.3,6.4,3.6c0.2,0.4,0.6,0.6,1,0.6c0.2,0,0.4-0.1,0.6-0.2c0.5-0.3,0.7-1,0.4-1.6
        	c-1.8-2.9-4.9-4.7-8.3-4.7c-1.6,0-3.3,0.4-4.7,1.2c-0.6,0.3-0.8,1-0.5,1.6C72.3,8.5,73,8.7,73.6,8.4z"/>
      </svg>
    </a>
    <div class="row">
      <div class="col-12">
        <h5>404</h5>
        <h1>WAIT JUST A MOMENT…</h1>
        <p>Unfortunately, this page doesn't exist!<br>Sorry for the inconvenience!</p>
        <a href="/support" class="btn btn-pill-large btn-green-stroke learn-more-btn">Visit Support</a>
      </div>
    </div>
  </div>





  <!-- FOOTER CONTENTS -->
  <script type="text/javascript"> _linkedin_data_partner_id = "36874"; </script><script type="text/javascript"> (function(){var s = document.getElementsByTagName("script")[0]; var b = document.createElement("script"); b.type = "text/javascript";b.async = true; b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js"; s.parentNode.insertBefore(b, s);})(); </script>

  <script type="text/javascript" src="<?php echo get_stylesheet_directory_uri(); ?>/static/scripts/app.js"></script>

  <!-- Munchkin -->
  <script type="text/javascript">
   document.write(unescape("%3Cscript src='//munchkin.marketo.net/munchkin.js' type='text/javascript'%3E%3C/script%3E"));
  </script>
  <script src="https://munchkin.marketo.net/munchkin.js" type="text/javascript"></script>
  <script>Munchkin.init('463-JAW-587');</script>


  <script src="//app-ab05.marketo.com/js/forms2/js/forms2.min.js"></script>
  <form id="mktoForm_2114"></form>
  <script type="text/javascript">

  //Header Learn More Button
  $('.add_content_id_mk').on('click',function(){
  var html = $(this).text();
   setTimeout(function(){
   jQuery('input[name="contentID"]').val(html);
  }, 3000);

  })


  function show_form( myUrl= 'myURL',PostID= 'id' ){
  MktoForms2.loadForm("//app-ab05.marketo.com", "463-JAW-587", 2114, function (form){

   MktoForms2.lightbox(form).show();
   form.onSuccess(function(values, followUpUrl) {
  // Get the form's jQuery element and hide it
     form.getFormElem().hide();
     $('#confirmform1').modal('show');
         //window.location.href = url;
          //location.reload(true);//location.reload();
     var IPAddress='<?php echo $_SERVER['REMOTE_ADDR']; ?>';
     var ajaxurl = '<?php echo admin_url('admin-ajax.php'); ?>';
     jQuery.ajax({
       data: {action:'Get_Custom_Data',id:PostID,status:'Y',IPAddress:IPAddress},
       url: ajaxurl,
       type: 'POST',
       success:function( response ) {
         console.log(response);
       }
     });
     setTimeout(function () {
       window.location.href = myUrl;
        //location.reload(true);//location.reload();
     }, 3000);

     // Return true to prevent the submission handler from taking the lead to the follow up url
     //document.getElementById('confirmform1').style.visibility = 'visible';
     return false;

  });
  });
  }
  </script>



  <script src="<?php echo get_stylesheet_directory_uri(); ?>/css/jquery.validate.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.3/jquery.min.js"></script>
  <script src="https://code.jquery.com/ui/1.11.1/jquery-ui.min.js"></script>
  <link rel="stylesheet" href="https://code.jquery.com/ui/1.11.1/themes/smoothness/jquery-ui.css" />
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <?php wp_footer(); ?>

  </body>
  </html>
