// 'use client'
// import { useState } from "react";


export default async  function Formulario() {
  // const data:any[] = await getContactoPage()
  // const contactoUnico = data[0]
  // console.log(data);
  
  // const [ip,setIp] = useState("")

  //  const getData = async () => {
  //   const res = await fetch("https://api.ipify.org/?format=json");
  //   if(res.ok){
  //     const data = await res.json()
  //     return data
  //   }
  // }
  // const ip = await getData()

    const hhtml = `
    
   
    <div class="container">
        <div class="logo">
            <img src="https://www.perudestinoseguro.com/pdsLogo.png" alt="Logo">
        </div>
        <div class="form-container">
            <h1>Formulario de Contacto</h1>
            <form id="contactForm">
   
                    <label for="nombre">Nombre:</label><br>
                    <input type="text" id="nombre" name="nombre" required><br>
            
                    <label for="nombreAgencia">Nombre de la agencia:</label><br>
                    <input type="text" id="nombreAgencia" name="nombreAgencia" required><br>
            
                    <label for="cargo">Cargo que ocupa:</label><br>
                    <input type="text" id="cargo" name="cargo" required><br>
            
                    <label for="correo">Correo electrónico:</label><br>
                    <input type="email" id="correo" name="correo" required><br>
            
                    <label for="whatsapp">Número de Whatsapp:</label><br>
                    <input type="tel" id="whatsapp" name="whatsapp" pattern="[0-9]{9,12}" required><br>
            
                    <label for="tipoAgencia">¿Eres una agencia de viajes emisiva o receptiva?</label><br>
                    <select id="tipoAgencia" name="tipoAgencia" required>
                        <option value="" disabled selected>Selecciona una opción</option>
                        <option value="emisiva">Emisiva</option>
                        <option value="receptiva">Receptiva</option>
                        <option value="otros">Otros</option>
                    </select><br><br>
            
                    <button type="submit">Enviar</button>
                </form>
            </form>
        </div>
    </div>

    <script>
        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Evitar que se envíe el formulario

            // Obtener los valores de los campos
            var nombre = document.getElementById('nombre').value;
            var nombreAgencia = document.getElementById('nombreAgencia').value;
            var cargo = document.getElementById('cargo').value;
            var correo = document.getElementById('correo').value;
            var whatsapp = document.getElementById('whatsapp').value;
            var tipoAgencia = document.getElementById('tipoAgencia').value;

            // Validar que los campos no estén vacíos
            if (nombre && nombreAgencia && cargo && correo && whatsapp && tipoAgencia) {
                // Redirigir al API de WhatsApp con los datos recopilados
                var mensaje = "Nombre: " + nombre + " || " +
                              "Nombre de la agencia: " + nombreAgencia + " || " +
                              "Cargo: " + cargo + " || " +
                              "Email: " + correo + " || " +
                              "Whatsapp: " + whatsapp + " || " +
                              "Tipo: " + tipoAgencia;

                var url = "https://api.whatsapp.com/send?phone=51956231682&text=" + encodeURIComponent(mensaje);
                window.location.href = url;
            } else {
                alert("Por favor completa todos los campos.");
            }
        });
    </script>
    <style>
    .logo {
    text-align: center;
}

.logo img {
    width: 150px; /* Ajusta el tamaño según necesites */
    height: auto;
}



h1 {
    text-align: center;
    color: #7b3e19; /* Marrón oscuro inspirado en madera */
}

form {
    max-width: 500px;
    margin: 20px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

label {
    display: block;
    color: #7b3e19; /* Marrón oscuro */
}

input[type="text"],
input[type="email"],
input[type="tel"],
select {
    width: calc(100% - 12px);
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

button[type="submit"] {
    background-color: red; /* Marrón oscuro */
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button[type="submit"]:hover {
    background-color: #5e2b11; /* Marrón más oscuro al pasar el ratón */
}
</style>
`
  return(
  <div className="flex flex-col w-[98vw] items-center bg-[#f2e7d2] m-0 p-0">
      {/* <BackBanner imgSrc={contactoUnico.acf.imgback} txt="Contacto" /> */}
      {/* <div className="flex lg:flex-row flex-col w-full mt-12"> */}

      {/* <div className="lg:w-2/3 w-full  flex justify-center"> */}

      {/* <ContactoForm action={addClient}/> */}
      {/* </div> */}
      {/* <div className="lg:w-1/3 w-full flex lg:justify-center"> */}
      {/* <FakeFooter phones={contactoUnico.acf.telefono.split(",")} address={contactoUnico.acf.direccion} email={contactoUnico.acf.correo}/> */}
      {/* </div> */}
      {/* </div> */}
      
      <div dangerouslySetInnerHTML={{__html:hhtml}}></div>
    </div>
  )
  }

export const metadata = {
  title: "Contacto Peru Destino Seguro",
  description: "**",
}
