
        // --- Data: Conteúdo dos Módulos ---
        const modules = [
            {
                id: 'intro',
                title: '1. Algoritmos',
                description: 'Um algoritmo é uma sequência finita de passos para resolver um problema. Pense nele como uma receita de bolo.',
                theory: `
                    <h2 class="text-3xl font-bold text-slate-800 mb-4">Construção de Algoritmos</h2>
                    <p class="text-slate-600 mb-4 leading-relaxed">Antes de escrever código, precisamos entender a lógica. Um algoritmo deve ter um início, um meio (processamento) e um fim.</p>
                    <div class="bg-slate-50 p-4 border-l-4 border-blue-500 mb-6">
                        <p class="italic text-slate-700">"Algoritmo para fazer café: 1. Ferver água; 2. Colocar pó no filtro; 3. Despejar água; 4. Adoçar se desejar."</p>
                    </div>
                    <p class="text-slate-600">No JavaScript, expressamos esses passos através de comandos que o navegador entende.</p>
                `,
                initialCode: `// Algoritmo simples: Calculando média
                    let nota1 = 8;
                    let nota2 = 7;
                    let media = (nota1 + nota2) / 2;

                    console.log("A média do aluno é: " + media);`
            },
            {
                id: 'vars',
                title: '2. Variáveis e Tipos',
                description: 'Espaços na memória para guardar dados. No JS usamos let e const.',
                theory: `
                    <h2 class="text-3xl font-bold text-slate-800 mb-4">Variáveis e Tipos de Dados</h2>
                    <p class="text-slate-600 mb-4">Em JavaScript moderno, usamos:</p>
                    <ul class="list-disc ml-6 space-y-2 text-slate-600 mb-4">
                        <li><strong>let:</strong> Para valores que podem mudar.</li>
                        <li><strong>const:</strong> Para valores constantes.</li>
                    </ul>
                    <h3 class="text-xl font-bold text-slate-800 mb-2">Tipos Primitivos:</h3>
                    <ul class="list-disc ml-6 space-y-1 text-slate-600">
                        <li><strong>String:</strong> Textos entre aspas.</li>
                        <li><strong>Number:</strong> Números inteiros ou decimais.</li>
                        <li><strong>Boolean:</strong> true ou false.</li>
                        <li><strong>Undefined:</strong> Variável declarada mas sem valor.</li>
                    </ul>
                `,
                initialCode: `let nome = "Dev Iniciante"; // String
                                const anoNascimento = 2000; // Number
                                let estaLogado = true;      // Boolean

                                console.log("Nome:", nome);
                                console.log("Tipo do nome:", typeof nome);
                                console.log("Idade aproximada:", 2024 - anoNascimento);`
            },
            {
                id: 'ops',
                title: '3. Operadores',
                description: 'Matemáticos, lógicos e de comparação.',
                theory: `
                    <h2 class="text-3xl font-bold text-slate-800 mb-4">Operadores</h2>
                    <p class="text-slate-600 mb-4">Ferramentas para manipular variáveis e valores.</p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div class="p-3 border rounded">
                            <h4 class="font-bold">Aritméticos</h4>
                            <p class="text-sm text-slate-500">+, -, *, /, % (resto)</p>
                        </div>
                        <div class="p-3 border rounded">
                            <h4 class="font-bold">Comparação</h4>
                            <p class="text-sm text-slate-500">==, ===, !=, >, <, >=</p>
                        </div>
                    </div>
                `,
                initialCode: `let a = 10;
                    let b = 3;

                    console.log("Soma:", a + b);
                    console.log("Resto da divisão:", a % b);
                    console.log("A é maior que B?", a > b);
                    console.log("Igualdade estrita:", a === "10");`
            },
            {
                id: 'conds',
                title: '4. Condicionais',
                description: 'Tomada de decisão baseada em condições (if/else).',
                theory: `
                    <h2 class="text-3xl font-bold text-slate-800 mb-4">Estruturas Condicionais</h2>
                    <p class="text-slate-600 mb-4">O computador decide qual caminho seguir usando o <code>if</code>, <code>else if</code> e <code>else</code>.</p>
                    <pre class="bg-slate-900 text-white p-4 rounded-lg text-sm mb-4">
                    if (condicao) {
                      // executa se verdadeiro
                    } else {
                      // executa se falso
                    }</pre>
                `,
                initialCode: `let idade = 17;
                if (idade >= 18) {
                    console.log("Pode entrar na festa! 🕺");
                } else if (idade === 17) {
                    console.log("Quase lá! Volte ano que vem.");
                } else {
                    console.log("Entrada proibida. 🛑");
                }`
            },
            {
                id: 'loops',
                title: '5. Repetição (Loops)',
                description: 'Executar o mesmo código várias vezes enquanto uma condição for real.',
                theory: `
                    <h2 class="text-3xl font-bold text-slate-800 mb-4">Estruturas de Repetição</h2>
                    <p class="text-slate-600 mb-4">Loops evitam repetição de código manual. Os mais comuns são <code>for</code> e <code>while</code>.</p>
                    <p class="text-slate-600 mb-4 font-semibold">O ciclo de um for:</p>
                    <ol class="list-decimal ml-6 text-slate-600 space-y-1">
                        <li>Inicialização (let i = 0)</li>
                        <li>Condição (i < 10)</li>
                        <li>Incremento (i++)</li>
                    </ol>
                `,
                initialCode: `console.log("Contagem regressiva:");

                    for (let i = 5; i >= 0; i--) {
                        console.log(i + "...");
                    }

                    console.log("Fogo! 🚀");`
            },
            {
                id: 'arrays',
                title: '6. Arrays (Listas)',
                description: 'Armazenar vários valores em uma única variável.',
                theory: `
                    <h2 class="text-3xl font-bold text-slate-800 mb-4">Arrays</h2>
                    <p class="text-slate-600 mb-4">Arrays são listas indexadas. O primeiro item sempre está na posição <strong>0</strong>.</p>
                    <p class="text-slate-600 mb-4">Métodos importantes:</p>
                    <ul class="list-disc ml-6 text-slate-600 mb-4">
                        <li><code>push()</code>: Adiciona ao final.</li>
                        <li><code>pop()</code>: Remove do final.</li>
                        <li><code>length</code>: Tamanho da lista.</li>
                    </ul>
                `,
                initialCode: `let frutas = ["Maçã", "Banana", "Laranja"];

                console.log("Lista completa:", frutas);
                console.log("Primeira fruta:", frutas[0]);

                frutas.push("Uva");
                console.log("Após o push:", frutas);
                console.log("Total de itens:", frutas.length);`
            },
            {
                id: 'dom',
                title: '7. Manipulação da DOM',
                description: 'Alterar o HTML e CSS da página usando JavaScript.',
                theory: `
                    <h2 class="text-3xl font-bold text-slate-800 mb-4">Manipulação da DOM</h2>
                    <p class="text-slate-600 mb-4">A DOM (Document Object Model) é a representação do HTML que o JavaScript pode acessar.</p>
                    <div class="bg-amber-50 p-4 border-l-4 border-amber-500 mb-6">
                        <p class="text-amber-800 font-medium">Clique no botão abaixo para abrir o Laboratório Visual!</p>
                        <button onclick="document.getElementById('dom-sandbox-container').classList.remove('hidden')" class="mt-3 bg-amber-600 text-white px-4 py-2 rounded font-bold hover:bg-amber-700">Abrir Lab de DOM</button>
                    </div>
                    <p class="text-slate-600">Principais métodos:</p>
                    <ul class="list-disc ml-6 text-slate-600 mb-4">
                        <li><code>document.getElementById()</code></li>
                        <li><code>element.innerText</code></li>
                        <li><code>element.style.color</code></li>
                        <li><code>element.addEventListener()</code></li>
                    </ul>
                `,
                initialCode: `// No console abaixo não mudamos o HTML visível,
                    // apenas simulamos a lógica de seleção.
                    console.log("O objeto principal é o 'document'");
                    console.log("Use o botão 'Abrir Lab' acima para ver na prática!");`
            }
        ];

        // --- Logic: Core Functionality ---

        let currentModuleIndex = 0;
        const navMenu = document.getElementById('nav-menu');
        const lessonContent = document.getElementById('lesson-content');
        const codeEditor = document.getElementById('code-editor');
        const consoleOutput = document.getElementById('console-output');
        const runBtn = document.getElementById('run-btn');

        // Initialize Navigation
        function initNav() {
            navMenu.innerHTML = '';
            modules.forEach((mod, index) => {
                const btn = document.createElement('button');
                btn.className = `sidebar-item w-full text-left px-4 py-3 rounded-lg text-sm transition font-medium text-slate-600 hover:bg-slate-200 ${index === currentModuleIndex ? 'active' : ''}`;
                btn.innerHTML = `
                    <div class="font-bold">${mod.title}</div>
                    <div class="text-[11px] opacity-70 truncate">${mod.description}</div>
                `;
                btn.onclick = () => loadModule(index);
                navMenu.appendChild(btn);
            });
        }

        // Load Module Content
        function loadModule(index) {
            currentModuleIndex = index;
            const mod = modules[index];
            
            lessonContent.innerHTML = mod.theory;
            codeEditor.value = mod.initialCode;
            
            // Clear console when switching modules
            consoleOutput.innerHTML = '<span class="text-slate-500 opacity-50">// Aguardando execução...</span>';
            
            initNav();
        }

        // Custom Console.log
        const originalLog = console.log;
        console.log = function(...args) {
            const message = args.map(arg => 
                typeof arg === 'object' ? JSON.stringify(arg) : arg
            ).join(' ');
            
            const line = document.createElement('div');
            line.className = 'mb-1 border-b border-slate-800 pb-1 last:border-0';
            line.innerHTML = `<span class="text-blue-400 mr-2">❯</span> ${message}`;
            consoleOutput.appendChild(line);
            consoleOutput.scrollTop = consoleOutput.scrollHeight;
            
            originalLog.apply(console, args);
        };

        // Run Code Execution
        function runCode() {
            const code = codeEditor.value;
            consoleOutput.innerHTML = ''; // Clear console for new run
            
            try {
                // Wrap code in a block to avoid redeclaration errors if using let/const repeatedly in playground
                const executableCode = `(function() { 
                    try { 
                        ${code} 
                    } catch (err) { 
                        console.log("Erro de Execução: " + err.message); 
                    }
                })()`;
                eval(executableCode);
            } catch (err) {
                const errorLine = document.createElement('div');
                errorLine.className = 'text-red-400 font-bold';
                errorLine.innerText = "Erro de Sintaxe: " + err.message;
                consoleOutput.appendChild(errorLine);
            }
        }

        // DOM Sandbox Logic
        const domEditor = document.getElementById('dom-editor');
        const runDomBtn = document.getElementById('run-dom-btn');
        const closeDomBtn = document.getElementById('close-dom');
        const domModal = document.getElementById('dom-sandbox-container');

        runDomBtn.onclick = () => {
            const script = domEditor.value;
            try {
                eval(script);
            } catch (err) {
                alert("Erro no script do DOM: " + err.message);
            }
        };

        closeDomBtn.onclick = () => domModal.classList.add('hidden');

        // Keyboard Shortcuts
        window.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === 'Enter') {
                if (!domModal.classList.contains('hidden')) {
                    runDomBtn.click();
                } else {
                    runBtn.click();
                }
            }
        });

        document.getElementById('clear-console').onclick = () => {
            consoleOutput.innerHTML = '<span class="text-slate-500 opacity-50">// Console limpo.</span>';
        };

        // Initialize
        runBtn.onclick = runCode;
        loadModule(0);