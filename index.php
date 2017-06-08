<?php
require_once "class.basepage.php";
require_once("class.blogdatabase.php");
class BlogPage extends BasePage{

    private $body = null;

    private $db = null;
    public function __construct(){
        $this->m = array();
        $this->s = array("<script src='js/index.js'></script>");
        $this->l = array();

        $this->setBody();
        parent::__construct($this->s,$this->m,$this->l ,  $this->body);
        $this->printPage();
    }
    private function setBody(){


        $this->db = new BlogDataBase();

        $politic_articles = $this->db->selectQuery("select * from articles where type ='politics' ");
        //$politic_articles = $this->db->selectQuery("select * from blog where type = 'politics' ");
        if(!empty($politic_articles)){
            $politic_articles = $politic_articles->fetch_all();
        }

        $tech_articles = $this->db->selectQuery("select * from articles where type ='tech' ");
       // $tech_articles = $this->db->selectQuery("select * from blog where type ='tech'");
        if(!empty($tech_articles)){
            $tech_articles = $tech_articles->fetch_all();
        }

        $music_articles = $this->db->selectQuery("select * from articles where type ='music' ");
       // $music_articles = $this->db->selectQuery("select * from blog where type ='music' ");
        if(!empty($music_articles)){
            $music_articles = $music_articles->fetch_all();
        }

        $life_articles = $this->db->selectQuery("select * from articles where type ='life' ");
       // $life_articles = $this->db->selectQuery("select * from blog where type ='life'");
        if(!empty($life_articles)){
            $life_articles = $life_articles->fetch_all();
        }
        $this->body = "<section class='column side_column row' id='left_column'>
                               <aside id='politic_articles' class='column_articles'>";
        if(!empty($politic_articles)) {
            foreach ($politic_articles as $row) {

                $this->body .= "<div class='article_container'>
                               <img src='{$row[5]}' class='article_img'/>
                               <hgroup>
                               <h4>
                                <a href='#' class='politics_article_link'>
                                    {$row[1]}
                                </a>
                                </h4>
                                <h6 class='article_author'>
                                    By <a href='http://www.bennydorlisme.com/?page=bio' target='_blank'>{$row[2]}</a>
                                </h6>
                                 <h6 class='article_publish_datetime'>Published on - {$row[6]}</h6>
                                </hgroup>

                            </div>
                            ";

            }
        }
                       $this->body .="</aside>
                                        <aside id='life_articles' class='column_articles'>";
        if(!empty($life_articles)) {
            foreach ($life_articles as $row) {

                $this->body .= "<div class='article_container'>
                               <img src='{$row[5]}' class='article_img'/>
                               <hgroup>
                               <h4>
                                <a href='#' class='life_article_link'>
                                    {$row[1]}
                                </a>
                                </h4>
                                <h6 class='article_author'>
                                    By <a href='http://www.bennydorlisme.com/?page=bio' target='_blank'>{$row[2]}</a>
                                </h6>
                                 <h6 class='article_publish_datetime'>Published on - {$row[6]}</h6>
                                </hgroup>

                            </div>
                            ";

            }
        }
                    $this->body .= "</aside>
                    </section>
         
                        <section class='main_column column' id='middle_column'>
                            <header id='page_header'>
                                <span id='logo'>
                                    Benny's Blog
                                </span>
                                <nav id='page_header_nav'>
                                <ul>
                                    <li>
                                        <a href='' id='page_home_link' class='page_header_nav_link'>
                                            Home
                                        </a>
                                        
                                    </li>
                                    <li>
                                        <a href='' id='page_politics_link' class='page_header_nav_link'>
                                            Politics
                                        </a>
                                    </li>
                                    <li>
                                        <a href=''id='page_tech_link' class='page_header_nav_link'>
                                            Tech
                                        </a>
                                    </li>
                                    <li>
                                        <a href='' id='page_music_link'class='page_header_nav_link'>
                                        
                                            Music
                                        </a>
                                    </li>
                                </ul>                 
                            </nav>
                            <form action=\"https://www.paypal.com/cgi-bin/webscr\" method=\"post\" target=\"_top\" >
<input type=\"hidden\" name=\"cmd\" value=\"_s-xclick\">
<input type=\"hidden\" name=\"hosted_button_id\" value=\"PT7399CJ9YFJE\">
<input type=\"image\" src=\"https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif\" border=\"0\" name=\"submit\" alt=\"PayPal - The safer, easier way to pay online!\">
<img alt=\"\" border=\"0\" src=\"https://www.paypalobjects.com/en_US/i/scr/pixel.gif\" width=\"1\" height=\"1\">
</form>
                            </header>
                            
                            <div class='current_article' id='page_body'>
                                    <hgroup id='article_header'>
                                    <h1>
                                        
                                        \"Open Your Mind!\"
                                    </h1>
                                    <h5>
                                        -The Pharaoh
                                    </h5>
                                    </hgroup>
                                   <p>
                                        Welcome to my Blog! Read up on my articles about a multitude of different topics and world events.
                                        I have a very unique view of the world that you won't find in most places.
                                       
                                        I credit this due to the fact that I see myself as a student of life, constantly learning new things everyday that may or may not change my world view.
                                        No one knows all the answers to the worlds problems and for anyone to pretend to or think they do should raise red flags.
                                        Hopefully by reading my articles you will learn something new and have your world view changed. Not that 
                                        I intend to change anyone's world view but I do encourage people to be open minded. To be open to new information 
                                        is how we all grow as humans. But like most things in life being open to new information can be a double edged sword. 
                                        To be open and accept all new information as gospel can be very dangerous because the information could be a pack lies. Its up to the
                                        reader to determine if the new information is the truth or not. As readers we must do our own follow ups if the information we are getting raises any red flags.
                                        
                                        <br/>
                                        <br/>
                                        I also urge against bias which we all have and if someone says they don't have a bias that should raise a red flag.
                                        Because we all live in different circumstances and situations, we all have different biases. In order for people to
                                        connect and understand one another we must overcome our own biases. Ever hear of the phrase \"you're your own worst enemy\"?
                                        I would argue there is validity to that phrase.
                                        
                                        
                                        
                                   </p>
                            </div>
                        </section>
                        <section class='column side_column row' id='right_column'>
                                        <aside id='tech_articles' class='column_articles'>";
        if(!empty($tech_articles)) {
            foreach ($tech_articles as $row) {

                $this->body .= "<div class='article_container'>
                               <img src='{$row[5]}' class='article_img'/>
                               <hgroup>
                               <h4>
                                <a href='#' class='tech_article_link'>
                                    {$row[1]}
                                </a>
                                </h4>
                                <h6 class='article_author'>
                                    By <a href='http://www.bennydorlisme.com/?page=bio' target='_blank'>{$row[2]}</a>
                                </h6>
                                 <h6 class='article_publish_datetime'>Published on - {$row[6]}</h6>
                                </hgroup>

                            </div>
                            ";

            }
        }
                    $this->body .= "</aside>
                         <aside id='music_articles' class='column_articles'>";
        if(!empty($music_articles)) {
            foreach ($music_articles as $row) {

                $this->body .= "<div class='article_container'>
                               <img src='{$row[5]}' class='article_img'/>
                               <hgroup>
                               <h4>
                                <a href='#' class='music_article_link'>
                                    {$row[1]}
                                </a>
                                </h4>
                                <h6 class='article_author'>
                                    By <a href='http://www.bennydorlisme.com/?page=bio' target='_blank'>{$row[2]}</a>
                                </h6>
                                 <h6 class='article_publish_datetime'>Published on - {$row[6]}</h6>
                                </hgroup>

                            </div>
                            ";

            }
        }
                    $this->body .= "</aside>
                        </section>";
    }

}

$page = new BlogPage();
?>

