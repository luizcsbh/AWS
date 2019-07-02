1.	Para que tipos de cenários de negócio as funções como serviços pode ser útil?

Primeiro ponto os microserviços não devem ser encarados como unidades organizaçõeis  de uma empresa, o cenário
para construção de microserviços são aquele onde os serviços podem estender para varios departamentos de uma 
organização ou mesmo na contruir varios microserviços para um departamento. Cada microserviços deve ter o seu 
proprio banco de dados e deve ser implentado para resolver um unico problema

2.  Aponte três vantagens e três desvantagens deste estilo arquitetural?
  
  ⦁	Vantagens:
  
  i.	Implantação automatizada;
  
  ii.	Inteligência nos endspoints;
  
  iii.	Controle descentralizado de liguagens de programação e de dados;
  
  ⦁	Desvantagens:
  
  i.	Uso muitas bibliotecas em um único processo ao realizar uma alteração num componente pode resultar em
      reimplantar o aplicativo inteiro;
      
  ii.	Interface de componente mais explícitaa maioria das linguagens não possuem bom mecanismo para a definição
      de Published Interface;
      
  iii.	Chamadas remotas tem o custo mais e altos do que chamadas em processo e as APIS remotas precisam de uma 
        granulação maior o que mais dificil de utilizar;

3.	Aponte três similaridades de nanosserviços com os microsserviços criados na primeira parte do exercício. E aponte 
    particularidades que sejam apenas relevantes para nanosserviços.
    
⦁	Similaridades com microsserviços:
  
  i.	Podem ser escritos em qualquer linguagem de programação;
  
  ii.	Isolamento de responsabilidades;
  
  iii. Alta disponibilidade;
 
⦁	Particularidades 
  
i.  Nanoserviços podem realizar varios Deploys sem a preocupação de quebrar um serviço;

ii. Stateless;

iii. Auto escabilidade;

iv. paga o que consome;
