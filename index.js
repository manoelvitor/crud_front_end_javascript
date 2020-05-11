//INICIO DO PROGRAMA 
//-> DECLARANDO AS VARIAVEIS E O CONTEUDO HTML INICIAL DO BODY
//-> ESTILIZANDO A PAGINA
//-> ADICIONANDO ATRIBUTOS HTML
var h1 = document.createElement("h1")
h1.innerHTML = "Cadastro de Produtos"
h1.style.color = "white"
h1.style.textAlign = "center"
h1.style.fontSize = "40px"
h1.style.backgroundColor = "#4d1919"
h1.style.margin = "0"
    
h1.style.boxShadow = "20px 30px 30px black"
h1.style.width = "100%"
 
document.body.style.margin = "0"
document.body.appendChild(h1)
document.body.style.fontFamily = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
document.body.style.backgroundColor = "#2E2E2E"
       
var pInstrucao = document.createElement("p")
pInstrucao.innerText = "* para editar dê dois click no item da tabela, edite no formulário, e click no botão salvar"
pInstrucao.style.color = "white"
        
pInstrucao.style.width = "100%"
pInstrucao.style.display = "block"
pInstrucao.style.marginLeft = "29%"
pInstrucao.style.fontSize = "11px"
 
//FORMULARIO DE ENTRADA DE DADOS
var form = document.createElement("form")    
           
var f1 = document.createElement("fieldset")
var l1 = document.createElement("legend")
l1.innerHTML = "Quantidade"
f1.appendChild(l1) 

var f2 = document.createElement("fieldset")
var l2 = document.createElement("legend")
l2.innerHTML = "Produto"
f2.appendChild(l2) 

var f3 = document.createElement("fieldset")
var l3 = document.createElement("legend")
l3.innerHTML = "Preço(unitário) R$"
f3.appendChild(l3) 
          
var qnt = document.createElement("input") 
qnt.setAttribute("type","number")
f1.appendChild(qnt)
            
var produto = document.createElement("input")
f2.appendChild(produto)
            
var preco = document.createElement("input")
preco.setAttribute("type","text")
preco.setAttribute("placeholder","R$")


f3.appendChild(preco)

var btnAdc = document.createElement("input")
btnAdc.setAttribute("type","button")               
                                
btnAdc.setAttribute("value","Adicionar")
btnAdc.setAttribute("onclick","montaTabela()")
btnAdc.style.padding = "5px"
btnAdc.style.borderRadius = "5px"
btnAdc.style.margin = "7px"
btnAdc.style.boxShadow = "5px 3px 3px black"

var btnSalvar = document.createElement("input")
btnSalvar.setAttribute("type","button")
btnSalvar.setAttribute("value","Salvar")
btnSalvar.setAttribute("onclick","altItem(qnt.value,produto.value,preco.value)")
btnSalvar.style.padding = "5px"
btnSalvar.style.borderRadius = "5px"
btnSalvar.style.margin = "7px"
btnSalvar.style.boxShadow = "5px 3px 3px black"

var p1 = document.createElement("p")
var p2 = document.createElement("p")
var p3 = document.createElement("p")

p1.appendChild(f1)
p2.appendChild(f2)
p3.appendChild(f3)

form.appendChild(p1)
form.appendChild(p2)
form.appendChild(p3)

form.appendChild(btnAdc)
form.appendChild(btnSalvar)

form.style.color = "white"
form.style.marginLeft = "40px"

form.style.cssFloat = "left"
form.style.boxShadow ="5px 5px 5px black"
form.style.width = "18%"           

form.style.textAlign ="center"
  
document.body.appendChild(form) 
document.body.appendChild(pInstrucao) 

//FIM DO FORMULÁRIO DE ENTRADA DE DADOS
    
//INICIO CABEÇARIO TABELA     
            
