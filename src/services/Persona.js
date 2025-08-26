import axios from "axios";

const Base_Url =
  "https://n2yx4864e7.execute-api.us-east-2.amazonaws.com/test/persona";

class Persona {
  getAllPersonas() {
    return axios.get(`${Base_Url}/consultar`);
  }

  createPersona(persona) {
    return axios.post(`${Base_Url}/crear`, persona, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  updatePersona(persona) {
    return axios.put(`${Base_Url}/editar`, persona, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  deletePersona(id) {
    return axios.delete(`${Base_Url}/eliminar`, {
      data: { Id: id },
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

export default new Persona();
