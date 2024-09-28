let langkah = 0;

const BinarySearch = async (arrayAngka, findAngka) => {
    let Starter = 0;
    let Ended = arrayAngka.length - 1;

    while (Starter <= Ended) {
        let search = Math.floor((Starter + Ended) / 2)

        if (arrayAngka[search] === findAngka) {
            return true;
        } else if (findAngka < arrayAngka[search]) {
            console.log(`Langkah Ke ${++langkah} => [${Starter}] < [${Ended}] => ${arrayAngka[Starter]} < ${arrayAngka[Ended]}`);
            Ended = search - 1;
        } else {
            console.log(`Langkah Ke ${++langkah} => [${Starter}] > [${Ended}] => ${arrayAngka[Starter]} > ${arrayAngka[Ended]}`);
            Starter = search + 1;
        }

        await new Promise(resolve => setTimeout(resolve, 500));
    }

    return false;
}

const Starter = async () => {
    let arrayAngka = [1, 3, 5, 7, 9, 11, 13, 15, 18, 23, 25, 35];
    let findAngka = 13;

    let Result = await BinarySearch(arrayAngka, findAngka);

    if (Result === true) {
        console.log(`Angka ${findAngka} Ditemukan Pada Langkah Ke ${++langkah}`)
    } else {
        console.log(`Angka ${findAngka} Tidak Ditemukan`)
    }
}

Starter();