export interface Phrase {
  id: number;
  text: string;
  categories: string[];
}

const categoryKeywords: Record<string, string[]> = {
  javascript: ['javascript', 'js', 'node', 'npm', 'frontend'],
  typescript: ['typescript', 'ts', 'tipagem', 'tipo'],
  react: ['react', 'componente', 'hook', 'usestate', 'useeffect'],
  python: ['python', 'py', 'django', 'flask'],
  git: ['git', 'commit', 'branch', 'merge', 'pull request', 'push', 'rebase'],
  bugs: ['bug', 'erro', 'quebra', 'problema', 'falha'],
  legacy: ['legado', 'arqueólogo', 'código velho'],
  carreira: ['entrevista', 'vaga', 'salário', 'promoção', 'demissão', 'contratação', 'currículo', 'portfolio', 'teste técnico'],
  devops: ['aws', 'deploy', 'infra', 'ci/cd', 'docker', 'kubernetes'],
  database: ['sql', 'query', 'banco', 'dados', 'select', 'join'],
};

export const categories = [
  { id: 'javascript', name: 'JavaScript', emoji: '🟨' },
  { id: 'typescript', name: 'TypeScript', emoji: '🔵' },
  { id: 'react', name: 'React', emoji: '⚛️' },
  { id: 'python', name: 'Python', emoji: '🐍' },
  { id: 'git', name: 'Git', emoji: '📂' },
  { id: 'bugs', name: 'Bugs', emoji: '🐛' },
  { id: 'legacy', name: 'Legacy', emoji: '🏛️' },
  { id: 'carreira', name: 'Carreira', emoji: '💼' },
  { id: 'devops', name: 'DevOps', emoji: '🚀' },
  { id: 'database', name: 'Database', emoji: '🗄️' },
];

function categorize(text: string): string[] {
  const textLower = text.toLowerCase();
  const matched: string[] = [];
  
  for (const [cat, keywords] of Object.entries(categoryKeywords)) {
    for (const kw of keywords) {
      if (textLower.includes(kw.toLowerCase())) {
        if (!matched.includes(cat)) matched.push(cat);
      }
    }
  }
  
  return matched.length > 0 ? matched : ['general'];
}

