function showMore(type) {
    const infoDiv = document.getElementById(${type}-info);
    
    if (infoDiv.style.display === "none" || infoDiv.style.display === "") {
        infoDiv.style.display = "block";
        if (type === 'conductors') {
            infoDiv.innerHTML = "<p>High electrical conductivity. It allows the flow of electrical current wth low or no resistance. Metallic structure, a lattice of positively charged ions and a bunch of delocalized electrons that can move freely. Low resistance, facilitating efficient transmission of electricity, influenced by material type and temperature. Resistance generally increases temperature due to increased lattice vibrations. Less affected by external factors, but physical changes like stretching and compressing can influence performance.</p>";
        } else if (type === 'insulators') {
            infoDiv.innerHTML = "<p>It have a very low electrical conductivity, blocking the flow of current. Their atomic structure features tightly bound electrons with full valence shells, preventing movements. High resistance, effectively preventing current from passing through, influenced by material type and thickness. Resistance remains high regardless of temperature, the extreme heat may lead to breakdown, allowing some current to flow. Can be affected by moisture and physical damage, which may reduce their effectiveness.</p>";
        } else if (type === 'semiconductors') {
            infoDiv.innerHTML = "<p>Moderate electrical conductivity, conductivity can be manipulated through doping. They possess crystalline structure with four valence electrons, allowing for covalent bonding, behaves like an insulator at absolute zero. Variable resistance that can be altered through doping or changes in temperature. Influenced by temperature, impurities, and electric fields. As temperature rises, their resistance decreases because more electrons gain energy and enter the conduction band. Doping and the application of electric fields can significantly alter conductivity, making them highly adaptable for electronic uses.</p>";
        }
    } else {
        infoDiv.style.display = "none";
    }
}