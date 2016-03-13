<!DOCTYPE html>
<html>

  <!-- Thanks to iHover http://gudh.github.io/ihover/dist/ to effcts -->

	<head>
	  <link href='http://fonts.googleapis.com/css?family=Open+Sans:light&subset=cyrillic,latin' rel='stylesheet' type='text/css'>
	  <link rel="stylesheet" href="styles/style.css">
	  <!-- Различные метаданные -->
	  <meta name="viewport" content="width=device-width">
	  <meta charset = "utf-8">
	  <meta name='yandex-verification' content='68325a946a55b6d2' />
	  <!-- Здесь вводятся ключевые слова -->
	  <meta name="Keywords" content="Ступень"/>
	  <meta name="Description" content="Сайт медиакомпании Ступень Production"/>
	  <meta name="robots" content="all"/>
	  <title>Production</title>

	</head>

 	<body id="mns">


		<nav class="m_menu block" >
			<div id="bg_2">
			<div id="bg_3">
			<div id="logo">
			</div>
			<menu class = "static">
				<LI class = "l_i" onclick = navTo('#newss')>Новости</LI>
				<LI class = "l_i" onclick = navTo('#about')>О нас</LI>
				<LI class = "l_i" onclick = navTo('#proje')>Проекты</LI>
				<LI class = "l_i" onclick = navTo('#atten')>Услуги</LI>
				<LI class = "l_i" onclick = navTo('#contc')>Контакты</LI>
			</menu>
		</nav>


		<DIV id ="fl_nw" class ="ovf ovf_hid">
		<div id="close_nws" class="cl_hided"></div>
			<DIV id = "full_nws" >
			</DIV>
		</DIV>
		<!-- Блок новостей -->
		<div id = "newss" class="block none_ov">
			<H1>Последние новости<HR></H1>
			<DIV class = "n_block" id="b_n">


			</DIV>

			<DIV id = "all_news">
				<div id ="a_n" onclick="get_all_nws()">
				<H1>
				Все новости
				</H1><BR>
				<I></I>
				</div>
				<div id = "t_a_n">


				</div>
			</DIV>
			<div  onclick="scroll_left('b_n')" class = "n_left" >
				<div class = "l_str" >
					&lt;
				</div>
			</div>
			<div onclick="scroll_right('b_n')" class = "n_right" >
				<div class = "r_str" >
					&gt;
				</div>
			</div>

		</div>
		<!-- Блок о нас -->
		<DIV id="about" class="block">
			<H1>Коротко о нас<HR></H1>
			<DIV>
			<canvas id='draw' width='100%' height='100%'>Вы видите это сообщение,
потому что Ваш браузер не поддерживает canvas.</canvas>
			<DIV class = "person">
				<div class="ih-item sqr colored effect13 from_left_and_right leader">
                    <a href=" ">
                      <div class="img">
                        <img src="../soc/img/our_photos/ava_mav.jpg" height="301" width="300" alt="Тошка"></div>
                      <div class="info">
                        <div class="info-back">
                          <h3>Антон Муравьёв</h3>
                          <p>
                            Руководитель, двигатель прогресса <font class=egg><font class=hided>, летяй</font></font>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
			</DIV>
			</DIV>
		</DIV>

		<DIV id="proje" class="block">
			<H1>Наши проекты<HR></H1>
			<DIV class = "n_block" id="b_p">
			<DIV class = "prjs">
				<DIV class = "p_prj">
					<img src="img/oleg.jpg">
					Фильм Юла
				</DIV>
				<DIV class = "p_prj">
					<img src="img/oleg.jpg">
					Фильм Юла
				</DIV>
				<DIV class = "p_prj">
					<img src="img/oleg.jpg">
					Фильм Юла
				</DIV>
				<DIV class = "p_prj">
					<img src="img/oleg.jpg">
					Фильм Юла
				</DIV>
				</DIV>
			</DIV>
			<div  onclick="scroll_left('b_p')" class = "n_left" >
				<div class = "l_str" >
					&lt;
				</div>
			</div>
			<div onclick="scroll_right('b_p')" class = "n_right" >
				<div class = "r_str" >
					&gt;
				</div>
			</div>
		</DIV>

		<DIV id="atten" class="block">
			<H1>Наши услуги<HR></H1>
			<menu class = "a_ns" >
				<LI class = "a_ns" onclick = scrollAt("at_1")><span>Видеосъёмка</span></LI>
				<LI class = "a_ns" onclick = scrollAt("at_2")><span>Фотосъёмка</span></LI>
				<LI class = "a_ns" onclick = scrollAt("at_3")><span>Веб-разработка</span></LI>
				<LI class = "a_ns" onclick = scrollAt("at_4")><span>Кинотеатр</span></LI>
			</menu>
			<HR id="a_t_hr" class="a_ns">
			<div id = "a_ns_block">
				<section id = "at_1" class="a_ns">
					Мы оказываем услуги по съёмке различных мероприятий.
					У нас есть профессиональная техника. Мы знаем программы
					по видеомонтажу, которых не знаете вы.
					Вообще, мы молодцы
					Adobe Premier Pro (пиратка) - это вам не
					хрмы-хухры
					В общем, заказывайте и не пожалеете!

				</section>
				<section id = "at_2" class="a_ns">
					Мы оказываем услуги по съёмке различных мероприятий.
					У нас есть профессиональная техника. Мы знаем программы
					по фотомонтажу, которых не знаете вы.
					Вообще, мы молодцы
					Adobe Photoshop (пиратка) - это вам не
					хрмы-хухры
					В общем, заказывайте и не пожалеете!
				</section>
				<section id = "at_3" class="a_ns">
					Я каждый день себе говорю. что умею делать сайты
					и поэтому у меня начинают получаться сайты.
					Конечно, пока что это ещё не до сайты, но скоро, я
					надеюсь, будут суперсайты!
				</section>
				<section id = "at_4" class="a_ns">
					Мы на халяву получили кинотеарт - реально!
					Надувной экран, проектор, генератор, стульчики!!
					Да - да! У нас есть стульчики и даже с подлокотниками!
					Мы очень хотим денег, потому что кушать хотим.
					Закажите нас!
				</section>
			</div>
		</DIV>
	<DIV id="contc" class="block">
	<H1> Контакты <HR></H1>
	<div class="cont_block">
		<P>Контактный телефон: <a href="tel:+7 (929)676-04-77">+7 (929)676-04-77</a></P>
		<P>E-mail: <a href="mailTo:admin@арт-ступень.рф">admin@арт-ступень.рф</a></P>
		<P>Социальные сети:<BR>
		<a href = "vk.com/art.stupen">ВКонтакте<BR>
		<a href = "youtube.com/user/ArtStupen">YouTube<BR>
		<a href = "twitter.com/art_stupen">Twitter<BR>
		<a href = "plus.google.com/u/0/+ArtStupen">Google+<BR>
		</P>
	</div>
	<div>

	</div>
	</DIV>
	<footer>
		<a href="mailTo:admin@арт-ступень.рф">© Ступень Production</a>
	</footer>



	</body>

<!-- Cкрипты -->
	<script  type='text/javascript' src='scripts/jQ1_8_3.js'></script>
	<script  type="text/javascript" src="scripts/jQ_scrollTo.js"></script>

	<script  type="text/javascript" src="scripts/scroll_news.js"></script>
	<script  type="text/javascript" src="scripts/a_nws.js"></script>
	<script  async type="text/javascript" src="scripts/attens.js"></script>
	<script  async type="text/javascript" src="scripts/parallax.js"></script>
</html>


