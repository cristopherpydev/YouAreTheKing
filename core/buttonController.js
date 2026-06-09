const buttonStart = document.getElementById('start-button');
const header = document.getElementById('header-comp');
const wrapper = document.getElementById('wrapper');

/* ================ metrics ================= */
const metricSocial = document.getElementById('social-bar');
const metricDefense = document.getElementById('defense-bar');
const metricReligion = document.getElementById('religion-bar');
const metricEconomy = document.getElementById('economy-bar');
const daysMetric = document.getElementById('days');

console.log(header);
buttonStart.addEventListener('click', startGame)

async function startGame(){
    /* = = = = = = = = INITIAL STATUS = = = = = = = = = */

    buttonStart.style.display = 'none';
    header.style.display = 'none';
    wrapper.style.display = 'flex';
    daysMetric.style.display = 'block';
    const initialMetricValues = await getInitialValues();
    metricSocial.value = initialMetricValues["social"];
    metricDefense.value = initialMetricValues["defense"];
    metricEconomy.value = initialMetricValues["economy"];
    metricReligion.value = initialMetricValues["religion"];
}

async function getInitialValues() {
    /* = = = = = = = = FETCHING DATA PROCESS = = = = = = = = = */

    const request = await fetch("./data/global_metrics_data.json");
    const data = await request.json();
    console.log(data);
    return data
}

