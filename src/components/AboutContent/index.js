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
			    			- Adriano Avelino
			    			<img src={icon} alt="github icon" />
		    			</a>

		    			<a href="https://github.com/AnaSelma">
			    			- Ana Selma
			    			<img src={icon} alt="github icon" />
		    			</a>

		    			<a href="https://github.com/arturmnt">
			    			-  Artur Meissner
			    			<img src={icon} alt="github icon" />
		    			</a>

		    			<a href="https://github.com/CaioFML">
			    			-  Caio Motta
			    			<img src={icon} alt="github icon" />

		    			</a><a href="https://github.com/kele90">
			    			- César Martínez 
			    			<img src={icon} alt="github icon" />
		    			</a>		    			

		    			<a href="https://github.com/chrystiamweb">
			    			-  Chrystiam Andrade
			    			<img src={icon} alt="github icon" />
		    			</a>
							
							<a href="https://github.com/DiegoRamires">
			    			-  Diego Gonçalves
			    			<img src={icon} alt="github icon" />
		    			</a>

		    			<a href="https://github.com/dbnkocao">
			    			- Daniel B.do Nascimento

			    			<img src={icon} alt="github icon" />
		    			</a>

		    			<a href="">
			    			-  Fabricio Comeli Garcia B
			    			<img src={icon} alt="github icon" />
		    			</a>

		    			<a href="https://github.com/f-vargas">
			    			-  Frabricio Vargas
			    			<img src={icon} alt="github icon" />
		    			</a>

		    			<a href="https://github.com/GesielFreitas">
			    			-  Gesiel Freitas
			    			<img src={icon} alt="github icon" />
		    			</a>
		    		</section>

		    		<section className="col-6">
		    			<a href="https://github.com/Guiarrd">
			    			-  Guilherme Arruda
			    			<img src={icon} alt="github icon" />
		    			</a>

		    			<a href="https://github.com/igornichele">
			    			-  Igor Nichele
			    			<img src={icon} alt="github icon" />
		    			</a>

		    			<a href="https://github.com/geonizeli">
			    			-  João Geonizeli
								<img src={icon} alt="github icon" />
		    			</a>

		    			<a href="https://github.com/lglinardello">
			    			- Lilian
			    			<img src={icon} alt="github icon" />
		    			</a>

		    			<a href="https://github.com/brandaoplaster">
			    			-  Lucas Brandao
			    			<img src={icon} alt="github icon" />
		    			</a>

		    			<a href="https://github.com/Lucasdfg07">
			    			-  Lucas Siqueira Fernandes
			    			<img src={icon} alt="github icon" />
		    			</a>		    			

		    			<a href="https://github.com/tiagompalte">
			    			-  Tiago Mariani Palte
			    			<img src={icon} alt="github icon" />
		    			</a>

		    			<a href="https://github.com/toticavalcantihttps://github.com/toticavalcanti">
			    			-  Toti Cavalcanti
			    			<img src={icon} alt="github icon" />
		    			</a>

		    			<a href="">
			    			-  
			    			<img src={icon} alt="github icon" />
		    			</a>
		    		</section>
	    		</section>
	    	</section>
	    </section>	
	</section>
  );
}
