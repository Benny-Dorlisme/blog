$(document).ready(function(){

    var politics_articles     = $("#politics_article")
    var article_header        = $("#article_header")
    var article               = $("#page_body p")
   // var article_img         = $("#article_img")
    var page_header_nav_link  = $(".page_header_nav_link")
    var politics_article_link = $(".politics_article_link")
    var tech_article_link     = $(".tech_article_link")
    var music_article_link    = $(".music_article_link")
    var life_article_link     = $(".life_article_link")

    function fadeOutCurrentArticle(article){

        $("#page_body p").animate({
            marginRight: "+=50",
            opacity:"0"
        },1000,"swing",function(){

            html = $.parseHTML(article)
            $(this).text("")
            $(this).append(html)

            $(this).animate({
                marginRight:"-=50",
                opacity:"1"
            })


        })
    }
    function getArticle(article,author,img,date){
        var a = undefined


       $.ajax({
            async:true,
            method:"POST",
            data : {articles : article.trim()},
            url: "articles.php",
            dataType:"text"

        }).done(function(d,ts,o){

            fadeOutCurrentArticle(d)
           changeArticleHeader(img,author,date)

        })

    }
    function changeArticleHeader(img,author,date){

        article_header.children().first().animate({
            marginRight: "+=50",
            opacity:"0"
        },1000,"swing",function(){
        console.log(article_header.children().first())
            $(this).text('')
            $(this).append("<img id='article_img' src='"+img+"' />")
            $(this).animate({
                marginRight:"-=50",
                opacity:"1"
            })


        })
        article_header.children().first().next().animate({
            marginRight: "+=50",
            opacity:"0"
        },1000,"swing",function(){
            $(this).css({
                color:"blue"
            })
            $(this).text("By " +author +" "+date)
            $(this).animate({
                marginRight:"-=50",
                opacity:"1"
            })


        })
    }

    politics_article_link.click(function(){

        var article_container    = $(this).parent().parent().parent() //need to make container disappear
        var article_img_src      = $(this).parent().parent().siblings()[0].getAttribute("src")
        var article_name         = $(this).html()
        var article_author       = $(this).parent().siblings().first().children()[0].innerHTML
        var article_publish_date = $(this).parent().siblings()[1].innerHTML
        if($(this).parent().parent().parent().parent().parent().is("#page_body")){

            $("#left_column").append($(this).parent().parent().parent().parent())
            $(this).parent().parent().parent().parent().css("display","none")
            article.css("display","block")
            $("#left_column").find("#politic_articles").css("opacity","0")
            $("#left_column").find("#politic_articles").css("display","block")
            $("#left_column").find("#politic_articles").animate({
                opacity:1
            },2000)
            getArticle(article_name,article_author,article_img_src,article_publish_date)
        }else{
            getArticle(article_name,article_author,article_img_src,article_publish_date)
        }
        article_container    = undefined
        article_img_src      = undefined
        article_name         = undefined
        article_author       = undefined
        article_publish_date = undefined
    })

    tech_article_link.click(function(){

        var article_container    = $(this).parent().parent().parent() //need to make container disappear
        var article_img_src      = $(this).parent().parent().siblings()[0].getAttribute("src")
        var article_name         = $(this).html()
        var article_author       = $(this).parent().siblings().first().children()[0].innerHTML
        var article_publish_date = $(this).parent().siblings()[1].innerHTML
        if($(this).parent().parent().parent().parent().parent().is("#page_body")){

            $("#right_column").append($(this).parent().parent().parent().parent())
            $(this).parent().parent().parent().parent().css("display","none")
            article.css("display","block")
            $("#right_column").find("#tech_articles").css("opacity","0")
            $("#right_column").find("#tech_articles").css("display","block")
            $("#right_column").find("#tech_articles").animate({
                opacity:1
            },2000)
            getArticle(article_name,article_author,article_img_src,article_publish_date)
        }else{
            getArticle(article_name,article_author,article_img_src,article_publish_date)
        }
        article_container    = undefined
        article_img_src      = undefined
        article_name         = undefined
        article_author       = undefined
        article_publish_date = undefined
    })

    life_article_link.click(function(){

        var article_container    = $(this).parent().parent().parent() //need to make container disappear
        var article_img_src      = $(this).parent().parent().siblings()[0].getAttribute("src")
        var article_name         = $(this).html()
        var article_author       = $(this).parent().siblings().first().children()[0].innerHTML
        var article_publish_date = $(this).parent().siblings()[1].innerHTML
        if($(this).parent().parent().parent().parent().parent().is("#page_body")){

            $("#left_column").append($(this).parent().parent().parent().parent())
            $(this).parent().parent().parent().parent().css("display","none")
            article.css("display","block")
            $("#left_column").find("#life_articles").css("opacity","0")
            $("#left_column").find("#life_articles").css("display","block")
            $("#left_column").find("#life_articles").animate({
                opacity:1
            },2000)
            getArticle(article_name,article_author,article_img_src,article_publish_date)
        }else{
            getArticle(article_name,article_author,article_img_src,article_publish_date)
        }
        article_container    = undefined
        article_img_src      = undefined
        article_name         = undefined
        article_author       = undefined
        article_publish_date = undefined
    })

    music_article_link.click(function(){

        var article_container    = $(this).parent().parent().parent() //need to make container disappear
        var article_img_src      = $(this).parent().parent().siblings()[0].getAttribute("src")
        var article_name         = $(this).html()
        var article_author       = $(this).parent().siblings().first().children()[0].innerHTML
        var article_publish_date = $(this).parent().siblings()[1].innerHTML
        if($(this).parent().parent().parent().parent().parent().is("#page_body")){

            $("#right_column").append($(this).parent().parent().parent().parent())
            $(this).parent().parent().parent().parent().css("display","none")
            article.css("display","block")
            $("#right_column").find("#music_articles").css("opacity","0")
            $("#right_column").find("#music_articles").css("display","block")
            $("#right_column").find("#music_articles").animate({
                opacity:1
            },2000)
            getArticle(article_name,article_author,article_img_src,article_publish_date)
        }else{
            getArticle(article_name,article_author,article_img_src,article_publish_date)
        }
        article_container    = undefined
        article_img_src      = undefined
        article_name         = undefined
        article_author       = undefined
        article_publish_date = undefined
    })
    page_header_nav_link.click(function(e){
        e.preventDefault()

if($(this)[0].innerText.trim() == "Politics") {

    $("#politic_articles").animate({
        marginRight: "+=50",
        opacity: "0"
    }, 500, "swing", function () {
        $(this).css("display", "none");

        article.css("display","none");
        if($("#page_body").find(".column_article")){

            if($("#page_body").find("#tech_articles").length == 1 || $("#page_body").find("#music_articles").length == 1){

                $("#page_body").find(".column_articles").animate({

                    opacity:0,
                    marginRight:"+=50"
                },1000,"swing",function(){
                    $("#right_column").append($(this))
                    $("#right_column").find($(this)).animate({
                        opacity:1,
                        marginRight:"-=50"
                    },500)
                })

            }else if($("#page_body").find("#life_articles").length == 1 ){

                $("#page_body").find(".column_articles").animate({

                    opacity:0,
                    marginRight:"+=50"
                },1000,"swing",function(){
                    $("#left_column").append($(this))
                    $("#left_column").find($(this)).animate({
                        opacity:1,
                        marginRight:"-=50"
                    },500)
                })

            }
        }
        $("#page_body").append($(this));
        $("#page_body").find($(this)).css("display","block")
        $(this).animate({
            opacity:"1",
            marginRight:"-=50"
        },1000)


    })
    article_header.children().first().animate({
        marginRight: "+=50",
        opacity:"0"
    },1000,"swing",function(){

        $(this).text("\"A people that elect corrupt politicians, imposters, thieves and traitors are not victims... but accomplices\"")
        $(this).animate({
            marginRight:"-=50",
            opacity:"1"
        })


    })
    article_header.children().first().next().animate({
        marginRight: "+=50",
        opacity:"0"
    },1000,"swing",function(){
        $(this).css("color","black")
        $(this).text("-George Orwell")
        $(this).animate({
            marginRight:"-=50",
            opacity:"1"
        })


    })
}else if($(this)[0].innerText.trim() == "Tech") {

    $("#tech_articles").animate({
        marginRight: "+=50",
        opacity: "0"
    }, 500, "swing", function () {
        $(this).css("display", "none");

        article.css("display","none");
        if($("#page_body").find(".column_article")){

            if($("#page_body").find("#politic_articles").length == 1 || $("#page_body").find("#life_articles").length == 1){

                $("#page_body").find(".column_articles").animate({

                    opacity:0,
                    marginRight:"+=50"
                },1000,"swing",function(){
                    $("#left_column").append($(this))
                    $("#left_column").find($(this)).animate({
                        opacity:1,
                        marginRight:"-=50"
                    },500)
                })

            }else if($("#page_body").find("#music_articles").length == 1 ){

                $("#page_body").find(".column_articles").animate({

                    opacity:0,
                    marginRight:"+=50"
                },1000,"swing",function(){
                    $("#right_column").append($(this))
                    $("#right_column").find($(this)).animate({
                        opacity:1,
                        marginRight:"-=50"
                    },500)
                })

            }
        }
        $("#page_body").append($(this));
        $("#page_body").find($(this)).css("display","block")
        $(this).animate({
            opacity:"1",
            marginRight:"-=50"
        },1000)


    })
    article_header.children().first().animate({
        marginRight: "+=50",
        opacity:"0"
    },1000,"swing",function(){

        $(this).text("\"We are the technology and the technology is us. \"")
        $(this).animate({
            marginRight:"-=50",
            opacity:"1"
        })


    })
    article_header.children().first().next().animate({
        marginRight: "+=50",
        opacity:"0"
    },1000,"swing",function(){
        $(this).css("color","black")
        $(this).text("-Benny Dorlisme")
        $(this).animate({
            marginRight:"-=50",
            opacity:"1"
        })


    })
}else if($(this)[0].innerText.trim() == "Music") {

    $("#music_articles").animate({
        marginRight: "+=50",
        opacity: "0"
    }, 500, "swing", function () {
        $(this).css("display", "none");

        article.css("display","none");
        if($("#page_body").find(".column_article")){

            if($("#page_body").find("#politic_articles").length == 1 || $("#page_body").find("#life_articles").length == 1){

                $("#page_body").find(".column_articles").animate({

                    opacity:0,
                    marginRight:"+=50"
                },1000,"swing",function(){
                    $("#left_column").append($(this))
                    $("#left_column").find($(this)).animate({
                        opacity:1,
                        marginRight:"-=50"
                    },500)
                })

            }else if($("#page_body").find("#tech_articles").length == 1 ){
                console.log("yeag")
                $("#page_body").find(".column_articles").animate({

                    opacity:0,
                    marginRight:"+=50"
                },1000,"swing",function(){
                    $("#right_column").append($(this))
                    $("#right_column").find($(this)).animate({
                        opacity:1,
                        marginRight:"-=50"
                    },500)
                })

            }
        }
        $("#page_body").append($(this));
        $("#page_body").find($(this)).css("display","block")
        $(this).animate({
            opacity:"1",
            marginRight:"-=50"
        },1000)


    })
    article_header.children().first().animate({
        marginRight: "+=50",
        opacity:"0"
    },1000,"swing",function(){

        $(this).text("\"Life is one grand, sweet song, so start the music.\"")
        $(this).animate({
            marginRight:"-=50",
            opacity:"1"
        })


    })
    article_header.children().first().next().animate({
        marginRight: "+=50",
        opacity:"0"
    },1000,"swing",function(){
        $(this).css("color","black")
        $(this).text("-Ronald Regan")
        $(this).animate({
            marginRight:"-=50",
            opacity:"1"
        })


    })
}if($(this)[0].innerText.trim() == "Home") {

            window.location = window.location.origin
        }else{
            // something
        }
    })


})

