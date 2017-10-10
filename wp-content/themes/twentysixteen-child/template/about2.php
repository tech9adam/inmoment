<?php
/*
Template Name: About2 Page
*/
get_header(); ?>
<main>
<!-- <section class="section-solution banner career-banner" >
   <img src="<?php the_field('banner_background_image'); ?>" alt="solution-bg" class="img-bg-banner img-responsive">
    <div class="container-fluid">
    <div class="col-md-12 banner-inmoment-text">
    <div class="row">
      <h5><?php the_field('small_banner_heading'); ?></h5>
      <h1 class="Software-hading"><?php the_field('main_banner_heading'); ?></h1>
	  <a href="<?php the_field('banner_button_link'); ?>"><button class="inmomentapply"><?php the_field('banner_button'); ?></button></a>
    </div>
    </div>
	   <div class="row home-pattern"></div>
    </div>
</section> -->

<div class="career-banner" style="background: url(<?php the_field('banner_background_image'); ?>) center center no-repeat; background-size: cover;">
  <!-- <img src="<?php the_field('banner_background_image'); ?>" > -->
  <div class="banner-text-wrap">
    <div>
      <h5><?php the_field('small_banner_heading'); ?></h5>
      <h1 class="Software-hading"><?php the_field('main_banner_heading'); ?></h1>
	     <a href="<?php the_field('banner_button_link'); ?>"><button class="inmomentapply"><?php the_field('banner_button'); ?></button></a>
    </div>
  </div>
</div>



<section class="westrivewrap">
<div class="container">
<div class="row">
<div class="col-sm-8 col-sm-offset-2 ">
<h2><?php the_field('first_section_heading'); ?></h2>
<p><?php the_field('first_section_subheading'); ?></p>
</div>
</div>
</div>
</section>

<section class="weseriouswrap">
<div class="container">
<div class="row">
<div class="col-sm-12">
<h2><?php the_field('video_section_heading'); ?></h2>
<?php //the_field('video_section_mp4_link'); ?>

<script src="https://fast.wistia.com/embed/medias/xcncmgtxav.jsonp" async></script>
<script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>
<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;">
  <div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;">
    <div class="wistia_embed wistia_async_xcncmgtxav videoFoam=true" style="height:100%;width:100%">&nbsp;</div>
  </div>
</div>
<!-- <video autoplay="autoplay" loop="">
  <source src="<?php the_field('video_section_mp4_link'); ?>" type="video/webm codecs=vp8, vorbis">
  <source src="<?php the_field('video_section_mp4_link'); ?>" type="video/ogg codecs=theora, vorbis">
  <source src="<?php the_field('video_section_mp4_link'); ?>" type="video/mp4">
  http://inmoment.wpengine.com/wp-content/uploads/2017/01/hp-why.mp4
</video> -->
</div>
</div>
</div>
</section>
<section class="weareglobwrap">
<div class="container">
<h2><?php the_field('third_section_heading'); ?></h2>
<span></span>
<div class="row select_country">


      <?php

        // check if the repeater field has rows of data
        if( have_rows('third_section_content') ):
          $selected='selected';
          $i=1;
          // loop through the rows of data
            while ( have_rows('third_section_content') ) : the_row();

              $image = get_sub_field('country_image');
                // display a sub field value
                 ?>

              <a href="javascript:void(0)" data-url="<?php echo get_sub_field('post')->guid; ?>" class="column fourth <?php if($selected==0 ){ echo $selected; }  ?>">
                <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>"/>
                <h4><?php the_sub_field('country_text'); ?></h4>
              </a>

                <?php
                $i++;
                $selected='';
            endwhile;

        else :

            // no rows found

        endif;

        ?>

</div>
</div>
</section>



<section class="tabs-content" selected="selected">
<?php
$url=site_url();
$site_url=$url.'/?page_id=2285';
//echo $site_url;
 $ch = curl_init();
  curl_setopt($ch, CURLOPT_COOKIESESSION, true);
  curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
  curl_setopt($ch, CURLOPT_MAXREDIRS, 4);
  curl_setopt($ch, CURLOPT_FORBID_REUSE, true);
  curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 30);
  curl_setopt($ch, CURLOPT_URL, $site_url);

  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_BINARYTRANSFER, true);

  $response = curl_exec($ch);

 /* global $base_url;
  $base_url = curl_getinfo($ch, CURLINFO_EFFECTIVE_URL);
  $http_response_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);*/
$html = htmlentities($response);
echo html_entity_decode($html);
  curl_close ($ch); ?>

    </section>

<style type="text/css">
  .section-values{
    padding: 0px !important;
  }
  .section-values:nth-child(3){
    background: #eae9e9 none repeat scroll 0 0;
  }
  .section-global{background: none;}

</style>
<script type="text/javascript">

 $(".select_country > a").click(function(event) {

  // $('.select_country > a').on('click', function(){
      // $('.select_country > a.selected').removeClass('selected');
      $(this).addClass('selected').siblings().removeClass('selected');
  // });

  var page_slug = $(this).data("url") ;
  var page_id = page_slug.split('?');
  // console.log(page_id[1]);
  page_slug = (window.location.protocol + '//' +  window.location.host + '/?' + page_id[1]);
  console.log(page_slug);

  event.preventDefault();
   var ajaxurl = "<?php echo admin_url('admin-ajax.php'); ?>";
  //  console.log(ajaxurl);

    //   $.ajax({
    //     type: "POST",
    //     url: '/wp-admin/admin-ajax.php', //ajaxurl,
    //     data: ({ action: "get_curl", page_slug : page_slug}),
    //     success: function(response) {
    //       if(response){
    //       $('section.tabs-content').html(response);
    //
    //       }
    //     }
    // });

    $.ajax({
		url: page_slug,
		success: function( data ) {
      if(data){
        $('section.tabs-content').html(data);
      }
		}
	});

});


</script>
<style type="text/css">
.btn.btn-small.btn-pill.btn-stroke{border-radius: 30px;}
.mega-btn-stroke.career{text-align: center;margin-top: 30px;}
.section-values{padding-top: 42px !important;}
.section-global{padding-top:200px;}
.section-values:nth-child(3){height: 300px;}
</style>

<?php get_footer(); ?>
