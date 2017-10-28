
            //$(function() {
                $('#form').click(function(){
                    
                        $('#overlay').fadeIn('fast',function(){
                            $('#box').animate({'top':'75px'},500);
                        });
                    });
                    $('#boxclose').click(function(){
                        $('#box').animate({'top':'-750px'},500,function(){
                            $('#overlay').fadeOut('fast');
                        });
                    });
                    
                        
                        $('#bulk').click(function(){
                        $('#save-overlay').fadeIn('fast',function(){
                            $('#box-a').animate({'top':'75px'},500);
                        });
                    });
                    $('#boxclose-a').click(function(){
                        $('#box-a').animate({'top':'-750px'},500,function(){
                            $('#save-overlay').fadeOut('fast');
                        });
                        
                    });
                    
                $('.confirm_btn').click(function(){
                        $('#box-a').animate({'top':'-750px'},500,function(){
                            $('#save-overlay').fadeOut('fast');
                        });
                    $('td').removeClass('active');
                    });
                    
                        
                        $('#planname').click(function(){
                        $('#save-overlay').fadeIn('fast',function(){
                            $('#box-a').animate({'top':'200px'},500);
                        });
                    });
                    $('#boxclose-a').click(function(){
                        $('#box-a').animate({'top':'-750px'},500,function(){
                            $('#save-overlay').fadeOut('fast');
                        });
                    });
                    
                        $('.confirm_btn').click(function(){
                        $('#box').animate({'top':'-750px'},500,function(){
                            $('#overlay').fadeOut('fast');
                        });
                    $('td').removeClass('active');
                    });
                    
                        
                    $('.cancl_btn').click(function(){
                        $('#box').animate({'top':'-750px'},500,function(){
                            $('#overlay').fadeOut('fast');
                        });
                    
                    });
                    
            
                //});
                
              $('#right_button').on('click',function(){
                $('#right_Box table>tbody').prepend($('#left_Box tr.actve').removeClass('actve'));
                });
                
                $('#left_button').on('click',function(){
                $('#left_Box table>tbody').prepend($('#right_Box tr.actve').removeClass('actve'));
                });
            
            

    $('p').bind('click',
                   function(){
                       $(this).attr('contentEditable',true);
                      
                   });
                   $('p').focusin(
                   function(){
                       
                       $(this).text('');
                       
                   });
                   $('p').focusout(
                   function(){
                       if(!$(this).text())
                       $(this).text($(this).attr('name'));
                       
                   });

                   $(document).ready(function(){
                    $('tr').click(function(){
                        $(this).toggleClass('actve');
                    });
                    
                });

                $(document).ready(function() {
                        $('.pt_close').click(function() {
                           $(this).closest('tr').remove();
                        });
                    });
            

$(function () { $("[data-toggle='tooltip']").tooltip(); });