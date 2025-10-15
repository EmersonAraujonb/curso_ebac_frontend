// Timer simples com funcionalidades de iniciar, pausar, retomar e resetar
    let intervalo = null;
    let tempoRestante = 0;
    let rodando = false;

    const display = document.getElementById("display");
    const btnToggle = document.getElementById("toggle");
    const btnResetar = document.getElementById("resetar");
    const inputHoras = document.getElementById("hour");
    const inputMinutos = document.getElementById("minute");
    const inputSegundos = document.getElementById("second");

    function formatarTempo(segundos) {
        const h = String(Math.floor(segundos / 3600)).padStart(2, "0");
        const m = String(Math.floor((segundos % 3600) / 60)).padStart(2, "0");
        const s = String(segundos % 60).padStart(2, "0");
        return `${h}:${m}:${s}`;
        }

        function atualizarDisplay() {
        display.textContent = formatarTempo(tempoRestante);
        }

        function iniciarTimer(duration) {
        tempoRestante = duration;
        atualizarDisplay();

        intervalo = setInterval(() => {
            tempoRestante--;
            atualizarDisplay();

            if (tempoRestante <= 0) {
            clearInterval(intervalo);
            intervalo = null;
            display.textContent = "⏰ Tempo Encerrado!";
            btnToggle.textContent = "Iniciar";
            rodando = false;
            }
        }, 1000);
        }

        btnToggle.addEventListener("click", () => {
        if (!rodando) {
            // Iniciar ou retomar
            if (!intervalo) {
            const h = Number(inputHoras.value) || 0;
            const m = Number(inputMinutos.value) || 0;
            const s = Number(inputSegundos.value) || 0;
            const totalSegundos = h * 3600 + m * 60 + s;

            if (totalSegundos <= 0) {
                const modalEl = document.getElementById('modal');
                const modal = new bootstrap.Modal(modalEl);

                // Quando clicar no botão, abre o modal
                document.getElementById('toggle').addEventListener('click', () => {
                modal.show();
                });
                return;
            }

            // document.getElementById('fecharModal').addEventListener('click', () => modal.hide());

            iniciarTimer(tempoRestante || totalSegundos);
            }

            rodando = true;
            btnResetar.disabled = false;
            inputHoras.disabled = true;
            inputMinutos.disabled = true;
            inputSegundos.disabled = true;
            document.getElementById("toggle").innerHTML = '<img src="https://img.icons8.com/?size=100&id=90926&format=png&color=000000" alt="PAUSAR"> PAUSAR';
        } else {
            // Pausar
            clearInterval(intervalo);
            intervalo = null;
            rodando = false;
            document.getElementById("toggle").innerHTML = '<img src="https://img.icons8.com/?size=100&id=23880&format=png&color=000000" alt="REMOTAR"> RETOMAR';
        }
        });

        btnResetar.addEventListener("click", () => {
        clearInterval(intervalo);
        intervalo = null;
        tempoRestante = 0;
        rodando = false;
        display.textContent = "00:00:00";
        btnToggle.textContent = "Iniciar";
        btnResetar.disabled = true;

        inputHoras.disabled = false;
        inputMinutos.disabled = false;
        inputSegundos.disabled = false;
        inputHoras.value = "00";
        inputMinutos.value = "00";
        inputSegundos.value = "00";
    });

    atualizarDisplay();