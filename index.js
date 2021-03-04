const data = [
    {name: "Alberto Santos", street: "Rua das Sete", city: "São Paulo", state: "SP", country: "Brasil",  telephone: "(19) 99481-9553", birthday: "31/08"},
    {name: "Mateus Lima", street: "Dolores Carvalho Vasconcelos", city: "Macaé", state: "RJ", country: "Brasil",  telephone: "(22) 3419-2186", birthday: "21/09"},
    {name: "Beatriz Cunha", street: "Rua Matutina", city: "Recife", state: "PE", country: "Brasil",  telephone: "(81) 4003-5369", birthday: "11/03"},
    {name: "Kauan Ribeiro", street: "Rua Lótus", city: "Telêmaco Borba", state: "PR", country: "Brasil",  telephone: "(42) 2595-4167", birthday: "03/07"},
    {name: "Miranda Oliveira", street: "Maria Amanda de Medeiros Carlos", city: "Maceió", state: "AL", country: "Brasil",  telephone: "(82) 8198-4957", birthday: "01/12"},
]

function show(a) {
    var func = data.filter((b) => b.name === a)[0];
    document.getElementById('name').innerHTML = 'Name: ' + func.name;
    document.getElementById('street').innerHTML = 'Street: ' + func.street;
    document.getElementById('city').innerHTML = 'City: ' + func.city;
    document.getElementById('state').innerHTML = 'State: ' + func.state;
    document.getElementById('contry').innerHTML = 'Contry: ' + func.contry;
    document.getElementById('telephone').innerHTML = 'Telephone: ' + func.telephone;
    document.getElementById('birthday').innerHTML = 'Birthday: ' + func.birthday;
}