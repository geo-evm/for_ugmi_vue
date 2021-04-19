
<template>
<div>
<div class="container">
	<div class="title"><h3>Аппельсини</h3></div>
	<div class="page">
		<div class="accordion" id="accordion">
			<div class="accordion-item">
				<h3 class="accordion-item-head" v-on:click="accordion">
					Турція
				</h3>
				<div class="accordion-item-body">
					<ul>
						<li><router-link to="/turkbigor">великі</router-link></li>
						<li><router-link to="/turkmidor">середні</router-link></li>
						<li><router-link to="/turksmalor">маленьки</router-link></li>
					</ul>
				</div>
			</div>

			<div class="accordion-item">
				<h3 class="accordion-item-head" v-on:click="accordion">
					Іспанія
				</h3>
				<div class="accordion-item-body">
					<ul>
					<li><router-link to="/spaine_oranges/middle">середні</router-link></li>
					<li><router-link to="/spaine_oranges/big">великі</router-link></li>
					</ul>
				</div>
			</div>

			<div class="accordion-item">
				<h3 class="accordion-item-head" v-on:click="accordion">
					Тунис
				</h3>
				<div class="accordion-item-body">
					<ul>
					<li><router-link to="/tunis_oranges/middle">середні</router-link></li>
					<li><router-link to="/tunis_oranges/small">маленькі</router-link></li>
					</ul>
				</div>
			</div>
	</div>
	</div>


	<div class="title"><h3>Яблука</h3></div>
	<div class="page">
		<div class="accordion" id="accordion">
			<div class="accordion-item">
				<h3 class="accordion-item-head" v-on:click="accordion">
					Украіна
				</h3>
				<div class="accordion-item-body">
					<ul>
						<li><router-link to="/apples/golden">гольден</router-link></li>
						<li><router-link to="/apples/gala">гала</router-link></li>
					</ul>
				</div>
			</div>

			<div class="accordion-item">
				<h3 class="accordion-item-head" v-on:click="accordion">
					Польша
				</h3>
				<div class="accordion-item-body">    
					<ul>
						<li><router-link to="/poland_apples/golden">гольден</router-link></li>
						<li><router-link to="/poland_apples/kalvin">кальвін</router-link></li>
					</ul>
				</div>
			</div>
					
		</div>
	</div>
</div>
	<div id="router"><router-view></router-view></div>

</div>

</template>
<script>


  
//import PromoPage from "./components/PromoPage";


export default {
   name: 'App',
   el: '#accordion',
   
    // data: {        
    // },
    methods: {
        accordion: function (event) {            

             event.target.classList.toggle('active');
        }
    }
};
  
  </script>
<style>

#router{
	margin: auto;
	text-align: center
}

.container {
	width: 800px;
  display: grid;
  grid-template-columns: 50% 50%;
  margin: auto;
}

.title{
	background-color: #dfdfdf;
	border-top-left-radius: 5px ;
	height: 90px;
	max-width: 800px;
	margin: 5 auto;
	position: relative;
	text-align: center;
}

.page{
	max-width: 800px;
	margin: 5 auto;
}

.accordion-item{
	position: relative;
}

.accordion-item-head{
	background-color: #dfdfdf;
	border-top-right-radius: 5px ;
	cursor: pointer;
	padding:10px;
}


.accordion-item-head:after{    
	content: ' > ';
	display: block;
	height: 29px;
	position: absolute;
	right: 25px;
	transform: rotate(90deg) scaleY(2);
	top: 8px;
}

.accordion-item-head.active:after{
	content: ' < ';
}


.accordion-item-body{
	display: none;
} 
.accordion-item-head.active + .accordion-item-body{
	display: block !important;
}

.router-link-active {
  color: red;
}
</style>