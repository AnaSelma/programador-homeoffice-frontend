import React from 'react';
import { FaGithub } from 'react-icons/fa';
import './index.css';

export default function AboutContent() {
  return (
  	<section className="text-center">
	    <section className="page-header mt-3">
	    	<h4>Quem Somos</h4>
	    	<hr />
	    </section>

	    <section className="container">
	    	<p>
		    	Somos uma equipe de startup com o objetivo de centralizar as melhores 
		    	vagas disponíveis em outras plataformas e apresentá-las de maneira fácil
		    	e ágil para pessoas em busca de oportunidades.
		    </p>

		    <p>
		    	Também contamos com um chatbot de alarmes para anúncios de novas vagas
		    </p>
	    </section>

	    <section className="github mt-5">
	    	<section className="page-header p-3">
	    		<h4>Colaboradores do Projeto</h4>
	    		<hr />
	    	</section>

	    	<section className="list container">
	    		<section className="row">
	    			<section className="col-6">
	    				<a href="https://github.com/adrianoavelino">
							<FaGithub className="github-btn" />
								Adriano Avelino				    			
		    			</a>

		    			<a href="https://github.com/AnaSelma">
							<FaGithub className="github-btn" />
								Ana Selma			    			
		    			</a>

		    			<a href="https://github.com/arturmnt">
							<FaGithub className="github-btn" />
							  Artur Meissner			    	
		    			</a>

		    			<a href="https://github.com/CaioFML">
							<FaGithub className="github-btn" />
							  Caio Motta
							</a>
							
							<a href="https://github.com/kele90">
							<FaGithub className="github-btn" />
								César Martínez 
			    		</a>		    			

		    			<a href="https://github.com/chrystiamweb">
							<FaGithub className="github-btn" />
								Chrystiam Andrade
			    		</a>
							
							<a href="https://github.com/DiegoRamires">
							<FaGithub className="github-btn" />
								Diego Gonçalves
			    		</a>

		    			<a href="https://github.com/dbnkocao">
			    		<FaGithub className="github-btn" />
								Daniel B.do Nascimento			    			
		    			</a>

		    			<a href="">
							<FaGithub className="github-btn" />
								Fabricio Comeli Garcia B			    			
		    			</a>

		    			<a href="https://github.com/f-vargas">
			    		<FaGithub className="github-btn" />
								Frabricio Vargas			    			
		    			</a>

		    			<a href="https://github.com/GesielFreitas">
			    		<FaGithub className="github-btn" />	
								Gesiel Freitas			    			
		    			</a>
		    		</section>

		    		<section className="col-6">
		    			<a href="https://github.com/Guiarrd">
			    		<FaGithub className="github-btn" />							
								Guilherme Arruda			    		
		    			</a>

		    			<a href="https://github.com/igornichele">
			    		<FaGithub className="github-btn" />
								Igor Nichele			    			
		    			</a>

		    			<a href="https://github.com/geonizeli">
			    		<FaGithub className="github-btn" />
								João Geonizeli								
		    			</a>

		    			<a href="https://github.com/lglinardello">
			    		<FaGithub className="github-btn" />
								Lilian			    			
		    			</a>

		    			<a href="https://github.com/brandaoplaster">
			    		<FaGithub className="github-btn" />
								Lucas Brandao			    			
		    			</a>

		    			<a href="https://github.com/Lucasdfg07">
			    		<FaGithub className="github-btn" />
								Lucas Siqueira Fernandes			    		
		    			</a>		    			

		    			<a href="https://github.com/tiagompalte">
			    		<FaGithub className="github-btn" />
								Tiago Mariani Palte		    			
		    			</a>

		    			<a href="https://github.com/toticavalcantihttps://github.com/toticavalcanti">
			    		<FaGithub className="github-btn" />
								Toti Cavalcanti			    			
		    			</a>

		    			<a href="">
			    			<FaGithub className="github-btn" />
								
		    			</a>
		    		</section>
	    		</section>
	    	</section>
	    </section>	
	</section>
  );
}
