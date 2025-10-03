const selectBase = document.getElementById("base");
const selectTarget = document.getElementById("target");
const btnConvert = document.querySelector(".btn-convert");
const amountBaseOutput = document.querySelector(".amount-base");
const unitBaseOutput = document.querySelectorAll(".unit-base");
const amountTargetOutput = document.querySelector(".amount-target");
const unitTargetOutput = document.querySelector(".unit-target");
const popUnit1 = document.querySelector(".populer-unit1");
const popAmount1 = document.querySelector(".populer-amount1");
const popUnit2 = document.querySelector(".populer-unit2");
const popAmount2 = document.querySelector(".populer-amount2");
const popUnit3 = document.querySelector(".populer-unit3");
const popAmount3 = document.querySelector(".populer-amount3");
const popUnit4 = document.querySelector(".populer-unit4");
const popAmount4 = document.querySelector(".populer-amount4");
const popUnit5 = document.querySelector(".populer-unit5");
const popAmount5 = document.querySelector(".populer-amount5");
const apiKey = "f7d991544e0282c2e1875a09";

function CurrencyApp() {
    fetch(`https://v6.exchangerate-api.com/v6/f7d991544e0282c2e1875a09/latest/${selectBase.value}`)
        .then(response => {
            if (!response.ok)
                throw new Error("We have a problem!")
            else
                return response.json();
        })
        .then(data => {
            const unitBase = data.base_code;
            const amountTarget = data.conversion_rates[selectTarget.value];
            const unitTarget = selectTarget.value;
            unitBaseOutput.forEach(all => all.textContent = unitBase)
            amountTargetOutput.textContent = amountTarget;
            unitTargetOutput.textContent = unitTarget;
            popUnit1.textContent = "USD";
            popUnit2.textContent = "EUR";
            popUnit3.textContent = "IRR";
            popUnit4.textContent = "TRY";
            popUnit5.textContent = "CHF";
            const populerAmount1 = data.conversion_rates.USD;
            const populerAmount2 = data.conversion_rates.EUR;
            const populerAmount3 = data.conversion_rates.IRR;
            const populerAmount4 = data.conversion_rates.TRY;
            const populerAmount5 = data.conversion_rates.CHF;
            popAmount1.textContent = populerAmount1;
            popAmount2.textContent = populerAmount2;
            popAmount3.textContent = populerAmount3;
            popAmount4.textContent = populerAmount4;
            popAmount5.textContent = populerAmount5;
        })
        .catch(err => {
            console.error(err);
            window.alert(err + "Please try again and check your network")
        })
}
btnConvert.addEventListener('click', CurrencyApp);

function getByEnter() {
    document.addEventListener('keydown', (e) => {
        if (e.key === "Enter")
            CurrencyApp();
    })
}
getByEnter();