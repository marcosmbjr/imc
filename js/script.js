document.getElementById("botao").addEventListener("click", function (e) {
    e.preventDefault();

    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultado = document.getElementById('resultado');
    const mensagem = document.getElementById('mensagem');

    
    document.querySelectorAll("table tr.destaque-imc").forEach(row => {
        row.classList.remove("destaque-imc");
    });

    if (!peso || !altura || altura <= 0) {
        resultado.innerHTML = "Preencha os campos corretamente.";
        mensagem.innerHTML = "Por favor, insira valores válidos para peso e altura.";
        mensagem.style.backgroundColor = "#f8d7da";
        mensagem.style.color = "#721c24";
        mensagem.style.display = 'block';
        return;
    }

    const imc = (peso / (altura * altura)).toFixed(2);
    let classificacao = "", dica = "", corFundo = "", corTexto = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
        dica = "Seu IMC indica que você está abaixo do peso. É importante avaliar sua alimentação e estado nutricional com um profissional de saúde para garantir o equilíbrio adequado de nutrientes e promover bem-estar físico e mental.";
        corFundo = "#fff3cd";
        corTexto = "#856404";

        
        document.querySelectorAll("table tr")[1].classList.add("destaque-imc");

    } else if (imc < 25) {
        classificacao = "Peso normal";
        dica = "Seu IMC está dentro da faixa considerada saudável. Continue mantendo hábitos equilibrados de alimentação, atividade física regular e acompanhamento médico periódico para preservar sua saúde";
        corFundo = "#d4edda";
        corTexto = "#155724";

        
        document.querySelectorAll("table tr")[2].classList.add("destaque-imc");

    } else if (imc < 30) {
        classificacao = "Sobrepeso";
        dica = "Seu IMC aponta para uma condição de sobrepeso. Reavaliar a rotina alimentar e de atividades físicas pode contribuir significativamente para a melhoria da saúde e prevenção de doenças.";
        corFundo = "#fff3cd";
        corTexto = "#856404";

        
        document.querySelectorAll("table tr")[3].classList.add("destaque-imc");

    } else if (imc < 35) {
        classificacao = "Obesidade Grau I";
        dica = "Este resultado indica obesidade grau I. Recomendamos buscar orientação profissional para elaborar um plano personalizado de cuidados, promovendo mudanças sustentáveis no estilo de vida e prevenção de riscos à saúde";
        corFundo = "#f8d7da";
        corTexto = "#721c24";

       
        document.querySelectorAll("table tr")[4].classList.add("destaque-imc");

    } else if (imc < 40) {
        classificacao = "Obesidade Grau II";
        dica = "Seu IMC está na faixa de obesidade grau II, o que exige atenção redobrada. O acompanhamento com equipe multidisciplinar (médico, nutricionista, educador físico, entre outros) é essencial para restaurar o equilíbrio da saúde e prevenir complicações.";
        corFundo = "#f5c6cb";
        corTexto = "#721c24";

        
        document.querySelectorAll("table tr")[5].classList.add("destaque-imc");

    } else {
        classificacao = "Obesidade Grau III";
        dica = "O IMC informado corresponde à obesidade grau III, considerada severa. Essa condição requer cuidados especializados e contínuos. Procure suporte médico o quanto antes para desenvolver uma abordagem segura e eficaz para a melhoria da sua qualidade de vida.";
        corFundo = "#f1b0b7";
        corTexto = "#721c24";

       
        document.querySelectorAll("table tr")[6].classList.add("destaque-imc");
    }

    resultado.innerHTML = `Seu IMC é: <b class="destaque">${imc}</b><br>Classificação: <b class="destaque">${classificacao}</b>`;
    document.querySelectorAll("#resultado .destaque").forEach(el => {
        el.style.color = corTexto;
    });

    mensagem.innerHTML = dica;
    mensagem.style.backgroundColor = corFundo;
    mensagem.style.color = corTexto;
    mensagem.style.display = 'block';
});
