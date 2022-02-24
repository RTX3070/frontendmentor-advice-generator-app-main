const adviceId = document.getElementById('advice-id');
const txt = document.getElementById('text');
const diceBtn = document.getElementById('dice');

const getAdvice = async () => {
    try {
        const response = await fetch('https://api.adviceslip.com/advice', {
            cache: 'no-store'
        });

        if (response.status !== 200) {
            txt.textContent = "Something went wrong. Try again later...";
        } else {
            const advice = await response.json();
            adviceId.textContent = "advice #" + advice.slip.id;
            txt.textContent = '"' + advice.slip.advice + '"';
        }
    } catch(error) {
        console.log(error);
    }
};

diceBtn.addEventListener('click', e => {
    e.preventDefault();
    diceBtn.classList.remove('roll');
    void diceBtn.offsetWidth;
    diceBtn.classList.add('roll');
    getAdvice();
});

getAdvice();