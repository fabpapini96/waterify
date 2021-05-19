document.onload = populateSitography();

function populateSitography(){
    sitographyLinks.sort();
    sitographyLinks.forEach(line => {
        let elem = line.split(" | ");
        $("#sitography-links").append("<li><a target='_blank' href=\"" + elem[1] +"\">-> " + elem[0] + "</a></li>")
    })
}