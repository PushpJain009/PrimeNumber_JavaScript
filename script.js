function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function getPrimesInRange(start, end) {
    const primes = [];
    const primalityTimes = [];
    const totalTimes = [];
    const startTime = performance.now();
    for (let num = start; num <= end; num++) {
        const primalityStart = performance.now();
        if (isPrime(num)) {
            primes.push(num);
        }
        const primalityEnd = performance.now();
        primalityTimes.push(primalityEnd - primalityStart);
        totalTimes.push(primalityEnd - startTime);
    }
    const averagePrimalityTime = primalityTimes.reduce((acc, val) => acc + val, 0) / primalityTimes.length;
    const averageTotalTime = totalTimes.reduce((acc, val) => acc + val, 0) / totalTimes.length;
    return { primes, primalityTimes, totalTimes, averagePrimalityTime, averageTotalTime };
}

function findPrimes() {
    const start = parseInt(document.getElementById("start").value);
    const end = parseInt(document.getElementById("end").value);
    const { primes, averagePrimalityTime, averageTotalTime } = getPrimesInRange(start, end);
    const primeNumbersDiv = document.getElementById("primeNumbers");
    primeNumbersDiv.innerHTML = "<h2>Prime Numbers:</h2>";
    primes.forEach(prime => {
        primeNumbersDiv.innerHTML += prime + "<br>";
    });
    primeNumbersDiv.innerHTML += `<p>Average Primality Check Time: ${averagePrimalityTime.toFixed(4)} ms</p>`;
    primeNumbersDiv.innerHTML += `<p>Average Total Time: ${averageTotalTime.toFixed(4)} ms</p>`;
}

function showDetails() {
    const modal = document.getElementById("detailsModal");
    modal.style.display = "block";
    openTab(event, 'primalityTab');
}

function openTab(evt, tabName) {
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    const tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

window.onclick = function(event) {
    const modal = document.getElementById("detailsModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