export const phrases: Phrase[] = [
  { id: 1, text: "Seu código é tão lento que o usuário já aposentou no INSS esperando a tela carregar", categories: categorize("Seu código é tão lento que o usuário já aposentou no INSS esperando a tela carregar") },
  { id: 2, text: "Você é o motivo pelo qual tem reunião sobre 'boas práticas' toda semana (ninguém aguenta mais irmão)", categories: categorize("Você é o motivo pelo qual tem reunião sobre 'boas práticas' toda semana") },
  { id: 3, text: "Seu merge conflict tem merge conflict, congratulations", categories: categorize("Seu merge conflict tem merge conflict") },
  { id: 4, text: "Seu frontend é tão bom que parece a tela do MSN antigamente (manda pro seu front mais querido)", categories: categorize("Seu frontend é tão bom que parece a tela do MSN") },
  { id: 5, text: "Aparentemente você é o motivo do QA estar sempre desanimado", categories: categorize("Aparentemente você é o motivo do QA estar sempre desanimado") },
  { id: 6, text: "Envia essa pro artróprode que nomeia variável como 'x1', 'x2', 'final', 'finalFinal', 'finalAgora'", categories: categorize("Envia essa pro artróprode que nomeia variável como x1") },
  { id: 7, text: "Seu README.md só tem o título do projeto e mais nada desde 2020 (era pandemia ainda)", categories: categorize("Seu README.md só tem o título do projeto") },
  { id: 8, text: "Você é aquele dev que faz 47 commits com a mensagem 'fix', 'fix', que que tanto corrige ?", categories: categorize("Você é aquele dev que faz 47 commits com a mensagem fix") },
  { id: 9, text: "Você é tão top que seu apelido na squad é 'o famoso quebra build'", categories: categorize("Você é tão top que seu apelido na squad é quebra build") },
  { id: 10, text: "Se você decidi corrigir um bug é certo que você vai criar um bug novo pior que o anterior", categories: categorize("Se você decidi corrigir um bug é certo que você vai criar um bug novo") },
  { id: 11, text: "Seu código tem tanta gambiarra que virou atração turística", categories: categorize("Seu código tem tanta gambiarra que virou atração turística") },
  { id: 12, text: "Você cria uma Classe com 500 linhas e chama de otimização kkkjj", categories: categorize("Você cria uma Classe com 500 linhas") },
  { id: 13, text: "Seu código roda perfeitamente... só no seu computador. E se for gravar a tela ainda dá erro.", categories: categorize("Seu código roda perfeitamente só no seu computador") },
  { id: 14, text: "Seu teste unitário testa se 2+2 é 4 e ainda falha", categories: categorize("Seu teste unitário testa se 2+2 é 4") },
  { id: 15, text: "Seu apelido é: 'Tá tudo pronto, só falta eu testar'", categories: categorize("Seu apelido é tá tudo pronto só falta eu testar") },
  { id: 16, text: "Seu código tem mais if aninhado que boneca russa", categories: categorize("Seu código tem mais if aninhado que boneca russa") },
  { id: 17, text: "Seu código é tão ruim que foi usado como exemplo de 'o que NÃO fazemos aqui na empresa...'", categories: categorize("Seu código é tão ruim que foi usado como exemplo") },
  { id: 18, text: "Você é aquele dev que comenta código ao invés de deletar (compartilha aí com este acéfalo)", categories: categorize("Você é aquele dev que comenta código ao invés de deletar") },
  { id: 19, text: "Você usa SELECT * em produção e acha normal e reclama do billing da AWS", categories: categorize("Você usa SELECT * em produção e acha normal") },
  { id: 20, text: "Seu código tem tanto 'console.log' que parece diário pessoal (não sei como passou no code review)", categories: categorize("Seu código tem tanto console.log que parece diário pessoal") },
  { id: 21, text: "Você é o motivo do 'npm install' demorar 40 minutos kkkkkjjj (e minha máquina tem 16GB de ram)", categories: categorize("Você é o motivo do npm install demorar 40 minutos") },
  { id: 22, text: "Seu código dá erro na linha 203 e o código só tem 100 linhas cara", categories: categorize("Seu código dá erro na linha 203") },
  { id: 23, text: "Você força push na main e se pergunta por que ninguém te convida pro happy hour da empresa", categories: categorize("Você força push na main e se pergunta por que ninguém te convida") },
  { id: 24, text: "Você escreve SQL injection de presente pro hacker, o cara nem precisa se effortçar", categories: categorize("Você escreve SQL injection de presente pro hacker") },
  { id: 25, text: "Seu código é tão acoplado que parece casal tóxico kkkkjj", categories: categorize("Seu código é tão acoplado que parece casal tóxico") },
  { id: 26, text: "Na entrevista te pediram pra se apresentar e você abriu o LinkedIn pra lembrar quem você é kkkkkkkkkkkkkk", categories: categorize("Na entrevista te pediram pra se apresentar e você abriu o LinkedIn") },
  { id: 27, text: "Seu currículo tem 5 páginas e 4 são de cursos que você nunca terminou (detalhe, tudo curso do Youtube)", categories: categorize("Seu currículo tem 5 páginas e 4 são de cursos") },
  { id: 28, text: "No teste técnico você entregou código que nem compila e teve a coragem de pedir feedback pro recrutador kkkkkkkkk é muito cara de pau", categories: categorize("No teste técnico você entregou código que nem compila") },
  { id: 29, text: "Seu código tem tanta variável global que tá parecendo comunismo, é tudo do estado", categories: categorize("Seu código tem tanta variável global que tá parecendo comunismo") },
  { id: 30, text: "Você é aquele dev que reinventa a roda... só que quadrada", categories: categorize("Você é aquele dev que reinventa a roda só que quadrada") },
  { id: 31, text: "Você que é o famoso versionador de node_modules ?", categories: categorize("Você que é o famoso versionador de node_modules") },
  { id: 32, text: "Por conta de você que tão raspando chave de API do ChatGPT direto no Github kkkjjjjjj", categories: categorize("Por conta de você que tão raspando chave de API do ChatGPT") },
  { id: 33, text: "Você é aquele dev que usa regex pra validar email e cria um portal interdimensional com tanta letra estranha", categories: categorize("Você é aquele dev que usa regex pra validar email") },
  { id: 34, text: "Você é daqueles que faz git rebase e reza em 3 religiões diferentes?", categories: categorize("Você é daqueles que faz git rebase e reza em 3 religiões") },
  { id: 35, text: "É por conta desse seu código assim que tão falando que a IA vai roubar nosso emprego...", categories: categorize("É por conta desse seu código que tão falando que a IA vai roubar") },
  { id: 36, text: "Você aplicou pra vaga senior com portfólio de landing page de barbearia kkkkkkkkkkkkkkkkkkkjjjj", categories: categorize("Você aplicou pra vaga senior com portfólio de landing page") },
  { id: 37, text: "Seu código é tão legado que os arqueólogos usam pra estudar kkkkkjj", categories: categorize("Seu código é tão legado que os arqueólogos usam pra estudar") },
  { id: 38, text: "Você é o único dev que consegue fazer CSS quebrar o back-end, parabéns!", categories: categorize("Você é o único dev que consegue fazer CSS quebrar o back-end") },
  { id: 39, text: "Você é o motivo de quererem fazer a daily em pé", categories: categorize("Você é o motivo de quererem fazer a daily em pé") },
  { id: 40, text: "Você acha que metodologia ágil é pra você entregar código ruim com mais agilidade", categories: categorize("Você acha que metodologia ágil é pra você entregar código ruim") },
  { id: 41, text: "Você é aquele dev que fala na daily: 'sem impedimentos' mas não chegou nem a ler a atividade no Jira", categories: categorize("Você é aquele dev que fala na daily sem impedimentos") },
  { id: 42, text: "Aparentemente você é a prova viva que bootcamp de 3 meses não faz milagre", categories: categorize("Aparentemente você é a prova viva que bootcamp de 3 meses") },
  { id: 43, text: "Na entrevista você disse que seu ponto forte é resolver problemas, mas tá apanhando pra usar o Teams kkkkjj", categories: categorize("Na entrevista você disse que seu ponto forte é resolver problemas") },
  { id: 44, text: "Seu código é tão horrível que o Junior pediu pra revisar seu Pull Request", categories: categorize("Seu código é tão horrível que o Junior pediu pra revisar") },
  { id: 45, text: "Você tem cara de ser aquele dev que quando é demitido a produtividade do time aumenta em 300%", categories: categorize("Você tem cara de ser aquele dev que quando é demiti") },
  { id: 46, text: "Seu portfolio é tão fraco que nem em vaga PJ de R$800 te chamam", categories: categorize("Seu portfolio é tão fraco que nem em vaga PJ") },
  { id: 47, text: "Você é o motivo da empresa ter 'code review obrigatório com 3 aprovações'", categories: categorize("Você é o motivo da empresa ter code review obrigatório") },
  { id: 48, text: "Você é a razão do Tech Lead ter tenido burnout", categories: categorize("Você é a razão do Tech Lead ter burnout") },
  { id: 49, text: "Manda essa pro famoso segura Sprint, caiu com ele é atraso na certa", categories: categorize("Manda essa pro famoso segura Sprint") },
  { id: 50, text: "Seu código quebra em produção com mais frequência que 👆", categories: categorize("Seu código quebra em produção com mais frequência") },
  { id: 51, text: "Seu PR tem mais comentários de 'isso aqui faz sentido?' do que linhas aprovadas", categories: categorize("Seu PR tem mais comentários de isso aqui faz sentido") },
  { id: 52, text: "Você é o tipo de dev que faz pair programming e o outro dev pede demissão sem cumprir aviso", categories: categorize("Você é o tipo de dev que faz pair programming") },
  { id: 53, text: "Seu código dá tanto problema que criaram um bot só pra reverter seus commits automaticamente", categories: categorize("Seu código dá tanto problema que criaram um bot") },
  { id: 54, text: "Você é tão ruim que quando pede ajuda no Discord, te mutam", categories: categorize("Você é tão ruim que quando pede ajuda no Discord te mutam") },
  { id: 55, text: "Você é o dev que faz as pessoas pensarem 'poxa, talvez aquela vaga de garçom não era tão ruim'", categories: categorize("Você é o dev que faz as pessoas pensarem") },
  { id: 56, text: "Você é aquele dev que faz o Linus Torvalds parecer educado e paciente", categories: categorize("Você é aquele dev que faz o Linus Torvalds parecer educado") },
  { id: 57, text: "Seu Git tem mais branch abandonada que cachorro na rua", categories: categorize("Seu Git tem mais branch abandonada que cachorro") },
  { id: 58, text: "Você commitou na sexta às 18h e estragou o fim de semana de TODO MUNDO, sabia?", categories: categorize("Você commitou na sexta às 18h e estragou o fim de semana") },
  { id: 59, text: "Sua sprint termina com mais card em 'To Do' do que quando começou kkkkjj", categories: categorize("Sua sprint termina com mais card em To Do") },
  { id: 60, text: "Na daily você sempre tá 'só tá faltando testar' mas já fazem 2 sprints cara, até agora ???", categories: categorize("Na daily você sempre tá só tá faltando testar") },
  { id: 61, text: "Você é o motivo do Github ter bloqueio pra push direto na main kkkkkkkk", categories: categorize("Você é o motivo do Github ter bloqueio pra push") },
  { id: 62, text: "Você que é o tal do dev que abre 15 issues e não resolve nenhuma?", categories: categorize("Você que é o tal do dev que abre 15 issues") },
  { id: 63, text: "Seu código tem mais callback aninhado que filme do Inception", categories: categorize("Seu código tem mais callback aninhado que filme do Inception") },
  { id: 64, text: "Libera meu Pull Request lá amigo... já fazem 3 dias", categories: categorize("Libera meu Pull Request lá amigo já fazem 3 dias") },
  { id: 65, text: "Você é o dev que põe senha 'admin123' e acha que tá seguro?", categories: categorize("Você é o dev que põe senha admin123") },
  { id: 66, text: "Sua query SQL tem mais JOIN que grau de parentesco em cidade do interior", categories: categorize("Sua query SQL tem mais JOIN que grau de parentesco") },
  { id: 67, text: "Você que é o famoso: 'joga HTTP 500 em tudo que é erro?'", categories: categorize("Você que é o famoso joga HTTP 500 em tudo que é erro") },
  { id: 68, text: "Sua PR tem 3000 linhas mudadas e a descrição é só 'fix bug'", categories: categorize("Sua PR tem 3000 linhas mudadas e a descrição é só fix bug") },
  { id: 69, text: "Seu .env tá commitado no repo desde o início do projeto kkkkjj acabei esquecendo de avisar", categories: categorize("Seu .env tá commitado no repo desde o início do projeto") },
  { id: 70, text: "Esses dias eu te vi resolver um merge conflict aceitando 'incoming' em tudo, tá lembrado ?", categories: categorize("Esses dias eu te vi resolver um merge conflict aceitando incoming") },
  { id: 71, text: "Sua infraestrutura é tipo casa de palito: mudou uma vírgula cai tudo", categories: categorize("Sua infraestrutura é tipo casa de palito") },
  { id: 72, text: "Não era você que achava que 'CI/CD era uma banda de K-Pop?'", categories: categorize("Não era você que achava que CI/CD era uma banda de K-Pop") },
  { id: 73, text: "Seu monorepo virou caos porque você não entendeu o conceito", categories: categorize("Seu monorepo virou caos porque você não entendeu o conceito") },
  { id: 74, text: "Você usa Promise dentro de Promise dentro de Callback tipo matrioska do inferno", categories: categorize("Você usa Promise dentro de Promise dentro de Callback") },
  { id: 75, text: "Sua collection do Postman tem mais requests salvos que testes automatizados no projeto", categories: categorize("Sua collection do Postman tem mais requests salvos") },
];

export function getPhrasesByCategory(category: string): Phrase[] {
  if (!category || category === 'all') {
    return phrases;
  }
  return phrases.filter(p => p.categories.includes(category));
}

export function getRandomPhrase(): string {
  const randomIndex = Math.floor(Math.random() * phrases.length);
  return phrases[randomIndex].text;
}