function comidasRicas() {
    console.log("Bienvenido a nuestro portal de comidas")
    alert("Hola, disfruta de los mejores menues con solo un par de clicks");


    while (true) {
        let tuNombre = prompt("Para comenzar decinos como te llamas:");
        console.log("ingresaTuNombre:", tuNombre);

        let menu = prompt("Por favor, elige entre nuestros menues: \n1. Carnes\n2. Salado\n3. Agridulce\n4. Verdes\n5. Vegan\n6. Otro");

            if (menu === "1" || menu === "2" || menu === "3" || menu === "4" || menu === "5" || menu === "6") {
                if (menu === "1") {
                    console.log("Carnes")
                    alert("¡Increíble elección " + tuNombre + "! Prepara tu paladar para una explosión de sabores con nuestras carnes.");
                } else if (menu === "2") {
                    console.log("Salado")
                    alert("¡Barbaro " + tuNombre + "! ¡Qué bueno que elegiste algo salado! Estás a punto de disfrutar de un placer culinario.");
                } else if (menu === "3") {
                    console.log("Agridulce")
                    alert("¡Maravilloso " + tuNombre + "! Nuestros platos agridulces te llevarán en un viaje de sabores inolvidable.");
                } else if (menu === "4"){
                    console.log("Verdes")
                    alert("Buenisimo " + tuNombre + "! ¡Qué rico algo saludable! Estás a punto de disfrutar de un festín de vegetales frescos.");
                } else if (menu === "5"){
                    console.log("Vegan")
                    alert("!" + tuNombre + " estás a punto de probar la excelencia en cocina vegana! ¡Disfruta cada bocado y siéntete bien!");
                } else if (menu === "6"){
                    console.log("Otro")
                    alert("Genial " + tuNombre + ", estas dispuesto a probar un plato random, sin dudas es la eleccion mas osada!!");
                }
            } else {
                alert("¡no existe ese menu! Por favor, elige uno válido.");
                continue; 
            }

        let respuesta = prompt("¿queres pedir otro plato? (Si/No)");

        if (respuesta === null || respuesta.toLowerCase() !== "si") {
            alert("¡Que disfrutes nuestras delicias. Buen provecho!");
            break;
        }
    }

}

comidasRicas();