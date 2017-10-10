<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Twenty Sixteen 1.0
 */
?>

  </main>

<script type="text/javascript"> _linkedin_data_partner_id = "36874"; </script><script type="text/javascript"> (function(){var s = document.getElementsByTagName("script")[0]; var b = document.createElement("script"); b.type = "text/javascript";b.async = true; b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js"; s.parentNode.insertBefore(b, s);})(); </script>

<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri(); ?>/static/scripts/app.js"></script>

<!-- LiveChat -->
<script type='text/javascript' src='https://c.la3-c2-chi.salesforceliveagent.com/content/g/js/39.0/deployment.js'></script>
<script type='text/javascript'>
liveagent.init('https://d.la3-c2-chi.salesforceliveagent.com/chat', '572140000000T4K', '00D30000001GNDh');
</script>

  <!-- Bizible -->
 <!--  <script type="text/javascript" src="https://cdn.bizible.com/scripts/bizible.js" async=""></script> -->
  <!-- Munchkin -->
  <script type="text/javascript">
      document.write(unescape("%3Cscript src='//munchkin.marketo.net/munchkin.js' type='text/javascript'%3E%3C/script%3E"));
  </script>
  <script src="https://munchkin.marketo.net/munchkin.js" type="text/javascript"></script>
  <script>Munchkin.init('463-JAW-587');</script>
  <script type="text/javascript" src="https://cdn.captora.com/js/track.js"></script>
  <script type="text/javascript">
  jQuery(document).ready(function($){
    //alert('helllo');
    $('#mega-menu-wrap-primary > ul > .mega-btn-stroke > a').removeClass('mega-menu-link');
    $('#mega-menu-wrap-primary > ul > .mega-btn-stroke > a').addClass('btn btn-small btn-pill btn-stroke');


  });
  </script>
<!--  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script> -->

<script type="text/javascript">
jQuery(document).ready(function ($) {



   $('.random .lib-contant-sub > a').on("click",function(){
    var url=  this.id;
    var title=this.name;
    //alert(url);
   var id=$(this).data("id");

    $('div.modal-header > h4').html("<h3 class='modal-title'>" +title+ "</h3>");

   })




});
</script>

<div id="confirmform1" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Modal Header</h4>
      </div>
      <div class="modal-body">
        <p><div class="alert alert-success"><?php the_field('message','option'); ?></div></p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>



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


    MktoForms2.loadForm("//app-ab05.marketo.com", "463-JAW-587", 2114, function (form){MktoForms2.lightbox(form).show();


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
                  //alert(response);
                        console.log(response);
                    }
                });
        setTimeout(function () {

            //alert(myUrl);
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




<script type="text/javascript">
      window.__lc = window.__lc || {};
      window.__lc.license = 6693371;
      (function() {
        var lc = document.createElement('script'); lc.type = 'text/javascript'; lc.async = true;
        lc.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.livechatinc.com/tracking.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(lc, s);
      })();
  </script>
 <script src="<?php echo get_stylesheet_directory_uri(); ?>/css/jquery.validate.js"></script>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.3/jquery.min.js"></script>
<script src="https://code.jquery.com/ui/1.11.1/jquery-ui.min.js"></script>
<link rel="stylesheet" href="https://code.jquery.com/ui/1.11.1/themes/smoothness/jquery-ui.css" />
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<?php wp_footer(); ?>

</body>
</html>
