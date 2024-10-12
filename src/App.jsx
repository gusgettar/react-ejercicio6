import React from "react";
import {
  Card,
  Form,
  InputGroup,
  Button,
  CardTitle,
  Container,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import TarjetaColor from "../components/TarjetaColor";
import {
  borrarColoresAPI,
  cargarColoresAPI,
  guardarColoresAPI,
} from "./helpers/queries";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const App = () => {
  const { handleSubmit, register, setValue } = useForm();

  const [color, setColor] = useState([]);
  const [listaColores, setListaColores] = useState([]);

  useEffect(() => {
    cargarColores();
  }, []);

  const borrarAPI = async (id) => {
    Swal.fire({
      title: "¿Esta seguro de borrar el color?",
      text: "No puedes revertir esta operacion",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
       
        const respuesta = await borrarColoresAPI(id);

        const colorBorrado = await respuesta.json();
        console.log(colorBorrado);
        cargarColores();

        if (respuesta.status === 200) {
          Swal.fire({
            title: "Color Borrado",
            text: `${colorBorrado.mensaje}`,
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Ocurrio un error",
            text: `El color no pudo ser eliminado. Intenta esta operación en unos minutos.`,
            icon: "Error",
          });
        }
      }
    });
  };
  const nuevoColorAPI = async (data) => {
    const respuesta = await guardarColoresAPI(data);
    if (respuesta.status === 201) {
      console.log("Se guardo el color nuevo correctamente");
      cargarColores();
    }
    setValue('nombreColor',"")
    setColor("")
  };

  const handleColor = (e) => {
    setColor(e);
  };

  const cargarColores = async () => {
    try {
      const respuesta = await cargarColoresAPI();

      const color = await respuesta.json();
      setListaColores(color);
    } catch (error) {}
  };

  return (
    <>
      <Container className="d-flex w-50 justify-content-center py-2">
        <div>
          <Card>
            <CardTitle className="text-center">
              Administrador de colores
            </CardTitle>
            <Form.Control
              as="textarea"
              placeholder=""
              style={{ backgroundColor: color }}
            />
            <Card.Body>
              <InputGroup className="mb-3">
                <Form.Control
                  {...register("nombreColor")}
                  placeholder="Color"
                  aria-label="Color"
                  aria-describedby="basic-addon1"
                  onChange={(e) => handleColor(e.target.value)}
                />
              </InputGroup>
              <Button onClick={handleSubmit(nuevoColorAPI)} variant="primary">
                Guardar
              </Button>
              <Card.Text>
                Aqui puedes elegir un color para guardar una paleta de colores.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Container>
      <TarjetaColor
        listaColores={listaColores}
        borrarAPI={borrarAPI}
      ></TarjetaColor>
    </>
  );
};

export default App;