var table = document.createElement("table")            
var thead = document.createElement("thead")
var thCod = document.createElement("th")
thCod.innerHTML = "Código"
var cod = 0
var thQnt = document.createElement("th")
thQnt.innerHTML = "Quantidade"
var thProduto = document.createElement("th")
thProduto.innerHTML = "Produto"
var thPreco = document.createElement("th")
thPreco.innerHTML = "Preço unitário"
var thExc = document.createElement("th")
thExc.innerHTML = "Excluir"
thead.appendChild(thCod)
thead.appendChild(thProduto)
thead.appendChild(thQnt)
thead.appendChild(thPreco)
thead.appendChild(thExc)

thCod.style.paddingLeft = "50px"
thCod.style.paddingRight = "50px"

thQnt.style.paddingLeft = "50px"
thQnt.style.paddingRight = "50px"
thPreco.style.paddingLeft = "50px"
thPreco.style.paddingRight = "50px"
thProduto.style.paddingLeft = "50px"
thProduto.style.paddingRight = "50px"
thExc.style.paddingLeft = "50px"
thExc.style.paddingRight = "50px"
thead.style.backgroundColor = "white"
thead.style.fontSize = "18px"
thead.style.heigth = "20px"

table.appendChild(thead)
table.style.textAlign = "center"
table.style.marginRight = "100px"
table.style.cssFloat ="right"
            
table.style.boxShadow = "5px 5px 5px black"   
document.body.appendChild(table)

//FIM DO CABEÇARIO DA TABELA

//INICIO MONTA TABELA
var tbody = document.createElement("tbody")                   

function montaTabela(){
    var tr = document.createElement("tr")
	var tdCod = document.createElement("td")
	cod += 1
	tdCod.innerHTML = cod
    var tdQnt = document.createElement("td")
    tdQnt.innerHTML = qnt.value
    var tdProduto = document.createElement("td")
    tdProduto.innerHTML = produto.value
    var tdPreco = document.createElement("td")
    tdPreco.innerHTML = "R$" + preco.value
           
	var btnDel = document.createElement("button")
    btnDel.innerHTML = "x"
    btnDel.style.color = "red"
    btnDel.setAttribute("onclick","delItem(this.parentNode.rowIndex)")
    
	tr.appendChild(tdCod)
	tr.appendChild(tdProduto)
    tr.appendChild(tdQnt) 
    tr.appendChild(tdPreco)
    tr.appendChild(btnDel)

    tbody.appendChild(tr)
    tbody.style.backgroundColor = "#4d1919"
    tbody.style.color = "white"     
    table.appendChild(tbody)            
    qnt.value = ""
    produto.value = ""
    preco.value = ""
    qnt.focus()
    preencheCamposForm()
}

//FIM MONTA TABELA

//FUNÇÃO EXCLUIR ITEM DE UMA TABELA USANDO O PARAMETRO THIS NO BOTÃO           
function delItem(i){
    table.deleteRow(i)
} 
        
		
//INICIO ALTERAR ITEM	
	
var index

//SALVA A ALTERAÇÃO FEITA, PELA PROXIMA FUNÇÃO
function altItem(qnt, produto, preco) { 
	table.rows[index].cells[1].innerHTML = produto;
	table.rows[index].cells[2].innerHTML = qnt;
	table.rows[index].cells[3].innerHTML = preco;
	table.rows[index].style.backgroundColor = "#4d1919"
	qnt.value = ""
	produto.value = ""
	preco.value = ""
}

//IRÁ PERCORRER A TABELA DA LINHA 0 ATÉ A LINHA SELECIONADA (THIS)
//E PEGAR OS VALORES DAS CELULAS 0,1,2
//E PREENCHE O FORMULARIO DE DADOS DE ENTRADA, 
function preencheCamposForm(){
	for(var i = 0; i < table.rows.length; i++){
		table.rows[i].ondblclick = function(){
		index = this.rowIndex;    
		produto.value = table.rows[index].cells[1].innerText;		
		qnt.value = table.rows[index].cells[2].innerText;
		preco.value = table.rows[index].cells[3].innerText;
		table.rows[index].style.backgroundColor = "#FA5858"
		}
	}
}

//FIM
