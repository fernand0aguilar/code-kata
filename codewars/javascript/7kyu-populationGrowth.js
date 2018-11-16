function nbYear(p0, percent, aug, p) {
    let population = p0;
    let year = 0;

    while (population < p) {
        population += population * (percent * 0.01) + aug;
        year++;
    }

    return year;
}

// OPTIMIZED
function nbYear(initialPopulation, percentGrowth, migration, finalPopulation) {
    let years = 0;
    while (initialPopulation < finalPopulation) {
        initialPopulation += initialPopulation * (percentGrowth * 0.01) + migration;
        years++;
    }
    return years;
}